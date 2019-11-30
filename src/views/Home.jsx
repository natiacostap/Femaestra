import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'
import Buttons from '../components/Buttons.jsx'

const logoStyle = {
    width: '70%',
    alignContent: 'center'
}
const titleStyle = {
    textAlign : 'center',
    fontWeight: 900,
    color: '#551396',
    paddingBottom: 0
}

const subTitle = {
    textAlign : 'center',
    fontWeight: 900,
    color: '#551396',
    paddingTop: '-10%'
}



class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className='container'> 
                    <img className='img-fluid' style={logoStyle} src={require('../img/lo(2).png')}></img>
                    <h1 style={titleStyle}>FEMAESTRA</h1>
                    <h5 style={subTitle} >mujeres para mujeres</h5>
                    <div style={{paddingTop: 20}}>
                        <Buttons title={'Buscar'}/>
                        <Buttons title={'Ofrecer'}/>
                        <Buttons title={'Eventos'}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home

