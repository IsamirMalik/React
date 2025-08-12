import React from 'react';
import { increment , decrement } from './action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter</h1>
            <p>Count : {count} </p>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter;
