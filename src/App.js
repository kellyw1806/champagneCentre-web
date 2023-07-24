import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Directory from "./components/Directory";
import AboutUs from "./components/AboutUs";
import Tour from "./components/Tour";
import Lease from "./components/Lease";
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import NavDropdown from "./components/NavDropdown";
import { InfoData1, InfoData2, InfoData3, InfoData4 } from './data/InfoData';


function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <Header />
    <GlobalStyle/>
    <Navbar toggle={toggle}/>
    <NavDropdown isOpen={isOpen} toggle={toggle}/>
    <Hero/>
    <Directory {...InfoData1}/>
    <AboutUs {...InfoData2}/>
    <Tour {...InfoData3}/>
    <Lease {...InfoData4}/>
    </>
  )
}

export default App;
