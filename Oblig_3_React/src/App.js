/* // 
 SE README for oppgavetekst
*/



import Food from "./components/Food";
import MyComponent, { MyComponentWithChildProp, MyComponentWithProps } from "./components/MyComponent";
import Title from "./components/Title";
import { Wrapper } from "./components/Wrapper";
import { useState } from "react";
import Alert from "./components/Alert";
import Alert2 from "./components/Alert2";


const food = ['Pizza', 'Hamburger', 'Coke'];


export default function App() {

  const [state, setState] = useState("change me");
  const [stateButton, setStateButton] = useState("I am different");
  const [inputValue, setInputValue] = useState('nothing happened yet..');
  const [stateClicked, setStateClicked] = useState(false);

  return (

  <div>
    <p className="oppgave">Read the README.md to see the tasks</p>
    <p className= "oppgave"> WARNING: jeg har duplisert enkelte komponenter i oppgaver for å ha resultater mer oversiktlig (man måtte modifisere samme komponent i flere oppgaver på rad)</p>
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
      <button onClick={() => {console.log(stateButton); alert(stateButton)}}>Click me</button>

      <p className="oppgave">12: Refactor (move) button and input:</p>
      <Alert/>

      <p className="oppgave">13+14: Callback (lift state) (sending a functions as a prop), Multiple states (condition):</p>
      <Alert2 inputValue = {inputValue} 
          setInputValue ={setInputValue} 
          stateClicked = {stateClicked}  
          setStateClicked = {setStateClicked} 
      />
      {stateClicked ? <p>{inputValue}</p> : <p>""</p>}

  </div>
);
}

