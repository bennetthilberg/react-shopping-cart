import { BrowserRouter, Route, Routes, Link, useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './appCSS.css'
import { useEffect } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Card from './components/Card';

function Main(){
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);
  return(
    <>
        <div id='topBar'>
          <Link to='/home' className='link homeLink'>Home</Link>
          <Link to="/Shop" className='link shopLink'>Shop</Link>
        </div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
            
          
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