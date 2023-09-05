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
            <p>Fuso horário: ${country.timezones}</p>
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






// Cada um contém informações sobre:

// - Seu nome comum e oficial.
// - Su _Top Level Domain_ (tld), a extensão que utiliza na internet, por
//   ejemplo o de Perú é `.pe` e o de Brasil é `.br`.
// - Si se ha independente o no.
// - Su(s) Capital(es).
// - La _subregión_ a la que pertenece.
// - Los idiomas falados neste país.
// - Los países con los que limita.
// - Sua área total (em metros cuadrados).
// - Um emoji com sua respectiva bandera.
// - A população total.
// - Su [coeficiente de gini](https://es.wikipedia.org/wiki/Coeficiente_de_Gini)
//   (do ano mais recente do qual se tem dados).
// - A nomenclatura utilizada pela FIFA para identificar o país.
// - Su huso horario.
// - El continente al cual pertenece.
// - E por último, imagens e descrição de sua bandeira.
