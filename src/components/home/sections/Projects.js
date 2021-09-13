// import libaries 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import { ProjectData } from '../../data/ProjectData';
import { FaPercent } from 'react-icons/fa';


function Projects() {


  return (
    <div id='projects' className='projects'>
    <Container fluid>
      <Row>
        <Col md='12' className='projects-col left'>
          <Container fluid>
            <h5 className='title-number' data-aos='fade-up' data-aos-once='true'>01 / </h5>
            <h2 className='title about-title' data-aos='fade-up' data-aos-once='true'>Selected projects</h2>
            <p data-aos='fade-up' data-aos-once='true' className='project-intro-text'>I've collected some of my most recents and well executed projects for you to have a closer look at. Hope you find them interesting. </p>
          {ProjectData.map((item, index) => {
            return (

                <Project 
                  title={item.title}
                  undertitle={item.undertitle}
                  description={item.description}
                  imgSrc={item.imgSrc}
                  devicePercent={item.devicePercent}
                  textSide={item.textSide}
                  path={item.path}
                /> 
            )
          })}
            </Container>
        </Col>
      </Row>
    </Container>
</div>
  );
}



export function Project({textSide, path, devicePercent, linkSrc, imgSrc, title, undertitle, description}){

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
      <a href={linkSrc}>
          <div className="project">
              <div className='project-content' data-aos="fade-up" data-aos-once="true" data-aos-offset='300'>
                  <div className='project-figure'>
                  <figure 
                      className={hovered ? ` work hover` : ` work`}
                      style={{ left: `${devicePercent}`}}
                      >
                        <img src={imgSrc} className='project-img' /> 
                  </figure>
                  </div>
              <div className={`project-info ${textSide}`}>
                      <h3 className="project-title">{title}</h3>
                  <h5 className="project-undertitle">{undertitle}</h5>
                  <p className="project-undertitle">{description}</p>
                  <Link className='project-headtitle' to={`/josefinelofgren.com/project/${path}`}>
                    <Button className={hovered ? 'fw-bold btn-project hover' : 'fw-bold btn-project' } 
                    onMouseEnter={toggleHover} 
                    onMouseLeave={toggleHover}>Read more <IoIosArrowForward className='btn-icon'/></Button>
                  </Link>
              </div>
              </div>
          </div>
      </a>
  );
}

export default Projects;
