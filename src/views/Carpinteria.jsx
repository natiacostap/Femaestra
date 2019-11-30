import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'
import Cards from '../components/cardsCarpinteria.jsx'


const styleTitle = {
    textAlign: 'center',
    color: 'black',
    marginTop:'7%'

}

const styleTitle2 = {
    textAlign: 'center',
    color: 'green',
    marginTop:'5%',
    marginBottom :'3%'

}





class Carpinteria extends Component {
    render(){
        return(
            <React.Fragment>
                  <Navbar/>
                  <div className='container' > 
                  <div className="tittlecarpinteria">
                  <h4 style={styleTitle}>Resultados</h4>
                    <h5 style={styleTitle2}>Oficios > Electricidad</h5>
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

