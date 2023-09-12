import { sortCountries, filtraPaises } from '../src/data.js';
const array = [
  {
    "name": {
      "common": "Guatemala",
      "official": "Republic of Guatemala"
    },
    "continents": [
      "America"
    ],
  },
  {
    "name": {
      "common": "Singapore",
      "official": "Republic of Singapore"
    },
    "continents": [
      "Asia"
    ],
  },
  {
    "name": {
      "common": "Bosnia and Herzegovina",
      "official": "Bosnia and Herzegovina"
    },
    "continents": [
      "Europe"
    ],
  },
  {
    "name": {
      "common": "Maldives",
      "official": "Republic of the Maldives"
    },
    "continents": [
      "Asia"
    ],
  }]

describe('sortCoutries', () => {
  it('is a function', () => {
    expect(typeof sortCountries).toBe('function');
  });

  it('returns `array ordenado de A-Z`', () => {
    expect(sortCountries(array, "A-Z")).toStrictEqual([array[2], array[0], array[3], array[1]]);
  });

  it('returns `array ordenado de Z-A`', () => {
    expect(sortCountries(array, "Z-A")).toStrictEqual([array[1], array[3], array[0], array[2]]);
  });
});


describe('filtraPaises', () => {
  it('is a function', () => {
    expect(typeof filtraPaises).toBe('function');
  });

  it('returns `array Guatemala`', () => {
    expect(filtraPaises(array, "Guatemala")).toStrictEqual([array[0]]);
  });
  it('returns `array Singapore`', () => {
    expect(filtraPaises(array, "Singapore")).toStrictEqual([array[1]]);
  });
  it('returns `array Bosnia`', () => {
    expect(filtraPaises(array, "Bosnia and Herzegovina")).toStrictEqual([array[2]]);
  });
  it('returns `array Maldivas`', () => {
    expect(filtraPaises(array, "Maldives")).toStrictEqual([array[3]]);
  });
});

