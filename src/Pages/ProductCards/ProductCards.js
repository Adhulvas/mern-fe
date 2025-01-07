import Card from 'react-bootstrap/Card';
import './ProductCards.css'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../GlobalStates/CartSlice';

function ProductCards({product}) {
  
  const dispatch=useDispatch()
  const handleAddToCart=()=>{
    dispatch(addToCart(product))
  }
  return (
      <Card className='container col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
        <Link to={`/home/product/${product.id}`}>
        <Card.Img variant="top" className='cardImage' src={product.image}/>
        </Link>
        <Card.Body>
          <Card.Title className='card-title'>{product.title}</Card.Title>
          <Card.Text> </Card.Text>
          <button className='cart' onClick={handleAddToCart}>Add to cart</button>
        </Card.Body>
      </Card>
  );
}

export default ProductCards;