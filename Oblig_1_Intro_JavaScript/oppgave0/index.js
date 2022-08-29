// Oppgave 1
function removeTextByClick() {
  const removeTextId = document.getElementById("remove");
  removeTextId.innerHTML = "";
}
const buttonRemoveId = document.getElementById("remove-btn");
buttonRemoveId.addEventListener("click", removeTextByClick);

// Oppgave 2
function changeTextByClick() {
  const textId = document.getElementById("change");
  textId.innerHTML = "Text changed by Danny";
}
const buttonChangeId = document.getElementById("change-btn");
console.log(buttonChangeId);
buttonChangeId.addEventListener("click", changeTextByClick);

// Oppgave 3
function changeTextByTyping() {
  const inputId = document.getElementById("input").value;
  const outputId = document.getElementById("input-text");
  outputId.innerHTML = "";
  outputId.innerHTML += inputId;
  console.log(inputId.innerHTML);
}
const inputId = document.getElementById("input");
inputId.addEventListener("keydown", changeTextByTyping);

// Oppgave 4
const myList = ["item one", "item two", "item three"];
// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8
