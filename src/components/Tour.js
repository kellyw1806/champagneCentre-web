import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 100%; 
  padding: 4rem 0rem;
  background-color: #effaff;
`

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;
  position: relative;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }

`

const Header = styled.div`
  padding: 1rem 2rem;
  
  p{
    margin-bottom: 1rem;
    font-size: clamp(0.5rem, 4vw, 1.5rem);
    font-weight: bold;
    color: #253da1;
  }

  h1{
    color: #020558;
    font-size: clamp(1rem, 6vw, 2rem);
  }
`


const Tour = ({heading, head2, image}) => {
  return (
    <Section>
        <Container> 
          <Header>
            <p>{head2}</p>
            <h1>{heading}</h1>
          </Header>
          <img src={image}  style={{width: '600px', height: '450px'}}/>
        </Container>
    </Section>
  )
}


export default Tour