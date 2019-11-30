import Buttons from '../components/Buttons.jsx'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const photo = {
    width: '20%',
    heigth: '20%',
    alignContent: 'center',
    marginLeft: '2%',
    
}
const subTitle = {
    textAlign: 'center',
    fontWeight: 900,
    color: '#551396',
}
const titleStyle = {
    
    marginTop: '30%',
}
const divd={
    marginTop:'10%',
    marginBotton:'10%'
}


class Ofrecedora extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="media"style={divd} >
                    <img s src={require('../img/maestra.jpeg')} class="align-self-start mr-3" alt="..." />
                    <div className="media-body">
                        <h5 className="mt-0">Antonia Alvarez </h5>
                        

                    </div>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <img src={require('../img/cama.jpeg')} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
  </div>
                        <div className="card">
                            <img src={require('../img/cocina.jpeg')} className="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
  </div>
                            <div className="card">
                                <img src={require('../img/velador.jpeg')} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
  </div>
                            </div>
          </React.Fragment>
                        )
                    }
                }
                
                export default Ofrecedora
