import React from "react";
import {useHistory} from "react-router-dom";

import "./Character.css"

const names = ["ox", "flash"]

const Characters = () => {
  const history = useHistory()

  return (
    <div className={"page-content"}>
      <h1>Characters</h1>
      {
        names.map((name, idx) => {
          return <button key={idx} onClick={() => history.push(`/characters/${name}`)}>{name}</button>
        })
      }
    </div>
  )
}

export default Characters
