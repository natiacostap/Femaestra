import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom';


const buttonStyle = {
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: '#9d47f2',
    borderColor: '#9d47f2',
    width: '45%',
    borderRadius: 28,
    color: '#fff',
    fontWeigth: 'bold',
    fontSize: 22,
    marginBottom: 20,
    marginRight: 8
}

const styleTitle = {
    textAlign: 'center',
    color: 'green',

}



class Electricidad extends Component {
    render(){
        return(
            <React.Fragment>
                  <Navbar/>
                  <div className='container'> 
                    <h1 style={styleTitle}>Oficios</h1>
                    <div className='row'> 
                        <div> 
                            <h1>Hola</h1>
                           
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Electricidad

