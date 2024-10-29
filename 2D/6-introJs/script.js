// fa comparire una scritta nella console 
console.log("ciao, sto funzionando");

// creo la funzione che andrà a prendersi il div 
// che si chiama prova e gli cambierà il colore di sfondo
// nel nome della funzione ci vanno sempre le parentesi tonde 
function cambio() {
    // dentro alle parentesi graffe scrivo cosa fa la funzione
    // creo una variabile a che contiene l'elemento che 
    // si chiama prova 
    let a = document.getElementById("prova");
    console.log(a);
    // faccio cambiare colore ad a 
    // .style serve a cambiare il CSS, . backgroundColor 
    // cambia la proprietà, dopo l'uguale si scrive il 
    // tipo di proprietà
    a.style.backgroundColor = "blue";
} 

// creo una variabile da cui dipende il colore del cerchio 
let b = 0;
function doppioClick() {
    // assegno il cerchio a una variabile 
    let cerchio = document.getElementById("cerchio");
    console.log(cerchio);
    // faccio un if che farà cambiare il cerchio a seconda
    // di quanto vale b
    if (b == 0) {
        cerchio.style.backgroundColor = "peachpuff";
        b = 1;
    }
    else if (b == 1) {
        cerchio.style.backgroundColor = "purple";
        b = 0;
    }
}


