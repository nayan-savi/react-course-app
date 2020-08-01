import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseRouter from "./components/router/CourseRouter";
import {HashRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
            <CourseRouter/>
        </HashRouter>
    </div>
  );
}

export default App;
