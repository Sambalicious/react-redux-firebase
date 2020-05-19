import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';


const DashBoard = (props) => {
    console.log(props)

  const projects = useSelector(state=>state.project.projects);
  
 const dispatch = useDispatch();
    return ( 
        <div>
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                        <div className="col s12 m5 offset-m1">
                            <Notifications />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DashBoard;