import {
    initialState
} from "./state";
import {
    FIND_SUGGESTIONS,
} from "./constants";

function suggestionsReducer(state = initialState, action) {
    switch (action.type) {
        case FIND_SUGGESTIONS:
            if(!action.payload[1]){
                return [];
            }
            const regex = new RegExp(`^${action.payload[1]}` , 'i');
            return action.payload[0].filter(n => regex.test(n.name));
        default: return state;
    }
}

export {
    suggestionsReducer,
}