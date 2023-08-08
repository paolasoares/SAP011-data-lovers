import { example } from './data.js';
import countries from './data/countries/countries.js';
import data from './data/countries/countries.js';

const countriesData = data.countriesData;

const listCoutry = document.getElementById('#root')

countriesData.forEach(country => {
    const item = document.createElement('li');
    item.textContent = `
    País: ${countries.name}
    
    `
    listCoutry.appendChild(item)
});

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