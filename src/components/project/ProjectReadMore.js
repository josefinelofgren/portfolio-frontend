// import libaries 
import React, { useLayoutEffect, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../home/sections/Header';
import { ProjectData } from '../data/ProjectData';
import { IoIosArrowBack } from 'react-icons/io';



function ProjectReadMore({hideMenuLinks}) {

  let history = useHistory();

  // scroll to top when routing
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  // button on click 
  const onClick = () => {
    history.push('/josefinelofgren.com/');
    hideMenuLinks();
  }

  useEffect(() => {
    if(window.location.pathname !== '/'){
      hideMenuLinks();
    }
  },[])

  let params = useParams();
  let title = params.projectName;

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <> 
    {ProjectData.map((item, index) => {
        if(item.title === title){
            return (
              <>
            <div id='project-readmore' className='project-readmore'>
              <Row>
                <Col md='4'className='project-readmore-header project-readmore-col' style={{backgroundColor: `${item.color}`}}>
                  <div className='project-readmore-header-content'>
                    <h2 className='project-readmore-title'>{item.title}</h2>
                    <h4 className='project-readmore-undertitle'>{item.description}</h4>
                  </div>
                </Col>
                <Col md='8' className='project-readmore-col'>
                  <figure className='project-readmore-figure'>
                    <img src={item.imgSrc} className='project-readmore-img' /> 
                  </figure>
                </Col>
              </Row>
              <Row>
                <Col md='7'>
                  <Container fluid className='intro'>
                    <div data-aos='fade-up' data-aos-once='true'>
                      <h5 className='project-readmore-subtitle' style={{color: `${item.color}` }}>
                        Intro:
                      </h5>
                      <p className='project-readmore-text intro'>{item.intro}</p>
                    </div>
                  </Container>
                </Col>
                <Col md='5'>
                  <Container fluid>
                    <div data-aos='fade-up' data-aos-once='true'>
                      <h5 className='project-readmore-subtitle' style={{color: `${item.color}` }}>
                        Roles:
                      </h5>
                      <p className='project-readmore-text'>{item.roles}</p>
                    </div>
                    <div data-aos='fade-up' data-aos-once='true'>
                      <h5 className='project-readmore-subtitle' style={{color: `${item.color}` }}>
                        Platform:
                      </h5>
                      <p className='project-readmore-text'>{item.platform}</p>
                    </div>
                    <div data-aos='fade-up' data-aos-once='true'>
                      <h5 className='project-readmore-subtitle' style={{color: `${item.color}` }}>
                        Tools:
                      </h5>
                      <p className='project-readmore-text'>{item.tools}</p>
                    </div>
                  </Container>
                </Col>
              </Row>
              <Row>
                <Col md='12' className='project-readmore-mockup'>
                  <Container fluid>
                    <figure data-aos='fade-up' data-aos-once='true' >
                      <img src={item.imgMock}/> 
                    </figure>
                  </Container>
                </Col>
              </Row>
              <Row>
                <Col md='12'>
                  <Container fluid>
                    <Button onClick={onClick} className='fw-bold btn-left btn-project-readmore'> <IoIosArrowBack className='btn-icon'/> Back to homepage</Button>
                  </Container>
                </Col>
              </Row>
            </div>
            </>
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
