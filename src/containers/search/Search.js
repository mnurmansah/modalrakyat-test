import React from 'react';
import {
  Col, Container, Row, Accordion, Button, Form,
} from 'react-bootstrap';

import './Search.scss';
import Filter from './filter/Filter';
import AccountCard from './account_card/AccountCard';
import Newsletter from '../home/newsletter/Newsletter';
import OnlineSupport from '../home/online_support/OnlineSupport';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [
        {
          src: './images/cars-search/cars1-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars2-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars3-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars4-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars5-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars6-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars7-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars8-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars9-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars10-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars11-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars12-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars13-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars14-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
        {
          src: './images/cars-search/cars15-search.svg',
          name: 'Nissan',
          last_name: 'Qashqai',
          location: 'Newyork',
          init_location: ', NY',
          year: '2005',
          view: '1.6',
          mode: 'Automatic',
          km: '16000 miles',
          price: '$25000',
          star: './images/cars-search/star.svg',
        },
      ],
    };
  }

  render() {
    const { cars } = this.state;

    return (

      <Container>
        <hr />
        <Row>
          <Col sm={8}>
            <Accordion defaultActiveKey="0">
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-fill bd-highlight"><b>SEARCH RESULT</b></div>
                <div className="p-2 flex-fill bd-highlight" style={{ width: '400px' }}>
                  <Form.Group>
                    <Row>
                      <Col className="text-right">
                        SORT BY :
                      </Col>
                      <Col>
                        <Form.Control as="select">
                          <option>PRICE</option>
                          <option>TYPE</option>
                        </Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>

                </div>
                <div className="p-2 flex-fill bd-highlight text-right">
                  <Accordion.Toggle eventKey="0">
                    <Button className="btn-secondary">+</Button>
                  </Accordion.Toggle>
                  <Accordion.Toggle eventKey="1">
                    <Button className="btn-danger">=</Button>
                  </Accordion.Toggle>
                </div>
              </div>
              <Accordion.Collapse eventKey="0">
                <Row>
                  {
                      cars.map((car, index) => (
                        <Col xs={6} md={4} className={index % 2 === 0 ? 'pb-2' : 'pt:2'} key={index}>
                          <AccountCard
                            car={car}
                          />
                        </Col>
                      ))
                    }
                </Row>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Row>
                  {
                      cars.map((car, index) => (
                        <Col xs={6} md={4} className={index % 2 === 0 ? 'pb-2' : 'pt:2'} key={index}>
                          <AccountCard
                            car={car}
                          />
                        </Col>
                      ))
                    }
                </Row>
              </Accordion.Collapse>
            </Accordion>

          </Col>
          <Col sm={4}>
            {/* FIKTER, ONLINE SUPPORT. NEWSLETTER */}
            <Filter />
            <OnlineSupport />
            <Newsletter />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Search;