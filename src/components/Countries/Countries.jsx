import { use } from "react";
import Country from "../../Country/Country";

const Countries = ({getCountries}) => {
    const allCountries = use(getCountries);
    const getAllCountries = allCountries.countries
    return (
        <div>
            <h1>Total Countries : {getAllCountries.length}</h1>
            {
                getAllCountries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;