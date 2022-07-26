import React from 'react';
import styled from 'styled-components';
import mrzMain from '../images/mrZ_main.png'

const TopNav = () => {
    return (
        <NavigationBar>
            <LogoMenu>
                <img src={mrzMain} alt="Mr Z" />
            </LogoMenu>
            <MenuElement>
                <p >MENU</p>
                <p >LOCATIONS</p>
                <p >ORDER ONLINE</p>
                <p >GIFT CARDS</p>
                <p >JOBS</p>
            </MenuElement>
        </NavigationBar>
    )
};

export default TopNav;

const LogoMenu = styled.div`
    max-width: 10%;
`

const NavigationBar = styled.div`
    @media only screen and (min-width: 600px) {
        background-color: #3d3d3d;
        display: flex;
        justify-content: space-between;
        padding: 12px 20px;
    }
    @media only screen and (max-width: 600px) {
        transition: 0.3s;
        position: absolute;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 20px;
    }
    
`

const MenuElement = styled.div`
    @media only screen and (min-width: 600px) {
        display: flex;
        gap: 28px;
        align-items: center;
        margin-right: 20px;
        color: white;
        p {
            font-family: 'Bebas Neue';
            font-size: 26px;
            padding: 0px 6px;
            border: 2px solid rgba(255,255,255,0);
            border-radius: 5px;
        }
        p:hover {
            padding: 0px 6px;
            border: 2px solid rgba(255,255,255,0.2);
            transition: 0.3s;
        }
    }
    @media only screen and (max-width: 600px) {
        color: white;
        font-family: 'Bebas Neue';
        font-size: 16px;
        padding: 0px 6px;
        border: 2px solid rgba(255,255,255,0);
        border-radius: 5px;
        p:hover {
            padding: 0px 6px;
            transition: 0.3s;
        }
    }
    
`



