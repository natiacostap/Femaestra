 
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home.jsx'



const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  
            <Route exact path='/Home' component = {Home}/>
            

        </Switch>
    )
}
export default Routes;