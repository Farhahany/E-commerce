import { createContext, useEffect, useState } from "react";

export let UserContext = createContext(null)

export default function UserContextProvider(props) {
    const [userLogin, setuserLogin] = useState(null)

    useEffect(()=>{
        if(localStorage.getItem('usertoken'!=null)){
            setuserLogin(localStorage.getItem('usertoken'))
        }
    },[])

    return <UserContext.Provider value={{ userLogin, setuserLogin }}>

        {props.children}

    </UserContext.Provider>
}
