import React, {useState, useEffect}  from 'react'
import { Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';

const API = process.env.REACT_APP_FLASK_API;

const Product = (props) => {

    const{product} = props;

    const [modalState, setModal] = useState(false);

    const handleClose = () => setModal(false);
    const handleShow = () => setModal(true);


    const deleteProduct = async (_id) => {
        await fetch(`${API}/product/${_id}`,{
            method: 'DELETE'
        })
        props.getProds();
    }

    return(
        <div className="d-flex pt-2">
            <button className="rounded list-group-item list-group-item-action flex-column d-flex align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{product.name}</h5>
                    <small>{product.price} $</small>
                </div>
                <p className="mb-1">{product.description}</p>
                <small>Donec id elit non mi porta.</small>
            </button>
            <div className="flex-column pl-2">
                <button type="button" className="d-flex w-100 btn btn-secondary" onClick={handleShow}>modify</button>
                <p></p>
                <button type="button" onClick={() => deleteProduct(product._id)} className="d-flex w-100 btn btn-danger">delete</button>
            </div>
            <Modal show={modalState} onHide={handleClose}>
                
                <ModalHeader closeButton>
                    Hello Modal {product.name}
                </ModalHeader>
            </Modal>   
        </div>
        
    )
}
export default Product