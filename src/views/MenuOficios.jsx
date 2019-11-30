import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx'


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



class MenuOficios extends Component {
    render(){
        return(
            <React.Fragment>
                  <Navbar/>
                  <div className='container'> 
                    <h1 style={styleTitle}>Oficios</h1>
                    <div className='row'> 
                        <div> 
                            <Link className="link"  to="/carpinteria"><Buttons style={buttonStyle} title={'Electricidad'}/></Link>
                            <Link className="link"  to="/construccion"><Buttons style={buttonStyle} title={'Consturcción'}/></Link>
                            <Link className="link"  to="/gastiferia"><Buttons style={buttonStyle} title={'Gastiferia'}/></Link>
                            <Link className="link"  to="/automovil"><Buttons style={buttonStyle} title={'Automóvil'}/></Link>
                            <Link className="link"  to="/soporte"><Buttons style={buttonStyle} title={'Soporte '}/></Link>
                            <Link className="link"  to="/pisos"><Buttons style={buttonStyle} title={'Pisos'}/></Link>
                            <Link className="link"  to="/jardineria"><Buttons style={buttonStyle} title={'Jardineria'}/></Link>
                            <Link className="link"  to="/electricidad"><Buttons style={buttonStyle} title={'Carpinteria'}/></Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default MenuOficios

