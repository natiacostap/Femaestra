import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx'


const buttonStyle = {
    background: 'linear-gradient(180deg, #A944E8 0%, rgba(255, 255, 255, 0) 100%), #681A98',
    width: 160,
    height: 80,
    borderRadius: 28,
    color: '#fff',
    fontWeigth: 'bold',
    fontSize: 26,
    marginBottom: 20,
    marginRight: 8,
    fontFamily: "Post No Bills Jaffna Bold",
   }

const styleTitle = {
    textAlign: 'center',
    color: '#53AA3E',
    fontFamily: "Post No Bills Jaffna Bold",
    fontSize: 38,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
}



class MenuOficios extends Component {
    render(){
        return(
            <React.Fragment>
                  <Navbar/>
               
                    <h1 style={styleTitle}>Oficios</h1>
                    <div className='container'> 
                    <div className='row justify-content-center'> 
                            <Link className="link"  to="/carpinteria"><Buttons style={buttonStyle} title={'Electricidad'}/></Link>
                            <Link className="link"  to="/construccion"><Buttons style={buttonStyle} title={'Construcción'}/></Link>
                            <Link className="link"  to="/gastiferia"><Buttons style={buttonStyle} title={'Gastifería'}/></Link>
                            <Link className="link"  to="/automovil"><Buttons style={buttonStyle} title={'Automotriz'}/></Link>
                            <Link className="link"  to="/soporte"><Buttons style={buttonStyle} title={'Soporte '}/></Link>
                            <Link className="link"  to="/pisos"><Buttons style={buttonStyle} title={'Pintura'}/></Link>
                            <Link className="link"  to="/jardineria"><Buttons style={buttonStyle} title={'Jardinería'}/></Link>
                            <Link className="link"  to="/electricidad"><Buttons style={buttonStyle} title={'Carpintería'}/></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default MenuOficios

