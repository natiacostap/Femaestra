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
    color: '#53AA3E',
    fontFamily: "Post No Bills Jaffna Bold",
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: '-5%',
}

const subTitle = {
    textAlign : 'center',
    color: '#A944E8',
    fontFamily: "Post No Bills Jaffna Regular",
    marginTop: "-6%"

}
const buttonStyle = {
    fontFamily: "Post No Bills Jaffna Bold",
    background: 'linear-gradient(180deg, #A944E8 0%, rgba(255, 255, 255, 0) 100%), #681A98',
    width: 250,
    height:50,
    borderRadius: 28,
    color: '#fff',
    fontWeigth: 'bold',
    fontSize: 22,
    marginBottom: 5,
}



class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div className='container-fluid'> 
                    <img className='img-fluid' style={logoStyle} src={require('../img/amigas.png')}></img>
                    <h1 style={titleStyle}>FEMAESTRA</h1>
                    <h5 style={subTitle} >mujeres para mujeres</h5>
                    <div style={{paddingTop: 5}} className=' row justify-content-center'>
                        <Link className="link"  to="/buscar"> <Buttons style={buttonStyle} title={'Buscar'}/> </Link>
                        <Link className="link"  to="/ofrecer"> <Buttons style={buttonStyle} title={'Ofrecer'}/> </Link>
                        <Link className="link"  to="/eventos"> <Buttons style={buttonStyle} title={'Talleres'}/> </Link>
                    </div>
                    <div className='row justify-content-center' style={{paddingTop: 10}}> 
                   
                        <a style={{color:'#53AA3E'}}>Crear cuenta</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home

