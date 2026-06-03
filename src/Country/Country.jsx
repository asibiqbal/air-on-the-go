
const Country = ({country}) => {
    console.log(country.name)
    return (
        <div className="country-container countries-grid">
            <img className="country-img" src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2 className="country-name">Country Name : {country.name.common}</h2>
            <p className="country-official">Official Name : {country.name.official}</p>
            <p className="country-capital">Capital : {country.capital.capital}</p>
            <p className="country-population">Population : {country.population.population}</p>
            <p className="country-region">Region : {country.region.region}</p>
        </div>
    );
};

export default Country;
