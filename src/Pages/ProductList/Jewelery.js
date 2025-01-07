import React, { useEffect, useState } from 'react'
import ProductCards from '../ProductCards/ProductCards'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setJeweleryData } from '../../GlobalStates/ProductSlice'

function Jewelery() {
  const {jeweleryData}=useSelector((store)=>store.products)
  const dispatch=useDispatch()
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    getJeweleryData()
  },[])

  const getJeweleryData=()=>{
    setLoading(true);
    axios('https://fakestoreapi.com/products/category/jewelery').then((res)=>{
      dispatch(setJeweleryData(res.data))
      setLoading(false);
    })
    .catch((err)=>{
      alert(err)
      setLoading(false);
    })
  }

  return (
    <div className='Product-list'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        jeweleryData.map((product, index) => (
          <ProductCards product={product} key={index} />
        ))
      )}
    </div>
  );
}

export default Jewelery