// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...

let desserts = Object.values(favoriteDessert);
let ranking = [];
let dessertCounter = 0;
let sortedRankings = [];

for (let i = 0; i < desserts.length; ++i) {
    let currentDessert = {};
    if (currentDessert[desserts[i]] === undefined){
        currentDessert[desserts[i]] = 0;

        for (let j = 0; j < desserts.length; ++j) {
            if (desserts[j] === desserts[i]) {
                ++dessertCounter;
            }
        }
        currentDessert[desserts[i]] = dessertCounter;

    }
    dessertCounter = 0;
    ranking[i] = currentDessert;
}

console.log(ranking);

// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...
