import { useState } from 'react';
import './Country.css';

const Country = ({country ,getVisitedCountries}) => {
    const [visited , setVisited] = useState(false)
    const getVisited = () => {
        const nextVisited = !visited
        setVisited(nextVisited)
        getVisitedCountries(country, nextVisited)
    }
    return (
        
        <div className={`country-container ${(visited) ? 'country-visited' : 'country-not-visited'}`}>
            <img className="country-img" src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2 className="country-name">{country.name.common}</h2>
            <p className="country-official">Official: {country.name.official}</p>
            <p className="country-capital">Capital: {country.capital.capital}</p>
            <p className="country-population">Population: {country.population.population}</p>
            <p className="country-region">Region: {country.region.region}</p>
            <button className="visit-btn" onClick={getVisited}>{
                (visited) ? '✓ Visited' : '✗ Not Visited'
                }</button>
        </div>
    );
};

export default Country;
