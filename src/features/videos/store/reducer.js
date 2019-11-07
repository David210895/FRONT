import { initialState } from './state';
import { GET_DATA_COURSES } from "./constants";

function allCoursesData(state, action) {
    const {
        payload: data
    } = action;

    return Object.assign({}, state, {
        data
    });
}


function CoursesReducers(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_COURSES:
            return allCoursesData(state, action);

        default:
            return state;
    }
}

export {
    CoursesReducers
}