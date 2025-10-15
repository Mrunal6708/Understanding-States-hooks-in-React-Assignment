import {useContext} from "react";
import { ThemeContext,UserContext } from './contexts';

export default function Dashboard(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {user, login,  logout}= useContext(UserContext);

    return(
        <div style={{
            background:theme === "light" ? "#FFF" :"#333",
            color: theme === "light"?"#000":"#fff", 
            padding: "20pxs",
        }}>
            <h1>Welocome,{user.name}!</h1>
            <p>Theme:{theme}</p>
            <button onClick={toggleTheme}>toggle Theme</button>
            {user.loggedIn ? (
                <button onClick={logout}>Logout</button>
            ) : (
            <button onClick={()=> login("Mrunal")}>Login</button>
            )}
        </div>
    );
}

