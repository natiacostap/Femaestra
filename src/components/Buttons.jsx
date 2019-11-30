import React, { Component } from 'react';

const buttonStyle = {
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: '#551396',
    width: '80%',
    borderRadius: 10,
    color: '#9d47f2',
    fontWeigth: 'bold',
    fontSize: 22,
    marginBottom: 8
}

class Buttons extends Component {
    render(){
        return(
           <React.Fragment>
               <button style={buttonStyle}>
               {this.props.title}
               </button>
           </React.Fragment>
        )
    }
}
export default Buttons
