# React-101: useState Hooks

- Notice there's not a single line of TypeScript, which shows how reliable inference is.

```
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
```