// import libaries 
import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import { useHistory  } from 'react-router-dom';

//import components
import { Container, Navbar } from 'react-bootstrap';


// get window dimensions
  function getWindowDimensions(){
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
  }


function Navigation({showMenuLinks, hideMenuLinks, menuLinks, backLink, sidebar, setSidebar, showSidebar}) {

  let LinkScroll = Scroll.Link;
  let history = useHistory();



  const onClickJosefine = () => {
    history.push('/josefine');
    hideMenuLinks();
    setSidebar(false);
  }

  const onClickHome = () => {
    history.push('/');
    showMenuLinks();
    setSidebar(false);
  }


  // window dimensions
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);



  return (
      <>
    <Navbar>
        <Container fluid>
            <Navbar.Brand>
                <Link to='/'>
                    Josefine Löfgren
                </Link>
            </Navbar.Brand>
            <Link
                to='#'
                className={sidebar ? `sidebar-btn is-active` : `sidebar-btn`}
                onClick={showSidebar}>
                <div className={sidebar ? `sidebar-burger is-active`: `sidebar-burger`} />
            </Link>
        </Container>
    </Navbar>
    <nav className={sidebar ? 'nav-menu-wrap open' : 'nav-menu-wrap'}>
    <div className={sidebar ? 'nav-menu open' : 'nav-menu'}>
      {sidebar && (
        <>
        <ul className={menuLinks ? 'nav-links show sidebar-links' : 'nav-links sidebar-links'}>
            <Link onClick={onClickJosefine} to='#'><li className='nav-text'>About me</li></Link>
            <LinkScroll onClick={() => setSidebar(false)} to='projects'><li className='nav-text'>Portfolio</li></LinkScroll>
            <LinkScroll onClick={() => setSidebar(false)} to='contact'><li className='nav-text'>Contact</li></LinkScroll>
        </ul>
        <ul className={backLink ? 'nav-links show sidebar-links' : 'nav-links sidebar-links'}>
            <Link onClick={onClickHome} to='#'>
                 <li className='nav-text'>Back to homepage</li>
            </Link>
        </ul>
        </>
      )}
    </div>
</nav>
</>
  );
}


export default Navigation;
