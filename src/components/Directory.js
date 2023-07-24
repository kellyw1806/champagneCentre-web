import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import { InfoData } from '../data/InfoData';
import { Link } from 'react-router-dom';
import {IoMdArrowRoundForward} from 'react-icons/io'
import NYGH from '../images/imagee(1).png';


const Arrow = styled(IoMdArrowRoundForward)`
    margin-top: 3px;
    margin-left: 3px;
`;

const Section = styled.section`
  width: 100%;
  height: 100%; 
  padding: 4rem 0rem;
  background-color: #effaff
`
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;


  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }

`
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};

  h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);

  }

  p{
    margin-bottom: 2rem;
  }
`
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    order: ${({reverse}) => (reverse ? '2' : '1')};

  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px){
      width: 90%;
      height: 90%;
    }
  }
`

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #7eb7f4;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
  }
`


const Directory = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
  return (
    <Section>
        <Container>
            <ColumnLeft>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <InfoLink to="/directory"> View Directory <Arrow /> </InfoLink>
            </ColumnLeft>
            <ColumnRight reverse={reverse}>
                <img src={image} alt="home" />
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default Directory