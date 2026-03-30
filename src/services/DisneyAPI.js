const DisneyApi = {}
const url = 'https://api.disneyapi.dev'

DisneyApi.getCharacter = async (id) => {
    try {
        const resp = await fetch (url + "/character/" + id)
        if (!resp.ok) throw new Error ('Error getting character')
        
        const data = await resp.json();
        console.log("Respuesta completa de la API:", data)
        return data.data;
        
    } catch (error) {
        console.log (error)
    }
}

export default DisneyApi;