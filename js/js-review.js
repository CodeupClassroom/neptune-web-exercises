"use strict";

// Write a function called sumOfPositives that takes in an array, and returns the sum of all positive numbers in the array.
    function sumOfPositives(input){
        // empty array must be outside of forEach loop, due to scope.
        var positiveNumbers = [];
        input.forEach(function(element) {
            if(element > 0 && typeof element === "number") {
                positiveNumbers.push(element);
            }
        });
        // sum variable must be outside of the loop, or else it will be redefined as zero.
        var sum = 0;
        for (var i = 0; i < positiveNumbers.length; i++) {
            sum += positiveNumbers[i];
        }
        return sum;
    }

console.log(sumOfPositives([-10, 5, 15, "12", "twelve"]));
console.log(sumOfPositives([0, 6, -9, 8, "six"]));
console.log(sumOfPositives([44, "15", -10, 1]));

// sumOfPositives([-10, 5, 15, "12", "twelve"]); // should return 20.
// sumOfPositives([0, 6, -9, 8, "six"]); // should return 14.
// sumOfPositives([44, "15", -10, 1]); // should return 45.





// Write a function called carCreator that accepts an array of 4 elements
// and returns a car object with the following properties: make, model, year, and color.

function carCreator(input){
    var newCar = {
        make: input[0],
        model: input[1],
        year: input[2],
        color: input[3]
    }
    return newCar;
};

console.log(carCreator(["Kia", "Forte", 2012, "black"]));


// carCreator(["Kia", "Forte", 2012, "black"]) // should return {make: "Kia", model: "Forte", year: 2012, color: "black"}
// carCreator(["Toyota", "Camry", 2020, "silver"]) // should return {make: "Toyota", model: "Camry", year: 2020, color: "silver"}
// carCreator(["Nissan", "Titan", 2018, "red"]) // should return {make: "Nissan", model: "Titan", year: 2018, color "red"}