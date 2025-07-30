import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'

export default function Products() {
   const[products, setproducts] = useState(null)

  function getProducts(){
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
    .then(({data})=>{console.log(data.data);
      setproducts(data?.data);
    })
    .catch((error)=>{console.log(error);})
  }
   useEffect(()=>{
      getProducts()
   },[])
  return <>
  
  {products?.length > 0 ?
    <div className="flex gap-y-3 flex-wrap">
      {products?.map((prod)=>{return  <div key={prod.id} className="px-2 w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div className="product">
        <Link to={`productdetails/${prod.id}`}>
          <img src={prod.imageCover} className='w-100' alt={prod.Title} />
          <span className='text-pink-600'>{prod.category.name}</span>
          <h3 className='text-l font-medium'>{prod.title.split(' ').slice(0,2).join(' ')}</h3>
          <div className='flex justify-between'>
            <span>{prod.price} EGP</span>
            <span><i className='fas fa-star text-yellow-400'></i>{prod.ratingsAverage}</span>
          </div>
        </Link>  
        <button className='w-full bg-pink-400 py-2 rounded-md my-2 hover:bg-pink-700'>Add to Cart</button>
      </div>  
      </div>} )}
    </div> : <Spinner/>}
  </>
}