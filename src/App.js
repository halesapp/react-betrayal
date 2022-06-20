import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./Routes/Home"
import LoadingScreen from "./LoadingScreen";

import home from "./home.svg"

import "./App.css"

const Characters = lazy(() => import("./Routes/Characters"))
const Rules = lazy(() => import("./Routes/Rules"))
const Cards = lazy(() => import("./Routes/Cards"))
const Rooms = lazy(() => import("./Routes/Rooms"))

export default function App() {
    return (
      <Router>
          <nav>
              <div className={"nav-spacer"}>
                  <Link to="/"><img src={home} alt={"Home Icon"}/></Link>
                  <Link to="/rules">Rules</Link>
                  <Link to="/cards">Cards</Link>
                  <Link to="/rooms">Rooms</Link>
              </div>
          </nav>
          <div className={"page-content-wrapper"}>
              <div className={"page-content"}>
                  <Suspense fallback={<LoadingScreen/>}>
                      <Routes>
                          <Route exact={true} path={"/"} element={<Home/>}/>
                          <Route exact={true} path={"/c/:name"} element={<Characters/>}/>
                          <Route exact={true} path={"/rules"} element={<Rules/>}/>
                          <Route exact={true} path={"/cards"} element={<Cards/>}/>
                          <Route exact={true} path={"/rooms"} element={<Rooms/>}/>
                          <Route path={"/*"} element={"Not Found"}/>
                      </Routes>
                  </Suspense>
              </div>
          </div>
      </Router>
    )
}