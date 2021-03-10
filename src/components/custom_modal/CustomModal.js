import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import './CustomModal.scss';

const CustomModal = ({
  show, children, backdrop, onHide, className,
}) => (
  <Modal
    show={show}
    dialogClassName="custom-modal"
    backdrop={backdrop ? 'static' : true}
    onHide={onHide}
    className={className}
  >
    { children }
  </Modal>
);

CustomModal.defaultProps = {
  backdrop: false,
  onHide: () => {},
  className: '',
};

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  backdrop: PropTypes.bool,
  onHide: PropTypes.func,
  className: PropTypes.string,
};

export default CustomModal;
