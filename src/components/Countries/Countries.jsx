import { use } from "react";
import Country from "../../Country/Country";
import './Countries.css';
const Countries = ({getCountries}) => {
    const allCountries = use(getCountries);
    const getAllCountries = allCountries.countries
    return (
        <div>
            <h1>Total Countries : {getAllCountries.length}</h1>
            <div className="country-wrapper">
            {
                getAllCountries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;