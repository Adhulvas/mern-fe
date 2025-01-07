import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './SingleProduct.css'
import { addToCart } from '../../GlobalStates/CartSlice';
import { ClipLoader } from 'react-spinners';


function SingleProduct() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch=useDispatch()
  
  const handleAddToCart=()=>{
    dispatch(addToCart(product))
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={50} color="#36D7B7" loading={loading} />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='single-product-container'>
      <div className='row'>
        <div className='col-12 col-md-6 d-flex justify-content-center'>
          <img style={{width:'15rem', height:'auto'}} src={product?.image} alt="" />
        </div>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-start'>
          <p className='card-title'>{product?.title}</p>
          <p><strong>Price:</strong>${product?.price}</p>
          <p><strong>Description:</strong>{product?.description}</p>
          <button className='cart' onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;