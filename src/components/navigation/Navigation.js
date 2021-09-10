// import libaries 
import React, { useState } from 'react';
import { Link } from 'react-scroll';

//import components
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { SidebarData } from '../data/SidebarData';

function Navigation() {

  // show or hide sidebar   
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
      setSidebar(!sidebar);
  };

  return (
      <>
    <Navbar expand='lg'>
        <Container fluid>
            <Navbar.Brand>
                <Link to='/'>
                    
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
        <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className='nav-text'>
                        <Link 
                            key={index} 
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={item.path}
                            >
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
</nav>
</>
  );
}

export default Navigation;
