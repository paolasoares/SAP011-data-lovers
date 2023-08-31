export const sortCountries = (countries, sortOrder) => {
// function sortCountries() {
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

// export const sortData = (data, sortBy, sortOrder) => {
//   const dataCopy = data.slice();
//   const sorted = dataCopy.sort(function (a, b) {
//     const aValue = a[sortBy] || "";
//     const bValue = b[sortBy] || "";
    
//       return aValue.localeCompare(bValue);
// });

// if (sortOrder === "A-Z") {
//   // Se a ordem for "A-Z" (crescente), simplesmente retornamos a lista ordenada.
//   return sorted;
// }
// if (sortOrder === "Z-A") {
//   // Se a ordem for "Z-A" (decrescente), invertemos a lista ordenada e a retornamos.
//   return sorted.reverse();
// }
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// export const sortData = (data, sortBy, sortOrder) => {
//   const dataCopy = data.slice();
//   const sorted = dataCopy.sort(function (a, b) {
//     return a[sortBy].localeCompare(b[sortBy]);
//   });
//   if (sortOrder === "A-Z") {
//     return sorted;
//   }
//   if (sortOrder === "Z-A") {
//     return sorted.reverse();
//   }
// };