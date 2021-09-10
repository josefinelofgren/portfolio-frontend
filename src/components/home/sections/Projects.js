// import libaries 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import { ProjectData } from '../../data/ProjectData';


function Projects() {


  return (
    <div id='projects' className='projects'>
    <Container fluid>
      <Row>
        <Col md='6' className='projects-col left'>
          <Container fluid>
            <h2 className='title about-title' data-aos='fade-up' data-aos-once='true'>Selected projects</h2>
            <p data-aos='fade-up' data-aos-once='true'>I've collected some of my most recents and well executed projects for you to have a closer look at. Hope you find them interesting. </p>
          {ProjectData.map((item, index) => {
            if(item.side === 'left'){
            return (
              <Link className='project-headtitle' to={`project/${item.path}`}>
                <Project 
                  title={item.title}
                  undertitle={item.undertitle}
                  description={item.description}
                  cName={item.cName}
                  imgSrc1={item.imgSrc1}
                  device1={item.device1}
                /> 
              </Link>
            )
          } else return null; 
          })}
            </Container>
        </Col>
        <Col md='6' className='about-col right'>
        <Container fluid>
          {ProjectData.map((item, index) => {
            if(item.side === 'right'){
            return (
              <Link className='project-headtitle' to={`project/${item.path}`}>
                <Project 
                  title={item.title}
                  undertitle={item.undertitle}
                  description={item.description}
                  cName={item.cName}
                  imgSrc1={item.imgSrc1}
                  device1={item.device1}
                />
              </Link> 
            )
          }
          })}
            <a target="_blank" href='https://github.com/josefinelofgren'>
              <Button variant='dark' className='fw-bold' data-aos='fade-up' data-aos-once='true'> 
                Or have a look at my Github 
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



export function Project({ linkSrc, imgSrc1, device1, title, undertitle, description, cName}){

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
      <a href={linkSrc}>
          <div className="project">
              <div className='project-content' data-aos="fade-up" data-aos-once="true" data-aos-offset='300'>
                  <figure 
                      className={hovered ? `project-${device1} work hover` : `project-${device1} work`}
                      onMouseEnter={toggleHover} 
                      onMouseLeave={toggleHover}
                      >
                      {imgSrc1}
                  </figure>
              <div className={`project-info ${device1}`}>
                  <div 
                      className={hovered ? 'project-title-box hover' : 'project-title-box'}
                      onMouseEnter={toggleHover} 
                      onMouseLeave={toggleHover}
                      >
                      <h3 className="project-title">{title} <IoIosArrowForward className="project-title-arrow"/></h3>
                  </div>
                  <h5 className="project-undertitle">
                      {undertitle}
                  </h5>
              </div>
              </div>
          </div>
      </a>
  );
}

export default Projects;
