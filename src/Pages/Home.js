import React from "react";
import {useHistory} from "react-router-dom";

import CDB from "./CharacterData";

import "./Home.css"

const Home = () => {
  const history = useHistory()
  return (
    <>
      <div className={"page-title"}>Betrayal at House on the Hill</div>
      <button className={"home-button"} onClick={() => localStorage.clear()}>Clear All Saved Games</button>
      {
        Object.keys(CDB).map((name, idx) => {
          return (
            <button key={idx} onClick={() => history.push(`/character/${name}`)} className={`home-button betrayal-${CDB[name].color}`}>
              {CDB[name].name}
            </button>
          )
        })
      }
    </>
  )
}

export default Home
