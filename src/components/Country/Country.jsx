import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    // console.log(country.flags.flags.alt);

    console.log(handleVisitedCountries);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // basic system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }


        // second system
        // setVisited(visited ? false : true);

        // third system
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Populations: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;

/**
 * 1. inline css style object
 */