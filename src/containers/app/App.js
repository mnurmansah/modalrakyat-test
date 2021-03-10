import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Error404 from '../../components/error_404/Error404';
import Home from '../home/Home';
import Search from '../search/Search';
import Product from '../product/Product';
import Navibar from '../../components/navibar/Navibar';
import Footer from '../../components/footer/Footer';
import NavibarMenu from '../../components/navibar_menu/NavibarMenu';
import FooterMenu from '../../components/footer_menu/FooterMenu';

const history = createBrowserHistory();

function App() {
  return (
    <Container className="pd-0">
      <Row>
        <Col>
          <Navibar />
          <NavibarMenu />
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search" exact component={Search} />
              <Route path="/product/supercar123" exact component={Product} />
              <Route path="*" component={Error404} />
            </Switch>
          </Router>
          <Footer />
          <FooterMenu />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
