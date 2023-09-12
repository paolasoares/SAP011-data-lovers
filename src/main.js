import data from './data/countries/countries.js';
import { sortCountries, filtraPaises } from './data.js';


const countries = data.countries;
const listCoutry = document.getElementById('root')

function renderCountries(countries) {
  const items = countries.map((country) => `
      <div class="container">
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
barraBuscar.addEventListener("change", function () {
  const orderValue = barraBuscar.value;
  renderCountries(sortCountries(countries, orderValue));
});


const pesquisa = document.querySelector('.input-pesquisa')
pesquisa.addEventListener('input', () => {
  const termoDePesquisa = pesquisa.value;
  console.log(termoDePesquisa)
  const paisesFiltrados = filtraPaises(countries, termoDePesquisa);
  console.log(paisesFiltrados)

  renderCountries(paisesFiltrados);
});


function calcularMediaPopulacaoPorContinente(countries) {
  const populacaoPorContinente = {};

  countries.forEach((country) => {
    const continentes = country.continents.map((cont) => cont.toLowerCase());

    continentes.forEach((continente) => {
      if (!populacaoPorContinente[continente]) {
        populacaoPorContinente[continente] = {
          totalPopulacao: 0,
          numeroPaises: 0,
        };
      }

      populacaoPorContinente[continente].totalPopulacao += country.population;
      populacaoPorContinente[continente].numeroPaises += 1;
    });
  });

  // Calcular a média de população por continente
  const mediaPopulacaoPorContinente = {};

  for (const continente in populacaoPorContinente) {
    const totalPopulacao = populacaoPorContinente[continente].totalPopulacao;
    const numeroPaises = populacaoPorContinente[continente].numeroPaises;
    mediaPopulacaoPorContinente[continente] = totalPopulacao / numeroPaises;
  }

  return mediaPopulacaoPorContinente;
}

const pesquisaContinenteInput = document.getElementById("pesquisarContinente");

pesquisaContinenteInput.addEventListener("input", () => {
  const termoDePesquisa = pesquisaContinenteInput.value.toLowerCase();
  //para transformar o termo de pesquisa em letras minúsculas, para que a pesquisa não seja sensível a maiúsculas e minúsculas. 
  // transformando tudo em letras minúsculas para garantir a correspondência     

  // Filtrar os países pelo termo de pesquisa
  const paisesFiltrados = countries.filter(countries => {
    const continentes = countries.continents.map(cont => cont.toLowerCase());
    return continentes.some(cont => cont.includes(termoDePesquisa));
  });

  // Verificar se há resultados de pesquisa antes de exibi-los
  if (paisesFiltrados.length > 0) {
    // Calcular a média da população por continente para os países filtrados
    const mediaPopulacaoPorContinente = calcularMediaPopulacaoPorContinente(paisesFiltrados);

    // Exibir os resultados na interface do usuário (por exemplo, em um elemento HTML)
    const resultadoContainer = document.getElementById("resultado");
    resultadoContainer.innerHTML = "";

    for (const continente in mediaPopulacaoPorContinente) {
      const mediaPopulacao = mediaPopulacaoPorContinente[continente];
      const resultadoItem = document.createElement("div");
      resultadoItem.innerHTML = `<div class="resultado-filtro">Média de população em ${continente}: ${mediaPopulacao}</div>`;
      resultadoContainer.appendChild(resultadoItem);
    }
  } else {
    // Se não houver resultados, você pode exibir uma mensagem informando que não há resultados.
    const resultadoContainer = document.getElementById("resultado");
    resultadoContainer.innerHTML = "Nenhum resultado encontrado.";
  }
});

renderCountries(countries);
const btn = document.querySelector("#inicio");

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
