import data from './data/countries/countries.js';
import { sortCountries } from './data.js';

const listCountry = document.getElementById('root');
const countries = data.countries;

function renderCountries(countries) {
  const items = countries.map((country) => `
    <div class="card-container">
      <article class="card">
        <div class="card-frente">
          <h2>${country.name.common}</h2>              
          <img src="${country.flags.png}">               
          <p>Fuso horário: ${country.timezones}</p>
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
  `).join("");

  listCountry.innerHTML = items;
}



renderCountries(countries);

const barraBuscar = document.getElementById("ordenaçao");
if (barraBuscar) {
  barraBuscar.addEventListener("change", () => {
    const orderValue = barraBuscar.value;
    console.log(orderValue);
    const sorted = sortCountries( countries, orderValue);
    console.log(sorted);
    renderCountries(sorted);
  });
}







//       "name": {
//         "common": "Guatemala",
//         "official": "Republic of Guatemala"
//       },
//       "capital": [
//         "Guatemala City"
//       ],
//       "languages": {
//         "spa": "Spanish"
//       },
//       "continents": [
//         "America"
//       ],
//       "flags": {
//         "png": "https://flagcdn.com/w320/gt.png",
//         "svg": "https://flagcdn.com/gt.svg",
//         "alt": "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band."

// "countries": [
//     {
//       "tld": [
//         ".gt"
//       ],
//       "independent": true,
//       "subregion": "Central America",
//       "borders": [
//         "BLZ",
//         "SLV",
//         "HND",
//         "MEX"
//       ],
//       "area": 108889,
//       "flag": "🇬🇹",
//       "population": 16858333,
//       "gini": {
//         "2014": 48.3
//       },
//       "fifa": "GUA",
//       "timezones": [
//         "UTC-06:00"
//       ],

// // const showCards = (data) => {
//     divCards.innerHTML = data.map(poke => `
//       <section class="box">
//         <h3 class="name-poke"> ${poke.name}</h3>
//         <img class="image-poke" src=${poke.img} />
//         <div class="content-card">
//             <p><strong>Tipo:</strong> ${poke.type.join(", ")}</p>
//             <p><strong>Ovo:</strong> ${poke.egg}</p>
//             <p><strong>Chance:</strong> ${poke.avg_spawns} % </p>
//             <p><strong>Fraquezas:</strong> ${poke.weaknesses.join(", ")}</p>
//         </div>
//       </section>
//     `).join("");
//   };

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