import { BrowserRouter, Route, Routes, Link, useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './appCSS.css'
import { useEffect,useState } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Card from './components/Card';
import SubtotalDisplay from './components/SubtotalDisplay';
import Checkout from './components/Checkout';

function Main(){
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);
  function addToCart(item, qty, price){
    let newItem = {'item': item, 'qty': qty, 'price': price};
    setCart(oldCart => [...oldCart, newItem]);
  }
  return(
    <>
        <div id='topBar'>
          <Link to='/home' className='link homeLink'>Home</Link>
          <Link to="/shop" className='link shopLink'>Shop</Link>
          <SubtotalDisplay cart={cart}/>
          <Link to='/checkout' className='link checkoutLink'>Checkout</Link>
        </div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/shop' element={<Shop addToCart={addToCart}/>}/>
          <Route path='/checkout' element={<Checkout cart={cart}/>}/>
        </Routes>
    </>
  );
}
export default function App(){
  return(
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}