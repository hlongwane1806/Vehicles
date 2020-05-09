export const addItem =(cart, newItem)=>{
  let newCart = [...cart];
  let findItem = newCart.filter(item=> item.id === newItem.id);
    if(findItem.length === 0){
        newCart = [...newCart, newItem];
        return {
            cart: newCart,
            
            
        }
    }
   
    return {
        cart: newCart,
        error:{
            name:'',
            message:`You have already added the ${newItem.manufacturer} ${newItem.model} to the cart. 
                        You can only add one of each vehicle.`
        }
        
    };
} 

