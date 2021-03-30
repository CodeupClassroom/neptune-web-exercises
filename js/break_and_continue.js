"use strict";
//var oddNumber = 0;

// while (oddNumber !== "You're never gonna come up with this"){
//     oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
//     if (oddNumber % 2 === 1 || (oddNumber > 0 && oddNumber < 50)) {break;}
// }
// while (oddNumber % 2 !== 1 || !(oddNumber > 0 && oddNumber < 50)) {
//     oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
//     //if (oddNumber % 2 === 1 && (oddNumber > 0 && oddNumber < 50)){break;}
// }

// var oddNumber = parseInt(prompt("Give me an odd number between 1 and 50 please?"));
var oddNumber = parseInt(prompt("Give me an odd number between 1 and 50 please?"));

function isNumberEven(num) {
    return num % 2 === 0;
    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
}

function isNumberInRange(num) {
    return num >= 1 && num <= 50;
}

while(true) {
    if (!isNumberEven(oddNumber) && isNumberInRange(oddNumber)){
        break;
    }
    oddNumber = parseInt(prompt("Give me an odd number between 1 and 50 please?"));
}

for (var i = 1; i < 50; i+=2) {
    if (i === oddNumber) {
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log(i);
}

