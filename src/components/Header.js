import React from 'react';
import styled, {css} from 'styled-components'
import { FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'
import pic from '../images/pic.png';
import {Link} from 'react-router-dom';

const Head = styled.header`
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #eff4ea;
`;

const SmIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;

`
const SmStyle = css`
  display: block;
  height: 20px; 
  width: 40px; 
  cursor: pointer;
  color: #2d2a26;

  &:hover {
    color: green;
  }
`

const SMLink = styled.a`
  text-decoration: none;
`;

const Insta = styled(FaInstagram)`
  ${SmStyle}
`
const Linkedin = styled(FaLinkedin)`
  ${SmStyle}
`
const Facebook = styled(FaFacebookSquare)`
  ${SmStyle}
`

const Logo = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  margin-left: -3rem;
  font-family: 'Archivo';
  font-size: 0.7rem;
`


const Header = () => {
  return (
    <Head>
      <Logo to="/"> 
        <img src={pic} alt="cc logo" style={{ width: '60px', height: '50px'}}></img>
        Champagne Centre Ltd. 
      </Logo>

      <SmIcon>
        <SMLink href="https://www.instagram.com/champagne_centre/" target="_blank" rel="noopener noreferrer">
          <Insta />
        </SMLink>
        <SMLink href="https://www.linkedin.com/company/champagne-centre-ltd/" target="_blank" rel="noopener noreferrer">
          <Linkedin/>
        </SMLink>
        <SMLink href="https://www.facebook.com/champagnecentre" target="_blank" rel="noopener noreferrer">
          <Facebook/>
        </SMLink>
      </SmIcon>
    </Head>
  )
}

export default Header

