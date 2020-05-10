import {ADD_TO_CART, REMOVE_FROM_CART, ERROR} 
     from '../actions/types';
import {addItem} from '../functions/cartFunctions';

const initialState = {
   cart:[],
   
  
}

export default function(state=initialState, action){

    switch(action.type){
       
        case ADD_TO_CART:
            const newCart = addItem([...state.cart],{...action.payload});
           
           return{
                ...state,
               ...newCart
                
            }
            break;

        case REMOVE_FROM_CART:
            return{
                ...state,
               cart:[...state.cart.filter(item=> item.id !== action.payload)]
                
            }
            break;
        
            case ERROR:
                return{
                    ...state,
                   error: action.payload.error
                   
                    
                }
                break;
            
      
     
         
        default: return state

    }
}

