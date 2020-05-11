import {FETCH_VEHICLES,  FILTER_VEHICLES} 
     from '../actions/types';
import {initialize, filterVehicles} from '../functions/VehicleFunctions';

const initialState = {
    vehicles: [],
    filteredVehicles:[],
    manufacturers:[],
    bodyStyles:[],
    body:'Any',
    manufacturer:'Any',
    minPrice:0,
    maxPrice:10000000,
    priceFrom:0,
    priceTo:10000000,
    vehicle: {},
    loading:true,

}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_VEHICLES:
           let initliazeVariables = initialize([...action.payload]);
          
            return{
                ...state,
                vehicles: action.payload,
                filteredVehicles: action.payload,
                ...initliazeVariables,
                loading:false,
          }
            break;

       
       
        case FILTER_VEHICLES:
            const newState = {...state,
                [action.payload.name]: action.payload.value};
                            return{
                                ...newState,
                                filteredVehicles: filterVehicles({...newState}),
                                
                            }
                            break;
         
        default: return state

    }
}

