import "./styles.css";

// TODO: Sett startverdien for de ulike tellerene
let wordCounter;
let positionCounter;
let wrongCounter;

// TODO: Lag en liste med ulike ord
const words = ["Apple", "Horse", "Man", "Monkey", "Manki", "Car", "Bystander", "Mureder", "Fun", "Fanta", "Coca", "Caramba", "Camel", "Mr", "Mrs", "Lisa", "Garden", "Camper", "Reatrded", "Sniper", "Rifle", "Greece", "Assassin", "Creed"];
// TODO: Hent ut HTML #ider og knappen

// TODO: Hent ut HTML #id og knappen
const word = document.getElementById("word");;
const wrongs = document.getElementById("wrongs");
const letter = document.getElementById("letter");
const button = document.getElementsByTagName('button')[0];


const setWord = () => {
  // TODO: Skriv ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
  word.innerHTML = "";
};

const changeWord = () => {
  // TODO: Nullstill posisjonstelleren
  // TODO: Oppdater telleren vi bruker for å velge ut ord
  setWord();
};

// TODO: Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
  return "";
};

// TODO: Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
  return "";
};

const handleKeyUp = ({ key }) => {
  // TODO: Hent ut ordet vi skal skrive
  const word = "";
  if (checkPosition(word, positionCounter, key)) {
    // TODO: Øk posisjonstelleren
    if (wordIsCorrect(word, positionCounter)) {
      // TODO: Trigg funksjonen som bytter ord
    }
  } else {
    // TODO: Oppdater telleren for "feil"
  }
  updateUI(key);
};

const updateUI = (key) => {
  if (words[wordCounter]) {
    wrongs.innerHTML = wrongCounter;
    letter.innerHTML = key;
    word.innerHTML = `<span class="green">${words[wordCounter].slice(
      0,
      positionCounter
    )}</span>${words[wordCounter].slice(positionCounter)}`;
  }
};

window.addEventListener("keyup", handleKeyUp);
button.addEventListener("click", () => {
  button.disabled = true;
  setWord();
});