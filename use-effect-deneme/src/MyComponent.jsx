import React, { useEffect, useState } from "react";

// 1. UseEffect(() => {})               //runs after every re render
// 2. UseEffect(() =>{}, [])            // runs only on mount
// 3. UseEffect(() =>{}, [value])       // runs on mount+ when value changes


function MyComponent() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count , color])

    function addCount(){
        setCount(c => c + 1)
    }
    
    function substractCount(){
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Subtract</button>
            <br />
            <button onClick={changeColor}>Change Color</button>
        </>
    );

}

export default MyComponent