let b = 0; //creo una variabile fuori da tutto uguale a 0
// creo una funzione 
function appari() {
    // dentro alle graffe ci vanno i comandi della funzione 
    let a = document.getElementById("fascia");
    console.log(a);
    // a è l'elemento, . style serve a cambiare il css, .left è la proprietà che cambia
    // e il valore dopo = è il valore della proprietà
    //il doppio uguale controlla il valore
    // quando la b è zero il menù è chiuso, quando la b è un il menù è aperto 
    if(b == 0) {
    // metto il comando che sposta la fascia nello schermo visibile 
    a.style.left = 0;
    b = 1;
    }
    else if(b == 1) {
    a.style.left = -300; 
    b = 0; 
    }
}