import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import { Auth, AvoidLogin } from './Auth';
import Signup from './User/Signup';
import Login from './User/Login';
import NotFound from './Pages/NotFound/NotFound';
import UserLayout from './Pages/UserLayout/UserLayout';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<AvoidLogin/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Route>
          <Route element={<Auth/>}>
            <Route path='/' element={<UserLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/product/get-products/:categoryName' element={<ProductList/>}/>
              <Route path='/product/productDetails/:productId' element={<SingleProduct />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;