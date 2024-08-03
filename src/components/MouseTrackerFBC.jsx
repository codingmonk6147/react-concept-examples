import { useEffect, useState } from "react";

function MouseTrackerFBC(){
    
    const [X,setX] = useState(0);
    const [Y, setY] = useState(0);
    

    // const logMouse = e => {
    //     console.log('Mouse event');
    //     setX(e.clientX);
    //     setY(e.clientY);
    // }

      // Function to handle mouse movement event with a delay
      const logMouse = e => {
        console.log('Mouse event');
        setTimeout(() => {
            setX(e.clientX);
            setY(e.clientY);
        }, 1000); // 1000 milliseconds (1 second) delay
    };

    // If the dependency array is empty:
    // The effect runs only once when the component mounts and the cleanup function runs when the component unmounts.
    // Example: useEffect(() => { ... }, []);

    // If the dependency array is missing:
    // The effect runs after every render, which can cause performance issues. It is generally not recommended.
    // Example: useEffect(() => { ... });  // No dependency array

    // If the dependency array is filled with variables:
    // The effect runs only when the specified dependencies change. The cleanup function runs before the effect runs again.
    // Example: useEffect(() => { ... }, [X, Y]); // Runs when X or Y changes
    useEffect(()=>{
        console.log("Use effect Called");
        // Adding the event listener for mouse movement
        window.addEventListener('mousemove',logMouse);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', logMouse);
        };

        // Significance of Cleanup:
    // 1. Prevents Memory Leaks:
    //    Without cleanup, event listeners, timers, or subscriptions can persist even after the component unmounts, leading to memory leaks.
    //    Memory leaks can cause your application to use more memory over time, potentially leading to performance degradation or crashes.
    
    // 2. Avoids Unexpected Behavior:
    //    If the component mounts and unmounts multiple times, without cleanup, you may end up with multiple event listeners or subscriptions that trigger unexpectedly.
    //    This can result in multiple executions of the same event handler, causing bugs and unexpected behavior in your application.
    
    // 3. Improves Performance:
    //    Accumulating unnecessary event listeners and side effects can lead to performance issues, as more resources are consumed to handle these events.
    //    Over time, the application may slow down, affecting the user experience.
    })



    return (

        <>
        <p>Mouse : {X}</p>
        <p>Mouse : {Y}</p>
        </>
    );
}


export default MouseTrackerFBC;