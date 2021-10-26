import React from "react";
import {useHistory} from "react-router-dom";

import cdb from "./CharacterData";

import "./Home.css"

const Home = () => {
  const history = useHistory()
  return (
    <>
      <div className={"page-title"}>Betrayal at House on the Hill</div>
      {
        Object.keys(cdb).map((name, idx) => {
          return <button key={idx} onClick={() => history.push(`/card/${name}`)} className={`home-button betrayal-${cdb[name].color}`}>{cdb[name].name}</button>
        })
      }
    </>
  )
}

export default Home
