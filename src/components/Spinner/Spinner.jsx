import React, { useEffect, useState } from 'react'
import style from './Spinner.module.css'
import { Hearts } from 'react-loader-spinner'
export default function Spinner() {
   const[counter, setcounter] = useState(0)
   useEffect(()=>{

   },[])
  return <>
      <div className='h-screen flex justify-center items-center'>
  <Hearts
  height="200"
  width="200"
  color="#fc46ad"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />



      </div>
    </>
}