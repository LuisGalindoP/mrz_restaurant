import React from 'react';
import styled from 'styled-components';

import TopNav from './topNav';

import mrzMain from '../images/mrZ_main.png';



const Menu = (props) => {
    return (
        <div>
            <TopNav/>
            <Backplate>
                <div className='flex flex-col items-center pt-24'>
                    <img src={mrzMain} alt="mrZ" style={{maxWidth:"30%"}}/>
                </div>
            </Backplate>
            MENU COMPONENT 
        </div>
    )
}

export default Menu;

const Backplate = styled.div`  
    background-position:center;
    background-color: #3d3d3d;
    overflow: hidden;
`

const CenterMenu = styled.div `
    text-align: center;

`