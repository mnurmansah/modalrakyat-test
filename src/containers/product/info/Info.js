import React from 'react';
import {
  Card,
} from 'react-bootstrap';
import './Info.scss';

const Info = () => (
  <>
    <div className="info pdt-30">
      <Card>
        <Card.Header className="bg-light">
          <b className="fc">INFO</b>
        </Card.Header>
        <Card.Body>
          <p className="font-weight-bold fs-12">
            Lorem ipsum dolor sit amet
          </p>
          <p className="font-weight-normal fs-12">
            {' '}
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
            enim. DOnec pede justo, fringilla vel, aliquet nec. vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
            tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo liqula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibusin.
            in. viverra quis, feugiat a, tellus. Phaselius viverra nulla ut metus varius fadreet.
          </p>
          <p className="font-weight-bold fs-12 pdt-20">
            Maecenas nec odio et ante
          </p>
          <p className="font-weight-normal fs-12">
            {' '}
            - Donec quam felis, ultricies nec
            - Pellentesque eu, pretium quis, sem. Nulla consequat massa quis, enim
            - DOnec pede justo, fringilla vel, aliquet nec. vulputate eget, arcu
            - In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo
            - Nullam dictum felis eu pede mollis pretium. Integer tincindunt.
          </p>

        </Card.Body>
      </Card>
    </div>
  </>
);

export default Info;
