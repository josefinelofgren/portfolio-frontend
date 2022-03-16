// import libaries 
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';

//import components
import { Container, Row, Col } from 'react-bootstrap';
import { SocialMedia } from '../../data/SocialMedia';

function Contact() {

  const contactDetails = [
    {
      icon: <MdIcons.MdPhoneIphone/>,
      text: '+46 76 79 88 105',
      src:'tel:+46767988105',
    },
    {
      icon: <SiIcons.SiMailDotRu />,
      text: 'hello@josefinelofgren.com',
      src:'mailto:hello@josefinelofgren.com',
    },
    {
      icon: <FaIcons.FaLinkedinIn />,
      text: 'LinkedIn',
      src:'https://www.linkedin.com/in/josefinelofgren/'
    },

  ]
  return (
    <>
    {/* <div id='contact' className='contact'>
        <Container fluid>
          <div className='contact-content' data-aos='fade-up' data-aos-once='true'>
            <h5 className='contact-text'>Interested to work with me or to say Hello? Please get in touch at <a className="contact-mail-adress fw-bold" href="mailto:hello@josefinelofgren.com">hello@<span className="space"></span>josefinelofgren.com</a> or connect with me on social media.</h5>
          </div>
        </Container>
    </div> */}
    <div className='contact'>
    <Row>
      {contactDetails.map((item, index) => { 
        return (
          <Col sm='4' className='contact-info'>
             <a target="_blank" href={item.src}>
            <>
            <div className='contact-icon'>
              {item.icon}
            </div>
            {item.text}
            </>
            </a>
          </Col>
        )
      })}
    </Row>
    <Row className='copyright'>
      <p>© 2022 Josefine</p>
    </Row>
    </div>
    </>
  );
}

export default Contact;
