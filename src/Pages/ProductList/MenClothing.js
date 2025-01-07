import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCards from '../ProductCards/ProductCards'
import { useDispatch, useSelector } from 'react-redux'
import { setMenClothingData } from '../../GlobalStates/ProductSlice'

function MenClothing() {
  const {menClothingData}=useSelector((store)=>store.products)
  const dispatch=useDispatch()
  const [loading, setLoading] = useState(true);

  const name="men's clothing"

  useEffect(()=>{
    setLoading(true);
    axios(`https://fakestoreapi.com/products/category/${name}`).then((res)=>{
      dispatch(setMenClothingData(res.data))
      setLoading(false);
    })
    .catch((err)=>{
      alert(err)
      setLoading(false);
    })
  },[])


    return (
      <div className='Product-list'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          menClothingData.map((product, index) => (
            <ProductCards product={product} key={index} />
          ))
        )}
      </div>
    );
    }

export default MenClothing
