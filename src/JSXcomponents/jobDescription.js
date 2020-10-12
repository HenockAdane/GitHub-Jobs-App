import React from 'react'
import "../CSScomponents/jobDescription.scss"

function JobDescription(props) {
    return (
        <div className="container">
            <div className="div1">
                {/* <div className="companyLogo" style={{backgroundImage: `url(${props.companyLogo})`}}></div> */}<img className="companyLogo" src={props.companyLogo} />

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
                {/* <div dangerouslySetInnerHTML={{ __html: props.apply }} /> */}
            </div>

            <div dangerouslySetInnerHTML={{ __html: props.description }} />
            



            </div>

            <button><div dangerouslySetInnerHTML={{ __html: props.howToApply }} /></button>
            
        </div>
    )
}

export default JobDescription
