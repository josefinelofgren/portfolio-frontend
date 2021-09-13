// import libaries 
import React, { useLayoutEffect } from 'react';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import Header from './sections/Header';
import PreWords from './sections/PreWords';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function Home({showMenuLinks, hideMenuLinks, setSidebar}) {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
        <Header 
          text={<> <span className='color biggertext'>Hi I'm Josefine</span>. <br/></>}
          undertext="I'm front-end developer with a passion for UX."/> 
        <PreWords 
        showMenuLinks={showMenuLinks}
        hideMenuLinks={hideMenuLinks}
        /> 
        {/* <About />  */}
        <Projects /> 
        <Contact /> 
    </>
  );
}

export default Home;
