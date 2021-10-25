import React, {useState} from "react"

import "./Character.css"

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

const CharacterCard = (props) => {
  const name = props.match.params.name
  const allStats = ['speed', 'might', 'sanity', 'knowledge']
  const [activeIndices, setActiveIndices] = useState(characterDB[name].init)
  const dec = (idxStat) => {
    setActiveIndices(lastState => {
      let newState = Array(...lastState)
      if (newState[idxStat] === 0) {
        return newState
      }
      newState[idxStat] = newState[idxStat] - 1
      return newState
    })
  }
  const inc = (idxStat) => {
    setActiveIndices(lastIndices => {
      let newState = Array(...lastIndices)
      if (newState[idxStat] === 7) {
        return newState
      }
      newState[idxStat] = newState[idxStat] + 1
      return newState
    })
  }
  return (
    <>
      <div className={"character-name"}>{characterDB[name].name}</div>
      {
        allStats.map((stat, idxStat) => {
          return (
            <div className={"stats-row"} key={idxStat}>
              <div className={"stats-label"}>{stat}</div>
              <div className={"stats-values"}>
                <button onClick={() => dec(idxStat)}>-</button>
                {characterDB[name][stat].map((num, idxInit) => <div key={idxInit} className={idxInit === activeIndices[idxStat] ? "active" : ""}>{num}</div>)}
                <button onClick={() => inc(idxStat)}>+</button>
              </div>
            </div>
          )
        })
      }
    </>
  )

}

export default CharacterCard