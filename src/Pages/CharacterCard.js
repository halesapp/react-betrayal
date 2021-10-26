import React, {useState} from "react"

import cdb from "./CharacterData";

import "./CharacterCard.css"

const CharacterCard = (props) => {
  const name = props.match.params.name
  const allStats = ['speed', 'might', 'sanity', 'knowledge']
  const statRooms = {
    "Gymnasium": {visited: false, stat: "Speed" },
    "Larder": {visited: false, stat: "Might"},
    "Library": {visited: false, stat: "Knowledge"},
    "Chapel": {visited: false, stat: "Sanity"},
    "Menagerie": {visited: false, stat: "Physical"},
    "Study": {visited: false, stat: "Mental"}
  }

  const [activeIndices, setActiveIndices] = useState(cdb[name].init)
  const [roomsVisited, setRoomsVisited] = useState(statRooms)

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
  const visitRoom = (room) => {
    setRoomsVisited(lastState => {
      let newState = JSON.parse(JSON.stringify(lastState))
      if (newState[room].visited) return newState
      newState[room].visited = !newState[room].visited
      if (room === "Menagerie" || room === "Study") alert(`Room marked as visited. Choose 1 ${statRooms[room].stat} trait and gain 1 point in that trait.`)
      else inc(allStats.indexOf(statRooms[room].stat.toLowerCase()))
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
                  {
                    cdb[name][stat].map((num, idxInit) => {
                      let classList = []
                      if (idxInit === cdb[name].init[idxStat]) classList.push("default-stat-value")
                      if (idxInit === activeIndices[idxStat]) classList.push("active")
                      return <div key={idxInit} className={classList.join(" ")}>{num}</div>
                    })
                  }
                  <button onClick={() => inc(idxStat)}>+</button>
                </div>
              </div>
          )
        })
      }

      <h2>ROOMS VISITED</h2>
      <div className={"room-buttons"}>
        {
          Object.keys(statRooms).map((name, idx) => {
            return (
              <button key={idx} className={"room-button"} disabled={roomsVisited[name].visited} onClick={() => visitRoom(name)}>
                <div>{name}</div>
                <div>{statRooms[name].stat} +1</div>
              </button>
            )
          })
        }
      </div>
    </>
  )

}

export default CharacterCard