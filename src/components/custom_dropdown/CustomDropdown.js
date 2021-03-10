import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import './CustomDropdown.scss';

const CustomDropdown = ({
  className, toggleText, dropDirection,
}) => (
  <Dropdown
    drop={dropDirection}
    className={`custom-dropdown ${className}`}
  >
    <Dropdown.Toggle
      className="text-left d-flex justify-content-between align-items-center fs-14 pdy-12"
    >
      { toggleText }
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item className="pd-12 fs-14" href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item className="pd-12 fs-14" href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item className="pd-12 fs-14" href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

CustomDropdown.defaultProps = {
  className: '',
  toggleText: '',
  dropDirection: '',
};

CustomDropdown.propTypes = {
  className: PropTypes.string,
  toggleText: PropTypes.string,
  dropDirection: PropTypes.string,
};

export default CustomDropdown;
