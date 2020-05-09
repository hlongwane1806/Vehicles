import {ADD_TO_CART,REMOVE_FROM_CART, ERROR} from './types';


export const addItemToCart = (item)=> dispatch => {
      
       return dispatch({
            type:ADD_TO_CART,
            payload: item
        })
    
    
   
    
    
}

export const removeItemFromCart = (id) => dispatch =>{
    
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
    
}

export const clearError = ()=> dispatch =>{
    dispatch({
        type:ERROR,
        payload:{
            error: ''
        }
    })

}




