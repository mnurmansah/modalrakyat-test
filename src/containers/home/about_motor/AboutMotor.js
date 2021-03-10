import React from 'react';
import {
  Card,
} from 'react-bootstrap';
import './AboutMotor.scss';

const AboutMotor = () => (
  <>
    <div className="about-motor pdt-30">
      <Card>
        <Card.Header className="bg-light">
          <b className="fc">ABOUT MOTOR</b>
        </Card.Header>
        <Card.Body>
          <p className="font-weight-normal fs-12">
            <b>Ut in magna eget</b>
            {' '}
            felis sodales ultrices.
            Aenean libero lacus, euismod sed
            tempus ut, vulputate ut nulla. Nulla
            facilisi. Pellentesque non augue vel
            quam elementum consectetur.
          </p>
        </Card.Body>
      </Card>
    </div>
  </>
);

export default AboutMotor;
