import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCards from '../ProductCards/ProductCards'
import { useDispatch, useSelector } from 'react-redux'
import { setWomenClothingData } from '../../GlobalStates/ProductSlice'

function WomenClothing() {
  const {womenClothingData}=useSelector((store)=>store.products)
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch()
  const name="women's clothing"


  useEffect(()=>{
    getWomenClothingData()
  },[])

  const getWomenClothingData=()=>{
    setLoading(true);
    axios(`https://fakestoreapi.com/products/category/${name}`).then((res)=>{
      dispatch(setWomenClothingData(res.data))
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
          womenClothingData.map((product, index) => (
            <ProductCards product={product} key={index} />
          ))
        )}
      </div>
    );
    }

export default WomenClothing