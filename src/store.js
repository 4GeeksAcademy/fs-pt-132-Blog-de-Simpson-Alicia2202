export const initialStore = () => {
  return {
    characters: [],
    favorites: [],
    episodes: []
  }
}

export default function storeReducer(store, action = {}) {
  

  switch (action.type) {
    case 'setCharacters':
      return {
        ...store,
        characters: action.payload || [] 
      };

    case 'addFavorite':
      
      if (store.favorites.find(fav => fav.id === action.payload.id)) return store;
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'removeFavorite':
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.id !== action.payload.id)
      };

    case 'setEpisodes':
      return {
      ...store, 
      episodes: action.payload
      }

    default:
      return store;
  }
}
