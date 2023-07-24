import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import { InfoData } from '../data/InfoData';
import { Link } from 'react-router-dom';


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
    font-size: clamp(2rem, 7vw, 3rem);
    color: #020558;

  }

  p1{
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #020558;
    font-weight: bold;
  }

  p2{
    margin-bottom: 2rem;
  }

  p3{

    margin-bottom: 1rem;
    font-size: clamp(0.5rem, 4vw, 1.5rem);
    font-weight: bold;
    color: #253da1;
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


const Lease = ({heading, head2, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
  return (
    <Section>
        <Container>
            <ColumnLeft>
                <p3>{head2}</p3>
                <h1>{heading}</h1>
                <p1>{paragraphOne}</p1>
                <p2>{paragraphTwo}</p2>
                <Button to="/leasing" primary='true'> {buttonLabel} </Button>
            </ColumnLeft>
            <ColumnRight reverse={reverse}>
                <img src={image} alt="home" />
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default Lease