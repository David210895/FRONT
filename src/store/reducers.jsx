import { combineReducers } from 'redux';


import { AuthReducer } from "../features/auth/store/reducers";
import { MentorsReducers } from '../features/home/store/reducer';
import { CoursesReducers } from '../features/videos/store/reducer';
import { UserReducer } from '../features/register/store/reducers';
import { suggestionsReducer } from '../components/appBar/store/reducers';
import { resultsReducer } from '../features/profileMentor/store/reducers';


const rootReducers = combineReducers({
    Auth: AuthReducer,
    Mentors:MentorsReducers,
    Courses:CoursesReducers,
    User:UserReducer,
    suggestions:suggestionsReducer,
    results:resultsReducer
});

export { rootReducers };
