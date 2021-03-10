import React from 'react';
import {
  Card, Form, Col, Row,
} from 'react-bootstrap';
import './Filter.scss';

const Filter = () => (
  <>
    <div className="filter pdt-30">
      <Card>
        <Card.Header className="bg-light">
          <b className="fc">SEARCH FILTER</b>
        </Card.Header>
        <Card.Body className="bg-light">
          <form>
            <div className="form-group color fs-11">
              <Form.Label>TYPE</Form.Label>
              <Form.Control as="select" custom>
                <option>Cars</option>
                <option>Trucks</option>
                <option>Motorbikes</option>
                <option>Buses</option>
                <option>Campers</option>
              </Form.Control>
            </div>
            <div className="form-group color fs-12">
              <Form.Group>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mgt-15">
                    <Form.Check inline label="Used Items" type={type} id={`inline-${type}-1`} />
                    <Form.Check className="mgl-25" inline label="New Items" type={type} id={`inline-${type}-2`} />
                  </div>
                ))}
              </Form.Group>
            </div>
            <div className="form-group color fs-12">
              <Form.Label>CATEGORY</Form.Label>
              <Form.Control as="select" custom>
                <option>Sedan</option>
                <option>Camry</option>
                <option>Jazz</option>
                <option>Xenia</option>
                <option>Datsun</option>
              </Form.Control>
            </div>
            <div className="form-group color fs-12">
              <Form.Group>
                {['checkbox'].map((type) => (
                  <div key={`inline-${type}`} className="mgt-15">
                    <Form.Check inline label="With Photos" type={type} id={`inline-${type}-1`} />
                    <Form.Check className="mgl-25" inline label="With Videos" type={type} id={`inline-${type}-2`} />
                  </div>
                ))}
              </Form.Group>
            </div>
            <div className="form-group color fs-12">
              <div className="mgb-10">
                <Form.Label>LOCATION</Form.Label>
                <Form.Control as="select">
                  <option>New York</option>
                  <option>California</option>
                </Form.Control>
              </div>
              <div className="mgb-10">
                <Form.Label>BRAND</Form.Label>
                <Form.Control as="select">
                  <option>Subaru</option>
                  <option>Toyota</option>
                </Form.Control>
              </div>
              <div className="mgb-10">
                <Form.Label>MODEL</Form.Label>
                <Form.Control as="select">
                  <option>All</option>
                  <option>Xenia</option>
                </Form.Control>
              </div>
            </div>
            <div className="form-group color fs-12">
              <Form.Label>PRICE</Form.Label>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control as="select">
                      <option>$5000</option>
                      <option>$8000</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control as="select">
                      <option>$12000</option>
                      <option>$20000</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
            </div>
            <hr />
            <div className="form-group color fs-12">
              <Form.Label>TRANSMISSION</Form.Label>
              <Form.Control as="select" custom>
                <option>Automatic</option>
                <option>Manual</option>
              </Form.Control>
            </div>
            <div className="form-group color fs-12">
              <Form.Label>ENGINE</Form.Label>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control as="select">
                      <option>1,6</option>
                      <option>2,0</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control as="select">
                      <option>2,0</option>
                      <option>2,5</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
            </div>
            <div className="form-group color fs-12">
              <Form.Label>FUEL</Form.Label>
              <Form.Control as="select" custom>
                <option>Petrol</option>
                <option>Pertamax</option>
              </Form.Control>
            </div>
            <div className="form-group color fs-12">
              <Form.Label>MILEAGE</Form.Label>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control as="select">
                      <option>5000</option>
                      <option>10000</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control as="select">
                      <option>12000</option>
                      <option>20000</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
            </div>
            <div className="form-group color fs-12">
              <Form.Label>EXTERIOR COLOR</Form.Label>
              <Form.Control as="select" custom>
                <option>Black</option>
                <option>White</option>
              </Form.Control>
            </div>
            <div className="form-group color fs-12">
              <Form.Label>INTERIOR COLOR</Form.Label>
              <Form.Control as="select" custom>
                <option>Dark Grey</option>
                <option>White</option>
              </Form.Control>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  </>
);

export default Filter;
