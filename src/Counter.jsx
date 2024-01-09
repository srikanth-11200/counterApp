import React,{useState} from "react";

function Counter(){

    const [counter,setCounter] = useState(0);
   
const increment = () => setCounter(counter+1);
const decrement = () => setCounter(counter-1);

    return (
        <div className="container">
            <div className="heading">{counter}</div>
        <section className="btn-container">
           <button className="btn" onClick={increment}>+</button>
           <button className="btn" onClick={decrement}>-</button>
        </section>
        </div>


   );
}


export default Counter;