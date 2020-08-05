import React from 'react';
import {useSelector} from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";

const  ProjectDetail = (props) =>{
    useFirestoreConnect(["projects"]);
    const id = props && props.match.params.id
    const project = useSelector((state)=>{
      const projects =  state.firestore.data.projects
      const project = projects ? projects[id] : null
      return project
     } );
     

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
                        <div>may 19, 8pm</div>
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
