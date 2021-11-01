// import libaries 
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';

function Josefine({hideMenuLinks}) {

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
    if(window.location.pathname === '/josefine'){
      hideMenuLinks();
    }
  },[hideMenuLinks])

  return (
    <>
    <div id='about' className='about'>
        <Container fluid>
        <h5 className='title-number' data-aos='fade-up' data-aos-once='true'>01 / </h5>
                <h2 className='title about-title' data-aos='fade-up' data-aos-once='true'>Josefine Löfgren</h2>
          <Row>
            <Col md='6' className='about-col left'>
            <p data-aos='fade-up' data-aos-once='true'>I <span className="fw-bold">design</span> and <span className="fw-bold">develop</span> responsive and optimized websites and apps. I love creating user-friendly web solutions and engaging interactions between people and technology. <br/><br/> I have for as long as I can remember, always been interested in technology. I love everyting that makes everyday life a little easier. <br /> <br /> 
                I would describe myself as a problem solver and a creative thinker who pays attention to details as well as I enjoy writing clean, elegant and efficent code.</p>
            <div className='progress-container' data-aos='fade-up' data-aos-once='true'>
                  <Progress skill='HTML' done='80'/> 
                  <Progress skill='CSS/Sass' done='70'/> 
                  <Progress skill='Javascript' done='50'/> 
                  <Progress skill='Vue' done='40'/> 
                  <Progress skill='React.js' done='60'/> 
                  <Progress skill='Svelte' done='40'/> 
                  <Progress skill='Node.js' done='40'/> 
                  <Progress skill='Having fun' done='100'/> 
              </div>
            </Col>
            <Col md='6' className='about-col right'>
            <figure className='about-image'>
                  <img className='border-radius' src={require('../../images/josefinelofgren.jpg').default} alt="Josefine Löfgren Portrait"></img>
            </figure>
            <form method='get' action='CV-Josefine.pdf'>
                  <Button variant='dark' type='submit' className='fw-bold'> 
                    Download CV
                  </Button>
                  </form>
                  <br /> 
                <Link to='/'>
                  <Button onClick={onClick} variant='dark' className='fw-bold'> 
                    <IoIosArrowBack className='btn-icon'/>
                     Go back to homepage
                  </Button>
                </Link>
            </Col>
          </Row>
        </Container>
    </div>
    </>
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

export default Josefine;
