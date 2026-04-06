import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
import { Link } from "react-router-dom";

const CharacterCard = ({character}) => {
    const {store, dispatch} = useGlobalReducer ();
    const characterId = character._id;
    
    const isFavourite = store.favorites?.some(fav => fav._id === character._id);
    const handleFavorite = () => {
        dispatch({
            type:'add_favorite',
            payload:character
        })
    }
    const handleImageError = (e) => {
        if (e.target.src.includes("via.placeholder.com") || e.target.src.includes("img.freepik.com")) {
        e.target.onerror = null; 
        return;
        }
        e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
    };
    return (
        <div className="card h-100 shadow-sm border-0">
            <div className="card-img-container">
            <img src={character.imageUrl || 'loanding image' }
            className="card-img-top h-200 object-fit"
            alt={character.name}
            onError={handleImageError}
            />
            </div>
            <div className=" card-body d-flex flex-column text-start">
                <h4 className="card-tittle fw-bold">{character.name}</h4>
                <p className="card-text text-muted small">
                    {character.films?.length>0?'Movie:'+ character.films[0]:'Disney character'}
                </p>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <Link to={`/character/${characterId}`} className="btn btn-outline-primary btn-sm">
                    Details
                    </Link>

                    <button className="btn btn-outline-warning btn-sm" onClick={handleFavorite}>
                        <i className={`${isFavourite ? "fas" : "far"} fa-heart`}></i>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default CharacterCard