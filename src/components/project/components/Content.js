// import libaries 
import React from 'react';

//import components
import { Row } from 'react-bootstrap';



function Content({ title, info, imgSrc, imgInfo, darkerColor }) {

  return (
            <Row className='margin-bottom'>
        <div data-aos='fade-up' data-aos-once='true' className='project-readmore-intro'>
          <h2 className='project-readmore-subtitle' style={{color: `${darkerColor}` }}>
              {title}
          </h2>
                      <p className='project-readmore-text intro'>{info}</p>
                <figure className='project-readmore-persona'>
                      <img src={`${imgSrc}`} alt={imgInfo}/> 
                    </figure>
                    </div>
                </Row>
  );
}


export default Content;
