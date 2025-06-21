import React from "react";
import { createRoot } from "react-dom/client";

function Animal({name, type, age}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Typ: {type}</p>
            <p>Vek: {age} let</p>
        </div>
    )
}


function App() {
    return(
        <>
         <Animal name="Zofka" type="zirafa" age= {7}/>
         <Animal name="Cvalik" type="hroch" age= {13}/>
        </>
    )
}
 



/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
