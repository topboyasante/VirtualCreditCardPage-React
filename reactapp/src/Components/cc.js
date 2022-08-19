import React from "react";
import cardCC from './Images/cc.png'
import cardCC2  from './Images/smalCC.jpg'
export default function CreditCard(){
    return(
        <>
            <img src={cardCC} className='creditCard'></img>
            <img src={cardCC2} className='creditCard2'></img>
        </>
    )
}