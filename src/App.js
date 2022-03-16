// import libaries 
import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
 } from 'react-router-dom';
import Aos from 'aos';

//import components
import { Container } from 'react-bootstrap';
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home';
import Contact from './components/home/Contact';
import About from './components/about/about';
import ProjectReadMore from './components/project/ProjectReadMore';
import Amazon from './components/project/pages/Amazon';
import Calendar from './components/project/pages/Calendar';
import PixelArt from './components/project/pages/PixelArt';


function App() {

  // show or hide sidebar   
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
      setSidebar(!sidebar);
  };
  

  const [menuLinks, setMenuLinks] = useState(true);
  const [backLink, setBackLink] = useState(false);
  
  // hide menu links 
  const hideMenuLinks = () => {
    if(window.location.pathname !== '/'){
        setMenuLinks(false);
        setBackLink(true);
    } else {
        setMenuLinks(true);
        setBackLink(false);
    }
  }

    // show menu links
    const showMenuLinks = () => {
      if(window.location.pathname === '/'){
          setMenuLinks(true);
          setBackLink(false);
      } else {
          setMenuLinks(false);
          setBackLink(true);
      }
  
    }


  useEffect(() => {
    Aos.init({ 
      duration: 600,
      easing: 'ease-out',
      anchorPlacement: 'top-bottom'
    });
}, []);

  return (
    <div className='App'>
    <Router>
        <Container fluid className='body-container'>
          <Route 
            path='/:path1?/:path2?'>
            <Navigation 
            showMenuLinks={showMenuLinks}
            hideMenuLinks={hideMenuLinks}
            menuLinks={menuLinks}
            backLink={backLink}
            showSidebar={showSidebar}
            setSidebar={setSidebar}
            sidebar={sidebar}/> 
          </Route>
            <Switch>
                <Route 
                    exact path='/'>
                    <Home 
                     showMenuLinks={showMenuLinks}
                     hideMenuLinks={hideMenuLinks}
                     />  
                </Route>
                <Route 
                    path='/josefine'>
                    <About 
                       hideMenuLinks={hideMenuLinks}/>  
                    <Contact /> 
                </Route>
                <Route 
                    path='/project/amazon-website-redesign'>
                    <Amazon 
                      hideMenuLinks={hideMenuLinks}
                      
                      />  
                </Route>
                <Route 
                    path='/project/pixel-art'>
                    <PixelArt 
                      hideMenuLinks={hideMenuLinks}
                      
                      />  
                </Route>
                <Route 
                    path='/project/calendar-with-todo'>
                    <Calendar 
                      hideMenuLinks={hideMenuLinks}
                      
                      />  
                </Route>
            </Switch>
        </Container>
     </Router>
</div>
  );
}

export default App;
