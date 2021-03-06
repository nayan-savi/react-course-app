import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import CommonService from "../common/CommonService";
import CourseForm from "../common/CourseForm";


let commonService = new CommonService();
const config = commonService.getConfig();
const courseNames = commonService.getCourseNames();
const initialValues = commonService.getInitialValues();
const validationSchema = commonService.getValidationSchema();
const createUrl = "https://spring-boot-course-jpa.herokuapp.com/api/create";

const AddCourse = () => {


    const onSubmit = async (course, {resetForm}) => {
        await axios.post(createUrl, course, config)
            .then(response => {
                if(response.status === 200) {
                    toast.success('Data saved.', commonService.getToastOptions());
                    resetForm();
                }
            })
            .catch(error => {
                toast.error('Issue while saving...');
            });
    };

    return (
        <div className="addCourse">
            <h1>Add Course</h1>
            <CourseForm initialValues={initialValues} validationSchema={validationSchema} courseNames={courseNames} onSubmit={onSubmit}/>
        </div>
    );
};

export default AddCourse;