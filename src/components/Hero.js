import React, {useState, useRef, useEffect} from 'react'
import styled, {css} from 'styled-components'
import {IoMdArrowRoundForward} from 'react-icons/io'
import image1 from '../images/image2(2).jpg'
import bar from '../images/bar.png'
import { Button } from './Button';
import { Link } from 'react-router-dom';


const HeroSection = styled.section`
    height: 100vh;
    max-height: 1300px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroBar = styled.img`
    width: 100%;
    overflow: hidden;
    position: absolute;
    height: 300px;
    top: 10px;
    
    
`
/* 
const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height:100%;
`
*/
const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0; 
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`

const HeroContent = styled.div`
    position: relative; 
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    color: #fff;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    top: 10%; 
    padding: 1rem 2rem;


    h1{
        font-size: clamp(2rem, 8vw, 3rem);
        font-weight: bold;
    }

    h2{
        font-size: clamp(1rem, 7vw, 1.5rem);
        margin-top: 1rem;
        color: #7eb7f4
    }

    p{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }


`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`
const Arrow = styled(IoMdArrowRoundForward)`
    margin-top: 3px;
    margin-left: 3px;
`;

const TourLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #7eb7f4;
    font-weight: bold;
    text-decoration: none;
    margin-left: 1.5rem;

    &:hover {
        transform: translateY(-2px);
    }
`
/*
const Hero = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent((current) => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlide, 4000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])
*/

const Hero = () => {
  return (
    <HeroSection> 
        <HeroWrapper>
            <HeroImage src={image1} />
            <HeroBar src={bar} alt="bar"/>
            <HeroContent>
                <h1>Welcome to Champagne Centre</h1>
                <h2> A one-stop destination built with you in mind.</h2>
                <p> Some text ...... some more text ....</p>
                <ButtonContainer>
                    <Button to="/aboutus" primary='true' margin-left='2rem'> About Us </Button>
                    <TourLink to="/tour"> 3D Tour <Arrow /> </TourLink>
                </ButtonContainer>
                
            </HeroContent>
        </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;