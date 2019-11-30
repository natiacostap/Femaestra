import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'
import Cards from '../components/cardsCarpinteria.jsx'



const styleTitle2 = {
    textAlign: 'center',
    color: 'green',
    marginTop:'5%',
    marginBottom :'3%',
    fontFamily: "Post No Bills Jaffna Regular",
}


class Carpinteria extends Component {
    render(){
        return(
            <React.Fragment>
                  <Navbar/>
                  <div className='container' > 
                  <div className="tittlecarpinteria">
                    <h5 style={styleTitle2}>Oficios > Carpintería</h5>
                    </div>
                    
                    <div className='row'> 
                    <Cards/>
                        <div> 
                           
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Carpinteria

