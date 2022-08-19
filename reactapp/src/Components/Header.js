import React from 'react'
import CreditCard from './cc'

export default function Header(){
    return(
        <>
        <header>
            <nav>
            <i className="fa-solid fa-bars"></i>
                <ul className='nav-links'>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>Get Card</li>
                </ul>
                <ul className='register'>
                    <li>Log In</li>
                    <li className='btn'>Sign Up</li>
                </ul>
            </nav>
            <section className='hero'>
                <div className='text-area'>
                    <h1>Make a <span className='new'>new</span> card with one <span className='click'> click<i class="fa-solid fa-arrow-pointer"></i></span></h1>
                    <a className='btn'>Create Now</a>
                </div>
                <div className='img'>
                    <CreditCard/>
                </div>
            </section>
        </header>
        <section className='rate'>
            <div className='rate-flex'>
                <p className='num'>13</p>
                <p className='txt'>Years Of Banking</p>
            </div>
            <div className='rate-flex'>
                <p className='num'>1%</p>
                <p className='txt'>Cashback from each purchase</p>
            </div>
            <div className='rate-flex'>
                <p className='num'>15</p>
                <p className='txt'>Maximum support response time</p>
            </div>
            <div className='rate-flex'>
                <p className='num'>8k</p>
                <p className='txt'>Actively strong customer cards in the world</p>
            </div>
        </section>
        </>
    )
}