import { useState } from "react";

type AuthUser = {
    name:string,
    email:string
}

export const User = () => {
    const [user,setUser] = useState<null|AuthUser>(null);
    const handleLogIn=()=>{
        setUser({
            name:'SpongeBob',
            email:'sponge.bob@sea.com'
        })
    };
    const handleLogOut=()=>{
        setUser(null);
    };
    return(
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User email: {user?.name}</div>
            <div>User name: {user?.email}</div>
        </div>
    );
};