"use strict";

// Part 1
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

// Part 2
var userInput = prompt("What's your favorite color?");

alert("Wow, " + userInput + " is my favorite color too!");

// Part 3.1
var lMRental = Math.ceil(parseFloat(prompt("How many days are you renting The Little Mermaid?")));
var bBRental = Math.ceil(parseFloat(prompt("How many days are you renting Brother Bear?")));
var hercRental = Math.ceil(parseFloat(prompt("How many days are you renting Hercules?")));

var rentalRate = parseFloat(prompt("How much is it to rent a movie for one day?"));

var rentalTotal = (lMRental + bBRental + hercRental) * rentalRate;

alert("You're final total is: $" + rentalTotal.toFixed(2) + ". Have a great Hollywood Video day.");

// Part 3.2
var googleRate = parseFloat(prompt("How much does Google pay per hour?"));
var googleHours = parseFloat(prompt("How many hours did you work for Google this week?"));

var amazonRate = parseFloat(prompt("How much does Amazon pay per hour?"));
var amazonHours = parseFloat(prompt("How many hours did you work for Amazon this week?"));

var fbRate = parseFloat(prompt("How much does Facebook pay per hour?"));
var fbHours = parseFloat(prompt("How many hours did you work for Facebook this week?"));

alert("Wow you got paid $" + (
    (googleHours * googleRate)+(amazonHours * amazonRate)+(fbHours * fbRate)
).toFixed(2) + ". Wicked work, my dude!");

// Part 3.3
var classHasRoom = confirm("Hey, is there room in Fluker's Intro to Mass Communications class?");
var noScheduleConflict = confirm("Can you take a class at 8 AM?");

alert("You can has class: " + (classHasRoom && noScheduleConflict));

// Part 3.4
var isOfferValid = confirm("Are we still running that promo on fish sticks?");
var isPremiumMember = confirm("Does the customer have their Randall's card?");
var amountBought = parseFloat(prompt("How many bags of fish sticks are they buying?"));

alert("Customer qualifies for promo: " + (((isPremiumMember || amountBought >= 2) && isOfferValid) && amountBought >= 1) + ".")