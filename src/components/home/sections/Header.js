// import libaries 
import React from 'react';

//import components
import { Container } from 'react-bootstrap';

function Header({ text, undertext }) {
  return (
    <header className='header'>
        <Container fluid>
            <div className='header-content'>
                <h1 className='header-title'>
                    {text}{undertext}
                </h1>
            </div>
        </Container>
    </header>
  );
}

export default Header;
