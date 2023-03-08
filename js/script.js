/*
Il programma dovrà chiedere all'utente il numero di chilometri
che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana
(con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

*/

// km da percorrere 
const kilometers = prompt('Inserisci i km che vuoi percorrere');

// età passeggero
const age = prompt('Inserisci la tua età');

// tariffa biglietto
const standardRate = 0.21;

// prezzo totale
let ticketPrice = kilometers * standardRate;

console.log(ticketPrice);

// controllo numeri + sconto minorenni e over 65

if (!isNaN(age) && !isNaN(kilometers)) {

    if (age < 18) {
        ticketPrice -= ((ticketPrice / 100) * 20);
        console.log(ticketPrice);
        ticketPrice = ticketPrice.toFixed(2);
        console.log(ticketPrice);
        document.getElementById('app').innerHTML = `
        <div class="card shadow w-50 text-center mt-5">
            <div class="card-body">
            <h1 class="card-title " id="price"> 
            Il costo del tuo biglietto sarà di: ${ticketPrice} &euro;</h1>
            <a href="#" class="btn btn-primary">Procedi all'acquisto</a>
            </div>
        </div>`;

    } else if (age > 65) {
        ticketPrice -= ((ticketPrice / 100) * 40);
        console.log(ticketPrice);
        ticketPrice = ticketPrice.toFixed(2);
        console.log(ticketPrice);
        document.getElementById('app').innerHTML = `
        <div class="card shadow w-50 text-center mt-5">
            <div class="card-body">
            <h1 class="card-title " id="price"> 
            Il costo del tuo biglietto sarà di: ${ticketPrice} &euro; </h1>
            <a href="#" class="btn btn-primary">Procedi all'acquisto</a>
            </div>
        </div>`
    } else {
        document.getElementById('app').innerHTML = `
        <div class="card shadow w-50 text-center mt-5">
            <div class="card-body">
            <h1 class="card-title " id="price"> 
            Il costo del tuo biglietto sarà di: ${ticketPrice} &euro; </h1>
            <a href="#" class="btn btn-primary">Procedi all'acquisto</a>
            </div>
        </div>`
    }
} else {
    document.getElementById('app').innerHTML = 
    `<h1 class="p-3 fw-bold text-danger"> Ricarica la pagina ed inserisci valori validi.</h1>`;
}












