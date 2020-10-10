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

import { useSelector, useDispatch} from "react-redux"

// https://git-hub-jobs-app-by-henockadane.vercel.app/
function App() {

  const [state, setState] = useState(()=> ({routes: []}))

  let arr = []
  let route;

  const dispatch = useDispatch();
  console.log(dispatch === useDispatch())
  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        route = data.map((a) => setState(ps => ({...ps, routes:
          <Route exact={true} path={`/${a.id}`} render={()=>(

          <JobDivs
            company={a.company}
            companyLogo={a.company_logo}
            type={a.type}
            createdAt={a.created_at}
            description={a.description}
            location={a.location}
            title={a.title}
          />     )}  />})
        ));


   
        arr = data
  
        dispatch(apiStore(arr));
      });
  }, []);

  const hello = () => "hello"
  console.log(state.routes)
  return (
    <div className="App">
      <header className="App-header">

        <div className="headerMenu">

          <h3>devjobs</h3>

          <div className="themeDiv">
          
            <img className="moon theme" src="/assets/desktop/icon-moon.svg"/>

            <button className="themeBtn"><div className="buttonCircle"></div></button>

            <img className="sun theme" src="/assets/desktop/icon-sun.svg"/>

          </div>

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
