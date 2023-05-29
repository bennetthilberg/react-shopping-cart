import { BrowserRouter, Route, Routes, Link, useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './appCSS.css'
import { useEffect,useState } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Card from './components/Card';
import SubtotalDisplay from './components/SubtotalDisplay';

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
          <Link to="/Shop" className='link shopLink'>Shop</Link>
          <SubtotalDisplay cart={cart}/>
        </div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/shop' element={<Shop addToCart={addToCart}/>}/>
          
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