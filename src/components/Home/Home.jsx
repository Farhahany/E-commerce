import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import Products from '.././Products/Products'
import Cart from '.././Cart/Cart'
import { CounterContext } from '../Context/CounterContext'

export default function Home() {
  useContext(CounterContext )
   const[counter, setcounter] = useState(0)
   useEffect(()=>{

   },[])
  return (
    <div>
      <Products>
        <Cart/>
      </Products>
    </div>
  )
}