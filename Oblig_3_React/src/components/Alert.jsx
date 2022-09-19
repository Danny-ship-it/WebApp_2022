import { useState } from "react";



export default function Alert() {

    const [stateButton, setStateButton] = useState("I am different too");

    return(
    <>
        <input type="text" 
        onChange={(e) => setStateButton(e.currentTarget.value)} 
        value = {stateButton}
        />
        <button onClick={() => {console.log(stateButton); alert(stateButton)}}>Click me</button>
    </>
    )


}