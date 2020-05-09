import React , { useEffect} from 'react';
import Layout from '../components/layout'
import SearchBar from '../components/searchBar';
import Vehicles from '../components/vehicles';
import {connect} from 'react-redux';
import {getVehicles, setLoading, filterVehicles} from '../actions/vehicleActions';
import Loading from '../data/relocate.gif';



function Home(props) {
   
  useEffect(()=>{
        
       props.getVehicles();
      }, []);
   
    return( <Layout>
        { props.loading?
       <div className="container"><div className="row">
           <img src={Loading} />
           </div></div>
        
        :<div className="container-fluid">
                 <div className="row mt-6">
            <h2>Browse Vehicles</h2>
        </div>
   <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3 ">
                    <SearchBar {...props}/>
                </div>
                <div className="col sm-12 col-md-9 col-lg-9 ">
              
                
                    <Vehicles vehicles={props.filteredVehicles} />
                
                   
                </div>
            </div>
        </div>
        

        
    }
    </Layout>
    )
            
        
    
}
const mapStateToProps = (state) =>({
    ...state.data
});

const mapDispatchToProps = {getVehicles, setLoading, filterVehicles};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
