// import libaries 
import React, { useLayoutEffect, useEffect } from 'react';

//import components
import Header from './sections/Header';
import PreWords from './sections/PreWords';
import Projects from './sections/Projects2';
import Contact from './sections/Contact';

function Home({showMenuLinks, hideMenuLinks, setSidebar}) {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    if(window.location.pathname === '/'){
      showMenuLinks();
    }
  },[showMenuLinks])

  return (
    <>
        <Header 
          text="Hi I'm Josefine"
          undertext=", a front-end developer with a passion for UX."/> 
        {/* <PreWords 
        showMenuLinks={showMenuLinks}
        hideMenuLinks={hideMenuLinks}
        />  */}
        {/* <About />  */}
        <Projects /> 
        <PreWords />
        <Contact /> 
    </>
  );
}

export default Home;
