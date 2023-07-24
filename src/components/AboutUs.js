import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 100%; 
  padding: 4rem 0rem;
  background-color: #eff4ea;
`


const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px;
  position: relative;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }

`

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};

  p1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 5rem);
    font-weight: bold;
    color: #648b50;
  }

  p2{
    margin-bottom: 2rem;
    font-weight: bold;
    color: #25523b;
  }
`
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;

  p1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 5rem);
    font-weight: bold;
    color: #648b50;
  }

  p2{
    margin-bottom: 2rem;
    font-weight: bold;
    color: #25523b;
  }

  @media screen and (max-width: 768px){
    order: ${({reverse}) => (reverse ? '2' : '1')};
  }
`

const Header = styled.div`
  grid-column: 1 / -1;
  padding: 1rem 2rem;

  p{
    margin-bottom: 1rem;
    font-size: clamp(0.5rem, 4vw, 1.5rem);
    font-weight: bold;
    color: #648b50;
  }

  h1{
    color: #25523b;
    font-size: clamp(1rem, 6vw, 2rem);
  }
`


const AboutUs = ({heading, head2, statOne, statTwo, statThree, statFour, statFive, statSix, statSeven, statEight}) => {
  return (
    <Section>
        <Container> 
          <Header>
            <p>{head2}</p>
            <h1>
              {heading}
            </h1>
          </Header>
            <ColumnLeft>
              <p1>{statOne}</p1>
              <p2>{statTwo}</p2>
              <p1>{statFive}</p1>
              <p2>{statSix}</p2>
            </ColumnLeft>
            <ColumnRight>              
              <p1>{statThree}</p1>
              <p2>{statFour}</p2>
              <p1>{statSeven}</p1>
              <p2>{statEight}</p2>
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default AboutUs