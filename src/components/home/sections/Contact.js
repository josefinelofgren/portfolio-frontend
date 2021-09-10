// import libaries 
import React from 'react';

//import components
import { Container } from 'react-bootstrap';
import { SocialMedia } from '../../data/SocialMedia';

function Contact() {
  return (
    <div id='contact' className='contact'>
        <Container fluid>
          <div className='contact-content'>
          <h2 className='title contact-title'>Let's have a coffee together</h2>
            <h5 className='contact-text'>Interested to work with me or to say Hello? Please get in touch at <a className="contact-mail-adress" href="mailto:hello@josefinelofgren.com">hello@<span className="space"> </span>josefinelofgren.com</a> or connect with me on social media.</h5>
            {SocialMedia.map((item, index) => {
              return (
              <li key={index} className={item.cName}>
                <a target="_blank" href={item.src}>
                  {item.icon}
                </a>
              </li>
              )
            })}
            <p className="contact-copyright">© 2021 Josefine Löfgren. All rights reserved.</p>
          </div>
        
        </Container>
    </div>
  );
}

export default Contact;
