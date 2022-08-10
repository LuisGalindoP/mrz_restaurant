import React from 'react';
import styled from 'styled-components';

import safePizza from '../images/safePizza.png'
import margarita from '../images/margarita.jpg'
import catering from '../images/catering.png'

const MenuElements = () => {
    return (
        <div>
            <SectionWhite>
                <div>
                    <TitleText>CATERING!</TitleText>
                    <p>
                        Party Planning? Tell us all about it! We’d love to 
                        know some details about your event. Fill out our 
                        form and one of our local catering agents will be 
                        in touch with you promptly.
                    </p>
                    <ServiceButton>CATER YOUR NEXT EVENT</ServiceButton>
                </div>
                <div>
                    <img src={catering} alt="Catering food"/>
                </div>
            </SectionWhite>
            <SectionBlack>
                <div>
                    <img src={catering} alt="Catering food"/>
                </div>
                <div>
                    <TitleText>CATERING!</TitleText>
                    <p>
                        Party Planning? Tell us all about it! We’d love to 
                        know some details about your event. Fill out our 
                        form and one of our local catering agents will be 
                        in touch with you promptly.
                    </p>
                    <ServiceButton>CATER YOUR NEXT EVENT</ServiceButton>
                </div>
            </SectionBlack>
        </div>
    )        
};

export default MenuElements;


const SectionWhite = styled.div `
padding-top: 24px;
padding-left: 10%;
padding-right: 10%;
background-color: white;
color: black;
display: flex;
justify-content: center;
gap: 10%;
    p {
    color: black;
    margin-bottom: 12px;
    }
`
const SectionBlack = styled.div `
padding-top: 24px;
padding-left: 10%;
padding-right: 10%;
background-color: #2d2d28;
color: white;
display: flex;
justify-content: center;
gap: 10%;
    p {
    color: white;
    margin-bottom: 12px;
    }
`

const TitleText = styled.div `
font-family: hwt-artz, sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4.5vw;
`
const ServiceButton = styled.button` 
    background-color: #ff9e16;
    margin-top: 12px;
    padding: 10px;
    border-radius: 10px;
    border: dotted;
    box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.25);
    font-family: hwt-artz, sans-serif;
    font-size: 1.8vw;
    font-weight: bold;

    :hover {
        background-color: white;
    }
`