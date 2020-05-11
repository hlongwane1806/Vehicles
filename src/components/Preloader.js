import React from 'react';
import Loading from '../data/relocate.gif';
function Preloader() {
    return (
        <div>
            <div className="container preloader ">
                <div className="row ">
                    <div className="col col-sm-12 col-md-12 col-lg-12">
                        <img className ="img-responsive img-preloader" src={Loading} alt="Preloader"/>   
                        <h4 className="preloader-title text-center"> Loading...</h4>
           </div></div>   
                    </div>
                         
        </div>
    )
}

export default Preloader;
