import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styleNav = {
    color: '#A944E8',
    fontFamily: "Post No Bills Jaffna Regular",
    fontSize: 30
}
const shadow = {
    boxShadow: '-1px 0px 8px -5px #464646'
}


class Navbar extends Component {
    render(){
        return(
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light" style={shadow}>
                    <Link className="link"  to="/Home"><a class="navbar-brand" style={styleNav} href="#Home">Femestra</a></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#">Buscar</a>
                            <a className="nav-item nav-link" href="#">Ofrecer</a>
                            <a className="nav-item nav-link" href="#">Talleres</a>
                            <a className="nav-item nav-link" style={{color: '#53AA3E'}} href="#">Mi cuenta</a>


                        </div>
                    </div>
                </nav>
              
            </React.Fragment>
        )
    }
}
export default Navbar
