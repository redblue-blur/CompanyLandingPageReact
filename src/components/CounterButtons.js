const CounterButton = ({increment,decrement}) => {
    return (
    <>
    <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    </>
    )
};

export default CounterButton;