import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SingleProduct.css'
import { setCartItems } from '../../GlobalStates/CartSlice';
import { ClipLoader } from 'react-spinners';
import { AxiosInstance } from '../../Config/AxiosInstance';


function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch=useDispatch()
  const {productId} = useParams()
  
  const handleAddToCart=()=>{
    dispatch(setCartItems(product))
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await AxiosInstance.get(`/product/productDetails/${productId}`);
        setProduct(response.data.data);
      } catch (err) {
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);
  

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
          <img style={{width:'25rem', height:'30rem'}} src={product.image} alt="" />
        </div>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-start'>
          <p className='card-title'><strong>{product.name}</strong></p>
          <p><strong>Price:</strong>${product.price}</p>
          <p><strong>Description:</strong>{product.description}</p>
          <p><strong>Category:</strong>{product.category}</p>
          <button className='cart' onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;