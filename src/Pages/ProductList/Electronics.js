import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCards from '../ProductCards/ProductCards'
import { useDispatch, useSelector } from 'react-redux'
import { setElectronicsData } from '../../GlobalStates/ProductSlice'

function Electronics() {
  const {electronicsData}=useSelector((store)=>store.products)
  const dispatch=useDispatch()
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getElectronics()
  },[])

  const getElectronics=()=>{
    setLoading(true);
    axios('https://fakestoreapi.com/products/category/electronics').then((res)=>{
      dispatch(setElectronicsData(res.data))
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
          electronicsData.map((product, index) => (
            <ProductCards product={product} key={index} />
          ))
        )}
      </div>
    );
    }

export default Electronics