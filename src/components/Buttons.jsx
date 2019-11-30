import React, { Component } from 'react';

class Buttons extends Component {
    render(){
        return(
           <React.Fragment>
               <button style={this.props.style}>
               {this.props.title}
               </button>
           </React.Fragment>
        )
    }
}
export default Buttons
