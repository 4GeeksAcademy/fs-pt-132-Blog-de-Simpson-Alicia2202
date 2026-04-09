import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
    const { store, dispatch } = useGlobalReducer();
    

    const isFavourite = store.favorites?.some(fav => fav.id === episode.id);
    const handleFavorite = () => {
        dispatch({
            type: isFavourite? 'removeFavorite':'addFavorite',
            payload: episode
        })
    }
    const image = 'https://cdn.thesimpsonsapi.com/200' + episode.image_path
  console.log(episode)
    return (
        <div className="card h-100 shadow-sm border-0">


            <img
                src={image}
                alt={episode.name}
                className="card-img-top p-3"
            />

            
          
            <div className="card-body d-flex flex-column text-start p-3">
                <h5 className="card-title fw-bold text-truncate">{episode.name}</h5>
                

                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <Link to={`/episode/${episode.id}`} className="btn btn-outline-primary btn-sm rounded-pill">
                        Details
                    </Link>

                    <button className="btn btn-outline-warning btn-sm border-0 bg-transparent p-0" onClick={handleFavorite}>
                        <i className={`${isFavourite ? "fas text-warning" : "far text-muted"} fa-heart fa-lg`}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard