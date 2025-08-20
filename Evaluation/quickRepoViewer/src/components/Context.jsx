import { createContext } from "react";
import { useState } from "react";

const themeContext = createContext("light");
const [theme, setTheme] = useState("light");

const light ={
    backgroundColor : "white",
    color : "black"
}

const dark = {
    backgroundColor : "black",
    color : "white"
}



 export function ThemeProvider({ children }) {
    
    return <themeContext.Provider value={{theme , setTheme}} >
            {children}
           </themeContext.Provider>;
}

export default themeContext;