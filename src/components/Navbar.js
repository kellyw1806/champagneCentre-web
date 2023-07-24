import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import pic from '../images/pic.png';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    top: 50px;

    transition: background-color 0.4s ease-in-out;

`;

const ActiveNav = styled(Nav)`
    background-color: black;
    top: 0px;
`


const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    justify-content: space-between;

    &:hover {
        color: #7eb7f4
    }
`
const Logo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    justify-content: space-between;
    margin-left: -3rem;
`
const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px; 
        width: 40px; 
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 50%);
        color: #fff;
    }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto; 
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    text-align: left;

`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({ toggle }) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if(window.scrollY >= 20){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const NavComponent = scrolled ? ActiveNav: Nav;

  return (
    <NavComponent>
        <Logo to="/"> 
            <img src={pic} alt="cc logo" style={{ width: '100.61px', height: '75px'}}></img>
        </Logo>
        <MenuBars onClick={toggle}/>
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
        </NavMenu>
        <NavBtn>
            <Button to ="/tour" primary='true'>
                3D Tour
            </Button>
        </NavBtn>
    </NavComponent>
  )
}

export default Navbar