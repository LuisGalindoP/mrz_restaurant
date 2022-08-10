import React from 'react';
import styled from 'styled-components';

import safePizza from '../images/safePizza.png'
import margarita from '../images/margarita.png'
import catering from '../images/catering.png'
import backgroundWhite from '../images/background_white.jpg'
import backgroundGray from '../images/background_gray.jpg'
import pizzaGroup from '../images/pizza_group.png'
import pizzaSection from '../images/pizza_section.png'

const MenuElements = () => {
    return (
        <div>
        {/* CATERING SECTION */}
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
        {/* DRINKS SECTION */}
            <SectionBlack>
                <div>
                    <img src={margarita} alt="Catering food" style={{maxWidth: "70%"}}/>
                </div>
                <div>
                    <TitleText>DRINKS!</TitleText>
                    <p> 
                        At Mr Z we have a great selection of drinks, from popular
                        coktails to an extensive selection of local and imported
                        beers. 
                    </p>
                    <ServiceButton>THE LIST</ServiceButton>
                </div>
            </SectionBlack>
        {/* CHARITY SECTION */}
            <SectionWhite>
                <div>
                    <TitleText>RAISE SOME DOUGH!</TitleText>
                    <p>    
                        Organize your community fundraiser through your local group and host it 
                        at a Mr Z!.
                    </p>
                    <ServiceButton>MORE INFO</ServiceButton>
                </div>
                <div>
                    <img src={pizzaGroup} alt="Raise some Dough!" style={{maxWidth: "100%"}}/>
                </div>
            </SectionWhite>
        {/* PIZZA SECTION */}
            <SectionBlack>
                <div>
                    <img src={pizzaSection} alt="Catering food" style={{maxWidth: "60%"}}/>
                </div>
                <div>
                    <TitleText>PIZZA!</TitleText>
                    <p> 
                        At Mr Z we have a long history of handcrafted quality. 
                        For over 20 years we have used only the freshest ingredients 
                        in our kitchens to bring you the best pizzas on the planet. 
                    </p>
                    <ServiceButton>SHOW ME THE PIZZA</ServiceButton>
                </div>
            </SectionBlack>
        </div>
    )        
};

export default MenuElements;


const SectionWhite = styled.div `
padding-top: 24px;
padding-bottom: 24px;
padding-left: 10%;
padding-right: 10%;
/* background-color: white; */
background-image: url(${backgroundWhite});
color: #2d2d28;
display: flex;
justify-content: center;
gap: 10%;
    p {
    font-size: 1.4vw;
    color: black;
    margin-bottom: 12px;
    margin-top:8px;
    /* font-weight: bold; */
    }
`
const SectionBlack = styled.div `
/* padding-top: 24px; */
/* padding-left: 10%; */
padding-right: 10%;
background-color: #2d2d28;
color: white;
background-image: url(${backgroundGray});
display: flex;
justify-content: center;
gap: 5%;
    p {
    font-size: 1.4vw;
    color: white;
    margin-bottom: 12px;
    margin-top:8px;
    /* font-weight: bold; */
    }
`

const TitleText = styled.div `
font-family: hwt-artz, sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4.5vw;
line-height: 0.8;
padding-top: 24px;
`
const ServiceButton = styled.button` 
    background-color: #ff9e16;
    margin-top: 12px;
    padding-TOP: 2px;
    border-radius: 10px;
    border: dotted;
    box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.25);
    font-family: hwt-artz, sans-serif;
    /* font-size: 1.8vw; */
    font-size:calc(8px + 1.5vw);
    font-weight: bold;
    width: 100%;
    margin-bottom: 24px;
    color: black;
    :hover {
        background-color: white;
    }
`