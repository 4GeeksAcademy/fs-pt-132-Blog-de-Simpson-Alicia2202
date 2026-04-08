import { useParams, Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import SimpsonApi from "../services/SimpsonAPI";

const CharacterDetail = () => {
  const { id } = useParams()
  // const { store } = useGlobalReducer();
  const {getSingleCharacter}= SimpsonApi
  const [character,setCharacter] = useState({});
  const image = 'https://cdn.thesimpsonsapi.com/500' + character.portrait_path

  useEffect(() =>{
    getSingleCharacter(id).then (data => setCharacter(data))
  },[])

  // const character = store.characters.find(char => char.id === id);

  if (!character) return <div className="container mt-5 text-center"><h3>Cargando personaje...</h3></div>

  return (
    <div className="container mt-5 pb-5">
      <Link to="/" className="btn btn-secondary mb-4">
        <i className="fas fa-arrow-left me-2"></i>Volver
      </Link>

      
      <div className="row bg-white border rounded shadow-sm overflow-hidden">
        
        
        <div className="col-md-4 p-0 bg-warning d-flex align-items-center justify-content-center">
          <img
            src={image}
            className="img-fluid p-4"
            alt={character.name}
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        
        <div className="col-md-8 p-5 d-flex flex-column justify-content-center">
          <h1 className="display-3 fw-bold text-uppercase mb-2">{character.name}</h1>
          

          <div className="row border-top pt-4">
            <div className="col-6 col-sm-4 mb-3">
              <h6 className="text-warning text-uppercase small fw-bold">Edad</h6>
              <p className="fs-5">{character.age || "Unknown"}</p>
            </div>

            <div className="col-6 col-sm-4 mb-3">
              <h6 className="text-warning text-uppercase small fw-bold">Género</h6>
              <p className="fs-5">{character.gender || "Unknown"}</p>
            </div>

            <div className="col-12 col-sm-4 mb-3">
              <h6 className="text-warning text-uppercase small fw-bold">Ocupación</h6>
              <p className="fs-5">{character.occupation || "Unknown"}</p>
            </div>
          </div>
        </div>
      </div>


      {character.phrases && character.phrases.length > 0 && (
        <div className="mt-5">
          <h2 className="mb-4 fw-bold">
            <span className="border-bottom border-4 border-warning">Frases</span> Célebres
          </h2>
          <div className="row">
            {character.phrases.map((phrase, index) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="card h-100 border-0 shadow-sm bg-light">
                  <div className="card-body d-flex align-items-start">
                    <i className="fas fa-quote-left text-warning me-3 fs-4 mt-1"></i>
                    <p className="card-text fst-italic fs-5">{phrase}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;