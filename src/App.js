// import libaries 
import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
 } from 'react-router-dom';
import Aos from 'aos';

//import components
import { Container, Row } from 'react-bootstrap';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';

function App() {

  useEffect(() => {
    Aos.init({ 
      duration: 600,
      easing: 'ease-out',
      anchorPlacement: 'top-top'
    });
}, []);

  return (
    <div className='App'>
    <Router>
        <Container fluid className='body-container'>
            <Navigation
                /> 
            <Switch>
                <Route 
                    exact path='/'>
                    <Home />  
                </Route>
            </Switch>
        </Container>
     </Router>
</div>
  );
}

export default App;
