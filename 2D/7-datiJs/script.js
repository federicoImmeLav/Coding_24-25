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

    let d = document.createElement("p"); //creo un paragrafo
    console.log(d);
    let testo = document.createTextNode(a + "+" + b + "=" + c); //creo il testo per il paragrafo aggiungendo i vari pezzettini con le virgolette
    console.log(testo);
    // metto il testo dentro al paragrafo 
    d.appendChild(testo);
    console.log(d);
    // prendo l'elemento che si chiama cronologia e ci metto dentro il pargrafo che si chiama d 
    document.getElementById("cronologia").appendChild(d);
}

// creo la funzione per la sottrazione 
function differenza() {
    // leggo il valore nei due campi di input e li converto in numeri con parseInt 
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    // faccio la differenza tra i due numeri 
    let c = a - b;

     // scrivo il risultato della differenza nel campo che si chiama risultato 
     document.getElementById("risultato").value = c;

     let d = document.createElement("p"); //creo un paragrafo
     console.log(d);
     let testo = document.createTextNode(a + "-" + b + "=" + c); //creo il testo per il paragrafo aggiungendo i vari pezzettini con le virgolette
     console.log(testo);
     // metto il testo dentro al paragrafo 
     d.appendChild(testo);
     console.log(d);
     // prendo l'elemento che si chiama cronologia e ci metto dentro il pargrafo che si chiama d 
     document.getElementById("cronologia").appendChild(d);
}

// creo la funzione per il prodotto 
function prodotto() {
    // leggo il valore nei due campi di input e li converto in numeri con parseInt 
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    // faccio la moltiplicazione tra i due numeri 
    let c = a * b;

     // scrivo il risultato del prodotto nel campo che si chiama risultato 
     document.getElementById("risultato").value = c;

     let d = document.createElement("p"); //creo un paragrafo
     console.log(d);
     let testo = document.createTextNode(a + "X" + b + "=" + c); //creo il testo per il paragrafo aggiungendo i vari pezzettini con le virgolette
     console.log(testo);
     // metto il testo dentro al paragrafo 
     d.appendChild(testo);
     console.log(d);
     // prendo l'elemento che si chiama cronologia e ci metto dentro il pargrafo che si chiama d 
     document.getElementById("cronologia").appendChild(d);
}

// creo la funzione per la divisione 
function quoziente() {
    // leggo il valore nei due campi di input e li converto in numeri con parseInt 
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    // faccio la divisione tra i due numeri 
    let c = a / b;

     // scrivo il risultato della divisione nel campo che si chiama risultato 
     document.getElementById("risultato").value = c;

     let d = document.createElement("p"); //creo un paragrafo
     console.log(d);
     let testo = document.createTextNode(a + "/" + b + "=" + c); //creo il testo per il paragrafo aggiungendo i vari pezzettini con le virgolette
     console.log(testo);
     // metto il testo dentro al paragrafo 
     d.appendChild(testo);
     console.log(d);
     // prendo l'elemento che si chiama cronologia e ci metto dentro il pargrafo che si chiama d 
     document.getElementById("cronologia").appendChild(d);
}


// creo la funzione di reset 
function reset() {
    // devo prendermi tutti i paragrafi all'interno del div cronologia 
   let q =  document.querySelector("#cronologia p");
   console.log(q);
   q.remove(); //tolgo l'elemento che ho selezionato
}