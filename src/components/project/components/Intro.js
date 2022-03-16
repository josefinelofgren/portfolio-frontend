// import libaries 
import React from 'react';

//import components
import { Row, Col } from 'react-bootstrap';



function Intro({ darkerColor, intro, allTools, platforms, roles, timeline }) {


  return (
    <Row>
    <Col md='8'>
        <div data-aos='fade-up' data-aos-once='true' className='project-readmore-intro'>
          <h2 className='project-readmore-subtitle' style={{color: `${darkerColor}` }}>
            Overview
          </h2>
          <p className='project-readmore-text intro'>{intro}</p>
        </div>
    </Col>
    <Col md='1'>
    </Col>
    <Col md='3'>
        <div data-aos='fade-up' data-aos-once='true' className='project-readmore-details'>
          <h3 className='project-readmore-subtitle' style={{color: `${darkerColor}` }}>
            Roles
          </h3>
          {roles.map((value, index) => {
           return <p className='project-readmore-text' key={index}>{value}</p>
            })}
        </div>
        <div data-aos='fade-up' data-aos-once='true' className='project-readmore-details'>
        <h3 className='project-readmore-subtitle' style={{color: `${darkerColor}` }}>
            Timeline
          </h3>
          <p className='project-readmore-text'>{timeline}</p>
          </div>
        <div data-aos='fade-up' data-aos-once='true' className='project-readmore-details'>
          <h3 className='project-readmore-subtitle' style={{color: `${darkerColor}` }}>
            Platform
          </h3>
          {platforms.map((value, index) => {
           return <p className='project-readmore-text' key={index}>{value}</p>
            })}
        </div>
        <div data-aos='fade-up' data-aos-once='true' className='project-readmore-details'>
          <h3 className='project-readmore-subtitle' style={{color: `${darkerColor}` }}>
            Tools
          </h3>
          {allTools.map((value, index) => {
           return <p className='project-readmore-text' key={index}>{value}</p>
            })}
        </div>
    </Col>
    </Row>
  );
}


export default Intro;
