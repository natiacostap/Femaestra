 
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home.jsx'
import MenuOficios from './views/MenuOficios.jsx';
import Electricidad from './views/Electricidad.jsx'



const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  
            <Route exact path='/Home' component = {Home}/>
            <Route exact path='/buscar' component = {MenuOficios}></Route>
            <Route exact path='/electricidad' component = {Electricidad}></Route>

            

        </Switch>
    )
}
export default Routes;