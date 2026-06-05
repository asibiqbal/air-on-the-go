import { use, useEffect, useState } from "react";
import Country from "../../Country/Country";
import './Countries.css';
const Countries = ({getCountries}) => {
    const allCountries = use(getCountries);
    const getAllCountries = allCountries.countries

    const [visitedCountries , setVisitedCountries] = useState([]);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY * 0.5);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getVisitedCountries = (country, visited) => {
        if (visited) {
            const alreadyVisited = visitedCountries.some(
                item => item.cca3.cca3 === country.cca3.cca3
            );
            if (!alreadyVisited) {
                setVisitedCountries([...visitedCountries, country]);
            }
        } else {
            setVisitedCountries(
                visitedCountries.filter(
                    item => item.cca3.cca3 !== country.cca3.cca3
                )
            );
        }
    }

    return (
        <div className="countries-main-container">
            <div className="rotating-bg" style={{
                transform: `rotate(${rotation}deg)`,
            }}></div>

            <div className="visited-section">
                <h1 className="section-title">✈️ My Travel Map</h1>
                <div className="visited-stats">
                    <span className="stat-box">🌍 Total Countries Visited: <strong>{visitedCountries.length}</strong></span>
                </div>
                <div className="visited-list-container">
                    {visitedCountries.length > 0 ? (
                        <div className="visited-content">
                            <div className="visited-names">
                                <h3>Countries Visited:</h3>
                                <ol className="visited-list">
                                    {
                                        visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                                    }
                                </ol>
                            </div>
                            <div className="visited-flags">
                                <h3>Flags:</h3>
                                <div className="flags-grid">
                                    {
                                        visitedCountries.map((country) => (
                                            <div key={country.cca3.cca3} className="flag-item">
                                                <img src={country.flags.flags.png} alt={country.name.common} />
                                                <p>{country.name.common}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="empty-message">Start marking countries as visited to see them here! 🌏</p>
                    )}
                </div>
            </div>

            <div className="countries-section">
                <h2 className="section-title">🗺️ Explore Countries</h2>
                <div className="country-wrapper">
                {
                    getAllCountries.map(country => <Country 
                        key={country.cca3.cca3}
                        country={country}
                        getVisitedCountries = {getVisitedCountries}
                        ></Country>)
                }
                </div>
            </div>
        </div>
    );
};

export default Countries;