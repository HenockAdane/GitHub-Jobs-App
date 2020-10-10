import React from 'react'

function JobDescription(props) {
    return (
        <div>
            <div className="div1">
                <div className="companyLogo" style={{backgroundImage: `url${props.companyLogo}`}}></div>

                <div className="companyName">
                    <h2>{props.company}</h2>
                    <a className="companyLink" href={props.link} target="_blank">Company Site</a>
                </div>
            </div>

            <div className="description">

            <div className="descriptionHeader">
                <div className="descheader1">
                <span className="ago">{props.createdAt}</span>.<span className="type">{props.type}</span>
                <h4 className="role">{props.title}</h4>
                <p className="location">{props.location}</p>
                </div>
                <a className="applyBtn" href={props.apply} target="_blank">Apply Now</a>
            </div>

            {props.description}

            



            </div>
            
        </div>
    )
}

export default JobDescription
