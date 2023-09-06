import data from './data/countries/countries.js';
import { sortCountries, filtraPaises } from './data.js';

const countries = data.countries;
const listCoutry = document.getElementById('root')

function renderCountries(countries) {
  const items = countries.map((country) => `
      <div class="card-container">
        <article class="card">
            <h2>País: ${country.name.common}</h2>              
            <img src="${country.flags.png}">               
            <p> Continente: ${country.continents}</p>
            <p> População: ${country.population}</p>
            </article>
            </div>
            `).join("");
            listCoutry.innerHTML = items;
          }

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

const pesquisa = document.querySelector('.input-pesquisa')
pesquisa.addEventListener('input', () => {
  const termoDePesquisa = pesquisa.value;
  console.log(termoDePesquisa)
  const paisesFiltrados = filtraPaises(countries, termoDePesquisa);
  console.log(paisesFiltrados)

  renderCountries(paisesFiltrados);
})

renderCountries(countries);
