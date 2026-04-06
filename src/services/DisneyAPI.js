const DisneyApi = {}
const url = 'https://api.disneyapi.dev'

DisneyApi.getCharacters = async () => {
    try {
        const resp = await fetch (url + "/character")
        if (!resp.ok) throw new Error ('Error getting characters')
        
        const data = await resp.json();
        console.log("Respuesta completa de la API:", data)
        return data.data;
        
    } catch (error) {
        console.error("Error en API:", error);
        return [];
    }
}

DisneyApi.getSingleCharacter = async (id) => {
    try {
        const resp = await fetch (url + "/character/" + id);
        if (!resp.ok) throw new Error ('Error gettin character');
        const data = await resp.json();
        return data.data
    } catch (error) {
        console.log(error)
    }
}

export default DisneyApi;