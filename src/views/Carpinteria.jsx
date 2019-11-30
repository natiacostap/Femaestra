import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx'


const buttonStyle = {
    padding: 5,
    backgroundColor: '#9d47f2',
    borderColor: '#9d47f2',
    width: '100%',
    borderRadius: 28,
    color: '#fff',
    fontWeigth: 'bold',
    fontSize: 22,
    marginBottom: 5
}

const styleTitle = {
    textAlign: 'center',
    color: 'green',

}



class Carpinteria extends Component {
    render(){
        return(
            <React.Fragment>
                  <Navbar/>
                  <div className='container'> 
                    <h1 style={styleTitle}>Oficios</h1>
                    <div className='row'> 
                        <div> 
                            <h1>Hola</h1>
                            <Link className="link"  to="/ofrecedora">  <Buttons style={buttonStyle} title={'Ver mas'}/></Link>
                           
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Carpinteria

