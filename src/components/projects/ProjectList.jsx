import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({data}) => {

console.log(data)
    return ( 
        <div className="project-list section">
          {
              data && data.map(project =>{ 
                return (
                   <Link to={`/project/${project.id}`}   key={project.id}>
                     <ProjectSummary 
                        project={project}
                      
                     />
                </Link>
                )
             })
          }
        </div>
     );
}
export default ProjectList;