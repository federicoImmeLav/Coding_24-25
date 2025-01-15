// si usa let per creare le variabili 
let a = 0;
console.log(a);
// le variabili possono cambiare
a = 1;
console.log(a);

// si usa const per creare le costanti, non possono cambiare
const b = 2;
console.log(b);

console.log(a + b);

// oltre a let e cosnt uguali a dei numeri, 
// le variabili possono essere uguali a delle stringhe
// le stringhe sono scritte di testo, tra virgolette
let c = "ciao";
let d = "Gabriele";
console.log(c + " " + d); /* devo sommare anche lo spazio tra i due elementi */
console.log(a + c); /* se sommo un numero a una stringa, diventa tutto testo */


// esempio di variabili e stringhe che interagiscono 
let nome = "Gabriele";
let cognome = "Antinolfi";
let eta = 15;
console.log("Mi chiamo " + nome + " " + cognome + " e ho " + eta + " anni.");


// operatori aritmetici
let e = 5;
let f = 2;
console.log(e + f); // somma
console.log(e - f); // sottrazione
console.log(e * f); // moltiplicazione
console.log(e / f); // divisione
e += 1; // incremento di 1
console.log(e);
e -= 1; // decremento di 1
console.log(e);
e == 5; // controllo che e sia uguale a 5

