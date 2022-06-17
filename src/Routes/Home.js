import React from "react";

import CDB from "../database/CharacterData.json";

import "./Home.css"

export default function home() {
  return (
    <>
      <div className={"page-title"}>Betrayal at House on the Hill</div>
      <button className={"home-button"} onClick={() => {if (window.confirm("Are you sure you want to clear saved games?")) localStorage.clear()}}>Clear All Saved Games</button>
      {
        Object.keys(CDB).map((name, idx) => {
          return (
            <a href={`/c/${name}`} key={idx} className={`home-button betrayal-${CDB[name].color}`}>
              {CDB[name].name}
            </a>
          )
        })
      }
    </>
  )
}
