import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const number = 56 ;
    const increaseCount = () => {
        setCount (count+1);
    }
    return (
        <div>
             <button onClick={increaseCount}>Click me</button>
            <br />
            <p>count: {count}</p>
            <p>count: {count*2}</p>
            <h4> My Number : {number+count} </h4>
        </div>
    );
};

export default Home;