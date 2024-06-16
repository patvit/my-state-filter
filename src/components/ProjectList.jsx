/* eslint-disable-next-line */
import React from "react";
import PropsTypes from 'prop-types';

function ProjectList(props) {
    
    const {projects} = props;
    return (
        <div className="project-list">
            {projects.map((project, item) => 
            <span className={project} key={item}>
                <img src={project.img} alt={project} />
            </span>
            )}
        </div>
    );
}

ProjectList.propsTypes = {
    project: PropsTypes.arrayOf(PropsTypes.shape({
        img: PropsTypes.string.isRequired,
        category: PropsTypes.string.isRequired,
    }))
}

export default ProjectList;