import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosInstance } from '../../Config/AxiosInstance';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../../GlobalStates/CartSlice';

const ProductList = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch=useDispatch()
  const navigate = useNavigate()

  const handleAddToCart=(product)=>{
    dispatch(setCartItems(product))
  }


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await AxiosInstance.get(`/product/get-products/${categoryName}`);
        setProducts(response.data.products);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return;
        }
        setError(err.message);
        console.error('Error fetching products:', err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);


  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  return (
      <div className='mt-5'>
        <div className="container-fluid">
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> 
                <div className="card" style={{ width: '100%', maxHeight: '550px' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="card-img-top"
                    onClick={() => navigate(`/product/productDetails/${product._id}`)} 
                    style={{ height: '350px', objectFit: 'cover' }} 
                  /> 
                  <div className="card-body p-1">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text"><strong>Price: ${product.price}</strong></p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
  );
};

export default ProductList;
