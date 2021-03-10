import React from 'react';
import {
  Card, Row, Col, Form, Button,
} from 'react-bootstrap';
import './Comment.scss';

const Comment = () => (
  <>
    <div className="info pdt-30 pdb-30">
      <Card>
        <Card.Header className="bg-light">
          <b className="fc">COMMENTS</b>
        </Card.Header>
        <form>
          <Card.Body>
            <Row>
              <Col sm={8}>
                <Form.Group>
                  <Form.Control as="textarea" placeholder="Enter your comment" rows={4} />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <div className="d-flex align-left">
                  <div className="pdt-10"><img src="../images/vendor.svg" width="50" height="50" className="image" /></div>

                  <p className="mgl-10 font-weight-bold fs-12 pdt-10">
                    John S. Doe
                  </p>
                </div>
                <div className="text-center pdt-15">
                  <Button className="button-comment btn btn-danger">LEAVE COMMENTS</Button>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <div className="d-flex align-left">
                  <div className="pdt-10"><img src="../images/vendor.svg" width="100" height="100" className="image" /></div>
                  <p className="mgl-15 font-weight-bold fs-12 pdt-10">
                    John S. Doe
                    <br />
                    <p className="fs-10"><i>5 hours ago</i></p>
                    <p className="font-weight-normal fs-12 pdt-5">
                      Ut in magna eget felis sodales ultrices. Aenean libero lacus, euismod sed tempus ut,
                      vulputate ut nulla. Nulla facilisi. Pellentesque quam elementum consectetur quis nec
                      purus.
                    </p>
                  </p>
                </div>
              </Col>
              <p className="pdt-10 mgr-20">
                <a href="" className="link">Reply</a>
              </p>
            </Row>
            <Row>
              <Col>
                <div className="d-flex align-left">
                  <div className="pdt-10"><img src="../images/cars-product/avatar-comment/avatar-comment1.svg" width="100" height="100" className="image" /></div>
                  <p className="mgl-15 font-weight-bold fs-12 pdt-10">
                    Alex Greenwood
                    <br />
                    <p className="fs-10"><i>6 hours ago</i></p>
                    <p className="font-weight-normal fs-12 pdt-5">
                      Ut in magna eget felis sodales ultrices. Aenean libero lacus, euismod sed tempus ut,
                      vulputate ut nulla. Nulla facilisi. Pellentesque quam elementum consectetur quis nec
                      purus.
                    </p>
                  </p>
                </div>
              </Col>
              <p className="pdt-10 mgr-20">
                <a href="" className="link">Reply</a>
              </p>
            </Row>
            <Row>
              <Col>
                <div className="d-flex align-left">
                  <div className="pdt-10"><img src="../images/cars-product/avatar-comment/avatar-comment2.svg" width="100" height="100" className="image" /></div>
                  <p className="mgl-15 font-weight-bold fs-12 pdt-10">
                    Alice Fork
                    <br />
                    <p className="fs-10"><i>1 day ago</i></p>
                    <p className="font-weight-normal fs-12 pdt-5">
                      Ut in magna eget felis sodales ultrices. Aenean libero lacus, euismod sed tempus ut,
                      vulputate ut nulla. Nulla facilisi. Pellentesque quam elementum consectetur quis nec
                      purus.
                    </p>
                  </p>
                </div>
              </Col>
              <p className="pdt-10 mgr-20">
                <a href="" className="link">Reply</a>
              </p>
            </Row>
          </Card.Body>
          <div className="text-center pdt-5 pdb-30">
            <Button className="button-seecomment btn btn-danger">SEE ALL 26 COMMENTS</Button>
          </div>
        </form>
      </Card>
    </div>
  </>
);

export default Comment;
