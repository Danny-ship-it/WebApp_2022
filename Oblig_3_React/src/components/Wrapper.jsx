/* // 4. Children prop
Create a Wrapper component in the components folder
Return <section></section> from this component
Use this in App.js
Make it possible to render children between 
the <Wrapper></Wrapper> component. Use (props.children) in the <Wrapper> component.
Ex. <Wrapper><Title title="Test" /></Wrapper> should render the content of <Title>
*/

/*
// 5. Styling
Add (className='flex') to the <section> in <Wrapper> 
to flex the items on <Wrapper>. Add necessary styling in the styles.scss
*/


export function Wrapper(props) {
    //const { children } = props;
    return <section className='flex-wrapper'>{props.children}</section>;
  }