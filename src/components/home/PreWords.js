// import libaries 
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';

//import components
import { Container, Row, Col, Button} from 'react-bootstrap';

function PreWords({showMenuLinks, hideMenuLinks}) {
  let history = useHistory();

  // button on click 
  const onClick = () => {
    history.push('/josefine');
    hideMenuLinks();
  }

  return (
    <div id='prewords' className='prewords'>
        <Container fluid>
            <Row>
              <Link to='/josefine'>
                <Button>Get to know me better</Button>
              </Link>
            </Row>
        </Container>
        <div class="curve"></div>
    </div>
  );
}

export default PreWords;
