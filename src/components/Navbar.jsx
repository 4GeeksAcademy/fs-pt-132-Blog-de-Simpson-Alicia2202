import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg"
            alt="The Simpsons Logo"
            style={{ height: "60px", minWidth: "120px" }}
          />
        </Link>
        <div className="ml-auto dropdown">
          <button
            className="btn btn-primary dropdown-toggle d-flex align-items-center"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
            <span className="badge bg-warning text-dark ms-2">{store.favorites?.length || 0}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="favoritesDropdown" style={{ minWidth: '250px' }}>
            {store.favorites?.length > 0 ? (
              store.favorites.map((fav, index) => (
                <li key={`${fav.type}-${fav.id}-${index}`} className="dropdown-item d-flex justify-content-between align-items-center py-2 border-bottom last-border-0">
                  <Link
                    to={`/${fav.type}/${fav.id}`}
                    className="text-decoration-none text-dark text-truncate me-3"
                  >
                    {fav.name}
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm border-0 bg-transparent p-0"
                    onClick={() => dispatch({
                      type: 'removeFavorite',
                      payload: { id: fav.id, type: fav.type }
                    })}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item text-center text-muted py-3">No hay favoritos</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};