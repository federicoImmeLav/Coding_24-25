// controllo che js funziona 
console.log("js funziona");

// vado a prendere il div che si chiama menu e lo salvo
// in una variabile. let serve e creare la variabile, menu è
// il nome della variabile
let menu = document.getElementById("menu");
console.log(menu);

// la funzione per riempire index si chiama innerHTML
menu.innerHTML = `  <div class="fascia">
                <button>
                    <a href="./index.html">Home</a>
                </button>
                <button>
                    <a href="./prodotti.html">Prodotti</a>
                </button>
                <button>
                    <a href="./contatti.html">Contatti</a>
                </button>
            </div>   `; 