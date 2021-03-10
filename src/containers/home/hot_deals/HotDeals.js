import React, { Component } from 'react';

import {
  Row, Col, Card,
} from 'react-bootstrap';
import './HotDeals.scss';

class HotDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nissan Qashqai',
      year: '2005',
      view: '1,6',
      price: '$25000',
      src1: './images/cars-home/nissan1.svg',
      src2: './images/cars-home/nissan2.svg',
      src3: './images/cars-home/nissan3.svg',
      src4: './images/cars-home/nissan4.svg',
      src_tgl: './images/cars-home/icon/icon-tgl.svg',
      src_v: './images/cars-home/icon/icon-v.svg',
    };
  }

  render() {
    return (
      <>
        <div className="card mgt-31">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#"><h6><b>USED</b></h6></a>
              </li>
              <li className="nav-item mgl-10">
                <a className="nav-link" href="#"><h6><b>NEW</b></h6></a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <Row>
              <Col>
                <div className="pdr-10">
                  <div>
                    <img src={this.state.src1} width="319" height="250" className="image" />
                  </div>
                  <Card.Body>
                    <div className="pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} width="20" height="20" className="image" />
                        {this.state.year}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_v} width="20" height="20" className="image" />
                        {this.state.view}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.price}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className="">
                      <img src={this.state.src2} width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} width="20" height="20" className="image" />
                        {this.state.year}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_v} width="20" height="20" className="image" />
                        {this.state.view}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.price}
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pdt-20">
                      <img src={this.state.src3} width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdt-20 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} width="20" height="20" className="image" />
                        {this.state.year}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_v} width="20" height="20" className="image" />
                        {this.state.view}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.price}
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pdt-20">
                      <img src={this.state.src4} width="150" height="150" className="image" />
                    </div>
                  </Col>
                  <Col>
                    <div className="pdt-20 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.name}
                      </Card.Text>
                    </div>
                    <div className="pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_tgl} width="20" height="20" className="image" />
                        {this.state.year}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-normal fs-12">
                        <img src={this.state.src_v} width="20" height="20" className="image" />
                        {this.state.view}
                      </Card.Text>
                    </div>
                    <div className="pdt-8 pdr-5">
                      <Card.Text className="text-left font-weight-bold fs-12">
                        {this.state.price}
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
export default HotDeals;
