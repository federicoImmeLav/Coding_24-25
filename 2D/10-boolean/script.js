console.log("ciao, funziono");

// vado a prendermi l'elemento che si chiama barra 
// tutto html nella funzione deve essere racchiuso dal backtick
document.getElementById("barra").innerHTML = `
        <div class="logo">Logo</div>
            <div class="menu">
                <!-- creo 5 pulsanti nel menu  -->
                 <button>Corsi</button>
                 <button>Academy</button>
                 <button>Aziende</button>
                 <button>Eventi</button>
                 <button>Blog</button>
            </div>
            <div class="pulsante">
                <button id="iscrivi">Iscriviti</button>
            </div>  `  

// creo la funzione che ingrandisce il cerchio
function cerchio() {
    // cambio sia altezza che larghezza con la funzione
    document.getElementById("cerchio").style.height = "40px";
    document.getElementById("cerchio").style.width = "40px";
    // aggiungo la transizione per l'animazione 
    document.getElementById("cerchio").style.transition = "all 0.2s ease-in-out";
}

// creo la funzione che rimpicciolisce
function cerchioPiccolo() {
    // cambio sia altezza che larghezza con la funzione
    document.getElementById("cerchio").style.height = "25px";
    document.getElementById("cerchio").style.width = "25px";
}

// creo la funzione che ingrandisce il cerchio
function cerchio2() {
    // cambio sia altezza che larghezza con la funzione
    document.getElementById("cerchio2").style.height = "40px";
    document.getElementById("cerchio2").style.width = "40px";
    // aggiungo la transizione per l'animazione 
    document.getElementById("cerchio2").style.transition = "all 0.2s ease-in-out";
}

// creo la funzione che rimpicciolisce
function cerchioPiccolo2() {
    // cambio sia altezza che larghezza con la funzione
    document.getElementById("cerchio2").style.height = "25px";
    document.getElementById("cerchio2").style.width = "25px";
}