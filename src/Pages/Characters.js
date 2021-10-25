import React from "react";
import {useHistory} from "react-router-dom";

import "./Character.css"

const names = ["ox", "flash"]

const characterDB = {
  "ox": {
    "color": "red",
    "name": "Ox Bellows",
    "init": [4, 2, 2, 2],
    "speed": [2, 2, 2, 3, 4, 5, 5, 6],
    "might": [4, 5, 5, 6, 6, 7, 8, 8],
    "sanity": [2, 2, 3, 4, 5, 5, 6, 7],
    "knowledge": [2, 2, 3, 3, 5, 5, 6, 6]
  },
  "flash": {
    "color": "red",
    "name": "Darrin \"Flash\" Williams",
    "init": [4, 2, 2, 2],
    "speed": [],
    "might": [],
    "sanity": [],
    "knowledge": []
  }
}

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
