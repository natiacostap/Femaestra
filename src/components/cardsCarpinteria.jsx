import React, { Component } from 'react';


const styleImg = {
    width:'40%' ,
    height: '100%'
}
const body = {
    padding : '4%'
}
const styleText = {
    fontSize : '80%'
}

class Cards extends Component {
    render(){
        return(
           <React.Fragment>
             <div className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-md-4"  >
      <img style={styleImg} src="https://st2.depositphotos.com/5647624/11403/i/450/depositphotos_114034622-stock-photo-woman-mason-hold-red-brick.jpg" class="card-img" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body" style={body}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text" style={styleText}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>  
               
           </React.Fragment>
        )
    }
}
export default Cards
