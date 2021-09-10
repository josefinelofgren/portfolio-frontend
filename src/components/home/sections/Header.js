// import libaries 
import React from 'react';

//import components
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <header className='header'>
        <Container fluid>
            <div className='header-content'>
                <h1 className='display-2 header-title'>
                    Hi I'm <span className='color biggertext'>Josefine</span>. <br/> A front-end developer with a passion for UX.
                </h1>
            </div>
        </Container>
    </header>
  );
}

export default Header;
