import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx'
import Cards from '../components/cardsCarpinteria.jsx'


const buttonStyle = {
    padding: 5,
    backgroundColor: '#9d47f2',
    borderColor: '#9d47f2',
    width: '50%',
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
const tittle ={
    marginTop:'14%'
}



class Carpinteria extends Component {
    render(){
        return(
            <React.Fragment>
                  <Navbar/>
                  <div className=''> 
                  <div className="tittlecarpinteria" style={tittle}>
                    <h5 style={styleTitle}>Oficios > Electricidad</h5>
                    </div>
                    
                    <div className=''> 
                    <Cards/>
                        <div> 
                            <Link className="link"  to="/ofrecedora">  <Buttons style={buttonStyle} title={'Ver mas'}/></Link>
                           
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Carpinteria

