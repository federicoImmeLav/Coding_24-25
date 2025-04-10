console.log("Ciao, funziono");

/* prendo e seleziono il menu e lo metto in una variabile */
let menu = document.getElementById("menu");

console.log(menu); /* controllo di averlo preso */

// creo la funzione che fa comparire il menu 
function mostra() {
    // qui dentro scrivo quello che voglio che faccia la funzione
    menu.style.display = "block";
}
// dopo aver creato la funzione, devo chiamarla nel html 

// creo la funzione che fa apprire e scomparire il menu 
// creo la variabile da cui dipende il menu 
let a = 0;

// creo la funzione che a seconda di quanto vale a, cambia il menu 
function cambiaMenu() {
    if(a == 0) {
        menu.style.display = "block";
        a = 1; // cambio il valore di a
    }
    else if (a == 1) {
        menu.style.display = "none";
        a = 0; // cambio il valore di a
    }
}

// creo la funzione che scrive nel paragrafo 
function prova() {
    // prendo il paragrafo in cui voglio scrivere
    let paragrafo = document.getElementById("risultato");

    // scrivo nel paragrafo 
    paragrafo.innerHTML = "Ciao";
}

// creo la funzione che legge nome e cognome e li unisce
// in una frase 
function nomeCognome() {
    // leggo quello che c'è scritto in nome 
    let nome = document.getElementById("nome").value;
    // leggo quello che c'è scritto in cognome
    let cognome = document.getElementById("cognome").value;
    // scrivo in risultato2 nome e cognome insieme 
    document.getElementById("risultato2").innerHTML = "Ti chiami " + nome + " " + cognome;
}

// creo la funzione che somma i due valori che inserisco 
function somma() {
    // leggo il primo numero 
    let numero1 = parseInt(document.getElementById("numero1").value);
    // leggo il secondo numero 
    let numero2 = parseInt(document.getElementById("numero2").value);
    // sommo e scrivo il risultato
    document.getElementById("somma").innerHTML = numero1 + numero2;
}