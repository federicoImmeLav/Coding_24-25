console.log("funziona");

// esistono diversi tipi di dati in javascript, inizamo con i numeri 
// i numeri si dividono tra variabili e costanti
// per creare una costante si usa const 
const a = 5;
console.log(a);

// per creare una variabile si usa let
let b = 10;
console.log(b);
b = 20;
console.log(b);

console.log(a + b);

// un altro tipo di dato è la stringa 
// la stringa è il testo e si scrive tra le virgolette
let nome = "Alvin";
let cognome = "Fischetti";
let eta = 16;   
// io posso sommare anche le stringhe, se voglio lo spazio devo considerarlo
console.log(nome + cognome);
console.log(nome + " " + cognome);

console.log("Il mio nome e' " + nome + " " + cognome + " e ho " + eta + " anni");  

// esistono le operazioni aritmetiche tra variabili e costanti
let somma = a + b;
let differenza = a - b;
let prodotto = a * b;
let divisione = a / b;
b += 1; // corrisponde a b = b + 1

function nomeCognome() {
    // prendo tutti e tre i valori che scrivo in input 
    let nome = document.getElementById("nome").value;
    console.log(nome);
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;

    // controllo di averli presi nel modo giusto caricandoli nella console
    console.log(nome + " " + cognome + " " + eta);

    // scrivo il risultato nella pagina html
    let risultato = "Il tuo nome è " + nome + " " + cognome + " e hai " + " " + eta + " anni";
    document.getElementById("risultato").innerHTML = risultato;
}



// un altro tipo di dato è l'array 
// l'array è una lista di elementi
let numeri = [1, 2, 3, 4, 5];

let misto = [1, "Alvin", 3, "Giovanni", 5];

// nell'array si inizia a contare da 0 


let identita = [nome, cognome, eta];
let identita2 = ["Alvin", "Fischetti", 16];

console.log(identita);

// posso cambiare il contenuto degli array 
const nomi = ["Alvin", "Giovanni", "Francesco", "Marco", "Alessandro"];
console.log(nomi);
// per sapere quanti elementi compongono un array si usa il comando length
console.log(nomi.length);


// un altro tipo di dati sono i booleani 
// i booleani sono vero o falso
let voto = "";
console.log(Boolean(voto));

// i booleani possono servire a bloccare o menu un form da compilare 

function nomeCognome2() {
    // prendo tutti e tre i valori che scrivo in input 
    let nome = document.getElementById("nome").value;
    console.log(nome);
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;

    // controllo che tutte le stringhe che ho preso sono state scritte 
    if (Boolean(nome)==false || Boolean(cognome)==false || Boolean(eta)==false) {
        alert("Compila tutti i campi!");
    }

    else {
         // controllo di averli presi nel modo giusto caricandoli nella console
    console.log(nome + " " + cognome + " " + eta);

    // scrivo il risultato nella pagina html
    let risultato = "Il tuo nome è " + nome + " " + cognome + " e hai " + " " + eta + " anni";
    document.getElementById("risultato").innerHTML = risultato;
    }
   
}