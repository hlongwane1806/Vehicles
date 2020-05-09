import React from 'react';
import Modal from "react-bootstrap/Modal";
import {connect} from 'react-redux';
import {removeItemFromCart} from '../actions/cartActions';
import CartItem from './cartItem';

function cartModal({ isOpen, hideModal, cart, removeItemFromCart }) {
 
    return (
        <div>
           
      
      <Modal show={isOpen} onHide={hideModal}>
        <div className="modal-header">
            <h5 className="modal-title ">
                Cart
                </h5>
                <button type="button"  onClick={hideModal} className="close"  aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div className="modal-body">
            {cart.length === 0 ? <p>Cart is empty</p>
            :
            cart.map(item => <CartItem key={item.id}  item={item} removeItemFromCart={removeItemFromCart}/> )

            }
              
                </div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={hideModal}>Close</button>
          
        </div>
      </Modal>
   
        </div>
    )
}

const mapStateToProps = (state) =>({
    ...state.cart
});

const mapDispatchToProps = {removeItemFromCart};
export default connect(mapStateToProps, mapDispatchToProps)(cartModal);
