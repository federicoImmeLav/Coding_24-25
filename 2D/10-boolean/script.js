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