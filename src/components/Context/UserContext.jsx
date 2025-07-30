import { createContext, useState } from "react";

export let UserContext = createContext(null)

export default function UserContextProvider(props) {
    const [userLogin, setuserLogin] = useState(null)

    return <UserContext.Provider value={{ userLogin, setuserLogin }}>

        {props.children}

    </UserContext.Provider>
}
