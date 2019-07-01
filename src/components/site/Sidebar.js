import React from 'react'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Home from './Home'
//Now, this is where react-router-dom is used even more. This component is how we set up where we want to go in our application and what we want to see. Our Routes determine what will be shown on the screen at that path, and our Links actually take us to that path (the path being the url seen in our browser)! So above if we use a Link to "/" or "/home" then we should see the <Home /> component. Same thing with <Resources /> and "/resources"! This is the whole way we can navigate to places in React! Our Switch acts just like a switch statement in vanilla. Only one of the conditions are true at one time, that way only one part of our application shows at a time! Thus, we have 4 <Link/>s to different paths: one for '/', one for '/rationale', one for '/functionalcomponent', and one for '/resources'.  By clicking on any of these Links, we should observe a url change in our browser.  The <Switch/> will fire one of the three <Route/>s based upon matching the url in our browser with the path of the <Route/>.
import Resources from './Resources'

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </div>
    
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home /></Route>
        </Switch>
    </div>
  </div>
)

export default Sidebar;