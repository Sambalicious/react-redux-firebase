import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { createProject } from '../../redux/actions/projectAction';
import { useFirestore } from "react-redux-firebase";
import  { useHistory } from 'react-router-dom'

const CreateProject = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const firestore = useFirestore();

    const [title,setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle  = (e) =>{
        setTitle(e.target.value);
    }

    const handleContent = (e) =>{
        setContent(e.target.value);
    }
   
   
    

    const handleFormSubmit = (e) =>{
        const project = {
            title, content
        }
        e.preventDefault();
        dispatch(createProject(project, firestore))
        console.log(dispatch)

        history.push("/")

    }


    return (
        <div className="container">
        <form onSubmit={handleFormSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Project</h5>
            <div className="input-field">
                <label htmlFor="email">Title</label>
                <input type="text" value={title} onChange={handleTitle} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Project Content</label>
                <textarea onChange={handleContent} value={content} className='materialize-textarea'></textarea>
            </div>
            <div className="input-field">
                <button className="btn pink-lighten-1 z-depth-0">Create</button>
            </div>
        </form>
    </div>
    )
}

export default CreateProject
