import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

export default function ProductDetails() {
   let {productID} = useParams()
   const[productDetails, setproductDetails] = useState(null)
   
   function getProductDetails() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productID}`)
    .then(({data})=>{console.log(data);
    setproductDetails(data?.data);
    })
    .catch((error)=>{console.log(error);})
   }
   
   useEffect(()=>{
    getProductDetails()
   },[])
  return <>
    {productDetails? <div className='flex flex-wrap items-center'>
      <div className='w-full md:w-1/4 px-6'>
        <img className="w-fill" src={productDetails?.imageCover} alt={productDetails?.title} />
      </div>
      <div className='w-full md:w-3/4 px-2'>
        <h3 className='text-3xl font-black'>{productDetails?.title}</h3>
        <span className='text-pink-400 text-xl'>{productDetails?.category?.name}</span>
        <p className='text-slate-600 my-2'>{productDetails?.description}</p>
        <div className='flex justify-between'>
          <span>{productDetails?.price} EGP</span>
          <span>{productDetails?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
        </div>
      <button className='w-full bg-pink-400 py-2 rounded-md my-2 hover:bg-pink-700'>Add to Cart</button>
      </div>
    </div> : <Spinner/>}
  )
</>
}