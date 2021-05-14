// array iteration methods

// .forEach()
// let output = "";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach(function (item, index){
//     output = output + "<p>" + item + " is at index " + index + "</p>";
//     $("#output").html(output);
// });

// prices.forEach(function(price, index){
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     output = output + "<p>Item number " + (index + 1) + ". Price: $" + price + ". Tax: $" + tax + ". Total: $" + total + "</p>";
//     $("#output").html(output);
// });

// prices.forEach(function(price, index){
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index+1}. Price: $${price}. Tax: $${tax}. Total $${total}</p>`;
//     $("#output").html(output);
// });

// .map()

let output = "";
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let pricesAfterTax = [];

// pricesAfterTax = prices.map(function(price){
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });
//
// pricesAfterTax.forEach(function(item){
//     output = output + "<p>" + item + "</p>";
//     $("#output").html(output);
// });

// let things = ["book", "pencil", "marker", "eraser"];
// ES5
// let pluralThings = things.map(function(thing, index){
//    thing = thing + 's';
//     if (index === 0) {
//         output = "<p>You must bring the following items:</p>";
//         output = output + "<p>" + thing + "</p>";
//     }
//     output = output + "<p>" + thing + "</p>";
//     $("#output").html(output);
//     return thing;
// });

// ES5
// pluralThings.forEach(function(thing, index){
//     if (index === 0) {
//         output = "<p>You must bring the following items:</p>";
//         output = output + "<p>" + thing + "</p>";
//     }
//     output = output + "<p>" + thing + "</p>";
//     $("#output").html(output);
// });
// ES6
// let things = ["book", "pencil", "marker", "eraser"];
// let pluralThings = things.map((thing, index) => {
//     if (index === 0) {
//         output = "<p>You must bring the following items:</p>";
//     }
//     output += `<p>${thing}s</p>`;
//     $("#output").html(output);
// });

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

// ES5
// var mileages = cars.map(function(car){
//         return car.mileage;
// });

// ES6
const mileages = cars.map((car) => car.mileage);

mileages.forEach(function(mileage){
    output = output + "<p>" + mileage + "</p>";
    $("#output").html(output);
});