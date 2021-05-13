"use strict";

// ===== Exponentiation =====

// With ES6, we can now use calculate exponents with a double asterisk operator instead of having to rely on the Math object.

// var oldWay = Math.pow(4, 2);
// console.log(oldWay);
//
// var newWay = 2 ** 3;
// console.log(newWay);

// ===== var vs let vs const =====

// VAR
// Variables declared with var are function-scoped. This means that if a variable is declared anywhere else besides a function using var, it will always exist in the global scope.

// Ex:

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// i = "hello!";
//
// console.log(i);
//
// if (i === "hello!") {
//     var bubbles = 'Bubububububbles';
//     console.log(bubbles)
// }
// bubbles = 'pop!'
// console.log(bubbles);
//
// function test() {
//     var logMe = 'Hello!'
//     bubbles = '*floating*';
//     return logMe;
// }

// console.log(test());
// console.log(logMe);

// CONST
// CONST is block-scoped. This means that the variable declared with const cannot be redeclared, or reassigned.

// const num = 4;
// console.log(num);
// num = 6;
// console.log(num)
//
// const name = 'Jay';
// const name = 'David';
// console.log(name += " Arredondo");
// console.log(name)


// We can use var to redeclare a variable, and to reassign, so this code will output 'David'
// var name = 'Jay';
// var name = 'David';

// console.log(name += ' Arredondo');

// Block-scope
// var number = 5;
// //
// if(number === 5) {
//     const cardNumber = 1234123412341234;
//     console.log(name)
// }
// console.log(cardNumber);

// LET
// The let keyword lets you define variables that are block-scoped. As with variables declared with const, the variables with let cannot be redeclared.

// Redeclaration
// let name = 'Jay';
// let name = 'Javier';

// Reassignment
// let name = 'Jay';
// name = 'Javier'
//
// console.log(name);

// function foo(n) {
//     if (n == 6) {
//         let num = 2;
//     }
//     console.log(num);
// }
// foo(6); // throws an error because our let variable is within our if statement scope.

// for (var i = 0; i < 3; i++) {
//     console.log(i)
// }
// console.log("i outsode of the loop", i);

// for (let i = 0; i < 3; i++) {
//     console.log(i) // this will log because it is within the block scope where i is declared.
// }
// console.log("i outsode of the loop", i);
// this code will throw an error as well because it is within the for loop scope.

// ===== TEMPLATE STRINGS =====

// Template strings allow for interpolation in strings. Variables and expressions can be read in template strings. Template strings use back ticks to recognize variables and expressions.

let name = 'Jay';
console.log(`My name is ${name}`);

console.log('My name is ' + name);

console.log(`My name is ${name.toUpperCase() + ' Arredondo'} in all caps!`);

let nationalParks = ['Grand Canyon National Park', 'Banff National Park', 'Joshua Tree National Park'];

let parksList = `<ul>
 <li>${nationalParks[0]}</li>
 <li>${nationalParks[1]}</li>
 <li>${nationalParks[2]}</li>
 </ul>`

document.write(parksList);





