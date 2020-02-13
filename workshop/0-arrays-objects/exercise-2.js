// Exercise 2
// -------------------
const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

// You have two arrays above of people who arrived late to your party and
// people who arrived early.
// Create a new array that holds all of the party attendees and

// Write a program that will do the following:
// Output them in a tidy list from first to last arrival the console.

// NO for loops!

// const partyGuests = earlyBirds + lateComers;
const partyGuests = []

earlyBirds.forEach(function(guest) {
    partyGuests.push(guest);
});

lateComers.forEach(function(guest){
    partyGuests.push(guest);
});

partyGuests.forEach((guest, id) => {
    console.log(`#${id + 1}: ${guest}`);
})