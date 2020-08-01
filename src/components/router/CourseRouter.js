import React from 'react';
import {Route, Switch} from "react-router";
import AddCourse from "../course/AddCourse";
import DisplayCourse from "../course/DisplayCourse";
import CourseMenu from "../CourseMenu";
import HomeCourse from "../course/HomeCourse";
import About from "../course/About";
import EditCourse from "../course/EditCourse";
import PageNotFound from "../course/PageNotFound";

const CourseRouter = () => {
    return (
        <div>
            <CourseMenu/>
            <Switch>
                <Route exact path="/" component={ HomeCourse } />
                <Route exact path="/addCourse" component={ AddCourse } />
                <Route exact path="/displayCourse" component={ DisplayCourse } />
                <Route exact path="/editCourse" component={ EditCourse } />
                <Route exact path="/about" component={ About } />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default CourseRouter;