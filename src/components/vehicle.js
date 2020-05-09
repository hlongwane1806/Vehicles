import React from 'react';
import defaultImg from '../data/BMW_M3.jpg';

function Vehicle({vehicle, addItemToCart, error}) {
   const image = `https://warpfrontendtestserver.herokuapp.com/public/${vehicle.manufacturer}_${vehicle.model}.jpg`;
  
 
    return (
        <div className="card mb-3 mt-3">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5 ">
                    <img src={image||defaultImg} className="card-img center" alt="Vehicle image" />  
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7 ">
                <div className="card-body">
                    <div className="card-text">
                    <p>Price: {vehicle.price}</p>
                    <p>Make {vehicle.manufacturer}</p>
                    <p>Model {vehicle.model}</p>
                    <p>Body {vehicle.body}</p>
                    
                   <button onClick={()=>addItemToCart(vehicle)} className="btn btn-primary">Add to cart</button>
                    </div>
                    
                </div>
                </div>

                
                
            </div>
            
            </div>
    )
}

export default Vehicle;
