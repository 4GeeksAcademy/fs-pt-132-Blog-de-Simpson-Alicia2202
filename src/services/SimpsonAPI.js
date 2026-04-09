const SimpsonApi = {}
const url = 'https://thesimpsonsapi.com/api'

SimpsonApi.getCharacters = async (limit = 20) => {
    try {
        const resp = await fetch (url + "/characters?limit=" + limit);
        if (!resp.ok) throw new Error ('Error getting characters')
        
        const data = await resp.json();
        // console.log("Respuesta completa de la API:", data)
        return data;
        
    } catch (error) {
        console.error("Error cargando personajes:", error);
        return [];
    }
}

SimpsonApi.getSingleCharacter = async (id) => {
    try {
        const resp = await fetch (url + "/characters/" + id);
        if (!resp.ok) throw new Error ('Error getting character');
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error);
        return null;
    }
}

SimpsonApi.getEpisodes = async (limit=20) => {
    try {
        const resp = await fetch(url + "/episodes?limit="+limit);
        if (!resp.ok) throw new Error ('Error getting episodes');
        const data = await resp.json ();
        return data
    } catch (error) {
        console.log(error);
        return [];
    }
}

SimpsonApi.getSingleEpisode = async (id) => {
    try {
        const resp = await fetch (url + "/episodes/" + id);
        if (!resp.ok) throw new Error ('Error getting episode');
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error);
        return null;
    }
}


export default SimpsonApi;