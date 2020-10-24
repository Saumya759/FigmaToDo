import React from "react";
import { Modal, Form } from "react-bootstrap";

const Popup = ({
  handleModal,
  show,
  keyValue,
  data,
  handleInputChange,
  handleClose,
  handleSave,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              id={keyValue}
              value={data}
              rows={3}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <div class="cursor-pointer">
          <Modal.Footer>
            <div className="cancel">
              <button onClick={handleModal}>Cancel</button>
            </div>
            <div className="done">
              <button onClick={handleSave}>Done</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
