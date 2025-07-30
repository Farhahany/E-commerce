import React, { useEffect, useState } from 'react'
import style from './SubCategories.module.css'
import axios from 'axios'
export default function SubCategories() {
  const [subCategories, setsubCategories] = useState(null)
   
  function getSubcategories(categoryId) {
  // First, get ALL subcategories
  axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories`)
    .then(({data}) => {
      // Then filter them by the category ID
      const filteredSubcategories = data.data.filter(
        subcategory => subcategory.category === categoryId
      );
      console.log("Filtered subcategories:", filteredSubcategories);
      setsubCategories(filteredSubcategories);
    })
    .catch((error) => { 
      console.error("Error fetching subcategories:", error); 
    });
}
  
  
  useEffect(()=>{
  getSubcategories()


   },[])
  return 
    <>
      <div>alooooooo</div>
    </>
}