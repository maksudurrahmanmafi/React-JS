import { use } from "react";
import Country from "./Country/Country";

const Countries = ({ countries }) => {
  const countriesData = use(countries);
  const country = countriesData.countries
  console.log(countriesData);

  return (
    <div>
      <h1>This is the countries</h1>

      {country.map((country) => (
        <Country key={country.cca3.cca3} country={country} />
      ))}
    </div>
  );
};

export default Countries;
