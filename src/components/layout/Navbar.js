import React, {useState}from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import CartModal from '../cartModal';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import {connect} from 'react-redux';


function Navbar({size}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
   
  };

  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <a className="navbar-brand" href="#">Vehicles</a>
       
        <div className="navbar-links justify-content-end">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              
              <CartModal isOpen={isOpen} hideModal={hideModal}/>
              
              <a onClick={showModal} className="nav-link" target = "_blank" >
              <NotificationBadge count={size} effect={Effect.SCALE}/>
                <FaShoppingCart  className="cart-icon badge"/></a>
                  
              
            </li>
            
            
          </ul>
        </div>
      </nav>)
}

const mapStateToProps = (state) =>({
 size: state.cart.cart.length
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);