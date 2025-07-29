import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Products from '.././Products/Products'
import Cart from '.././Cart/Cart'

export default function Home() {
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