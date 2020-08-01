import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Icon} from "@opuscapita/react-icons";

const CourseTable = (props) => {
    return (
        <Table className="table table-hover">
            <thead>
            <tr>
                <th>CourseName</th>
                <th>StartDate</th>
                <th>EndDate</th>
                <th>Total Days</th>
                <th>TrainerName</th>
                <th>Availability</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                props.courses.length > 0 ? (
                    props.courses.map((course) => {
                        const {id, courseName, startDate, endDate, days, trainerName, availability} = course;
                        return (
                            <tr key={id.toString()}>
                                <td>{courseName}</td>
                                <td>{startDate}</td>
                                <td>{endDate}</td>
                                <td>{days}</td>
                                <td>{trainerName}</td>
                                <td>{availability}</td>
                                <td>
                                    <Button className="btn btn-primary mr-3"
                                            onClick={() => props.editRow(course)}><Icon type="indicator" name="edit" /></Button>
                                    <Button type="button" className="btn btn-danger"
                                            onClick={() => props.handlerClick(course)}><Icon type="indicator" name="delete" /> </Button>
                                </td>
                            </tr>
                        )
                    })
                ) : (<tr>
                    <td colSpan="7">No records found</td>
                </tr>)
            }
            </tbody>
        </Table>
    );
};

export default CourseTable;