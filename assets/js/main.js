/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! confermate lettura come al solito */

const fizzBuzzGrid = document.getElementById("fizzBuzzGrid");

for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0) {
        const fizzBuzzValue = "fizzBuzz";
        console.log(fizzBuzzValue);

        const fizzBlock = `<div
class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2  text-capitalize ${fizzBuzzValue}">
<span>${fizzBuzzValue}</span>
</div>`;

        fizzBuzzGrid.innerHTML += fizzBlock;

    }

    else if (i % 3 === 0) {
        const fizzBuzzValue = "fizz";
        console.log(fizzBuzzValue);

        const fizzBlock = `<div
        class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2  text-capitalize ${fizzBuzzValue}">
        <span>${fizzBuzzValue}</span>
        </div>`;

        fizzBuzzGrid.innerHTML += fizzBlock;

    }

    else if (i % 5 === 0) {
        const fizzBuzzValue = "buzz";
        console.log(fizzBuzzValue);

        const fizzBlock = `<div
        class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2  text-capitalize ${fizzBuzzValue}">
        <span>${fizzBuzzValue}</span>
        </div>`;

        fizzBuzzGrid.innerHTML += fizzBlock;

    }

    else {
        const fizzBuzzValue = i;
        console.log(fizzBuzzValue);

        const fizzBlock = `<div
        class="col border rounded-1 d-flex align-items-center justify-content-center fw-bold p-2 m-2">
        <span>${fizzBuzzValue}</span>
        </div>`;

        // fizzBuzzGrid.innerHTML += fizzBlock;
        fizzBuzzGrid.insertAdjacentHTML("beforeend", fizzBlock);

    }
}

/* APPEND
    function myFunction() 
{
    // Create an "li" node:
    const node = document.createElement("li");
    
    / Create a text node:
    const textnode = document.createTextNode("Water");

    // Append the text node to the "li" node:
    node.appendChild(textnode);

    // Append the "li" node to the list:
    document.getElementById("myList").appendChild(node);
} */