// import libaries 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ProjectData } from '../../data/ProjectData';


function Projects() {


  return (
    <div id='projects' className='projects'>
    <Container fluid>
    <Row>
        {ProjectData.map((item, index) => {
            return (
                <Col md='6' className={`project-${index}`}>
                <Project 
                  title={item.title}
                  tools={item.tools}
                  description={item.description}
                  imgSrc={item.imgSrc}
                  button={item.button}
                  path={item.path}
                  color={item.color}
                /> 
                </Col>
            )
          })}
            </Row>
    </Container>
</div>
  );
}



export function Project({imgSrc, title, tools, description, button, path, color}){

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
          <div className="project" data-aos='fade-up' data-aos-once='true'>
              <div className='project-content'>
                  <div className='project-figure'>
                  <figure 
                      className={hovered ? ` work hover` : ` work`}
                      >
                        <div className='project-figure-img' style={{backgroundColor: `${color}` }}>
                          <img src={imgSrc} className='project-img' alt="Project" /> 
                        </div>
                        {tools.map((value, index) => {
                       return <button className='project-tool' key={index}>{value}</button>
                        })}
                        <h4 className='project-title'>{title}</h4>
                        <p>{description}</p>
                        <Link to={`${path}`}>
                        <Button className='project-btn'>
                          {button}
                        </Button>
                        </Link>
                  </figure>
                  </div>
              </div>
          </div>
  );
}

export default Projects;
