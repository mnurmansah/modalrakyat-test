import React from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';

import './Product.scss';
import OnlineSupport from './online_support/OnlineSupport';
import Newsletter from '../home/newsletter/Newsletter';
import Categories from '../home/categories/Categories';
import AboutMotor from '../home/about_motor/AboutMotor';
import Info from './info/Info';
import Vendor from './vendor/Vendor';
import Comment from './comment/Comment';
import Detail from './detail/Detail';

export default function Product() {
  return (
    <>
      <hr />
      <div className="pd-0">
        <Container>
          <Row>
            <Col sm={8}>
              <Detail />
            </Col>
            <Col sm={4}>
              <div className="image-sizing text-center pdt-20">
                <img src="/images/medsos.svg" alt="sort-icon" />
              </div>
              {/* CATEGORIES */}
              <Categories />
            </Col>
          </Row>
          <Row>
            {/* HOT-DEALS & BLOG */}
            <Col sm={8}>
              <Info />
              <Vendor />
              <Comment />
            </Col>
            {/* ONLINE-SUPPORT & NEWSLETTER */}
            <Col sm={4}>
              <OnlineSupport />
              <Newsletter />
              <AboutMotor />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
