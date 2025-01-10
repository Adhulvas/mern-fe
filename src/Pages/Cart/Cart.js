import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../GlobalStates/CartSlice';

function Cart() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className='cart-container'>
      <h2 className='mb-5'>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <div className='cart-item d-flex flex-column flex-md-row align-items-start mb-4' key={index}>
              <img className='item-image' src={item.image} alt='' style={{ width: '100%', maxWidth: '150px', height: 'auto', objectFit: 'cover' }} />
              <div className='ms-3'>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>Price: ${item.price * item.quantity}</p>
                <p>Quantity: {item.quantity}</p>
                <div className='d-flex align-items-center'>
                  <button className='quantity-button me-2' onClick={() => dispatch(increaseQuantity(item._id))}>+</button>
                  <button className='quantity-button me-2' onClick={() => dispatch(decreaseQuantity(item._id))}>-</button>
                  <button className='remove-button' onClick={() => dispatch(removeFromCart(item._id))}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div>
            <h3>Total Amount: ${parseFloat(totalAmount.toPrecision(6))}</h3>
          </div>
        </>
      ) : (
        <div className='d-flex flex-column align-items-center'>
          <img className='image-cart' src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" style={{ maxWidth: '300px', height: 'auto' }} />
          <p>Your cart is empty!</p>
        </div>
      )}
    </div>
  );
}

export default Cart;