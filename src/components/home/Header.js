// import libaries 
import React from 'react';

//import components
import { Container } from 'react-bootstrap';


function Header() {

  return (
    <header className='header'>
        <Container fluid>
            <div className='header-content'>
              <p>Portfolio</p>
                <h1 className='header-title'>
                - Hi 👋 I'm Josefine, a Front End developer with a passion for UX.
                </h1>
            </div>
        </Container>
    </header>
  );
}

export default Header;
