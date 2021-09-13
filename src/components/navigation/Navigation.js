// import libaries 
import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import { useParams, useHistory  } from 'react-router-dom';

//import components
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { SidebarData } from '../data/SidebarData';


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
    history.push('/josefinelofgren.com/josefine');
    hideMenuLinks();
    setSidebar(false);
  }

  const onClickHome = () => {
    history.push('/josefinelofgren.com/');
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
                    
                </Link>
            </Navbar.Brand>
            {windowDimensions.width < 768 &&
            <Link
                to='#'
                className={sidebar ? `sidebar-btn is-active` : `sidebar-btn`}
                onClick={showSidebar}>
                <div className={sidebar ? `sidebar-burger is-active`: `sidebar-burger`} />
            </Link>
            }
            {windowDimensions.width >= 768 && 
            <>
            <ul className={menuLinks ? 'nav-links show' : 'nav-links'}>
                <LinkScroll to='prewords'><li className='nav-link'>What I do</li></LinkScroll> 
                <Link onClick={onClickJosefine} to='#'><li className='nav-link'>About</li></Link>
                <LinkScroll to='projects'><li className='nav-link'>Portfolio</li></LinkScroll>
                <LinkScroll to='contact'><li className='nav-link'>Contact</li></LinkScroll>
            </ul>
             <ul className={backLink ? 'nav-links show' : 'nav-links'}>
               <Link onClick={onClickHome} to='/'>
                 <li>Back to homepage</li>
              </Link>
            </ul>
         </>
            }
        </Container>
    </Navbar>
    <nav className={sidebar ? 'nav-menu-wrap open' : 'nav-menu-wrap'}>
    <div className={sidebar ? 'nav-menu open' : 'nav-menu'}>
       <ul className={menuLinks ? 'nav-links show sidebar-links' : 'nav-links sidebar-links'}>
            <LinkScroll to='prewords'><li className='nav-text'>What I do</li></LinkScroll> 
            <Link onClick={onClickJosefine} to='#'><li className='nav-text'>About</li></Link>
            <LinkScroll to='projects'><li className='nav-text'>Portfolio</li></LinkScroll>
            <LinkScroll to='contact'><li className='nav-text'>Contact</li></LinkScroll>
        </ul>
        <ul className={backLink ? 'nav-links show sidebar-links' : 'nav-links sidebar-links'}>
            <Link onClick={onClickHome} to='/'>
                 <li className='nav-text'>Back to homepage</li>
            </Link>
        </ul>
    </div>
</nav>
</>
  );
}


export default Navigation;
