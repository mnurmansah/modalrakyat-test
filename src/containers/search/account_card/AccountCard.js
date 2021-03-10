/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import './AccountCard.scss';

const AccountCard = ({
  car: {
    src, name, last_name, location, init_location, year, view, mode, km, price, star,
  },
}) => (
  <Link to="/product/supercar123">
    <Card
      className="mgb-2 account-card"
    >
      <Card.Body>
        <Card.Text className="">
          <img src={src} width="200" height="200" className="image" />
        </Card.Text>
        <Card.Title className="font-weight-normal fs-11">
          <p>
            <b>
              { name }
              <br />
              <p className="link mgt-5">{last_name}</p>
            </b>
          </p>
          <p>
            {location}
            <b>{init_location}</b>
          </p>
          <p className="pdl-12 bg-light">
            { year }
            <br />
            {view}
            <br />
            {mode}
            <br />
            {km}
            <br />
          </p>
        </Card.Title>
        <Card.Title>
          <Row>
            <Col>
              <p className="fs-11 font-price">
                { price }
              </p>
            </Col>
            <Col>
              <Card.Text class="pdt-15 text-center">
                <img src={star} width="70" height="70" className="image" />
              </Card.Text>
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
    </Card>
  </Link>
);

AccountCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default AccountCard;
