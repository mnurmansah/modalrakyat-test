/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import './AccountCardList.scss';

const AccountCardList = ({
  car: {
    src, name, last_name, location, init_location, username, year, view, mode, km, price, type, dinamo, oil, date, star,
  },
}) => (
  <Link to="/product/supercar123">
    <Card
      className="mgb-2 account-card"
    >
      <Card.Body>
        <Row>
          <Col>
            <Card.Text className="">
              <img src={src} width="300" height="300" className="image" />
            </Card.Text>

          </Col>
          <Col>
            <Card.Title className="font-weight-normal fs-11">
              <p>
                <b>
                  { name }
                  {' '}
                  <p className="link">{last_name}</p>
                </b>
              </p>
              <Row>
                <Col>
                  <p>
                    {location}
                    <b>{init_location}</b>
                  </p>
                </Col>
                <Col>
                  <p>{username}</p>
                </Col>
              </Row>

              <p className="pdl-12 bg-light">
                <Row>
                  <Col>
                    { year }
                    <br />
                    { type }
                    <br />
                    { dinamo }
                    <br />
                    { view }
                  </Col>
                  <Col>
                    {mode}
                    <br />
                    {oil}
                    <br />
                    {km}
                  </Col>
                </Row>

              </p>
            </Card.Title>
            <Card.Title>
              <Row>
                <Col>
                  <p className="fs-10 pdt-8 font-price">
                    { price }
                  </p>
                </Col>
                <Col>
                  <p className="fs-10 pdt-8">
                    { date }
                  </p>
                </Col>
                <Col>

                  <img src={star} width="70" height="70" className="image" />

                </Col>
              </Row>
            </Card.Title>

          </Col>
        </Row>

      </Card.Body>
    </Card>
  </Link>
);

AccountCardList.propTypes = {
  car: PropTypes.object.isRequired,
};

export default AccountCardList;
