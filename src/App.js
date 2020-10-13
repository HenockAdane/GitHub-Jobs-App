import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import { apiStore } from "./redux/api"

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './JSXcomponents/homePage';
import JobDivs from './JSXcomponents/jobDivs';

import { auth } from "./JSXcomponents/firestore"
import {googleLogin, signOut} from "./JSXcomponents/firestore"


import { useSelector, useDispatch} from "react-redux"
import JobDescription from './JSXcomponents/jobDescription';

// https://git-hub-jobs-app-by-henockadane.vercel.app/
function App() {

  const [state, setState] = useState(()=> ({user: {email:"helloemail"}, routes: [], themJC: "flex-start"}))

  let arr = []

  const dispatch = useDispatch();
  // console.log(dispatch === useDispatch())

 

   useEffect(() => {



  
    auth().onAuthStateChanged(user => {
      setState(ps => ({...ps, user: user}))
   
     });
    
      fetch(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1"
      )
        .then((response) => response.json())
        .then((data) => {
           let routes = data.map((a) => {
           return <Route exact={true} path={`/${a.id}`} render={()=>(
  
            <JobDescription companyLogo={a.company_logo} company={a.company} link={a.company_url} createdAt={a.created_at} type={a.type} title={a.title} location={a.location} howToApply={a.how_to_apply} description={a.description} />     )}  />}
          );
  
          setState(ps => ({...ps, routes:
            routes}))
  
  
     
          arr = data
    
          dispatch(apiStore(arr));
        });
    }, []);

  const themeClick = () => setState(ps => ps.themeJC === "flex-end" ? {...ps, themeJC: "flex-start"}: {...ps, themeJC: "flex-end"})

  const hello = () => "hello"
  return (
    <div className="App" style={{backgroundColor: state.themeJC === "flex-end" ? "black" : "#DFDFDF"}}>
      <header className="App-header">

        <div className="headerMenu">

          <Link to={"/"}>devJobs</Link>


          <nav>

            <ul>

              <Link className="nav-links" to={"/"}>Home</Link>
              {state.user ? <Link className="nav-links" to={"/"} onClick={signOut}>Sign Out</Link> : <Link className="nav-links" to={"/"} onClick={googleLogin}>Sign IN</Link>}

              <div className="themeDiv">
              
                <img className="moon theme" src="/assets/desktop/icon-moon.svg"/>

                <button className="themeBtn" onClick={themeClick} style={{justifyContent: state.themeJC}}><div className="buttonCircle"></div></button>

                <img className="sun theme" src="/assets/desktop/icon-sun.svg"/>
              </div>
            </ul>
          </nav>

        </div>
 
      </header>
      {/* {hello} */}

      {/* <HomePage/> */}
      {/* {example} */}
      
      <Switch>
          <Route exact={true} path="/" render={()=> <HomePage />}/>
          {state.routes}
           {/* <Route exact={true} path="/" render={()=>(
            <JobDivs />
          )}  /> */}
          {/*<Route exact={true} path="/favourites" render={() =>(
            <FavouritesDiv moreInfo={this.moreInfo} to1={"/moreInfo"} inputChange={this.inputChange} input={this.state.input} signOut={this.signOut} user={this.state.userName} currentUser={this.props.currentUser} toggleFav={this.toggleFav}/>
          )}/>
          <Route exact={true} path="/SignInOrUp" render={()=>(
            !this.state.currentUser ? (<SignInOrUp inputChange={this.inputChange} input={this.state.input} signOut={this.signOut} user={this.state.userName} currentUser={this.state.currentUser}/>) : (<Redirect to="/" />)
          )} /> */}
        </Switch>
    </div>
  );
}

export default App;
