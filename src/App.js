import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import Home from "./Pages/Home"
import LoadingScreen from "./LoadingScreen";

import home from "./home.svg"

import "./App.css"

const Characters = lazy(() => import("./Pages/Characters"))
const Cards = lazy(() => import("./Pages/Cards"))
const Rooms = lazy(() => import("./Pages/Rooms"))

const App = () => {
  return (
    <div className={"app"}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav>
          <Link to="/"><img src={home} alt={"Home Icon"}/></Link>
          <Link to="/cards">Cards</Link>
          <Link to="/rooms">Rooms</Link>
        </nav>
        <div className={"page-content-wrapper"}>
          <Switch>
            <Suspense fallback={<LoadingScreen/>}>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/character/:name"} component={Characters}/>
              <Route exact path={"/cards"} component={Cards}/>
              <Route exact path={"/rooms"} component={Rooms}/>
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App