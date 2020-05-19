import React from 'react'

const  ProjectDetail = (props) =>{
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card title">
                        Project Title -{id}
                    </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore modi in, soluta adipisci repellendus ab, eveniet placeat porro obcaecati cumque, cum magni? Modi quaerat quisquam qui quas, harum pariatur explicabo.</p>
                </div>
                <div className="card-action grey-lighten-4 grey-text">
                    <div>Posted by Samabalicious</div>
                    <div>may 19, 8pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
