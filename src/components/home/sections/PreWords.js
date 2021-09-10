// import libaries 
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

//import components
import { Container, Row, Col, Button} from 'react-bootstrap';

function PreWords() {
  return (
    <div id='prewords' className='prewords'>
        <Container fluid>
            <Row>
                <Col md='6'>
                  <figure className='prewords-image'>
                    <img className='border-radius' src={require('../../../images/whatido.jpeg').default}></img>
                  </figure>
                </Col>
                <Col md='6'>
                  <Container fluid >
                    <h2 className='title contact-title' data-aos='fade-up' data-aos-once='true'>What I do</h2>
                    <p data-aos='fade-up' data-aos-once='true'>I design and develop responsive and optimized websites and apps. I love creating user-friendly web solutions and engaging interactions between people and technology.
                    <br /><br />I'm currently studying front-end development at Medieinstitutet and will be graduating in september 2022. Do you want to know more about my education and previous jobs?</p>
                    <br /> 
                    <a href='https://www.linkedin.com/in/josefine-l%C3%B6fgren-a63126170/'>
                      <Button variant='dark' className='fw-bold' data-aos='fade-up' data-aos-once='true'> 
                        Have a look at my LinkedIn
                        <IoIosArrowForward className='btn-icon'/> 
                      </Button>
                    </a>
                  </Container>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default PreWords;
