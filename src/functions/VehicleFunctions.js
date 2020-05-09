//initialize states 
export const initialize = (vehicles)=>{
    
    let manufacturers = getUnique(vehicles, 'manufacturer');
    let bodyStyles = getUnique(vehicles, 'body');
    

    return{
        manufacturers,
        bodyStyles,
        
    }
}


//vehicle filter functions

export const filterVehicles = ({vehicles, priceFrom,  priceTo, manufacturer, body}) =>{
   
            let tempVehicles =[...vehicles];
            //filter by manufacturer
            if(manufacturer !== 'Any') {
                tempVehicles = tempVehicles.filter(vehicle=> vehicle.manufacturer === manufacturer);
            }
            //filter by body style
            if(body !== 'Any') {
                tempVehicles = tempVehicles.filter(vehicle=> vehicle.body=== body);
            }

            //filter by Price
            tempVehicles = tempVehicles.filter(vehicle=> vehicle.price <=priceTo && vehicle.price >=priceFrom)


            return tempVehicles;
    


}

const getUnique = (items, value)=>{
    //return an array with 'any' option and unique set of values
    return ['Any',...new Set(items.map(item=>item[value]))]
}