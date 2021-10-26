import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import Home from "./Pages/Home"
import LoadingScreen from "./LoadingScreen";

import home from "./home.svg"

import "./App.css"

const CharacterCard = lazy(() => import("./Pages/CharacterCard"))
const Items = lazy(() => import("./Pages/Items"))
const Omens = lazy(() => import("./Pages/Omens"))

const App = () => {
  return (
    <div className={"app"}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav>
          <Link to="/"><img src={home} alt={"Home Icon"}></img></Link>
          <Link to="/items">Items</Link>
          <Link to="/omens">Omens</Link>
        </nav>
        <div className={"page-content-wrapper"}>
          <Switch>
            <Suspense fallback={<LoadingScreen/>}>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/card/:name"} component={CharacterCard}/>
              <Route exact path={"/items"} component={Items}/>
              <Route exact path={"/omens"} component={Omens}/>
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App