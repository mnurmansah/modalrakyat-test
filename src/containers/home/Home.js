import React from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';

import './Home.scss';
import HomeSearch from './home_search/HomeSearch';
import HotDeals from './hot_deals/HotDeals';
import Blog from './blog/Blog';
import OnlineSupport from './online_support/OnlineSupport';
import Categories from './categories/Categories';
import Newsletter from './newsletter/Newsletter';
import AboutMotor from './about_motor/AboutMotor';

export default function Home() {
  return (
    <>
      <hr />
      <div className="text-center">
        <img src="/images/banner.svg" alt="" className="banner" />
      </div>
      <div className="pd-0">
        <Container>
          <Row>
            <Col sm={8}>
              {/* HOME-SEARCH */}
              <HomeSearch />
            </Col>
            <Col sm={4}>
              <div className="image-sizing text-center">
                <img src="/images/medsos.svg" alt="sort-icon" />
              </div>
              {/* CATEGORIES */}
              <Categories />
            </Col>
          </Row>

          <Row>
            {/* HOT-DEALS & BLOG */}
            <Col sm={8}>
              <HotDeals />
              <Blog />
            </Col>

            {/* ONLINE-SUPPORT & NEWSLETTER */}
            <Col sm={4}>
              <OnlineSupport />
              <Newsletter />
              <AboutMotor />
            </Col>
          </Row>

        </Container>
        <div className="text-center">
          <img src="/images/lorem.svg" alt="" className="lorem" />
        </div>
      </div>
    </>
  );
}
