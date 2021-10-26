import React from "react";
import {useHistory} from "react-router-dom";

import cdb from "./CharacterData";

import "./Character.css"

const Characters = () => {
  const history = useHistory()

  return (
    <div className={"page-content"}>
      <div className={"page-title"}>Characters</div>
      {
        Object.keys(cdb).map((name, idx) => {
          return <button key={idx} onClick={() => history.push(`/characters/${name}`)} className={`betrayal-${cdb[name].color}`}>{cdb[name].name}</button>
        })
      }
    </div>
  )
}

export default Characters
