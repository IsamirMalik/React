import { React , useReducer } from 'react';

const reducerFn = (state,action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                ...state, [action.field]: action.value
            }
        case "RESET":
            return initialState;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const initialState = {
    email : "",
    password : ""
}

const FormInput = () => {
    const [state,dispatch] = useReducer(reducerFn,initialState);


    function handleChange(e){
        const {name,value} = e.target;
        dispatch({type:"UPDATE", field : name , value:value })
    }

    function handleSubmit(e){
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(state);
        localStorage.setItem("users", JSON.stringify(users));
        console.log(state);
        dispatch({ type: "RESET" });
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label >Email</label>
                <input type="email" name='email' placeholder='Enter your email . . .' value={state.email} onChange={handleChange}/>
                <label >Password</label>
                <input type="password" name='password' placeholder='Enter your password . . .' value={state.password} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default FormInput;
