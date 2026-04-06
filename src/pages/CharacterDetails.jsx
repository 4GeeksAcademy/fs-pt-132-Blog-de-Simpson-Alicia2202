import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import DisneyApi from "../services/DisneyAPI";

const CharacterDetail = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null);

  useEffect (()=> {
    setCharacter(null);
    DisneyApi.getSingleCharacter(id).then (data => setCharacter (data))
  },[id])
  // const character = store.characters?.find(item => item._id === id);

  
  if (!character) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando detalles de Disney...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={character.imageUrl}
              className="img-fluid rounded-start"
              alt={character.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{character.name}</h1>
              <hr />
              <h5>Películas:</h5>
              <ul>
                {character.films?.map((film, index) => (
                  <li key={index}>{film}</li>
                ))}
              </ul>
              <p className="card-text">
                <small className="text-muted">ID del personaje: {id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
