/* // 6. Lists
Create an array const food = ['Pizza', 'Hamburger', 'Coke'];
Render this list inside App.js. Use <ul><li></li></ul> and food.map()
Remember to add a key to <li>.
All of this should be inside the return ().
*/

/* // 8. Event
Add a <button> to App.js
Listen to click-event on this button.
console.log("Clicked") when clicking the button.
*/

/*// 9. Input
Add an input field to App.js
Listen to change-event on this field
console.log("change") when writing in this input.
*/

/*
/// 10. Make the input field controlled (state)
Use useState to store the input value. And add the value={state} to the input field to make it (controlled).

/// 11. Combine the button and input
When clicking the button above alert (or console.log) the content of the inputfield.

/// 12. Refactor (move) button and input
Create an Alert component in the components folder
Use this in App.js
Move the <input>, <button> and state from above to this component

/// 13. Callback (lift state) (sending a functions as a prop)
Add const [inputValue, setInputValue] = useState('') in App.js.
Add <p>{inputValue}</p> to App.js

Send setInputValue function as a prop to <Alert> from App.js.

By using this prop you should be able to update the value of inputValue in App.js,
 when we are writing in the <input> inside <Alert>. You can now remove the internal in <Alert>.


*/



import Food from "./components/Food";
import MyComponent, { MyComponentWithChildProp, MyComponentWithProps } from "./components/MyComponent";
import Title from "./components/Title";
import { Wrapper } from "./components/Wrapper";
import { useState } from "react";
import Alert from "./components/Alert";


const food = ['Pizza', 'Hamburger', 'Coke'];

// function handleClick(e) {
//   console.log("Clicked"); // skriver clicked TALLVERDI i consolen
// }

//const App = () => (

export default function App() {

  const [state, setState] = useState("change me");
  const [stateButton, setStateButton] = useState("I am different");
  const [inputValue, setInputValue] = useState('nothing happened yet..');



  return (

  <div>
    <p className="oppgave">Read the README.md to see the tasks</p>
    <p className="oppgave">O1: simple component</p>
    <MyComponent/>
    <p className="oppgave">O2: Basic prop</p>
    <MyComponentWithProps title = "It works (with prop)" />
    <p className="oppgave">O3: Passing props to a child component</p>
    <MyComponentWithChildProp text = "It works (with child Title component)" />
    
    <p className="oppgave">04+O5: Wrapper, Styling inn i flex wrapper</p>
    <Wrapper> <Title title = "test wrapper"/>  </Wrapper>

    <p className="oppgave">O6: Render food list directly in App:</p>
    <ul> 
    {food.map( (item) => (
        <li key={item}>
          <p>{item}</p>
        </li>
      ) )}
      </ul>
      

      <p className="oppgave">O7: Render list with a food component:</p> 
      <Food food = {food} /> 

      <p className="oppgave">O8: Enkel button og onClick handler console.log:</p>
      <button onClick={() => console.log("Clicked")}>Click me</button>

      <p className="oppgave">O9: Enkel input og onChange handler console.log</p>
      <input type="text" onChange={(e) => console.log("change", e.target.value)} />

      <p className="oppgave">10; Make the input field controlled (state: {state})</p>
      <input type="text" 
        onChange={(e) => setState(e.currentTarget.value)} 
        value = {state}
      />
      
      <p className="oppgave">11: Combine the button and input:</p>
      <input type="text" 
        onChange={(e) => setStateButton(e.currentTarget.value)} 
        value = {stateButton}
      />
      <button onClick={() => {console.log({stateButton}); alert({stateButton})}}>Click me</button>

      <p className="oppgave">12: Refactor (move) button and input:</p>
      <Alert/>

      <p className="oppgave">13: Callback (lift state) (sending a functions as a prop):</p>
      <p>{inputValue}</p> 
  </div>
);
}

//export default App;

// <MyComponentWithChildProp text = "It works!" />