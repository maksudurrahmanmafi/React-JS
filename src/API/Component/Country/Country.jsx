

const Country = ({country}) => {
    console.log(country);
    

    return (
        <div>
            <img src={country.flags.flags?.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h3>Region: {country.region.region}</h3>
            <h3>Population: {country.population.population}</h3>
        </div>
    );
};

export default Country;