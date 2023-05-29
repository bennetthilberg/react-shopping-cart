import {useEffect,useState} from 'react';

export default function SubtotalDisplay({cart}){
    const [subt, setSubt] = useState(0);
    useEffect(() => {
        let tempTotal = 0;
        for(const item of cart){
            tempTotal += (item.price * item.qty);
        }
        setSubt(tempTotal);
    }, [cart])
    return(
        <h2>Subtotal: ${subt}</h2>
    );
}