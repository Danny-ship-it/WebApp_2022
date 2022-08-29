const wordList = [
    "Huske",
    "Trene",
    "Danse",
    "Hoppe",
    "Sykle",
    "Gå",
    "Rulle",
    "Trille",
    "Kjøre",
    "Løpe",
    "Springe",
    "Hinke",
    "Sparke",
    "Sprinte",
    "Forflytte",
    "Trimme",
    "Løfte",
    "Snurre",
    "Svinge",
    "Svømme",
    "Flyte",
    "Fly",
    "Sveve",
    "Ake",
    "Dra",
  ];

// Hente element
const spans = document.querySelectorAll(  'span')
const inputs = document.querySelectorAll( "input")
const testButtonId = document.getElementById("test")

const random = () => {
    return Math.floor(Math.random() * wordList.length)
}

const addWords = () => {
  [...spans].forEach( (span) => (span.innerHTML = wordList[random()]))
}

addWords()

// Koblet til lytter p[ test knapp
// lage funksjon som henter tulfeldige ord]