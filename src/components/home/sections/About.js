// import libaries 
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';

function About() {

  return (
    <div id='about' className='about'>
        <Container fluid>
          <Row>
            <Col md='6' className='about-col left'>
              <Container fluid>
                <h2 className='title about-title' data-aos='fade-up' data-aos-once='true'>Josefine Löfgren</h2>
                <p data-aos='fade-up' data-aos-once='true'>I have for as long as I can remember, always been interested in technology. I love everyting that makes everyday life a little easier. <br /> <br /> 
                I would describe myself as a problem solver and a creative thinker who pays attention to details as well as I enjoy writing clean, elegant and efficent code. </p>
              <div className='progress-container' data-aos='fade-up' data-aos-once='true'>
                  <Progress skill='HTML' done='80'/> 
                  <Progress skill='CSS' done='70'/> 
                  <Progress skill='Javascript' done='50'/> 
                  <Progress skill='React' done='60'/> 
                  <Progress skill='Node.js' done='30'/> 
                  <Progress skill='Having fun' done='100'/> 
              </div>
              <div fluid data-aos='fade-up' data-aos-once='true'>
                <Button variant='dark' className='fw-bold'> 
                  Get to know me better 
                  <IoIosArrowForward className='btn-icon'/>
                </Button>
              </div>
              </Container>
            </Col>
            <Col md='6' className='about-col right'>
              <figure className='about-image'>
                <img className='border-radius' src={require('../../../images/josefinelofgren.jpg').default} alt='Josefine Löfgren Portrait'></img>
              </figure>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

const Progress = ({ skill, done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1, 
      width: `${done}%`
    }
    
    setStyle(newStyle)
  }, 1000);
  
  return (
    <div className='progress-content'>
      <p className='progress-skill'>{skill}</p>
      <div className='progress'>
        <div className='progress-done' style={style}>
          <span>{done}%</span>
        </div>
      </div>
    </div>
  )
}

export default About;
