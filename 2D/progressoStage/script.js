function barra() {
    var percentuale = parseInt(document.getElementById("giorni").value)
    var progresso = percentuale * 100 / 50; 
    document.getElementById("barra").style.width = progresso + "%";
}