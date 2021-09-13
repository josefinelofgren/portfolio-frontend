// import libaries 
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';

//import components
import { Container, Row, Col, Button} from 'react-bootstrap';

function PreWords({showMenuLinks, hideMenuLinks}) {
  let history = useHistory();

  // button on click 
  const onClick = () => {
    history.push('/josefine');
    hideMenuLinks();
  }

  return (
    <div id='prewords' className='prewords'>
        <Container fluid>
            <Row>
                <Col md='6'>
                <Container fluid >
                  <figure className='prewords-image'>
                    <img className='border-radius' src={require('../../../images/whatido.jpeg').default}></img>
                  </figure>
                  </Container>
                </Col>
                <Col md='6'>
                  <Container fluid >
                    <h5 className='title-number' data-aos='fade-up' data-aos-once='true'>00 / </h5>
                    <h2 className='title' data-aos='fade-up' data-aos-once='true'>What I do</h2>
                    <p data-aos='fade-up' data-aos-once='true'>I design and develop responsive and optimized websites and apps. I love creating user-friendly web solutions and engaging interactions between people and technology.
                    <br /><br />I'm currently studying front-end development at Medieinstitutet and will be graduating in september 2022. Do you want to know more about my education and previous jobs?</p>
                    <br /> 
                    <Link onClick={onClick} to='#'>
                      <Button variant='dark' className='fw-bold' data-aos='fade-up' data-aos-once='true'> 
                        Get to know me better
                        <IoIosArrowForward className='btn-icon'/> 
                      </Button>
                    </Link>
                  </Container>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default PreWords;
