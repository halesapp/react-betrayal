import React, {useState} from "react"

import cdb from "./CharacterData";

import "./Character.css"

const CharacterCard = (props) => {
  const name = props.match.params.name
  const allStats = ['speed', 'might', 'sanity', 'knowledge']
  const [activeIndices, setActiveIndices] = useState(cdb[name].init)
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
      <div className={"page-title"}>{cdb[name].name}</div>
      {
        allStats.map((stat, idxStat) => {
          return (
            <div className={"stats-row"} key={idxStat}>
              <div className={"stats-label"}>{stat.toUpperCase()}</div>
              <div className={"stats-values"}>
                <button onClick={() => dec(idxStat)}>-</button>
                {cdb[name][stat].map((num, idxInit) => <div key={idxInit} className={idxInit === activeIndices[idxStat] ? "active" : ""}>{num}</div>)}
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