import React from 'react';
import {useSelector} from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";
import moment from 'moment';

const  ProjectDetail = (props) =>{
    useFirestoreConnect(["projects"]);
    const id = props && props.match.params.id
    const project = useSelector((state)=>{
      const projects =  state.firestore.data.projects
      const project = projects ? projects[id] : null
      return project
     } );
     console.log(project)
     

     if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            { project.title }
                        </span>
                        <p>{project.content} </p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstname} {project.authorLastname} </div>
                        <div>{moment(project.createdAt.toDate()).calendar()} </div>
                    </div>
                </div>
            </div>
        )
     } else{
         return (
         <div className="container center">
             <p>Loading project...</p>
         </div>
         )
     }
    
    
}

export default ProjectDetail
