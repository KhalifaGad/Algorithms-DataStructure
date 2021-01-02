const data = require("./response.json");

const counrtiesSet = new Set();

data.deals.map((deal) => {
  counrtiesSet.add(deal.departure);
  counrtiesSet.add(deal.arrival);
});

const countries = Array.from(counrtiesSet);
let matrixGraph = [];
let listGraph = new Map();

for (let i = 0; i < countries.length; i++) {
  matrixGraph.push(new Array(countries.legth).fill(null));
  listGraph.set(countries[i], new Map());
}

data.deals.map((deal) => {
  let existedMatrixVal =
    matrixGraph[countries.indexOf(deal.departure)][
      countries.indexOf(deal.arrival)
    ];
  if (existedMatrixVal) {
    matrixGraph[countries.indexOf(deal.departure)][
      countries.indexOf(deal.arrival)
    ] = [...existedMatrixVal, deal];
  } else {
    matrixGraph[countries.indexOf(deal.departure)][
      countries.indexOf(deal.arrival)
    ] = [deal];
  }

  let listVal = listGraph.get(deal.departure)
  if(listVal.get(deal.arrival)){
    listVal.set(deal.arrival, [...listVal.get(deal.arrival), deal])
  } else {
    listVal.set(deal.arrival, [deal])
  }
  listGraph.set(deal.departure, listVal)
});

console.log("====================================")
let LondonAmsterdam =
  matrixGraph[countries.indexOf("London")][countries.indexOf("Amsterdam")];
  console.log("from London to Amsterdam: ", LondonAmsterdam);
  console.log("====================================")
  let AmsterdamLondon =
  matrixGraph[countries.indexOf("Amsterdam")][countries.indexOf("London")];
  console.log("from Amsterdam to London: ", AmsterdamLondon);
  
  console.log("====================================")
  let LondonParis =
  matrixGraph[countries.indexOf("London")][countries.indexOf("Paris")];
  console.log("from London to Paris: ", LondonParis);
  
  let LondonAmsterdamFromList =
  listGraph.get("London").get("Amsterdam");

  let AmsterdamLondonFromList =
  listGraph.get("Amsterdam").get("London");


  console.log("List Graph: London Amsterdam: ", LondonAmsterdamFromList)
  console.log("====================================")
  console.log("List Graph: Amsterdam London: ", AmsterdamLondonFromList)