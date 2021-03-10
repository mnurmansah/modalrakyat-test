import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import CustomButton from '../custom_button/CustomButton';
import './Error404.scss';

const Error404 = ({ history }) => (
  <>
    <Row>
      <Col className="d-flex flex-column align-items-center justify-content-center pd-28 error-404">
        <img src="/images/ilustrations/404.png" alt="404-illustration" />
        <p className="fs-12 mgy-27">Maaf, Halaman tidak ditemukan</p>
        <CustomButton
          onClick={() => { history.push('/'); }}
          className="custom-button"
          text="Kembali"
        />
      </Col>
    </Row>
  </>
);

Error404.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Error404;
