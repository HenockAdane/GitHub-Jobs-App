import React from 'react'

import "../CSScomponents/jobsDiv.scss"

import {
    Switch,
    Route,
    Link
} from "react-router-dom"  

function JobDivs(props) {
    return (
        <Link to={`/${props.to}`} className="jobDivs">
                    {/* <img className="companyLogo" style={{backgroundImage: `url(${props.companyLogo})`}}/> */}
                    <img className="companyLogo" src={props.companyLogo} />

        <span className="ago">{props.createdAt}</span>.<span className="type">{props.type}</span>

        <h4 className="role">{props.title}</h4>

        <p className="company">{props.company}</p>

        <p className="location">{props.location}</p>
            
        </Link>
    )
}

export default JobDivs
