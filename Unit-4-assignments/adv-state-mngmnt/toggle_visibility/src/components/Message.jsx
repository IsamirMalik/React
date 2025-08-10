import { React , useReducer } from 'react';

const Message = () => {

    const initialState = {
         visible : true ,
    } 

    const reducerFn = (state,action) => {
        switch(action.type){
            case "TOGGLE":
                return {
                    visible : !state.visible ,
                }
            
        }
        
    }
    const [state,dispatch] = useReducer(reducerFn,initialState);    
    return (
        <div>
            <h1 style={{visibility : state.visible ? "visible" : "hidden"}} >This is a message whose visibility can be toggled</h1>
            <button onClick={()=>dispatch({type:"TOGGLE"})}>Toggle the visibility of the message above</button> 
            
        </div>
    );
}

export default Message;
