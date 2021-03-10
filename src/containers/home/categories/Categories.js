import React from 'react';
import {
  ListGroup,
} from 'react-bootstrap';
import './Categories.scss';

export default function Categories() {
  function alertClicked() {
    alert('You clicked the ListGroupItem');
  }

  return (
    <>
      <div className="pdt-30">
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item className="bg-light" action href="#link2" disabled>
            <b>CATEGORIES</b>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action onClick={alertClicked}>
            Cars | 2.687
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            Trucks     | 724
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            Motorbikes | 290
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            Buses | 147
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            Campers | 89
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}
