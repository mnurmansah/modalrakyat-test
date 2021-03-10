import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Form, Button,
} from 'react-bootstrap';
import './HomeSearch.scss';

const HomeSearch = () => (
  <>
    <div className="card">
      <div className="card-header ">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <p className="nav-link bg-danger" href="#"><h6><b>SEARCH</b></h6></p>
          </li>
          <li className="nav-item mgl-10">
            <p className="nav-link" href="#"><h6><b>+ ADD LISTING</b></h6></p>
          </li>
        </ul>
      </div>
      <div className="card-body bg-danger">
        <div className="tab-content mt-3">
          <div className="tab-pane active" id="description" role="tabpanel">
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>TYPE</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Cars</option>
                    <option>Trucks</option>
                    <option>Motorbikes</option>
                    <option>Buses</option>
                    <option>Campers</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>CATEGORY</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Sedan</option>
                    <option>Camry</option>
                    <option>Jazz</option>
                    <option>Xenia</option>
                    <option>Datsun</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mgt-15">
                      <Form.Check inline label="Used Items" type={type} id={`inline-${type}-1`} />
                      <Form.Check className="mgl-25" inline label="New Items" type={type} id={`inline-${type}-2`} />
                    </div>
                  ))}
                </Form.Group>

                <Form.Group as={Col}>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mgt-15">
                      <Form.Check inline label="With Photos" type={type} id={`inline-${type}-1`} />
                      <Form.Check className="mgl-25" inline label="With Videos" type={type} id={`inline-${type}-2`} />
                    </div>
                  ))}
                </Form.Group>
              </Form.Row>
              <hr />

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>LOCATION</Form.Label>
                  <Form.Control as="select">
                    <option>New York</option>
                    <option>California</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>BRAND</Form.Label>
                  <Form.Control as="select">
                    <option>Subaru</option>
                    <option>Toyota</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>MODEL</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>Xenia</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>PRICE</Form.Label>
                  <Form.Control as="select">
                    <option>$5000</option>
                    <option>$8000</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>-</Form.Label>
                  <Form.Control as="select">
                    <option>$12000</option>
                    <option>$20000</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                  <Button className="bg-danger clear-filters button-search" type="submit">
                    x Clear all filters
                  </Button>
                </Form.Group>
                <Form.Group as={Col}>
                  <Link to="/search">
                    <Button className="bg-warning search button-search" type="submit">
                      Search
                    </Button>
                  </Link>
                </Form.Group>
              </Form.Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HomeSearch;
