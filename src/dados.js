export const sortData = () => {
    const dataCopy = data.slice();
    const sorted = dataCopy.sort(function (a, b) {
        return a[sortBy].localeCompare(b[sortBy]);
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


