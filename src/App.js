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
import Home from './components/home/Home';
import Josefine from './components/josefine/Josefine';
import ProjectReadMore from './components/project/ProjectReadMore';

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
      anchorPlacement: 'top-top'
    });
}, []);

  return (
    <div className='App'>
    <Router>
        <Container fluid className='body-container'>
          <Route 
            path='/josefinelofgren.com/:path1?/:path2?'>
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
                    exact path='/josefinelofgren.com/'>
                    <Home 
                     showMenuLinks={showMenuLinks}
                     hideMenuLinks={hideMenuLinks}
                     />  
                </Route>
                <Route 
                    path='/josefinelofgren.com/josefine'>
                    <Josefine 
                       hideMenuLinks={hideMenuLinks}/>  
                </Route>
                <Route 
                    path='/josefinelofgren.com/project/:projectName'>
                    <ProjectReadMore 
                      hideMenuLinks={hideMenuLinks}/>  
                </Route>
            </Switch>
        </Container>
     </Router>
</div>
  );
}

export default App;
