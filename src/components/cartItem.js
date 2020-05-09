import React from 'react';

function cartItem({item, removeItemFromCart}) {
    return (
        <div className="row">
            <p>{`${item.manufacturer} ${item.model}`}</p> 
              <button type="button"  onClick={()=>removeItemFromCart(item.id)} className="close"  aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <hr />
        </div>

    )
}

export default cartItem;
