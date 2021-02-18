import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as PropTypes from 'prop-types';

const DeleteModal = (props) => {
  const { document, onToggle, onYes } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    if (onToggle) {
      onToggle();
    }
    setModal(!modal);
  };

  useEffect(() => {
    if (document) {
      setModal(true);
    }
  }, [document]);

  return (
    <div>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirm</ModalHeader>
        <ModalBody>Do you want to delete this document #{document && document.id}?</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              onYes(document.id);
              toggle();
            }}
          >
            Yes
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

DeleteModal.propTypes = {
  document: PropTypes.object,
  onToggle: PropTypes.func,
  onYes: PropTypes.func,
};

export default DeleteModal;
