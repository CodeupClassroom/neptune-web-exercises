(() => {

    /**
     *
     * Often in programming interviews, you may be asked to solve a problem called “FizzBuzz.” FizzBuzz is a test of your ability to
     * use conditional logic with a loop that counts up by one with every iteration. The challenge asks that you log the word “Fizz” if
     * a number is evenly divisible by 3, “Buzz” if a number is evenly divisible by 5, “FizzBuzz” if it is divisible by both 3 and 5,
     * and finally the number if it is not divisible by 3 or 5.
     *
     * This morning, I’d like you to write FizzBuzz in JavaScript using a for loop that goes until the number 30.
     *
     */
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

    // fizzBuzz(30);

//    Write a function in JavaScript that returns the number 7.
    const returnSeven = () => 7;

    /**
     * Write a function in JavaScript that takes in a number and returns the number passed multiplied by the number 5.
     * If we pass anything other than a number into the function, the function should return the number 0.
     */

    const multiplyByFive = num => typeof num === "number" ? num * 5 : 0;

    console.log(multiplyByFive(5));
    console.log(multiplyByFive(-3.5));
    console.log(multiplyByFive(0));
    console.log(multiplyByFive("Sixteen"));
    console.log(multiplyByFive(false));

})();