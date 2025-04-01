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

