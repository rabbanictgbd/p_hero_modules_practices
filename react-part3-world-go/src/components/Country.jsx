import React from 'react';

const Country = ({country}) => {
    const {name, capital, flags}=country
    return (
        <div>
            <h3>Country Name: {name.common} </h3>
            <h3>Country Official Name: {name.official} </h3>
            <h3>Capital Name: {capital} </h3>
            <h3>Flag: {flags.png} </h3>
            <img src="flags.png" alt="flag" />
        </div>
    );
};

export default Country;