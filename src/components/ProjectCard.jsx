import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({title, content, tech, path, li_1, li_2, li_3, li_4}) => {
    return (
        <Link to={path} className="ProjectCard col-md-4 text-decoration-none">
            <div>
                <div className="card card-header-dark p-2 m-2 border rounded shadow">
                    <h3 className="card-title text-dark text-center my-4">{title}</h3>
                    {<div className="card-body mb-4">
                        <h5 className="card-text text-muted">{content}</h5>
                    </div>}
                    <div className="card-text my-4 text-muted px-3">{tech}</div>
                </div>
            </div>
        </Link> 
    )
}

export default ProjectCard;
