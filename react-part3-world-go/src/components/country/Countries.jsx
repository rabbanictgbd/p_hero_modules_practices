import React, { use } from 'react';
import Country from '../Country';

const Countries = ({countriesPromise}) => {
    const countries= use (countriesPromise)
    console.log(countries)
    return (
        <div>
            <h3>Traveling Countries: {countries.length} </h3>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;