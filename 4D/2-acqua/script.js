console.log("ciao");
// con javscript è meglio usare gli id per selezionare gli elementi

// creo la funzione che va a prendersi l'elemento che si chiama SanV e lo rende visibile
function mostraSanV() {
    document.getElementById("sanV").style.display = "block";
    document.getElementById("collezione").innerText = "Collezione amore";
}

// faccio anche la funzione che fa sparire l'elemento 
function nascondiSanV() {
    document.getElementById("sanV").style.display = "none";
}

// creo la funzione che mi cambia il contenuto del div a seconda del bottone che clicco
function mostraFrag() {
    document.getElementById("sanV").style.display = "block";
    document.getElementById("collezione").innerText = "Fragranze";
    document.getElementById("sanV").style.backgroundColor = "red";

}

function nascondiFrag() {
    document.getElementById("sanV").style.display = "none";
}