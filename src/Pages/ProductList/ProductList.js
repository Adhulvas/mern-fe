import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../GlobalStates/CartSlice';
import { AxiosInstance } from '../../Config/AxiosInstance';
import { useNavigate } from 'react-router-dom';


function ProductList() {
  const [products,setProducts]=useState([])
  const dispatch=useDispatch()
  const navigate = useNavigate()

  const handleAddToCart=()=>{
    dispatch(addToCart(products))
  }

  useEffect(()=>{
    AxiosInstance.get('/products')
    .then(({data})=>{
       setProducts(data)
    })
    .catch((err)=>{
      if(err.response.data.message==='unauthorized user') {
        navigate('/')
      }
    })
  },[])

  return (
    <div className='Product-list'>
      {products.map((product,index)=>
              <Card key={index} className='container col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
              <Card.Img variant="top" className='cardImage' src={product.thumbnailUrl}/>
              <Card.Body>
                <Card.Title className='card-title'>{product.title}</Card.Title>
                <Card.Text> </Card.Text>
                <button className='cart' onClick={handleAddToCart}>Add to cart</button>
              </Card.Body>
            </Card>
      )}
    </div>
  )
}

export default ProductList