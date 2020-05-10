import React from 'react';


function searchBar(props) {
  
 
  const onChange =(event)=>{
    event.preventDefault();
    props.filterVehicles(event.target.name, event.target.value)
  }
    const {minPrice,  maxPrice ,manufacturers,manufacturer,body ,bodyStyles, priceFrom, priceTo} =props;
    const step = Math.floor((maxPrice-minPrice)/100);
     
    return (
        <form>
        <div className="form-group">
          
          <label htmlFor="manufacturer">Manufacturer</label>
          <select className="form-control" id="manufacturer" value={manufacturer} onChange={onChange} name="manufacturer">
             {
             manufacturers.map((manu, index) => <option  value ={manu} key={index}> {manu}</option>)
              } 
            </select>
        </div>

      <div className="form-group">
     <label htmlFor="body-style">Body Style</label>
         <select className="form-control" id="body-style" value={body} onChange={onChange} name="body">
          
        {
            bodyStyles.map((body, index) => <option value ={body} key={index}> {body}</option>)
        } </select>
  </div>
        <div className="form-group">
        <label htmlFor="min-price">From: </label>
        
            <input type="number" onChange={onChange} name="priceFrom" value={priceFrom}className="form-control" min={minPrice} max={maxPrice} step={step} id="min-price"/>
        </div>
        <div className="form-group">
        <label htmlFor="max-price">To: </label>
        
            <input type="number" onChange={onChange}  name="priceTo" value={priceTo} className="form-control" min={minPrice} max={maxPrice} step={step} id="max-price"/>
        </div>
            
        
      </form>
       
    )
}

export default searchBar;




 