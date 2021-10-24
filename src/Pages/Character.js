import React from "react";

import "./Character.css"

const characterDB = {
  "ox": {
    "color": "red",
    "name": "Ox Bellows",
    "init": [4, 2, 2, 2],
    "speed": [2, 2, 2, 3, 4, 5, 5, 6],
    "might": [4, 5, 5, 6, 6, 7, 8, 8],
    "sanity": [2, 2, 3, 4, 5, 5, 6, 7],
    "knowledge": [2, 2, 3, 3, 5, 5, 6, 6],
  }
}

const Character = (props) => {
  console.log(props)
  const name = props.match.params.name.replace('-', ' ')
  return (
    <div className={"page-content"}>
      <div className={"character-name"}>{characterDB[name].name}</div>
      {
        ['speed', 'might', 'sanity', 'knowledge'].map((stat, idx) => {
          return (
            <div className={"stats-row"}>
              <div className={"stats-label"}>{stat}</div>
              <div className={"stats-values"}>
                <button>-</button>
                {
                  characterDB[name][stat].map(num => <div>{num}</div>)
                }
                <button>+</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Character
