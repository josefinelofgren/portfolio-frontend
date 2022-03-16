// import libaries 
import React from 'react';

//import components
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Content from '../components/Content';
import GoBackButton from '../components/GoBackButton';
import { ProjectData } from '../../../data/ProjectData';



function Amazon({hideMenuLinks}) {

  const data = ProjectData[1];

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
      <Content 
        title={data.title2}
        info={data.info2}
        darkerColor={data.darkerColor}
        imgSrc={data.imgSrc2}
        imgAlt={data.imgAlt}
      /> 
      <Content 
        title={data.title3}
        info={data.info3}
        darkerColor={data.darkerColor}
        imgSrc={data.imgSrc3}
        imgAlt={data.imgAlt1}
      /> 
      <Content 
        title={''}
        info={data.info4}
        darkerColor={data.darkerColor}
        imgSrc={data.imgSrc4}
        imgAlt={data.imgAlt1}
      /> 
      <Content 
        title={''}
        info={data.info5}
        darkerColor={data.darkerColor}
        imgSrc={data.imgSrc5}
        imgAlt={data.imgAlt1}
      /> 
      <GoBackButton 
        hideMenuLinks={hideMenuLinks}
      /> 
      </Container>
      </div>

  );
}


export default Amazon;
