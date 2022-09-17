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



import Food from "./components/Food";
import MyComponent, { MyComponentWithChildProp, MyComponentWithProps } from "./components/MyComponent";
import Title from "./components/Title";
import { Wrapper } from "./components/Wrapper";


const food = ['Pizza', 'Hamburger', 'Coke'];

function handleClick(e) {
  console.log("Clicked"); // skriver clicked TALLVERDI i consolen
}

const App = () => (

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

      <p className="oppgave">O8: Enkel button og onClick handler:</p>
      <button onClick={() => console.log("Clicked")}>Click me</button>

      <p className="oppgave">O9: Enkel input og onChange handler:</p>
      <input type="text" onChange={(e) => console.log("change", e.target.value)} />
  </div>
);

export default App;

// <MyComponentWithChildProp text = "It works!" />