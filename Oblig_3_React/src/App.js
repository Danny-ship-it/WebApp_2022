import MyComponent, { MyComponentWithChildProp, MyComponentWithProps } from "./components/MyComponent";
import Title from "./components/Title";

const App = () => (
  <div>
    <p>Read the README.md to see the tasks</p>
    <MyComponent/>
    <MyComponentWithProps title = "It workz" />
    
    
  </div>
);

export default App;

// <MyComponentWithChildProp text = "It works!" />