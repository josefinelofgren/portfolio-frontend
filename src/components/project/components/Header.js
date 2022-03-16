// import libaries 
import React, { useLayoutEffect, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';



function Header({ hideMenuLinks, title, description, color, darkerColor, intro, allTools, platforms, roles, imgSrc }) {

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

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
              <Row className='project-readmore-header' style={{backgroundColor: `${color}`}}>
                <Col md='6'className='project-readmore-col'>
                  <div className='project-readmore-header-content'>
                    <div className='readmore-container'>
                    <h1 className='project-readmore-title'>
                      <span style={{backgroundColor: `${darkerColor}`, boxShadow: ` -10px 0px 0 7px ${darkerColor}, 10px 0px 0 7px ${darkerColor}, 0 0 0 7px ${darkerColor}`}}>
                        {title}
                      </span>
                    </h1>
                    </div>
                    <h4 className='project-readmore-undertitle'>{description}</h4>
                  </div>
                </Col>
                <Col md='6' className='project-readmore-col'>
                  <figure className='project-readmore-figure'>
                    <img src={imgSrc} className='project-readmore-img' alt="Project"/> 
                  </figure>
                </Col>
              </Row>
  );
}


export default Header;
