// import libaries 
import React, { useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../home/sections/Header';
import { ProjectData } from '../data/ProjectData';
import { IoIosArrowBack } from 'react-icons/io';



function ProjectReadMore() {

  let params = useParams();
  let title = params.projectName;

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <> 
    <Header 
      text={title}
    />
    {ProjectData.map((item, index) => {
        if(item.title === title){
            return (
            <div className='project-readmore' style={{ color: `${item.textColor}`, backgroundColor: `${item.backgroundColor}` }}>
                <Container fluid>
                    <Row>
                        <Col md='5'>
                            <div className='project-readmore-description'>{item.description}</div>
                            <ProjectImage 
                                device={item.device3}
                                imgSrc={item.imgSrc3}/> 
                                 <ProjectImage 
                                device={item.device4}
                                imgSrc={item.imgSrc4}/> 
                            <Link to='/'>
                              <Button variant={item.btnVariant} className='fw-bold btn-projects'>
                                <IoIosArrowBack className='btn-icon'/>
                                Go back to homepage
                              </Button>
                            </Link>
                        </Col>
                        <Col md='7'>
                              <ProjectImage 
                                device={item.device2}
                                imgSrc={item.imgSrc2}/> 
                              <ProjectImage 
                                device={item.device1}
                                imgSrc={item.imgSrc1}/> 
                                <ProjectImage 
                                device={item.device5}
                                imgSrc={item.imgSrc5}/> 
                        </Col>
                    </Row>
                </Container>
            </div>
            )
        }
    })}
    </>
  );
}


function ProjectImage({ imgSrc, device }){
  return (
              <div className="project-readmore-image">
                  <div className='project-content' data-aos="fade-up" data-aos-once="true" data-aos-offset='300'>
                      <figure 
                          className={`project-${device} work img-color`}
                          >
                          {imgSrc}
                      </figure>
                  </div>
              </div>
  )
}

export default ProjectReadMore;
