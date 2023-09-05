import data from './data/countries/countries.js';
import { sortCountries } from './data.js';

const listCountry = document.getElementById('root');
const countries = data.countries;

function renderCountries(countries) {
  const items = countries.map((country) => `
    <div class="card-container">
      <article class="card">
          <h2>País: ${country.name.common}</h2>              
          <img src="${country.flags.png}">               
          <p>Fuso horário: ${country.timezones}</p>
          <p> Continente: ${country.continents}</p>
          <p> População: ${country.population}</p>
      </article>
    </div>
  `).join("");

  listCountry.innerHTML = items;
}



renderCountries(countries);

const barraBuscar = document.getElementById("ordenaçao");
if (barraBuscar) {
  barraBuscar.addEventListener("change", () => {
    const orderValue = barraBuscar.value;
    console.log(orderValue);
    const sorted = sortCountries(countries, orderValue);
    console.log(sorted);
    renderCountries(sorted);
  });
}

