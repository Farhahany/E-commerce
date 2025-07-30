import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Categories() {
  const [Categories, setCategories] = useState(null)

  function getCategories() {
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      .then(({ data }) => {
        setCategories(data?.data);
      })
      .catch((error) => { console.log(error); })
  }

  useEffect(() => {
    getCategories()
  }, [])
  return <>
    <div className="flex flex-wrap items-center my-3">
      {Categories?.map((Cat) => {
        return <div key={Cat._id} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/3 p-2">
          <div className="Category">
            <Link to={`/SubCategories/${Cat._id}`}>
              <div className='flex flex-wrap items-center hover:border-pink-300 border-2 border-gray-300 p-4 rounded-lg'>
                <div className='w-full md:l-3/4'>
                  <div className='aspect-square overflow-hidden'>
                    <img src={Cat.image} className='w-full h-full object-cover' alt={Cat.slug} />
                  </div>
                </div>
                <div className='w-full md:l-1/4 p-4'>
                  <h3 className='text-4xl font-medium text-center text-pink-400'>{Cat.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      })}
    </div>
  </>
}