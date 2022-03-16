// import libaries 
import React, { useLayoutEffect, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';



function GoBackButton({ hideMenuLinks }) {

  let history = useHistory();

  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  // button on click 
  const onClick = () => {
    history.push('/');
    hideMenuLinks();
  }

  useEffect(() => {
    if(window.location.pathname !== '/'){
      hideMenuLinks();
    }
  },[hideMenuLinks])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
              <Row>
                <Col md='12'>
                    <Button onClick={onClick} className='fw-bold btn-left btn-light'> <IoIosArrowBack className='btn-icon'/> Back to homepage</Button>
                </Col>
              </Row>
  );
}


export default GoBackButton;
