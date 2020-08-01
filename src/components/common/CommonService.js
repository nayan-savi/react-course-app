import * as Yup from "yup";

class CommonService {

    getCourseNames() {
        return ["Java", "React Hooks", "Spring Boot", "CSS", "HTML", "AWS", "Android", "Game Development"];
    }

    getConfig() {
        return {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
            }
        }
    }

    getValidationSchema() {
        const today = new Date();
        return Yup.object({
            courseName: Yup.string().required('CourseName is required!'),
            startDate: Yup.date().required('StartDate is required!').min(today, 'StartDate should be greater than today.'),
            endDate: Yup.date().required('EndDate is required!'),
            trainerName: Yup.string().required('TrainerName is required!'),
            availability: Yup.string().required('Availability is required!')
        })
    }

    getToastOptions() {
        return {
            autoClose: 2000,
            position: "top-right",
            closeButton: false
        };
    }

    getInitialValues() {
        return {
            id: '',
            courseName: '',
            startDate: '',
            endDate: '',
            trainerName: '',
            availability: ''
        };
    }

    getUrl(path) {
        return "http://localhost:8080/api/create/api/"+path;
    }

}

export default CommonService;