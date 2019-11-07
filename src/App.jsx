import React,{Component} from 'react';
import { RoutingRoot } from './routes';
import { Provider } from 'react-redux';
import {store,saveState} from './store';


class App extends Component{

    render(){
        return (
            <Provider store={store}>
                <RoutingRoot />
            </Provider>
    
        );
    }
}

export { App};
