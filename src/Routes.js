 
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home.jsx'
import MenuOficios from './views/MenuOficios.jsx';
import Carpinteria from './views/Carpinteria'
import Ofrecedora from './views/ofrecedora.jsx'



const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  
            <Route exact path='/Home' component = {Home}/>
            <Route exact path='/buscar' component = {MenuOficios}></Route>
            <Route exact path='/carpinteria' component = {Carpinteria}></Route>
            <Route exact path='/ofrecedora' component = {Ofrecedora}></Route>

            

        </Switch>
    )
}
export default Routes;