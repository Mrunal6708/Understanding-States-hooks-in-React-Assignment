import {createContext,useState} from "react";

export const ThemeContext = createContext();
export const UserContext = createContext();

export function ThemeProvider({children}){
    const [theme, setTheme]= useState("light");
    
    const toggleTheme = () => 
        setTheme((prev)=>(prev==="light"?"dark":"light"));

        return(
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        );
} 

export function UserProvider({children}){
    const [user, setUser]= useState(null);

    const login =(name) => setUser({name, loggedIn: true});
    const logout =() => setUser({name:"Guest", loggedIn: false});

    return(
        <ThemeContext.Provider value={{user, login, logout}}>
            {children}
        </ThemeContext.Provider>
    );
}