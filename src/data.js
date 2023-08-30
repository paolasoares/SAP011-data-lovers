// estas funciones son de ejemplo

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = data.slice();
  const sorted = dataCopy.sort(function (a, b) {
    const aValue = a[sortBy] || "";
    const bValue = b[sortBy] || "";
    
      return aValue.localeCompare(bValue);
});

if (sortOrder === "A-Z") {
  // Se a ordem for "A-Z" (crescente), simplesmente retornamos a lista ordenada.
  return sorted;
}
if (sortOrder === "Z-A") {
  // Se a ordem for "Z-A" (decrescente), invertemos a lista ordenada e a retornamos.
  return sorted.reverse();
}
};

export const anotherExample = () => {
  return 'OMG';
};
