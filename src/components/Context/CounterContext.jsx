import { createContext, useState } from "react";

export let CounterContext = createContext(0)

export default function CounterContextProvider(props){
  const [counter, setcounter] = useState(0)
   
  return <CounterContext.Provider value={{counter, setcounter}}>

{props.children}

  </CounterContext.Provider>
}
