import data from './data/countries/countries.js';
import { sortCountries } from './data.js';
import { filtraPaises } from './data.js';

const countries = data.countries;

const listCoutry = document.getElementById('root')

function renderCountries(countries) {
  countries.forEach(country => {
    const item = document.createElement('li');
    item.innerHTML = `
  <div class="card-container">
  <article class="card">
      <div class="card-frente">
      <h2>  ${country.name.common}</h2>              
        <img src= "${country.flags.png}">               
        <p> Fuso horário: ${country.timezones}</p>
        <button class="flipButton">
          <span class="button-text">Ler mais</span>
        </button>
      </div>
      <div class="card-verso">
        <h2>${country.subregion}</h2>
        <p>${country.continents}</p>
        </div>
    </article>
    </div>    
    `

    /* funçoes do card */
    const flipButton = item.querySelector('.flipButton');
    const card = item.querySelector('.card');

    flipButton.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    listCoutry.appendChild(item);
  });
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