import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Nav} from 'react-bootstrap';
import Menu from './Components/MenuComponents/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompanyName from './Components/MenuComponents/CompanyName';
import StockGrid from './Components/StockComponents/StockGrid';

import Data from './Sample/Samples.json';

import ProductGrid from './Components/ProductComponents/ProductGrid';

export default class App extends React.Component {

  cons ={
    Menu: Data
  }

  render(){
    
    const style= {
      height: "window.innerHeight", 
    };

    return (
      <Router>
      <div className="App" style={style}>
        <Container fluid = "true"  >
          <Row >
            
            <Col md="3"  className="no-gutters">
              <Nav className="col-md-12 d-none d-md-block bg-primary sidebar menu justify-content-center pt-2">
                <CompanyName companyName = "Vanilla Market"/>
                <Menu menuItems={this.cons.Menu}/>
              </Nav>
            </Col>

            <Col md="8" className="no-gutters pt-5">
              <Switch>
                  <Route path="/products" component={ProductGrid}></Route>
                  <Route path="/stock" component={StockGrid}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
      </Router>
    );
  }
  
}


