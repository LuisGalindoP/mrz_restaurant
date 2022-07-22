import React from 'react';

import pizzaLeft from '../images/pizzaMainLeft.png'
import pizzaRight from '../images/pizzaMainRight.png'
import mrzMain from '../images/mrZ_main.png'



const MainHero = () => {
    return (
        <div className='bg-[#3d3d3d]'>
            <div className='flex flex-col items-center pt-24'>
                <img src={mrzMain} alt="mrZ" style={{maxWidth:"30%"}}/>
                <p className='text-white fotn-bebas font-bold'>GREAT PIZZA, BEERS AND FRIENDS</p>
                <button className='bg-[#ff9e16] px-4 py-2 rounded-lg 
                mt-12 font-bebas font-bold text-2xl shadow-lg shadow-[#ff9e16]'>ORDER ONLINE</button>
            </div>
            <div className='flex justify-between mb-0'>
                <img src={pizzaLeft} alt="Pizza"  style={{maxWidth:"30%"}}/>
                <img src={pizzaRight} alt="Pizza"  style={{maxWidth:"30%"}}/>
            </div>
        </div>
    )
}

export default MainHero;