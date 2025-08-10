import { React , useReducer } from 'react';

const Counter = () => {

    const initialState = {count:0};

    const reducerFn = (state,action) => {
        switch(action.type){
            case 'INCREMENT':
                return {count:state.count+1};
            case 'DECREMENT':
                return {count:state.count-1};

            case 'RESET':
                return {count:0}
            default:
                return state;
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState);
    return (
        <div>

            <div>
                <h1>{state.count}</h1>
            </div>
            <button onClick={()=>dispatch({type:"INCREMENT"})} disabled={state.count === 10}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})} disabled={state.count === 0}>Decrement</button>
            <button onClick={()=>dispatch({type:"RESET"})} disabled={state.count === 0}>Reset</button>
            
        </div>
    );
}

export default Counter;
