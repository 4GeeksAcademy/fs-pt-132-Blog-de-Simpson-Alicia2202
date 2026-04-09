import React from "react";
import EpisodeCard from "./EpisodeCard";


const EpisodesSlider = ({episodes}) => {
    const topTen = episodes.slice(0,10);
    return(
        <div className="bg-light py-5 mb-5 border-bottom">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold text-uppercase ">Episodios Destacados</h2>
                <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scrollbar">
                    {topTen.map((episode,index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-3 mb-3">
                            <EpisodeCard episode={episode}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EpisodesSlider;