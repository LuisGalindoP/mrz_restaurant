import React from 'react';
import styled from 'styled-components';

import pizzaLeft from '../images/pizzaMainLeft.png';
import pizzaRight from '../images/pizzaMainRight.png';
import mrzMain from '../images/mrZ_main.png';
import food from '../images/food.png';



const MainHero = () => {
    return (
        <Backplate>
            <div className='flex flex-col items-center pt-24'>
                <img src={mrzMain} alt="mrZ" style={{maxWidth:"30%"}}/>
                <Text >
                    <p>GREAT FOOD, BEERS AND FRIENDS</p>
                </Text>
                <a href="https://mrzsrestaurant.e-tab.com/mrzsrestaurant#!/order-type"><OrderButton>ORDER ONLINE</OrderButton></a>
                
            </div>
            <Pizzas>
                <img src={pizzaLeft} alt="Pizza"  style={{maxWidth:"30%"}}/>
                <img src={pizzaRight} alt="Pizza"  style={{maxWidth:"30%"}}/>
            </Pizzas>
        </Backplate>
    )
}

export default MainHero;

const Backplate = styled.div`
    background-image:url(${food});  
    background-position:center;
    background-color: #3d3d3d;
    overflow: hidden;
    /* @keyframes backgroundRotation {
        from {transfrom: rotate(0deg)}
        to {}
    } */
`

const Text = styled.div`
    color: white;
    font-family: 'Bebas Neue';

    p {
        font-size:4vw; //text size adaptative format
    }
`

const OrderButton = styled.button`
    background-color: #ff9e16;
    margin-top: 12px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 4px 4px 14px 1px #ff9e16;
    font-family: 'Bebas Neue';
    /* font-size: 2.4vw; */
    font-size:calc(12px + 1.5vw);
    font-weight: bold;
    border: solid;
    :hover {
        box-shadow: 4px 4px 14px 8px #ff9e16;
    }

`

const Pizzas = styled.div`
    display: flex;
    justify-content: space-between;
`