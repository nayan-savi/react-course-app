import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import CommonService from "../common/CommonService";
import CourseForm from "../common/CourseForm";
import CourseTable from "../common/CourseTable";

const getUrl = "https://spring-boot-course-jpa.herokuapp.com/api/courses";
const deleteUrl = "https://spring-boot-course-jpa.herokuapp.com/api/delete/";
const updateCourse = "https://spring-boot-course-jpa.herokuapp.com/api/course";

let commonService = new CommonService();
const config = commonService.getConfig();
const initialValues = commonService.getInitialValues();
const validationSchema = commonService.getValidationSchema();
const courseNames = commonService.getCourseNames();

const setValues = (data) => {
    initialValues.id = data.id;
    initialValues.courseName = data.courseName;
    initialValues.startDate = data.startDate;
    initialValues.endDate = data.endDate;
    initialValues.trainerName = data.trainerName;
    initialValues.availability = data.availability;
}

const DisplayCourse = () => {
    const [courses, setCourses] = useState([]);

    const [editing, setEditing] = useState(false);

    const editRow = async (course) => {
        console.log(course)
        setEditing(true);
        setValues(course);
    }

    const onCancel = () => {
        setEditing(false);
    }

    const onSubmit = async (course) => {
        await axios.put(updateCourse, course, config)
            .then(() => {
                toast.success('Data updated.', commonService.getToastOptions());
                setTimeout(() => {
                    setEditing(false);
                }, 2000);
            })
            .catch(error => {
                toast.error('Issue while updating...');
            });
    };

    useEffect(() => {
        axios.get(getUrl, config)
            .then(response => {
                setCourses(response.data);
            }).catch(error => console.log(error));
    }, [courses]);

    const handlerClick = (course) => {
        let isConfirmed = window.confirm('Are you sure you wish to delete ' + course.courseName+' course?');
        if(isConfirmed) {
            axios.delete(deleteUrl + course.id, config)
                .then(response => {
                    if(response.status === 200){
                        toast.success("Record Deleted.", commonService.getToastOptions());
                        setCourses(courses.filter(c => c.id !== course.id));
                    }
                })
                .catch(error => {
                    toast.error('Issue while deleting...');
                });
        }
    }

    return (
        <div>
            {
                !editing ? (
                    <div>
                        <h1>Course Details</h1>
                        <CourseTable courses={courses} editRow={editRow} handlerClick={handlerClick}/>
                        <ToastContainer/>
                    </div>
                ) : (
                    <div className="addCourse">
                        <h1>Update Course</h1>
                        <CourseForm initialValues={initialValues} validationSchema={validationSchema}
                                    courseNames={courseNames} onSubmit={onSubmit}
                                    editMode={editing}
                                    onCancel={onCancel}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default DisplayCourse;