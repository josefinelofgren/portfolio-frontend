// import libaries 
import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
 } from 'react-router-dom';
import Aos from 'aos';

//import components
import { Container } from 'react-bootstrap';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Josefine from './components/josefine/Josefine';
import ProjectReadMore from './components/project/ProjectReadMore';

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
          <Route 
            path='/:path1?/:path2?'>
            <Navigation /> 
          </Route>
            <Switch>
                <Route 
                    exact path='/'>
                    <Home />  
                </Route>
                <Route 
                    path='/josefine'>
                    <Josefine />  
                </Route>
                <Route 
                    path='/project/:projectName'>
                    <ProjectReadMore />  
                </Route>
            </Switch>
        </Container>
     </Router>
</div>
  );
}

export default App;
