import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons.jsx'


const styleImg = {
    width:'40%' ,
    height: '100%',
    marginLeft:'30%'
}
const name = {
  fontFamily: "Post No Bills Jaffna Bold",
  color:'#681A98'

}
const styleText = {
    fontSize : '97%',
    fontFamily: "Post No Bills Jaffna Regular",

}

const buttonStyle = {
  background: 'linear-gradient(180deg, #A944E8 0%, rgba(255, 255, 255, 0) 100%), #681A98',
  width: 100,
  height: 40,
  borderRadius: 28,
  color: '#fff',
  fontWeigth: 'bold',
  fontSize: 20,
  marginBottom: 5,
  fontFamily: "Post No Bills Jaffna Bold",
  marginLeft: 110
}
 

class Cards extends Component {
    render(){
        return(
           <React.Fragment>
             <div className="card mb-3 container" >
  <div className="row no-gutters">
    <div className="col-md-4"  >
    <img src={require('../img/carnet.jpeg')} style={styleImg} className="card-img-top" alt="..." />
    </div>
    <div className="">
      <div className="card-body" >
        <h5 style={name} className="card-title text-center">Antonia Zamorano</h5>
        <p className="card-text text-center" style={styleText}>Trabajo principalmente el reciclaje de muebles llevando a lo material la idea de mis clientas</p>
        <Link className="link" to="/ofrecedora"> <Buttons style={buttonStyle} title={'Ver más'}/></Link>

      </div>

    </div>
  </div>
</div>  
<div className="card mb-3 mt-5" >
  <div className="row no-gutters">
    <div className="col-md-4"  >
    <img src='https://img.freepik.com/foto-gratis/mujer-carpintera-sierra-metales-cortando-tablas-taller_108611-18.jpg?size=626&ext=jpg' style={styleImg} className="card-img-top" alt="..." />
    </div>
    <div className="">
      <div className="card-body">
        <h5 style={name} className="card-title text-center">Carolina Gonzalez</h5>
        <p className="card-text text-center" style={styleText}>Reciclo muebles antiguos y los restauro . Trabajo principalmente en el sector oriente</p>
        <Link className="link"  to="/ofrecedora">  <Buttons style={buttonStyle} title={'Ver más'}/></Link>

      </div>

    </div>
  </div>
</div>  

               
           </React.Fragment>
        )
    }
}
export default Cards
