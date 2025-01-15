// per creare una variabile
let a = 2; //creo la variabile che si chiama a ed è uguale a 2
console.log(a); //scrivo la variabile a nella console
console.log("a");
// le cose che stanno tra le virgolette si chiamano stringhe 

let nome = "Giovanni"; 
let eta = 25;

console.log(nome + 1);
console.log(eta + 1);
console.log(eta + "1");

let prova = eta + "1";
console.log(prova + 2);
// se sommo a un numero una stringa, 
// il numero viene trasformato in stringa

// se non voglio una variabile scrivo const 
const b = 2;
//b = 3;
//console.log(b);
//const non può in alcun modo cambiare e diventare altro
//const cognome = "Rossi";
//cognome = "Bianchi";
//console.log(cognome);
//non si può fare neanche con le stringhe

let interruzioni = 13; //conto le interruzioni dalle 9.47
document.getElementById("interruzioni").innerHTML = interruzioni;

// su javascript si possono fare dei gruppi di variabili 
// un esempio di gruppo di variabili si chiama array 
// gli array si fanno con le parentesi quadre
let listaSpesa = ["mele", "pane", "acqua", "farina"]; //lista di stringhe
let estrazioneLotto = [2, 5, 55, 70]; //lista di numeri
let listaMista = ["mele", 2, "pane", 5]; //lista mista

let utente = ["Giovanni", "Rossi", 25]; //lista di dati di un utente

// negli array su js si inizia a contare gli elmenti dallo 0
console.log(utente[1]);

// per creare una funzione si scrive function 
// nelle parentesi graffe scrivo quello che fa la funzione
function salvaNome() {
    let user = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;
    // creo la lista di informazioni del mio utente 
    let persona = [user, cognome, eta];

    console.log(persona);
    console.log(user);
}
