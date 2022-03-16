// import libaries 
import React from 'react';

//import components
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Intro from '../components/Intro';
import GoBackButton from '../components/GoBackButton';
import { ProjectData } from '../../../data/ProjectData';



function Calendar({hideMenuLinks}) {

  const data = ProjectData[2];

  return (
    <div id='project-readmore' className='project-readmore'>
    <Header 
       hideMenuLinks={hideMenuLinks}
       title={data.title}
       description={data.description}
       color={data.color}
       darkerColor={data.darkerColor}
       imgSrc={data.imgSrc}     
    />
    <Container fluid>
    <Intro 
        intro={data.intro}
        allTools={data.allTools}
        platforms={data.platforms}
        roles={data.roles}
        darkerColor={data.darkerColor}
        timeline={data.timeline}
    /> 
    <GoBackButton 
      hideMenuLinks={hideMenuLinks}
    /> 
    </Container>
    </div>

  );
}


export default Calendar;
