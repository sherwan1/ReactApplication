import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import {Glyphicon, Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackgroundImage from 'react-background-image-loader';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class Navigation extends React.Component{
      render(){
        return(
        <Router>
        <div>
        <Navbar inverse collapseOnSelect fixed="top">
          <Navbar.Header>

            <Navbar.Brand>
           
              <a ><Glyphicon glyph="th-list"/> Football Oye</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/Home">
                Home
              </NavItem>
              <NavDropdown eventKey={2} title="Fixtures" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1} href="/ManchesterUnited_fixtures">Manchester United</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.2} href="/Liverpool_fixtures">Liverpool</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.3} href="/Chelsea_fixtures">Chelsea</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={3} title="Results" id="basic-nav-dropdown2">
                <MenuItem eventKey={3.1} href="/ManchesterUnited_results"> Manchester United</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2} href="/Liverpool_results"> Liverpool</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="/Chelsea_results"> Chelsea</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={4} title="Teams" id="basic-nav-dropdown3">
                <MenuItem eventKey={4.1} href="#">Manchester United</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.2} href="#">Liverpool</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.3} href="#" >Chelsea</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.4} href="#" >Real Madrid</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.5} href="#" >FC Barcelona</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.6} href="#" >Athletico Madrid</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.7} href="#" >Manchester City</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.8} href="#" >Newcastle United FC</MenuItem>
              </NavDropdown>
            </Nav>
            
          
              
             
        </Navbar.Collapse>
        </Navbar>

      <Route path="/Home" component={Home} />
      <Route path="/ManchesterUnited_fixtures" component={ManchesterUnited_fixtures} />
      <Route path="/Liverpool_fixtures" component={Liverpool_fixtures} />
      <Route path="/Chelsea_fixtures" component={Chelsea_fixtures} />
      <Route path="/ManchesterUnited_results" component={ManchesterUnited_results} />
      <Route path="/Liverpool_results" component={Liverpool_results} />
      <Route path="/Chelsea_results" component={Chelsea_results} />
      </div>
      </Router>
);
}
}

class Home extends React.Component{
  render(){
    return(

    <div>
      <Jumbotron>
        <h2 className="container"> Welcome to Football Oye! Please use the navigation bar to see the Fixtures, Results and Teams.</h2>
      </Jumbotron>
    
    </div>
  
    );
  }
}

class ManchesterUnited_fixtures extends React.Component{
  render(){
    return(
    <div>
    <h1 className="Fixtures"> Fixtures </h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Chelsea</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Old Trafford <i className="Spacing"> Date: 06/06/2018  </i>         
          <i className="Spacing">Time: 2:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Liverpool</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Old Trafford <i className="Spacing"> Date: 06/25/2018  </i>         
          <i className="Spacing">Time: 6:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Tottenham HotSpurs</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Wembley Stadium <i className="Spacing3"> Date: 07/12/2018  </i>         
          <i className="Spacing">Time: 4:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Arsenal</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Emirates Stadium <i className="Spacing3"> Date: 07/12/2018  </i>         
          <i className="Spacing">Time: 3:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      
    </div>
    );
  }
}


class Liverpool_fixtures extends React.Component{
  render(){
    return(
    <div>
    <h1 className="Fixtures"> Fixtures </h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Liverpool vs Chelsea</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Anfield <i className="Spacing5"> Date: 06/10/2018  </i>         
          <i className="Spacing">Time: 2:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Liverpool vs Manchester United</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Old Trafford <i className="Spacing"> Date: 06/25/2018  </i>         
          <i className="Spacing">Time: 6:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Liverpool vs Arsenal</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Anfield <i className="Spacing5"> Date: 06/27/2018  </i>         
          <i className="Spacing">Time: 6:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Liverpool vs FC Barcelona</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Camp Nou <i className="Spacing6"> Date: 07/14/2018  </i>         
          <i className="Spacing">Time: 1:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      
    </div>
    );
  }
}


class Chelsea_fixtures extends React.Component{
  render(){
    return(
    <div>
      <h1 className="Fixtures"> Fixtures </h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Chelsea vs Manchester United</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Old Trafford <i className="Spacing1"> Date: 06/06/2018  </i>         
          <i className="Spacing">Time: 2:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Chelsea vs Liverpool</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Anfield <i className="Spacing7"> Date: 06/10/2018  </i>         
          <i className="Spacing">Time: 6:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Chelsea vs Real Madrid</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Venue: Stamford Bridge <i className="Spacing3"> Date: 07/12/2018  </i>         
          <i className="Spacing">Time: 7:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      
    </div>
    );
  }
}

class ManchesterUnited_results extends React.Component{
  render(){
    return(
    <div>
      <h1 className="Results"> Results </h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Chelsea</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 1-1 (Draw) <i className="Spacing"> Date: 05/10/2018  </i>         
          <i className="Spacing">Time: 2:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Athletico Madrid</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 3-0 (Won) <i className="Spacing"> Date: 05/15/2018  </i>         
          <i className="Spacing">Time: 6:30am EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Tottenham HotSpurs</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 0-1 (Lost) <i className="Spacing"> Date: 05/17/2018  </i>         
          <i className="Spacing">Time: 4:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Manchester City</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 0-3 (Lost) <i className="Spacing8"> Date: 06/03/2018  </i>         
          <i className="Spacing">Time: 3:30am EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Manchester United vs Arsenal</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 0-1 (Won) <i className="Spacing1"> Date: 06/04/2018  </i>         
          <i className="Spacing">Time: 11:30am EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      
    </div>
    );
  }
}

class Liverpool_results extends React.Component{
  render(){
    return(
    <div>
      <h1 className="Results"> Results </h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Liverpool vs Reading</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 4-0 (Won) <i className="Spacing"> Date: 04/29/2018  </i>         
          <i className="Spacing">Time: 2:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Liverpool vs Manchester United</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 1-0 (Won) <i className="Spacing"> Date: 05/01/2018  </i>         
          <i className="Spacing">Time: 6:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Liverpool vs Arsenal</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 0-2 (Lost) <i className="Spacing"> Date: 05/11/2018  </i>         
          <i className="Spacing">Time: 8:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Liverpool vs Bayern Munich</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 0-0 (Draw) <i className="Spacing8"> Date: 05/23/2018  </i>         
          <i className="Spacing">Time: 11:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      
    </div>
    );
  }
}

class Chelsea_results extends React.Component{
  render(){
    return(
    <div>
      <h1 className="Results"> Results </h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Chelsea vs Real Madrid</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 0-3 (Lost) <i className="Spacing"> Date: 05/01/2018  </i>         
          <i className="Spacing">Time: 2:30pm EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Chelsea vs Newcastle United F.C.</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 1-0 (Won) <i className="Spacing8"> Date: 05/15/2018  </i>         
          <i className="Spacing">Time: 6:30am EST </i>  <i className="Spacing"> Away/Home Game: Home</i></i>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading><b><i>Chelsea vs Manchester City</i></b></ListGroupItemHeading>
          <ListGroupItemText>
          <i>Score: 1-7 (Lost) <i className="Spacing8"> Date: 05/30/2018  </i>         
          <i className="Spacing">Time: 2:30pm EST </i>  <i className="Spacing"> Away/Home Game: Away</i></i>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
      
    </div>
    );
  }
}

ReactDOM.render(
  <Navigation/>,
  document.getElementById('root')
);
