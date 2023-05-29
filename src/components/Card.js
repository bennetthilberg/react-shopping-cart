import {useEffect,useState} from 'react';

export default function Card({itemName, price, addToCart}){
    const [qty, setQty] = useState(1);
    function handleChange(e){
        setQty(e.target.value);
    }
    function handleAdd(e){
        e.preventDefault();
        addToCart(itemName, qty, price);
    }
    return(
        <div className='card'>
            
            <h2>{itemName} for sale!!</h2>
            <h3>price: {price}</h3>
            <button onClick={handleAdd}>add 2 cart</button>
            <input type="number" className="qtyPicker" onChange={handleChange} placeholder='1'/>
        </div>
    );
};