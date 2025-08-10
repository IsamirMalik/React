import { React , useReducer } from 'react';
import { Box , Button , Heading , Text} from '@chakra-ui/react';

 
 

let light = {
    backgroundColor : "white",
    color : "black"
}

let dark = {
    backgroundColor : "black",
    color : "white"
}   

const initialState = {
    theme : "light"
}

function reducerFn(state,action){

    switch(action.type){
        case "TOGGLE_THEME":
            return {theme : state.theme === "light" ? "dark" : "light"};
    }
   
}


const ToggleTheme = () => {
    
    const [state,dispatch] = useReducer(reducerFn,initialState);
    function Ui(){
        return (
            <div style={{ height : "400px", padding : "20px", margin : "20px", borderRadius: "20px" }}>
                <div>
                    <h1> Current Theme is {state.theme}</h1>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div>
                <h1>Toggle Theme</h1>
            </div>
            <div style={state.theme === "light" ? light : dark }>
                <Ui />
            </div>
            <div>
                <button onClick = {()=> dispatch({type : "TOGGLE_THEME"})}>Toggle Theme</button>
            </div>

        </div>

    );
}

export default ToggleTheme;
