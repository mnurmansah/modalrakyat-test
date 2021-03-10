import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import './CustomSelect.scss';

const CustomSelect = ({
  className, data, loading,
}) => (
  <Form.Group>
    <Form.Control
      as="select"
      custom
      className={`custom-select-component ${className}`}
      disabled={loading}
    >
      {
        data.map((item) => (
          <option value={item.id} key={item.id}>{ item.value }</option>
        ))
      }
    </Form.Control>
  </Form.Group>
);

CustomSelect.defaultProps = {
  className: '',
  loading: true,
};

CustomSelect.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default CustomSelect;
