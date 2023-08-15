import data from './data/countries/countries.js';

/*const select = document.getElementById(ordenagem);
const ordemAlfabetica = select.options [select.selectedIndex].text;
const ordemValor = select.options[select.selectedIndex].value;

console.log (ordemAlfabetica);
console.log (ordemValor);*/

const text = 'A-Z';
const select = document.querySelector('#ordenagem');
for (const i = 0; i < select.options.length; i++) {
    if (select.options[i].text === text) {
        select.selectedIndex = i;
        break;
    }
}

   
