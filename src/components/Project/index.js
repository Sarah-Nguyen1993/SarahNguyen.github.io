import React from "react";


function Project(props) {
    const {title,demo, deployedWebsite, githubLink} = props
    return(<>
            <div className="card-body">
            <h5>Project: {title} </h5>
            <image src={demo} alt="demo" rel="noreferrer" />
            <a href={deployedWebsite} target="_blank" rel="noreferrer">Deployed Website</a>
            <br/>
            <a href={githubLink} target="_blank" rel="noreferrer">GitHub Link</a>
            <hr/>
            </div>
    </>
        
    )
};

export default Project;