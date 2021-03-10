/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import {
  Row, Col, Card,
} from 'react-bootstrap';
import './Blog.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Post Title Example',
      date: '25 March, 2013',
      src_25: './images/cars-home/icon/icon-25.svg',
      src_tgl: './images/cars-home/icon/icon-tgl.svg',
      src1: './images/cars-home/cars1-home.svg',
      src2: './images/cars-home/cars2-home.svg',
      src3: './images/cars-home/cars3-home.svg',
      src4: './images/cars-home/cars4-home.svg',
      src5: './images/cars-home/cars5-home.svg',
      src6: './images/cars-home/cars6-home.svg',
      src7: './images/cars-home/cars7-home.svg',
    };
  }

  render() {
    return (
      <>
        <div className="card mgt-31">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs" id="bologna-list" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" href="!#"><h6><b>NEWS</b></h6></a>
              </li>
              <li className="nav-item mgl-10">
                <a className="nav-link" href="!#"><h6><b>OFFERS</b></h6></a>
              </li>
              <li className="nav-item mgl-10">
                <a className="nav-link" href="!#"><h6><b>POPULAR</b></h6></a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <Row>
              <Col>
                <div className="pdr-10">
                  <div className="logo">
                    <img src={this.state.src1} alt="" width="319" height="250" className="image" />
                  </div>
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className="pdt-5 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-16">
                        {this.state.name}
                      </Card.Text>
                      <Card.Text className="text-left font-weight-normal fs-12" disabled>
                        <img src={this.state.src_tgl} alt="" width="20" height="20" className="image" />
                        {this.state.date}
                      </Card.Text>
                      <Card.Text className="text-left font-weight-normal fs-12">
                        Maecenas porta velit consequat orci blandit
                        adipiscing. Vivamus tempor sem vel elit
                        ultriecies convalis. Sed dictum lobortis risus
                        sed fringilla.
                      </Card.Text>
                      <div>
                        <img src={this.state.src_25} alt="" width="40" height="40" className="image" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="card-body">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <div>
                      <img src={this.state.src2} alt="" width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdt-7 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} alt="" width="20" height="20" className="image" />
                        {this.state.date}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text>
                        <div className="logo">
                          <img src={this.state.src_25} alt="" width="40" height="40" className="image" />
                        </div>
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pdt-10">
                      <img src={this.state.src3} alt="" width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} alt="" width="20" height="20" className="image" />
                        {this.state.date}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text>
                        <div className="logo">
                          <img src={this.state.src_25} alt="" width="40" height="40" className="image" />
                        </div>
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pdt-10">
                      <img src={this.state.src4} alt="" width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} alt="" width="20" height="20" className="image" />
                        {this.state.date}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text>
                        <div className="logo">
                          <img src={this.state.src_25} alt="" width="40" height="40" className="image" />
                        </div>
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div>
                      <img src={this.state.src5} alt="" width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdt-7 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} alt="" width="20" height="20" className="image" />
                        {this.state.date}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text>
                        <div className="logo">
                          <img src={this.state.src_25} alt="" width="40" height="40" className="image" />
                        </div>
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pdt-10">
                      <img src={this.state.src6} alt="" width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} alt="" width="20" height="20" className="image" />
                        {this.state.date}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text>
                        <div className="logo">
                          <img src={this.state.src_25} alt="" width="40" height="40" className="image" />
                        </div>
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pdt-10">
                      <img src={this.state.src7} alt="" width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} alt="" width="20" height="20" className="image" />
                        {this.state.date}
                      </Card.Text>
                    </div>
                    <div className="pdt-10 pdr-5">
                      <Card.Text>
                        <div className="logo">
                          <img src={this.state.src_25} alt="" width="40" height="40" />
                        </div>
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
export default Blog;
