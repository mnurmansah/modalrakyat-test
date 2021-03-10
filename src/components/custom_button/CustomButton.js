import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './CustomButton.scss';

const CustomButton = ({
  onClick, text, disabled, className, fluid,
}) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    className={`custom-button${fluid ? 'fluid' : ''} ${className}`}
  >
    { text }
  </Button>
);

CustomButton.defaultProps = {
  disabled: false,
  className: '',
  fluid: false,
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

export default CustomButton;
