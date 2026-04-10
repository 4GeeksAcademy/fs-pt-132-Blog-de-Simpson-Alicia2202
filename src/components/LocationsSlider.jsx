import React from "react";
import LocationCard from "./LocationCard";


const LocationsSlider = ({locations}) => {
    const topTen = locations.slice(0,10);
    return(
        <div className="bg-light py-5 mb-5 border-bottom slider-location">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold text-uppercase ">Ubicaciones Destacadas</h2>
                <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scrollbar">
                    {topTen.map((location,index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-3 mb-3">
                            <LocationCard location={location}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationsSlider;