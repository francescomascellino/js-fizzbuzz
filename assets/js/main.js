
const fizzBuzzGrid = document.getElementById("fizzBuzzGrid");

/* const fizzBlock = `<div
class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2 ${fizzBuzzValue}">
<span>${fizzBuzzValue}</span>
</div>`; */

for (let i = 1; i <= 100; i++) 
{



    if (i % 15 === 0) {
        const fizzBuzzValue = "FizzBuzz";
        console.log(fizzBuzzValue);

        const fizzBlock = `<div
class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2 ${fizzBuzzValue}">
<span>${fizzBuzzValue}</span>
</div>`;

        fizzBuzzGrid.innerHTML += fizzBlock;

    } 

    else if (i % 3 === 0) {
        const fizzBuzzValue = "Fizz";
        console.log(fizzBuzzValue);

        const fizzBlock = `<div
        class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2 ${fizzBuzzValue}">
        <span>${fizzBuzzValue}</span>
        </div>`;
        
                fizzBuzzGrid.innerHTML += fizzBlock;

    }

    else if (i % 5 === 0) {
        const fizzBuzzValue = "Buzz";
        console.log(fizzBuzzValue);

        const fizzBlock = `<div
        class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2 ${fizzBuzzValue}">
        <span>${fizzBuzzValue}</span>
        </div>`;

                fizzBuzzGrid.innerHTML += fizzBlock;

    }

    else {
        const fizzBuzzValue = i;
        console.log(fizzBuzzValue);

        const fizzBlock = `<div
        class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2 ${fizzBuzzValue}">
        <span>${fizzBuzzValue}</span>
        </div>`;
        
                fizzBuzzGrid.innerHTML += fizzBlock;

    }

}