import '../componentsCss/footer.css';
import { useState } from "react";
import CounterButton from "./CounterButtons";


const Counter = () => {
    
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    };
    const decrement = () => {
        if(count>0){
            setCount(count - 1)
        }
    };
    return (
    <>
    <div>
        <CounterButton increment={increment} decrement={decrement}/>
        Count: {count}
    </div>
    </>
    )
};

export default Counter;