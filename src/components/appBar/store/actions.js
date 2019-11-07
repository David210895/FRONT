import {
    FIND_SUGGESTIONS,
} from "./constants";
import { CourseService, coursesUrls } from "../../../api";

const courseService = new CourseService();

const findSuggestions = (text) => dispatch => {

    courseService.getAllCourses(coursesUrls.listCourses)
        .then(res => {
            dispatch({
                type: FIND_SUGGESTIONS,
                payload: [res.data, text]
            });
        })
}


export default findSuggestions;

