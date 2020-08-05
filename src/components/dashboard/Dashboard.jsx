import React from 'react';
import {useSelector} from 'react-redux';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { useFirestoreConnect } from "react-redux-firebase";



  const DashBoard = () => {
  
    useFirestoreConnect(["projects"]);
  const projects = useSelector((state) => state.firestore.ordered.projects);
 

    return ( 
        
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList  data={projects}/>
                        <div className="col s12 m5 offset-m1">
                            <Notifications />
                        </div>
                    </div>
                </div>
        
        </div>
     );
}
 
export default DashBoard;