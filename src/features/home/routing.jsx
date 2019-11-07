import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import { Home } from './components';
import  PrivateRoute  from '../../routes/private-router';


function RoutingHome(props) {
    console.log(props.match.path)
    const{match:{path}}=props;
    
    return(
        <Switch>
            <PrivateRoute path={`${path}`}  component={Home}/>
        </Switch>


    )
    
}

export{
    RoutingHome
}