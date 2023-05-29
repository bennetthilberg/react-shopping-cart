import {useEffect,useState} from 'react';
import Card from './Card';

export default function Shop({addToCart}){

    return(
        <>
            <h2>welcome 2 da shop</h2>
            <Card itemName={'shoe'} addToCart={addToCart} price={4}/>
            <Card itemName={'shirt'} addToCart={addToCart} price={3}/>
        </>
    );
};