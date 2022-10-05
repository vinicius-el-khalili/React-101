import { useState } from "react";

export const LoggedIn=()=>{
    const [isLogged,setIsLogged]=useState(false);
    const handleLogIn=()=>{
        setIsLogged(true)
    };
    const handleLogOut=()=>{
        setIsLogged(false)
    };
    return(
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User is logged {isLogged ? 'in':'out'}.</div>
        </div>
    )
}