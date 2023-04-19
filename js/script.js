// Globala konstanter och variabler
const wordList = ["BLOMMA", "LASTBIL", "SOPTUNNA", "KÖKSBORD", "RADIOAPPARAT", "VINTER", "SOMMAR", "DATORMUS", "LEJON", "ELEFANTÖRA", "JULTOMTE", "SKOGSHYDDA", "BILNUMMER", "BLYERTSPENNA", "SUDDGUMMI", "KLÄDSKÅP", "VEDSPIS", "LJUSSTAKE", "SKRIVBORD", "ELDGAFFEL", "STEKPANNA", "KASTRULL", "KAFFEBRYGGARE", "TALLRIK", "SOFFBORD", "TRASMATTA", "FLYGPLAN", "FLYGPLATS", "TANGENTBORD"]; // Lista (array) med ord som ska väljas slumpmässigt
var selectedWord;   // Slumpmässigt valt ord ur wordList
var letterBoxes;    // Array med referenser till span-elementen för bokstäverna i ordet
var hangmanImg;     // Referens till img-elementet med bilder för galgen och gubben
var hangmanNr;      // Nummer för aktuell bild (0-6), för bildfil som visas (så man sedan kan veta vilket som blir nästan bild)
var msgElem;        // Referens till html div-elementet för skrivna meddelanden till användaren
var startGameBtn;   // Referens till startknappen
var letterButtons;  // Array med referenser till de span-taggar som utgör rutor för bokstäverna i ordet
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
window.onload = init; // Se till att init aktiveras först när sidan är inladdad
// --------------------------------------------------
// Initiering av ny spelrunda. Val av ord, visa bokstavsrutor, visa första bilden (tom bild), sätt bildnummer till 0 , inaktivera startknappt och aktivera bokstavsknappar.
function startGame() {
    radnomWord ();
    showLetterBoxes();
    hangmanImg.src = "img/h0.png";
    hangmanNr = 0;
} // Slut startGame

function guessLetter() {

} // Slut guessLetter

function randomWord () {

} // Slut randomWord

function showLetterBoxes() {

} // Slut showLetterBoxes

function endGame() {

} // Slut endGame