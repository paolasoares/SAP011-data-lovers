import { filtraPaises } from '../src/data.js';
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

describe('filtraPaises', () => {
  it('is a function', () => {
    expect(typeof filtraPaises).toBe('function');
  });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
  });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
