import React from 'react';
import {
  Card, Row, Col, Button, Carousel,
} from 'react-bootstrap';
import './Detail.scss';

const Detail = () => (
  <>
    <div className="detail">
      <p className="font-weight-bold fs-12 pdb-10">
        BUYS - CARS -
        {' '}
        <b>TOYOTA</b>
      </p>
      <Card>
        <Card.Header className="bg-light">
          <b className="fc">TOYOTA SUPRA 350Z</b>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Carousel className="image-detail">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="../images/cars-product/super-car/supercar.svg"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="../images/cars-product/super-car/supercar1.svg"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="../images/cars-product/super-car/supercar2.svg"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="../images/cars-product/super-car/supercar3.svg"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="../images/cars-product/super-car/supercar4.svg"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col className="pdt-30">
                  <img src="../images/cars-product/super-car/supercar1.svg" width="75" height="66" className="image-bottom pdr-8" />
                  <img src="../images/cars-product/super-car/supercar2.svg" width="75" height="66" className="image-bottom pdr-8" />
                  <img src="../images/cars-product/super-car/supercar1.svg" width="75" height="66" className="image-bottom pdr-8" />
                  <img src="../images/cars-product/super-car/supercar2.svg" width="75" height="66" className="image-bottom pdr-8" />
                  <p className="mgt-10 fs-10 text-center">
                    <a href="" className="link">[+] View All Photos</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <p className="font-weight-normal fs-12">
                <b>Toyota Supra 350Z</b>
              </p>
              <p className="font-weight-normal fs-10">
                New York,
                <b>NY</b>
                <br />
                Harry Roberts
              </p>
              <Card className="bg-light pdt-10 pdl-10">
                <Row>
                  <Col>
                    <p className="font-weight-normal fs-10 bg-light">
                      2005
                      <br />
                      Front-wheel
                      <br />
                      1,6
                      <br />
                      Automatic
                      <br />
                      Petrol
                    </p>
                  </Col>
                  <Col>
                    <p className="font-weight-normal fs-10 bg-light">
                      Sedan
                      <br />
                      16,000 miles
                      <br />
                      Grey miles
                      <br />
                      Black
                    </p>
                  </Col>
                </Row>
              </Card>
              <Row>
                <Col>
                  <p className="font-weight-bold fs-14 pdt-30">
                    $25,000
                  </p>
                </Col>
                <Col>
                  <div className="text-center pdt-25">
                    <Button className="button-buyvic btn btn-danger fs-12">Buy This Vehicle</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  </>
);

export default Detail;
