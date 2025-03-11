//  creo una funzione 
// function seguito dal nome della funzione, le parentesi tonde 
// e le parentesi graffe.
function animazione() {
    // qui posso inserire quello che voglio che la mia funzione faccia
    document.getElementById("animazione").style.backgroundColor = "purple";
    // nel documento, prendi l'elemento che ha come id animazione, cambiagli
    // lo stile, cambia lo sfondo, mettilo viola
}

// faccio dipendere il cambio colore da un'altra variabile 
// quando a è uguale a 0, il quadrato è verde
let a = 0;
// seleziono l'elemento animazione e lo associo a una variabile 
// che si chiama quadrato
let quadrato = document.getElementById("animazione");

// faccio la funzione che ogni volta che clicco alterna i due colori 
function alternato() {
    if(a == 0) {
        quadrato.style.backgroundColor = "purple";
        a = 1;
    }
    else if(a == 1) {
        quadrato.style.backgroundColor = "green";
        a = 0;
    }
}
// alternando la a uguale a 0 e a 1 posso cambiare i colori, 
// se è 0 è verde, se è 1 è viola

let b = 0;
let menu = document.getElementById("menu");

function apriMenu() { 
    if(b==0) {
        menu.style.left = "0px";
        b = 1;
    }
    else if (b==1) {
        menu.style.left = "-30%";
        b = 0;
    }
}