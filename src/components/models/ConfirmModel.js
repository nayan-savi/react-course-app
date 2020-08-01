import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

const ConfirmModel = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        console.log(id)
        setShow(true);
    }
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Course: {props.courseName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you wish to delete this
                course?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Cancel
                </Button>
                <Button variant="btn btn-danger"
                        onClick={() => props.handlerClick(id)}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModel;