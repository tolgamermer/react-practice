import React, { useEffect, useState } from "react";

function MySecondComponent () {

    //Uses:
    // #1 Event Listeners
    // #2 DOM Manipulation
    // #3 Subscribtions (real-time updates)
    // #4 Fetching Data from API
    // #5 Clean up when a component unmounts

    const [width,  setWidth] = useState(window.innerWidth)
    const [heigth, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log("Event Listener Removed");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${heigth}`
    }, [heigth, width])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {heigth}px</p>
    </>
    );
}

export default MySecondComponent