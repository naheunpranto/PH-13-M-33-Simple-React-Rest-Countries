import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    

    const handleVisitedCountries = (country) => {
        console.log("handle visited country clicked", country);
    }

    return (
        <div >
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Countries Visited: </h3>
            <div className='countries'>
            {
                countries.map(country => <Country 
                key = {country.cca3} 
                country = {country}
                handleVisitedCountries = {handleVisitedCountries}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;