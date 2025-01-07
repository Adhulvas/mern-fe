import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductList from './Pages/ProductList/ProductList';
import Electronics from './Pages/ProductList/Electronics';
import Jewelery from './Pages/ProductList/Jewelery';
import MenClothing from './Pages/ProductList/MenClothing';
import WomenClothing from './Pages/ProductList/WomenClothing';
import Cart from './Pages/Cart/Cart';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import { Auth, AvoidLogin } from './Auth';
import Signup from './User/Signup';
import Login from './User/Login';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AvoidLogin/>}>
          <Route path='/' element={<Login/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route element={<Auth/>}>
          <Route path='home' element={<Home/>}>
            <Route index element={<ProductList/>} />
            <Route path='electronics' element={<Electronics/>}/>
            <Route path='jewelery' element={<Jewelery/>}/>
            <Route path='mensclothing' element={<MenClothing/>}/>
            <Route path='womensclothing' element={<WomenClothing/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='product/:id' element={<SingleProduct />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
