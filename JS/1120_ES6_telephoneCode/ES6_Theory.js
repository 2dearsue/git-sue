// Create an AF accepts one argument a string : telephone Code and console console.log
// the country:

// Bonus: no switch case , no if-statement

let telephoneData = [
  {countryCode: '0030', country: 'Greece'},
  {countryCode: '0039', country: 'Italy'},
  {countryCode: '00972', country: 'Israel'},
  {countryCode: '0007', country: 'Russia'},
  {countryCode: '0044', country: 'United Kingdom'},
  {countryCode: '0001', country: 'United States'},
  {countryCode: '00963', country: 'Syria'},
  {countryCode: '0029', country: 'Belgium'},
  {countryCode: '0031', country: 'Holland'},
  {countryCode: '0049', country: 'Germany'},
]


let returnCountryFromCode = code => {
  let msg = "The given code corresponds to ";
  let found = telephoneData.find(item => item.countryCode === code);
  return (msg + found.country);
};

console.log(returnCountryFromCode(`0030`));

//////////////////////////////////////////////////////////new exercise
let airlinePrices = [
  {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
  {airlinesName: 'Aegean', avgPriceTicket: 65.8},
  {airlinesName: 'KLM', avgPriceTicket: 102.82},
  {airlinesName: 'British Airways', avgPriceTicket: 114.9},
  {airlinesName: 'Iberia', avgPriceTicket: 77.2},
  {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
  {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
  {airlinesName: 'Air France', avgPriceTicket: 105.6},
  {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
  {airlinesName: 'Emirates', avgPriceTicket: 135.4},
]

let returnCheapAgencies = (value) => {

  airlinePrices
  .filter(airline => airline.avgPriceTicket < value)
  .forEach(company => {
    console.log(company.airlinesName);

  })

  // filter function pushes into a new array...
  // for (let company of cheapCompanies) {
  //   console.log(company.airlinesName);
  // }
}

returnCheapAgencies(100);

//////////////////////////////////////////////////////////new exercise

let numbers = [0, 2, 4, 6, 8];

let multiply = (collection) => {

  collection.forEach((num,index,array) => { // array.forEach(value, index, array)
    array[index]*=2; // array[index] = num*2
  })
}

multiply(numbers);

console.log(numbers);


/////////////////////////////////////////new function: map

let nums = [0, 2, 4, 6, 8];

let doubleNum = list => {
  let doubled = list.map(num => num * 2);
  return doubled;
  }

let twiceAsBig = doubleNum(numbers);

//////////////////////////////////////////////////new

let names = [
  'Mauro',
  'Eugen',
  'Mauro',
  'Meir',
  'Eugen',
  'Jens',
  'Jens',
  'Jake',
  'Mohammed',
  'Mauro',
  'Mohammed',
  'Marcelo',
  'Sue',
  'Murhaf',
  'Jens'
];

let createUniqueNames = (collection = names) => {
  let uniqueNames = []; // list.map(name => name);

  for (let name of names) {
    if (!uniqueNames.includes(name)) {
      uniqueNames.push(name);
    }
  }

  return uniqueNames;
}

let uniqueNames = createUniqueNames();
console.log(uniqueNames);

//////////////////////////////////////////////////new

let newNames = new Set();

for (let nombre of names) {
  newNames.add(nombre);
}

console.log(newNames);
