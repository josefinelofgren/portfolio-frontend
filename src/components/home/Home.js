// import libaries 
import React, { useLayoutEffect } from 'react';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import Header from './sections/Header';
import PreWords from './sections/PreWords';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function Home() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
        <Header 
          text={<>Hi I'm <span className='color biggertext'>Josefine</span>. <br/> A front-end developer with a passion for UX.</>}/> 
        <PreWords /> 
        <About /> 
        <Projects /> 
        <Contact /> 
    </>
  );
}

export default Home;
