import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    

    const handleVisitedCountries = (country) => {
        // console.log("handle visited country clicked", country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div >
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Countries Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>

            <div className='countries'>
            {
                countries.map(country => <Country 
                key = {country.cca3} 
                country = {country}
                handleVisitedCountries = {handleVisitedCountries}
                handleVisitedFlags = {handleVisitedFlags}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;