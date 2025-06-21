import React from "react";
import { createRoot } from "react-dom/client";


function App() {
return ( 
    <>
        <h1>Ahoj</h1>
        <p>Lorem, ipsum dolor.</p>
    </>)
}



/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App />);