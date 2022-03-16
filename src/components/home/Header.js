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
                - Hi 👋 I'm Josefine, a UX/UI designer based in Stockholm.
                </h1>
            </div>
        </Container>
    </header>
  );
}

export default Header;
