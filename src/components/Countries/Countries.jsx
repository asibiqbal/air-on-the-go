import { use, useState } from "react";
import Country from "../../Country/Country";
import './Countries.css';
const Countries = ({getCountries}) => {
    const allCountries = use(getCountries);
    const getAllCountries = allCountries.countries

    const [visitedCountries , setVisitedCountries] = useState([]);
    // To show the visited flags
    const [visitedFlags, setVisitedFlags] = useState([]);

    const getVisitedCountries = (country) => {
        const allVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(allVisitedCountries)
    }

    const getVisitedFlags = (flags) => {
       const newVisitedFlags = [...visitedFlags , flags]
       setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
            <h1>Total Countries : {getAllCountries.length}</h1>
            <h2>Total Countries Visited : {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className="visited-country-flags">
                {
                    visitedFlags.map((flag, index)=> <img key={index} src={flag}></img>)
                }
            </div>
            <div className="country-wrapper">
            {
                getAllCountries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}
                    getVisitedCountries = {getVisitedCountries}
                    getVisitedFlags = {getVisitedFlags}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;