// import libaries 
import React from 'react';

//import components
import { Container, Row, Col } from 'react-bootstrap';

function Header({ text, undertext }) {
  return (
    <header className='header'>
        <Container fluid>
            <div className='header-content'>
                <h1 className='display-2 header-title'>
                    {text}
                </h1>
                <p>{undertext}</p>
            </div>
        </Container>
    </header>
  );
}

export default Header;
