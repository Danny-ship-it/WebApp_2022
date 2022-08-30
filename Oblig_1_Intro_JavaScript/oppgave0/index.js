/*
1.TEST Lag lytteren og funksjonen som gjør at du kan fjerne et element med id #remove. Bruk knappen med id #remove-btn
2.Bytt ut teksten i p med id #change med noe du selv velger. Bruk knappen med id #change-btn
3.Lag lytteren til input-boksen med id #input som gjør at du kan skrive ut teksten i inputboksen til en paragrafen med id #input-text
4.Lag lytteren og funksjonen som gjør at du går igjennom listen myList og skriver ut alle elementene i ul med id #ul. Bruk li elementer. Knappen med id #write-list kan brukes.
5.Lag lytterene og funksjonene som gjør at du kan lage et et HTML element (gjerne fra en nedtrekkslist med id #select) og tekst fra inputboksen med id #text. Bruk knappen med id #create. Legg teksten til elementet med id #placeholder
6.Lag lytteren til knappen med id #remove-li og funksjonen som gjør at du ved hvert klikk sletter et og et li element fra ul med id #list
7.Lytt til tastaturklikk på inputboks med id #name. Lag funksjonen som sjekker om ordet er maksimum 4 bokstaver langt. Hvis du krysser 4 bokstaver gjør knappen med id #order disablet eller gi knappen en rød border
8.Hent ut alle barna av ul med klasse .children. Gi oddetall-barna grønn border mens partall skal ha pink. Bruk knappen med id #color for å gjøre endringen.
*/



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
/* Lag lytteren og funksjonen som gjør at du går igjennom listen myList 
og skriver ut alle elementene i ul med id #ul. Bruk li elementer. Knappen med id #write-list kan brukes.*/
const myList = ["item one", "item two", "item three", "item four"];

function deleteChild(parent) {
  // var e = document.querySelector("ul");
  const e = parent;
  
  //e.firstElementChild can be used.
  let child = e.lastElementChild; 
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
}
deleteChild(document.getElementById("ul"));

function printList(array) {
  // Get the list element:
  let list = document.getElementById("ul");
  //empty list
  deleteChild(list);
  for (let i = 0; i < array.length; i++) {
      // Create the list item:
      var item = document.createElement('li');
      console.log(array[i]);
      // Set its contents:
      item.appendChild(document.createTextNode(array[i]));
      // Add it to the list:
      list.appendChild(item);
  }
}
const buttonPrintList = document.getElementById("write-list");
//buttonPrintList.addEventListener("click", deleteChild(document.getElementById("ul")));
buttonPrintList.addEventListener("click", function(){printList(myList)});

// Oppgave 5
/*Lag lytterene og funksjonene som gjør at du kan lage et et HTML element 
(gjerne fra en nedtrekkslist med id #select) og tekst fra inputboksen med id #text. Bruk knappen med id #create. Legg teksten til elementet med id #placeholder
*/
function createElementWithTextAndAddToParent(element, parent, text){
  var item = document.createElement(element);
  // Set its contents:
  item.appendChild(document.createTextNode(text));
  // Add it to the parent:
  parent.appendChild(item);
}
function createCustomElement() {
  let selectElement = document.getElementById("select");
  let optionNames = [...selectElement.options].map(o => o.text)
  let parent = document.getElementById("placeholder");
  let input = document.getElementById("text").value;
  console.log(input);
  let option = document.getElementById("select").value;
  console.log(option);

  switch (option) {
    case "h2":
      createElementWithTextAndAddToParent("h2", parent, input);
      console.log("create h2");
      break;
    case "h3":
      createElementWithTextAndAddToParent("h3", parent, input);
      console.log("create h3");
      break;
    case "span":
      createElementWithTextAndAddToParent("span", parent, input);
      console.log("create span");
      break;
    case "p":
      createElementWithTextAndAddToParent("p", parent, input);
      console.log("create p");
      break;
    default:
      console.log("ERROR");
  }
}
const buttonCreateCustomElement = document.getElementById("create");
buttonCreateCustomElement.addEventListener("click", function(){createCustomElement()});

// Oppgave 6
/* Lag lytteren til knappen med id #remove-li og funksjonen som gjør at du ved 
hvert klikk sletter et og et li element fra ul med id #list*/

function removeSingleChild (parent){
  // var e = document.querySelector("ul");
  const e = parent;
  //e.firstElementChild can be used.
  let child = e.lastElementChild; 
  if(child) {
      e.removeChild(child);
  }
}
const buttonRemoveSingleChild = document.getElementById("remove-li");
buttonRemoveSingleChild.addEventListener("click", function(){removeSingleChild(document.getElementById("list"))});

// Oppgave 7, disable button dersom text i innput blir for lang

function disableButtonOnMaxInput(text) {
  let button = document.getElementById("order");
  if(text.length <= 3){
    button.disabled = false;
  }else
   button.disabled = true;
}


const inputDisabled = document.getElementById("name");
inputDisabled.addEventListener("keydown", function(){disableButtonOnMaxInput(document.getElementById("name").value.toString())});

// Oppgave 8

// Your CSS as text
let styles = `
.children li:nth-child(even) { 
    border-style: solid;
    border-color: pink;
    width: fit-content;
}
.children li:nth-child(odd) { 
  border-style: solid;
  border-color: green;
  width: fit-content;
}

`

// .children.li: nth-child(3n) {
//   color: green;
// }
function setColorLi() {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

const colorBtn = document.getElementById("color");
colorBtn.addEventListener("click", function(){setColorLi()});