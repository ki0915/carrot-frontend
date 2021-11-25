import React from "react";
import { useState, MouseEvent } from "react";

type CounterType = {
    defaultCount: number;
};


const Counter = (props: CounterType) => {
    const { defaultCount } = props;
    const[count, setCount] = useState<number>(defaultCount);


    const increaseCount = (evenet: MouseEvent<HTMLButtonElement>) => {
        setCount(count + 1);
    }

    return (
        <section>
            <section>{count}</section>
            <section>
                <button onClick={increaseCount}>+</button>
            </section>
        </section>
    );
};

export default Counter;