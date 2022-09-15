
import Title from "./Title";


export default function MyComponent() {
    return (
      <>
        <h1> My first Component</h1>
      </>
    );
  }

  export function MyComponentWithProps(props) {
    const { title } = props;
    return (
      <>
        <h1>{title}</h1>
      </>
    );
  }

  export function MyComponentWithChildProp(props) {
    const { text } = props;
    return (
      <>
        <Title title = {text} />
      </>
    );
  }

