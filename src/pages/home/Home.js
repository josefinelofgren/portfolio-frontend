// import libaries 
import React, { useLayoutEffect, useEffect } from 'react';

//import components
import Header from '../../components/home/Header';
import PreWords from '../../components/home/PreWords';
import Projects from '../../components/home/Projects';
import Contact from '../../components/home/Contact';

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
        <Header />
        <Projects /> 
        <PreWords />
        <Contact /> 
    </>
  );
}

export default Home;
