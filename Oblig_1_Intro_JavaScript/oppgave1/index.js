//import "./styles.css";


function printListToBody(array) {

  let item = document.createElement('br');
  document.body.appendChild(item);

  item = document.createElement('p');
  item.appendChild(document.createTextNode(" "));
  document.body.appendChild(item);
  for (word of array) {
      // Create the list item:
      let item = document.createElement('span');
      console.log(word);
      // Set its contents:
      item.appendChild(document.createTextNode(word));
      // Add it to the list:
      document.body.appendChild(item);
  }
}

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

printListToBody(["\n\t   TEXT: "]);
printListToBody(text);
const longestWord = () => {
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  const words = text.match(/('.*?'|[^\s]+)/g);

  console.log(words);

  // TODO: Velg første ord så du har noe å sammenlikne med
  let start = words[0];
  console.log("start", start)
  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  for (const word of words) {
    if (word.length > start.length){
      start = word;
      console.log("updated longest word:", start)
    }
  };

  printListToBody(["\n\t   SPLIT TO WORDS: "]);
  printListToBody([words]);
  printListToBody(["\n\t   LONGEST WORD: "]);
  printListToBody([start]);

  return start;
}

console.log("\nLONGEST WORD: ", longestWord());




