import React from 'react';

const Country = ({country}) => {
    // console.log(country.flags.flags.alt);

    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
        </div>
    );
};

export default Country;