import React from "react";
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'

export default function StallDetailModal({stall, show, handleClose}){
    return(
        <>
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"   
            keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{stall.stallname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={stall.stallpic} alt="Stall Photo" fluid={true}/>
                    <p>{stall.description}</p>
                    <p>{stall.category}</p>
                </Modal.Body>
                <Modal.Footer>
                <button onClick={handleClose}>
                    Close
                </button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
