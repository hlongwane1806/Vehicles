import React from 'react';
import Vehicle from './vehicle';
import {connect} from 'react-redux';
import {addItemToCart, clearError} from '../actions/cartActions';
import ErrorAlert from './alerts/errorAlert';
import Scrollbar from "react-scrollbars-custom";
function Vehicles({vehicles, addItemToCart, error, clearError}) {
    
    return (<>
        <h5>Found: {vehicles.length}</h5>
         {error?
                       <ErrorAlert error={error} clearError={clearError} />:''
            }
        <Scrollbar className="scroll">
        <div className="container container-fluid mb-6">
           
                     
           { vehicles.map((vehicle) => <Vehicle key={vehicle.id} vehicle={vehicle} addItemToCart={addItemToCart} error={error}/> )      
             }
             
        </div>
        </Scrollbar></>
    )
}



const mapStateToProps = (state) =>({
    ...state.cart
});

const mapDispatchToProps = {addItemToCart, clearError};
export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);