export const initialStore = () => {
  return {
    characters: [],
    favorites: []

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_characters':

      return {
        ...store,
        characters: action.payload
      };


    case 'add_favorite': // Cambiado para que coincida con la Card
      // Usamos siempre 'favorites' como definiste en initialStore
      const existFavorite = store.favorites.find(fav => fav._id === action.payload._id)

      if (existFavorite) {
        return {
          ...store,
          favorites: store.favorites.filter(fav => fav._id !== action.payload._id)
        };
      }
      return {
        ...store,
        favorites: [...store.favorites, action.payload] // Corregido: payload
      }
    default:
      return store;
  }
}
