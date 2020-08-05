import React from 'react';
import { useFirestoreConnect } from "react-redux-firebase";
import {useSelector, useDispatch} from 'react-redux';

const ProjectSummary = ({project}) => {
       
    return ( 
        <div className="card z-index-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title} </span>
            <p>{project.authorFirstname} {project.authorLastname} </p>
            <p className="grey-text">19th May, 9pm</p>
        </div>
    </div>
     );
}
 
export default ProjectSummary;