for (let i = 1; i <= 100; i++) 
{

    if (i % 15 === 0) {
        const FizzBuzzValue = "FizzBuzz";
        console.log(FizzBuzzValue);
    } 

    else if (i % 3 === 0) {
        const FizzBuzzValue = "Fizz";
        console.log(FizzBuzzValue);
    }

    else if (i % 5 === 0) {
        const FizzBuzzValue = "Buzz";
        console.log(FizzBuzzValue);
    }

    else {
        console.log(i);
    }

}