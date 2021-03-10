import React from 'react';
import {
  Card, Button,
} from 'react-bootstrap';
import './Newsletter.scss';

const Newsletter = () => (
  <>
    <div className="newsletter pdt-30">
      <Card>
        <Card.Header className="bg-light">
          <b className="fc">NEWSLETTER SIGN UP</b>
        </Card.Header>
        <Card.Body>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="inputEmail3" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label color">Receive special offers</label>
            </div>
          </form>
          <div className="pdt-15 text-center">
            <Button className="button-newsletter bg-danger">SIGN UP</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  </>
);

export default Newsletter;
