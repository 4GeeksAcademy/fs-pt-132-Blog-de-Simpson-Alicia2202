const SimpsonApi = {}
const url = 'https://thesimpsonsapi.com/api'

SimpsonApi.getCharacters = async (limit = 20) => {
    try {
        const resp = await fetch(url + "/characters?limit=" + limit);
        if (!resp.ok) throw new Error('Error getting characters')

        const data = await resp.json();
        console.log("Respuesta completa de la API:", data)
        const mappedDocs = (data.results || []).map(char => ({
            ...char,
            _id: char.id ? char.id.toString() : undefined,
            name: char.name,
            image: char.portrait_path ? ("https://cdn.thesimpsonsapi.com/500" + char.portrait_path) : "https://via.placeholder.com/200x200?text=No+Image"
        }));
        return { docs: mappedDocs };

    } catch (error) {
        console.error("Error cargando personajes:", error);
        return { docs: [] };
    }
}

SimpsonApi.getSingleCharacter = async (id) => {
    try {
        const resp = await fetch(url + "/characters/" + id);
        if (!resp.ok) throw new Error('Error gettin character');
        const data = await resp.json();
        if (data && data.name) {
            data._id = data.id ? data.id.toString() : undefined;
            data.image = data.portrait_path ? ("https://cdn.thesimpsonsapi.com/500" + data.portrait_path) : "https://via.placeholder.com/200x200?text=No+Image";
        }
        return data
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default SimpsonApi;


// const SimpsonApi = {}
// const url = 'https://thesimpsonsapi.com/api'

// SimpsonApi.getCharacters = async (limit = 20) => {
//     try {
//         const resp = await fetch (url + "/characters?limit=" + limit);
//         if (!resp.ok) throw new Error ('Error getting characters')
        
//         const data = await resp.json();
//         console.log("Respuesta completa de la API:", data)
//         return data;
        
//     } catch (error) {
//         console.error("Error cargando personajes:", error);
//         return {docs:[]};
//     }
// }

// SimpsonApi.getSingleCharacter = async (id) => {
//     try {
//         const resp = await fetch (url + "/characters/" + id);
//         if (!resp.ok) throw new Error ('Error gettin character');
//         const data = await resp.json();
//         return data
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }

// export default SimpsonApi;