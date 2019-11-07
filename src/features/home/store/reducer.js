import { initialState } from './state';
import { GET_DATA_MENTORS } from "./constants";

function allMentorsData(state, action) {
    const {
        payload: data
    } = action;

    return Object.assign({}, state, {
        data
    });
}


function MentorsReducers(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_MENTORS:
            return allMentorsData(state, action);

        default:
            return state;
    }
}

export {
    MentorsReducers
}