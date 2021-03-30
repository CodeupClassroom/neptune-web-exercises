(function(){
    "use strict";
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // This modifies the array.
    planets.unshift("The Sun");
    // This returns the length of the modified array.
    // console.log("What does this return?", planets.unshift("The Sun"));

    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    // console.log(planets.push("Pluto")); ** if we wanted the length of the modified array
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    // console.log("What does this return?", planets.shift()); returns the element that is removed
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    // console.log("What does this return?", planets.pop()); returns the element that is removed
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"));

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    // console.log("What does this return?", planets.reverse()); returns the modified array in reverse order.
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    // console.log("What does this return?", planets.sort());
    console.log(planets);
})();
