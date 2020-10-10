import React from 'react'

import "../CSScomponents/jobsDiv.scss"

function JobDivs(props) {
    return (
        <div className="jobDivs">
                    <img className="companyLogo" style={{backgroundImage: `url(${props.companyLogo})`}}/>

        <span className="ago">{props.createdAt}</span>.<span className="type">{props.type}</span>

        <h4 className="role">{props.title}</h4>

        <p className="company">{props.company}</p>

        <p className="location">{props.location}</p>
            
        </div>
    )
}

export default JobDivs
