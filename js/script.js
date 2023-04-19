// Globala konstanter och variabler
const wordList = ["BLOMMA", "LASTBIL", "SOPTUNNA", "KÖKSBORD", "RADIOAPPARAT", "VINTER", "SOMMAR", "DATORMUS", "LEJON", "ELEFANTÖRA", "JULTOMTE", "SKOGSHYDDA", "BILNUMMER", "BLYERTSPENNA", "SUDDGUMMI", "KLÄDSKÅP", "VEDSPIS", "LJUSSTAKE", "SKRIVBORD", "ELDGAFFEL", "STEKPANNA", "KASTRULL", "KAFFEBRYGGARE", "TALLRIK", "SOFFBORD", "TRASMATTA", "FLYGPLAN", "FLYGPLATS", "TANGENTBORD"]; // Lista (array) med ord som ska väljas slumpmässigt
var selectedWord;   // Slumpmässigt valt ord ut wordList
var letterBoxes;    // Array med referenser till span-elementen för bokstäverna i ordet
var hangmanImg;     // Referens till img-elementet med bilder
var hangmanNr;      // Nummer för aktuell bild
var msgElem;        // Referens till div-elementet
var startGameBtn;   // Referens till startknappen
var letterButtons;  // Arraw med referenser
var startTime;      // Tid då spelet startas

// --------------------------------------------------
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
    startGameBtn = document.getElementById("startGameBtn");
    startGameBtn.onclick = startGame;
    letterButtons = document.getElementById("letterButtons").getElementsByTagName("button");
    for (let i = 0; i < letterButtons.length; i++)
        letterButtons[i].onclick = guessLetter;
    hangmanImg = document.getElementById("hangman");
    msgElem = document.getElementById("message");
    startGameBtn.disabled = false;
        for (let i = 0; i < letterButtons.length; i++)
            letterButtons[i].disabled = true; 
} // Slut init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
// --------------------------------------------------
// Initiering av ny spelrunda. Val av ord, visa bokstavsrutor, visa första bilden (tom bild), sätt bildnummer till 0 , inaktivera startknappt och aktivera bokstavsknappar.
function startGame() {
    radnomWord ();
    showLetterBoxes();
    hangmanImg.src = "img/h0.png";
    hangmanNr = 0;
	
}
