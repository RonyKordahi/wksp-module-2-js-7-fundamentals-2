# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

Object.keys() returns the keys, AKA strings, in an array.
Object.keys(friendsAge) = ["kevin", "Rick", "Morty", "Jerry"]
```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

Object.keys(friedsAge).forEach(friend => { //Ojbect.keys(friendsAge) creates an array, .forEach cycles through the values of the array
    console.log(friendsAge[friend]); //friendsAge[friend] looking in the object for a key equal to variable friend, and pulling out it's value
});
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
Object.value(friendsAge); //returns an array of just the values, in this case it is the ages
```

---