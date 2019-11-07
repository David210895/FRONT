import {
    GET_DATA_MENTORS
} from "./constants";

import {
    mentorsUrls,
    MentorService
} from '../../../api';

const mentorService = new MentorService();


// GET COURSES
const getMentorsAll = () => dispatch => {
    mentorService.getAllMentors(mentorsUrls.listMentors)
        .then(res => {
            dispatch({
                type: GET_DATA_MENTORS,
                payload: res.data
            });
        }).catch(err => {
           // console.log(err)
        });
}
export {
    getMentorsAll
}