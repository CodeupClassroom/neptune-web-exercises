(() => {
    const fizzBuzz = numTil => {
        for (let x = 1; x <= numTil; x++) {
            if (x % 3 === 0 && x % 5 === 0) {
                console.log("FizzBuzz");
            } else if (x % 3 === 0) {
                console.log("Fizz");
            } else if (x % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(x);
            }
        }
    }

    fizzBuzz(30);
})();