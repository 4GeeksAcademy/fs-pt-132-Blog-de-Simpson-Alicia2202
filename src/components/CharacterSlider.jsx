import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterSlider = ({characters}) => {
    const topTen = characters.slice(0,10);

    return(
        <div className=" py-5 mb-5 border-bottom slider-character">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold text-uppercase ">Personajes Destacados</h2>
                <div className="d-flex flex-row flex-nowrap overflow-auto p-0 custom-scrollbar">
                    {topTen.map((character,index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-3 mb-3">
                            <CharacterCard character={character}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterSlider;