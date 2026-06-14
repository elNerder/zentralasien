window.addEventListener('DOMContentLoaded', () => {

    const websites = [
        "kasachstan.html",
        "kirgisistan.html",
        "tadschikistan.html",
        "turkmenistan.html",
        "usbekistan.html"
    ];
    let verbleibendeWebsites = JSON.parse(localStorage.getItem('webRandomizerStatus')) || [...websites];
    const zufall = document.getElementById("zufall");

zufall.addEventListener("click", function(e){
    e.preventDefault();
    if(verbleibendeWebsites.length === 0){
    window.open("final.html");
    return;
}
    const randomseite = Math.floor(Math.random() * verbleibendeWebsites.length);
    const naechsteSeite = verbleibendeWebsites[randomseite];
    verbleibendeWebsites.splice(randomseite, 1);
    localStorage.setItem('webRandomizerStatus', JSON.stringify(verbleibendeWebsites));
    if(naechsteSeite){
    window.location.href = naechsteSeite;
    }
    else{
        window.location.href = "final.html"M
    }
})

    document.getElementById("berechnungclick").addEventListener("click", function(){
        const zahl1 = Number(document.getElementById("zahl1").value);
        const zahl2 = Number(document.getElementById("zahl2").value);
        const bergHoehen = [2962, 4805, 6940, 7134, 7495];

        if(zahl1 >= 1 && zahl1 <= 5 && zahl2 >= 1 && zahl2 <= 5){
            const wahl1 = bergHoehen[zahl1 - 1];
            const wahl2 = bergHoehen[zahl2 - 1];
    if(wahl1 > wahl2){
            const ergebnisRechnung = wahl1 - wahl2;
            document.getElementById("ergebnis").innerText= `Nummer ${zahl1} ist ${ergebnisRechnung}m größer als ${zahl2}.`;

  }
  else if(wahl2 > wahl1){
    const ergebnisRechnung = wahl2 - wahl1;
    document.getElementById("ergebnis").innerText= `Nummer ${zahl2} ist ${ergebnisRechnung}m größer als ${zahl1}.`;
  }
  else{
    document.getElementById("ergebnis").innerText= 'Beide Berge sind gleich hoch.'

  }
}

    })})
