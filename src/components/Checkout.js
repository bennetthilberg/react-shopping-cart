import {useEffect,useState} from 'react';
export default function Checkout({cart}){
    const [total, setTotal] = useState(0);
    useEffect(() => {
        for(const item of cart){
            setTotal(prevTotal => prevTotal + (item.price * item.qty));
        }
    }, [])
    return(
        <div id='checkout'>
            <p>Subtotal: ${total}</p>
            <p>After tax, total is: ${(total*1.07).toFixed(2)}</p>
            <button>Pay</button>
        </div>
    );
}