import Buttons from '../components/Buttons.jsx'
import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'


const buttonStyle = {
    background: 'linear-gradient(180deg, #A944E8 0%, rgba(255, 255, 255, 0) 100%), #681A98',
    borderColor: '#9d47f2',
    width: 150,
    height:80,
    borderRadius: 28,
    color: '#fff',
    fontWeigth: 'bold',
    fontSize: 24,
    marginBottom: 10,
    marginRight: 5,
    fontFamily: "Post No Bills Jaffna Bold",
}


const photo = {
    width: '50%',
    higth: 'auto',
    boxShadow: '-1px 0px 10px -3px #464646'
}
const datos = {
    color: '#A944E8',
    fontFamily: "Post No Bills Jaffna Bold",
    fontSize: 20,
    
}

const titleStyle = {
    textAlign: 'center',
    color: '#438B31',
    fontFamily: "Post No Bills Jaffna Bold",
    fontSize: 30
}

class Ofrecedora extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container" >
                    <div className="media" style={{paddingTop:30, paddintBottom: 10}}>
                        <img src={require('../img/carnet.jpeg')} style={photo} classame="align-self-center mr-3 img-fluid" alt="..." />
                        <div className="media-body">
                            <h5 style={titleStyle} className="mt-0">Antonia Zamorano Garcia</h5>
                        </div>
                    </div>
               
              
                    <div style={{paddingTop: 20, paddingBottom: 20}} className='row align-text-center'> 
                        <div className='offset-1 col-10'> 
                            <h4 style={datos}>Comunas</h4>
                            <p>La Florida, Puente Alto, Buin, Macul</p>
                            <h4 style={datos}>Descripcion</h4>
                            <p>Trabajo principalmente el reciclaje de muebles llevando a lo material la idea de mis clientas</p>
                         </div>
                    </div>
                
                <div className="card-deck">
                    <div className="card">
                        <img src={require('../img/cama.jpeg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 style={titleStyle} className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('../img/cocina.jpeg')} className="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 style={titleStyle} className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('../img/velador.jpeg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 style={titleStyle} className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <Buttons style={buttonStyle} title={'Comentarios'} />
                    <Buttons style={buttonStyle} title={'Contactar'} />
                </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Ofrecedora
