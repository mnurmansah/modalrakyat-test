import React from 'react';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';
import './OnlineSupport.scss';

const OnlineSupport = () => (
  <>
    <div className="online-support">
      <Card>
        <Card.Header className="bg-light">
          <b className="fc">ONLINE SUPPORT</b>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <div className="logo">
                <img src="./images/avatar.svg" alt="" width="120" height="120" className="image" />
              </div>

            </Col>
            <Col>
              <p className="font-weight-bold fs-12">John S. Doe</p>
              <p className="font-weight-normal fs-12">
                integer nisi nunc,
                porta id sodales et, pulvinar et risus
              </p>
            </Col>
          </Row>
          <div className="pdt-15">
            <Button className="button-online">+1 (555) 555 - 35 - 55</Button>
          </div>
          <p className="mgt-12">
            <a href="!#" className="link">Contact Support Team</a>
            <Card.Text>
              Learn more about
              {' '}
              <b>Motor</b>
            </Card.Text>
          </p>
        </Card.Body>
      </Card>
    </div>
  </>
);

export default OnlineSupport;
