import React from 'react';

function cartItem({item, removeItemFromCart}) {
    return (
        <li class="list-group-item">
            {`${item.manufacturer} ${item.model}`}
              <button type="button"  onClick={()=>removeItemFromCart(item.id)} className="close"  aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
       
       </li>

    )
}

export default cartItem;
