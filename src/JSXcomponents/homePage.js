import React, {useState, useEffect} from 'react'
import JobDivs from './jobDivs'
import { useSelector, useDispatch} from "react-redux"
import "../CSScomponents/home.scss"

function HomePage() {

    const [state, setState] = useState(()=> ({
        search: "",
        location: "",
        checked: false
    }))

         const jobsArr =  useSelector(state => state.APIReducer.APIObject)
    console.log(state, jobsArr)

    const searchChange = e =>{
        // console.log(jobs)
        let value = e.target.value
        setState(ps => ({...ps, search: value}))
    }

    const locationChange = e => {
        let value = e.target.value
        setState(ps => ({...ps, location: value}))
    }

    const checkChange = e => {
        console.log("check")

        setState(ps => ({...ps, checked: !ps.checked}))

    }
 
    let jobsSearchFilter = state.search !== "" ? jobsArr.filter(a=> a.company.toLowerCase().includes(state.search.toLowerCase()) || a.title.toLowerCase().includes(state.search.toLowerCase()) || a.title.toLowerCase().includes(state.search.toLowerCase())) : jobsArr;

    let jobsLocationFilter = state.location !== "" ? jobsSearchFilter.filter(a => a.location.toLowerCase().includes(state.location.toLowerCase())) : jobsSearchFilter

    let jobsCheckBoxFilter = state.checked ? jobsLocationFilter.filter(a=> a.type === "Full Time") : jobsLocationFilter;



    return (
        <div>

        <div className="filterDiv">
            <input type="text" className="filterSearch" placeholder="search" onChange={searchChange}/>
            <input type="text" className="filterSearch" placeholder="location" onChange={locationChange}/>
           <input type="checkbox" className="filterSearch" onChange={checkChange}/> Full-Time Only
        </div>


            <div className="jobsContainer">
            {jobsCheckBoxFilter.map((a) => (
          <JobDivs
            to={a.id}
            company={a.company}
            companyLogo={a.company_logo}
            type={a.type}
            createdAt={a.created_at}
            description={a.description}
            location={a.location}
            title={a.title}
          />
        ))}
            </div>
        </div>
    )
}

export default HomePage
