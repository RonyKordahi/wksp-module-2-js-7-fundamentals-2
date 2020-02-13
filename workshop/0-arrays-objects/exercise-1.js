// Exercise 1
// -------------------
// Grubhub's "year in food" for 2018
// source: https://www.insider.com/most-popular-foods-grubhub-2018-12

var mostPopularFood = [
    'poke bowl', //2
    'chicken sliders', //3 
    'pork baby back ribs', //4
    'chicken burritos', //5 
    'chicken sandwich', //6 
    'cauliflower rice bowl', //7
    'chicken and waffle sliders', //8
    'parmesan chicken', //9
    undefined,
];

// The array holds a top-ten list of foods as ranked by Grubhub.
// #1 and #10 are missing
//       #1 is 'bean burritos'
//      #10 is 'buffalo-flavored cauliflower' (not kidding)

// Write a program that will do the following:
// Add them to the array in the right position
// Output them in a tidy top-ten fashion in the console.

// NO for loops!

let counter = 0;
let remove = mostPopularFood.length

mostPopularFood.unshift("bean burrito");
mostPopularFood.splice(remove, 1, "buffalo-flavored cauliflower");

mostPopularFood.forEach(function() {
    console.log(`#${counter + 1}: ${mostPopularFood[counter]}`);
    ++counter;
})