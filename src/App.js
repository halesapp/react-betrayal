import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

import home from "./home.svg"

import "./App.css"

const Items = lazy(() => import("./Pages/Items"))
const CharacterCard = lazy(() => import("./Pages/Character"))
const Omens = lazy(() => import("./Pages/Omens"))


export default function App() {
  return (
    <div className={"app"}>
      <Router>
        <nav>
          <Link to="/betrayal"><img src={home} alt={"Home Icon"}></img></Link>
          <Link to="/betrayal/characters">Characters</Link>
          <Link to="/betrayal/items">Items</Link>
          <Link to="/betrayal/omens">Omens</Link>
        </nav>
        <div className={"page-content-wrapper"}>
          <Switch>
            <Suspense fallback={<h1>loading...</h1>}>
              <Route exact path={"/betrayal"} component={Home}/>
              <Route exact path={"/betrayal/characters/:name"} component={CharacterCard}/>
              <Route exact path={"/betrayal/items"} component={Items}/>
              <Route exact path={"/betrayal/omens"} component={Omens}/>
              {/*<Route path="*"><Redirect to={"/"}/></Route>*/}
            </Suspense>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <h1>home page</h1>
  )
}