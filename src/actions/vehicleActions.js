import {FETCH_VEHICLES, FILTER_VEHICLES} from './types';
import axios from 'axios';


export const getVehicles = ()=> dispatch => {
  axios.get('https://warpfrontendtestserver.herokuapp.com/v1/vehicles')
    .then(response =>{
       return dispatch({
            type:FETCH_VEHICLES,
            payload:response.data.data
        })
    })
    .catch(error => console.log(error));


    
}



export const filterVehicles = (name, value) => dispatch =>{
   
    dispatch({
        type:FILTER_VEHICLES,
        payload: {
            name,
            value
        }     
    });
  

}

