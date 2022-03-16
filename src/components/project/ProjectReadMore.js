// import libaries 
import React, { useLayoutEffect, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ProjectData } from '../../data/ProjectData';
import { IoIosArrowBack } from 'react-icons/io';



function ProjectReadMore({hideMenuLinks}) {

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
    if(window.location.pathname !== '/'){
      hideMenuLinks();
    }
  },[hideMenuLinks])

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
              <Row className='project-readmore-header' style={{backgroundColor: `${item.color}`}}>
                <Col md='6'className='project-readmore-col'>
                  <div className='project-readmore-header-content'>
                    <div className='readmore-container'>
                    <h1 className='project-readmore-title'><span style={{backgroundColor: `${item.darkerColor}`, boxShadow: ` -10px 0px 0 7px ${item.darkerColor}, 10px 0px 0 7px ${item.darkerColor}, 0 0 0 7px ${item.darkerColor}`}}>{item.title}</span></h1>
                    </div>
                    <h4 className='project-readmore-undertitle'>{item.description}</h4>
                  </div>
                </Col>
                <Col md='6' className='project-readmore-col'>
                  <figure className='project-readmore-figure'>
                    <img src={item.imgSrc} className='project-readmore-img' alt="Project"/> 
                  </figure>
                </Col>
              </Row>
              <Container fluid>
              <Row>
                <Col md='8'>
                    <div data-aos='fade-up' data-aos-once='true' className='project-readmore-intro'>
                      <h2 className='project-readmore-subtitle' style={{color: `${item.darkerColor}` }}>
                        Overview
                      </h2>
                      <p className='project-readmore-text intro'>{item.intro}</p>
                    </div>
                </Col>
                <Col md='1'>
                </Col>
                <Col md='3'>
                    <div data-aos='fade-up' data-aos-once='true' className='project-readmore-details'>
                      <h3 className='project-readmore-subtitle' style={{color: `${item.darkerColor}` }}>
                        Roles
                      </h3>
                      {item.roles.map((value, index) => {
                       return <p className='project-readmore-text' key={index}>{value}</p>
                        })}
                    </div>
                    <div data-aos='fade-up' data-aos-once='true' className='project-readmore-details'>
                      <h3 className='project-readmore-subtitle' style={{color: `${item.darkerColor}` }}>
                        Platform
                      </h3>
                      {item.platforms.map((value, index) => {
                       return <p className='project-readmore-text' key={index}>{value}</p>
                        })}
                    </div>
                    <div data-aos='fade-up' data-aos-once='true' className='project-readmore-details'>
                      <h3 className='project-readmore-subtitle' style={{color: `${item.darkerColor}` }}>
                        Tools
                      </h3>
                      {item.allTools.map((value, index) => {
                       return <p className='project-readmore-text' key={index}>{value}</p>
                        })}
                    </div>
                </Col>
              </Row>
              {item.title2 && (
                <Row className='margin-bottom'>
                  <div data-aos='fade-up' data-aos-once='true' className='project-readmore-intro'>
                      <h2 className='project-readmore-subtitle' style={{color: `${item.darkerColor}` }}>
                        {item.title2}
                      </h2>
                      <p className='project-readmore-text intro'>{item.info2}</p>
                <figure className='project-readmore-persona'>
                      <img src={`${item.imgSrc2}`} alt={item.imgInfo}/> 
                    </figure>
                    </div>
                </Row>
              )}
              {item.title3 && (
                <Row className='margin-bottom'>
                  <div data-aos='fade-up' data-aos-once='true' className='project-readmore-intro'>
                      <h2 className='project-readmore-subtitle' style={{color: `${item.darkerColor}` }}>
                        {item.title3}
                      </h2>
                      <p className='project-readmore-text intro'>{item.info3}</p>
                  <figure className='project-readmore-persona'>
                      <img src={`${item.imgSrc3}`} alt={item.imgInfo2}/> 
                    </figure>
                    </div>
                </Row>
              )}
              {item.info4 && (
                <Row className='margin-bottom'>
                  <div data-aos='fade-up' data-aos-once='true' className='project-readmore-intro'>
                      <h2 className='project-readmore-subtitle' style={{color: `${item.darkerColor}` }}>
                        {item.title4}
                      </h2>
                      <p className='project-readmore-text intro'>{item.info4}</p>
                  <figure className='project-readmore-persona'>
                      <img src={`${item.imgSrc4}`} alt={item.imgInfo2}/> 
                    </figure>
                    </div>
                </Row>
              )}
               {item.info5 && (
                <Row className='margin-bottom'>
                  <div data-aos='fade-up' data-aos-once='true' className='project-readmore-intro'>
                      <h2 className='project-readmore-subtitle' style={{color: `${item.darkerColor}` }}>
                        {item.title5}
                      </h2>
                      <p className='project-readmore-text intro'>{item.info5}</p>
                  <figure className='project-readmore-persona'>
                      <img src={`${item.imgSrc5}`} alt={item.imgInfo2}/> 
                    </figure>
                    </div>
                </Row>
              )}
              <Row>
                <Col md='12'>
                    <Button onClick={onClick} className='fw-bold btn-left btn-light'> <IoIosArrowBack className='btn-icon'/> Back to homepage</Button>
                </Col>
              </Row>
              </Container>
            </div>
            </>
            )
        } return null;
    })}
    </>
  );
}


export default ProjectReadMore;
