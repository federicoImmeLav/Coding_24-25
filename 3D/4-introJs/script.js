// comando che scrive nella console 
console.log("sto funzionando");

// Creo una funzione per il pulsante 
// dopo function si scrive il nome della funzione seguito dalle parentesi tonde e dalle parentesi graffe 
// Dentro alle parentesi graffe scrivo quello che fa la funzione 
var b = 0; //creo una variabile fuori dalla funzione dalla quale dipenderà il compari e scompari
function appariParagrafo() {
    console.log("la funzione è partita");
    // comando per andare a prendersi un elemento html che ha un nome 
    // assegno ad a l'elemento che i chiama paragrafo 
    var a = document.getElementById("paragrafo");
    console.log(a); //vedo nella console che a sia l'elemento corretto
    //se b = 0 il paragrafo scompare
    // il singolo = cambia il valore mentre il doppio = controlla che una cosa sia uguale a un'altra 
    if(b == 0) {
        //attribuisco ad a la proprietà css di opacity e la metto = 0 
        a.style.opacity = 0;
        b = 1; //cambio il valore di b così che possa far ricomparire il paragrafo
    }
    // se b = 1 il paragrafo ricompare
    else if(b == 1) {
        a.style.opacity = 1; //per essere visibile opacity deve essere 1
        b = 0; //b torna a 0 così torna all'inizio
    } 
}

// dopo aver definito la funzione devo dire al pulsante che deve usarla
// per dire al pulsante che deve usarla si fa nel html 

