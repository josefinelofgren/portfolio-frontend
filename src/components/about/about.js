// import libaries 
import React, { useLayoutEffect, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';

//import components
import { Container, Row, Col, Button } from 'react-bootstrap';

function About({hideMenuLinks}) {

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
    if(window.location.pathname === '/josefine'){
      hideMenuLinks();
    }
  },[hideMenuLinks])

  const education = [
    {
      title: 'UX Design',
      school: 'The Interaction Design Foundation, ',
      date: '2021 - 2022',
    },
    {
      title: 'Front End Developer',
      school: 'Medieinstitutet, ',
      date: '2020 - 2022',
    },
    {
      title: 'Courses in Sociology, Psychology and Organization',
      school: 'Stockholm University, ',
      date: '2019 - 2020',
    },
    {
      title: 'High School Diploma, Information and Media Technology',
      school: 'Luleå Gymnasieskola, ',
      date: '2013 - 2016',
    }
  ];

  const experience = [
    {
      title: 'Front End Developer / QA Intern',
      company: 'Yepstr, ',
      date: 'Jan 2022 - Mar 2022'
    },
    {
      title: 'Retail Sales Associate / Departmant Manager & Back-up Sales Support',
      company: 'Clas Ohlson, ',
      date: 'Oct 2017 - Now'
    },
    {
      title: 'IT / Tech Researcher',
      company: 'HCM Partner / Continental Search Alliance, ',
      date: 'Oct 2019 - Dec 2020'
    },
    {
      title: 'Preschool Substitute Teacher',
      company: 'Lärarförmedlarna / People Productions Sweden, ',
      date: 'Oct 2017 - Sep 2017'
    },
  ];

  return (
    <>
    <div id='about' className='about'>
        <Container fluid>
          <Row>
            <Col md='6' className='about-col left'>
            <p className='bigger' data-aos='fade-up' data-aos-once='true'>
            Hi there 👋 <br/> 
            Nice to meet you. I’m <span className='fw-bold'>Josefine Löfgren</span>, a UX/UI designer based in Stockholm, Sweden. </p>
              <p className='smaller' data-aos='fade-up' data-aos-once='true'>
              Skilled in User Experience with broad knowledge in Front End development as well. Experience in iOS and Android native apps, tablet and web design. I thrive in a world that is inspired by modern technology for positive change, making everyday life a little easier.   
              <br /> <br /> I'm a team player who enjoys working through each stage, collaborating with other experts in Agile environments, to ideate and iterate towards a final design. I would describe myself as curious problem solver and a creative thinker who always eager to learn more. 
              <br /> <br /> I always strive to create engaging and usable solutions. I love exploring how users communicate and interact with their surroundings, whether it's learning about their experiences, or observing their processes when interacting with a product or service.
              </p>
              <br/>
              <div data-aos='fade-up' data-aos-once='true'>
              <p className='bigger'>Education</p>
              {education.map((item, index) => (
                <p className='margin-bottom smaller fw-bold'>{item.title}
                    <p className='smaller-sub'>{item.school}{item.date}</p>
                </p>
              ))}
              </div>
            </Col>
            <Col md='6' className='about-col right'>
            <figure className='about-image'>
                  <img className='border-radius' src={require('../../images/josefinelofgren.jpg').default} alt="Josefine Löfgren Portrait"></img>
            </figure>
            <div data-aos='fade-up' data-aos-once='true'>
            <p className='bigger'>Experience</p>
            {experience.map((item, index) => (
                <p className='margin-bottom smaller fw-bold'>{item.title}
                    <p className='smaller-sub'>{item.company}{item.date}</p>
                </p>
              ))}
            </div>
            <br /> 
            <div data-aos='fade-up' data-aos-once='true'>
            <form method='get' action='Josefine-CV.png'>
                  <Button variant='dark' type='submit' className='fw-bold'> 
                    Download CV
                  </Button>
                  </form>
                  <br /> 
                <Link to='/'>
                  <Button onClick={onClick} variant='dark' className='fw-bold'> 
                    <IoIosArrowBack className='btn-icon'/>
                     Go back to homepage
                  </Button>
                </Link>
            </div>
            </Col>
          </Row>
        </Container>
    </div>
    </>
  );
}


export default About;
