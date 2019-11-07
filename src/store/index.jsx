import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
    rootReducers
} from './reducers';

const globlalState=localStorage.getItem('GLOBAL_STATE');
const initialState=globlalState?JSON.parse(globlalState):undefined;
const store=createStore(rootReducers,initialState,composeWithDevTools(applyMiddleware(thunk)));


export{
    store,
}

