

export default function Alert2({inputValue, setInputValue, stateClicked, setStateClicked}) {
   
    const handleOnChange = (e)=> {
        setInputValue(e.currentTarget.value)
    }

    const handleOnClick = ()=> {
        console.log(inputValue); 
        alert(inputValue);
        stateClicked ? setStateClicked(false) : setStateClicked(true)
    }

    return(
        <>
            <input type="text" 
            onChange={handleOnChange} 
            value = {inputValue}
            />
            <button onClick={handleOnClick}>Click me</button>
        </>
        )

}