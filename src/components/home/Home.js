// import libaries 
import React from 'react';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import Header from './sections/Header';
import PreWords from './sections/PreWords';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function Home() {
  return (
    <>
        <Header /> 
        <PreWords /> 
        <About /> 
        <Projects /> 
        <Contact /> 
    </>
  );
}

export default Home;
