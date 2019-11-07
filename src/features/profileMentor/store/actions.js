import {
    FIND_RESULTS
} from "./constants";
import { CourseService, coursesUrls } from "../../../api";

const courseService = new CourseService();

const findResults = (text) => dispatch => {

    courseService.getAllCourses(coursesUrls.listCourses)
        .then(res => {
            console.log('resultado: ',res.data)
            dispatch({
                type: FIND_RESULTS,
                payload: [res.data, text]
            });
        })
}

export default findResults;
