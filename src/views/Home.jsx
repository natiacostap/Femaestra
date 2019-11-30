import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx'


const logoStyle = {
    width: '100%',
    alignContent: 'center',
    justiftyContent: 'center'
}
const titleStyle = {
    textAlign : 'center',
    fontWeight: 800,
    color: '#551396',
}

const subTitle = {
    textAlign : 'center',
    fontWeight: 900,
    color: '#551396',
}
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



class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div className='container-fluid'> 
                    <img className='img-fluid' style={logoStyle} src={require('../img/amigas.png')}></img>
                    <h1 style={titleStyle}>FEMAESTRA</h1>
                    <h5 style={subTitle} >mujeres para mujeres</h5>
                    <div style={{paddingTop: 10}}>
                        <Link className="link"  to="/buscar"> <Buttons style={buttonStyle} title={'Buscar'}/> </Link>
                        <Link className="link"  to="/ofrecer"> <Buttons style={buttonStyle} title={'Ofrecer'}/> </Link>
                        <Link className="link"  to="/eventos"> <Buttons style={buttonStyle} title={'Eventos'}/> </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home

