import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, content, tech, path }) => {
    return (
        <Link to={path} className="text-decoration-none">
            <div className="card p-2 m-2 border rounded shadow">
                <h4 className="card-title text-dark text-center my-4">{title}</h4>
                <div className="card-body mb-4">
                    <p className="card-text text-muted">{content}</p>
                </div>
                <p className="card-text my-4 text-muted px-3">{tech}</p>
            </div>
        </Link>
    )
}

export default ProjectCard;
