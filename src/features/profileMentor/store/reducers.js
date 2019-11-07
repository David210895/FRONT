import { initialState } from './state';
import { FIND_RESULTS } from "./constants";

function resultsReducer(state = initialState, action) {
    switch (action.type) {
        case FIND_RESULTS:
            if(!action.payload[1]){
                return [];
            }
            console.log('TEXTO A BUSCAR: ',action.payload[1])
            console.log('ARREGLOX BUSCAR: ',action.payload[0])
            const regex = new RegExp(`^${action.payload[1]}` , 'i');
            return action.payload[0].filter(n => regex.test(n.name));
        default: return state;

    }
}

export {
    resultsReducer
}