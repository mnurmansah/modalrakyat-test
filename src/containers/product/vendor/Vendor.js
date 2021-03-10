/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Card, Col, Row, Button,
} from 'react-bootstrap';
import './Vendor.scss';

const Vendor = () => (
  <>
    <div className="info pdt-30">
      <Card>
        <Card.Header className="bg-light">
          <b className="fc">VENDOR</b>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Row>
                <Col sm={4}>
                  <div className="">
                    <img src="../images/vendor.svg" alt="" width="150" height="200" className="image" />
                  </div>
                </Col>
                <Col sm={8}>
                  <p className="font-weight-bold fs-12">John S. Doe</p>
                  <p className="font-weight-normal fs-12">
                    City :
                    {' '}
                    <b>New York, NY</b>
                    <br />
                    Proposition :
                    {' '}
                    <b>2</b>
                    <br />
                    Last Visited :
                    {' '}
                    <b>5 hours ago</b>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <p className="mgt-5 text-center">
                <a href="!#" className="link">See full vendor's info</a>
              </p>
              <div className="text-center">
                <Button className="button-vendor">+1 (555) 555 - 35 - 55</Button>
              </div>

            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  </>
);

export default Vendor;
