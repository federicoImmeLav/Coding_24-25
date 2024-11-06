// creo una funzione 
// per crearla serve il nome function, il nome della funzione, le parentesi tonde e quelle graffe 
function cambiaTesto() {
    // la funzione deve andare a prendersi l'elemento che si chiama casella 
    // nel sito vai a prendere l'elemento che si chiama casella 
    // il comando che scrive nel sito si chiama .value 
    document.getElementById("casella").value = "Gabri";
}

// creo la funzione per la somma 
function somma() {
    // leggo il valore nei due campi di input e li converto in numeri con parseInt 
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    // faccio la somma tra i due numeri 
    let c = a + b;

    // scrivo il risultato della somma nel campo che si chiama risultato 
    document.getElementById("risultato").value = c;
}

