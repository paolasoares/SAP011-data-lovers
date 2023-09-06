// import countries from "./data/countries/countries";

export const sortCountries = (countries, sortOrder) => {
  const sorted = [...countries].sort((a, b) => {
    const aValue = a.name.common || "";
    const bValue = b.name.common || "";
    return aValue.localeCompare(bValue);
  });

  if (sortOrder === "A-Z") {
    return sorted;
  }
  if (sortOrder === "Z-A") {
    return sorted.reverse();
  }
}

export const filtraPaises = (countries, termoDePesquisa) => {
  if (!termoDePesquisa) {
    return countries;
  }
  termoDePesquisa = termoDePesquisa.toLowerCase();

  const paisesFiltrados = countries.filter(countries => {
    const nomeC = countries.name.common.toLowerCase();
    return nomeC.includes(termoDePesquisa);
  });
  return paisesFiltrados;
}
