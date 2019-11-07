import {
    GET_DATA_COURSES
} from "./constants";

import {
    coursesUrls,
    CourseService
} from '../../../api';

const courseService = new CourseService();


// GET COURSES
const getCoursesAll = () => dispatch => {
    courseService.getAllCourses(coursesUrls.listCourses)
        .then(res => {
            dispatch({
                type: GET_DATA_COURSES,
                payload: res.data
            });
        }).catch(err => {
           // console.log(err)
        });
}
export {
    getCoursesAll
}