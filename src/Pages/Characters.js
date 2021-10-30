import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";

import CDB from "./CharacterData";

import "./Characters.css"

const LOCAL_CACHE_REACT_STATE = "react-state"

const Characters = (props) => {
  const name = props.match.params.name
  const allStats = ['speed', 'might', 'sanity', 'knowledge']
  const roomStats = {
    "Gymnasium": "Speed",
    "Larder": "Might",
    "Library": "Knowledge",
    "Chapel": "Sanity",
    "Menagerie": "Physical",
    "Study": "Mental"
  }
  const itemsOmensTemplate = {
    "Amulet of Ages": false,
    "Bell": false,
    "Candle": false,
    "Book": false,
    "Dog": false,
    "Girl": false,
    "Holy Symbol": false,
    "Locket": false,
    "Madman": false,
    "Mask": false
  }
  let roomsVisitedTemplate = {}
  Object.keys(roomStats).forEach(room => roomsVisitedTemplate[room] = false)

  const [activeIndices, setActiveIndices] = useState(CDB[name].init)
  const [roomsVisited, setRoomsVisited] = useState(JSON.parse(JSON.stringify(roomsVisitedTemplate)))
  const [itemsOmens, setItemsOmens] = useState(JSON.parse(JSON.stringify(itemsOmensTemplate)))

  const changeStat = (idxStat, amount) => {
    setActiveIndices(lastIndices => {
      let newState = Array(...lastIndices)
      newState[idxStat] = newState[idxStat] + amount
      newState[idxStat] = newState[idxStat] >= 7 ? 7 : newState[idxStat]
      newState[idxStat] = newState[idxStat] <= 0 ? 0 : newState[idxStat]
      return newState
    })
  }
  const visitRoom = (room) => {
    setRoomsVisited(lastState => {
      let newState = JSON.parse(JSON.stringify(lastState))
      if (newState[room]) return newState
      newState[room] = !newState[room]
      if (room === "Menagerie" || room === "Study") alert(`Room marked as visited. Choose 1 ${roomStats[room]} trait and gain 1 point in that trait.`)
      else changeStat(allStats.indexOf(roomStats[room].toLowerCase()))
      return newState
    })
  }
  const equipItem = (item) => {
    setItemsOmens(lastState => {
      let newState = (JSON.parse(JSON.stringify(lastState)))
      const equipped = !newState[item]
      newState[item] = equipped

      if (item === "Amulet of Ages") {
        const amount = equipped ? 1 : -3
        allStats.forEach((stat, idx) => changeStat(idx, amount))
      }

      else if (item === "Bell" || item === "Locket") {
        changeStat(allStats.indexOf("sanity"), equipped ? 1 : -1)
      }

      else if (item === "Book") {
        changeStat(allStats.indexOf("knowledge"), equipped ? 2 : -2)
      }

      else if (item === "Candle") {
        // if (equipped) incrementAmount = 2
        // else incrementAmount = -2
        // changeStat(allStats.indexOf("knowledge"), incrementAmount)
      }

      else if (item === "Dog") {
        changeStat(allStats.indexOf("might"), equipped ? 1 : -1)
        changeStat(allStats.indexOf("sanity"), equipped ? 1 : -1)
      }

      else if (item === "Girl") {
        changeStat(allStats.indexOf("knowledge"), equipped ? 1 : -1)
        changeStat(allStats.indexOf("sanity"), equipped ? 1 : -1)
      }

      else if (item === "Holy Symbol") {
        changeStat(allStats.indexOf("sanity"), equipped ? 2 : -2)
      }

      else if (item === "Madman") {
        changeStat(allStats.indexOf("might"), equipped ? 2 : -2)
        changeStat(allStats.indexOf("sanity"), equipped ? -1 : 1)
      }

      else if (item === "Mask") {
        changeStat(allStats.indexOf("knowledge"), equipped ? 2 : -2)
        changeStat(allStats.indexOf("sanity"), equipped ? -2 : 2)
      }

      return newState
    })
  }
  const reset = () => {
    setItemsOmens(JSON.parse(JSON.stringify(itemsOmensTemplate)))
    setRoomsVisited(JSON.parse(JSON.stringify(roomsVisitedTemplate)))
    setActiveIndices(CDB[name].init)
  }

  // Check for state from local cache
  useEffect(() => {
    const stateFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_CACHE_REACT_STATE))
    if (stateFromLocalStorage !== null && stateFromLocalStorage[name]) {
      setItemsOmens(stateFromLocalStorage[name].itemsOmens)
      setRoomsVisited(stateFromLocalStorage[name].roomsVisited)
      setActiveIndices(JSON.parse(JSON.stringify(stateFromLocalStorage[name].activeIndices)))
    } else {
      setItemsOmens(JSON.parse(JSON.stringify(itemsOmensTemplate)))
      setRoomsVisited(JSON.parse(JSON.stringify(roomsVisitedTemplate)))
      setActiveIndices(CDB[name].init)
    }
    // eslint-disable-next-line
  }, [name])

  // Save state to local cache (read current local cache and overwrite the state for this character
  useEffect(() => {
    let stateFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_CACHE_REACT_STATE)) || {}
    stateFromLocalStorage[name] = {activeIndices: activeIndices, roomsVisited: roomsVisited, itemsOmens: itemsOmens}
    localStorage.setItem(LOCAL_CACHE_REACT_STATE, JSON.stringify(stateFromLocalStorage))
  }, [activeIndices, roomsVisited, itemsOmens, name])

  return (
    <>
      <div className={"page-title"}>{CDB[name].name}</div>
      <div>
        <button className={"character-buttons"} onClick={() => reset()}>Reset</button>
        <button className={"character-buttons"}><Link to={`/${CDB[name].alt}`}>Flip Card</Link></button>
      </div>
      {
        allStats.map((stat, idxStat) => {
          return (
            <div className={"stats-row"} key={idxStat}>
              <div className={"stats-label"}>{stat.toUpperCase()}</div>
              <div className={"stats-values"}>
                <button onClick={() => changeStat(idxStat, -1)}>-</button>
                {
                  CDB[name][stat].map((num, idxInit) => {
                    let classList = []
                    if (idxInit === CDB[name].init[idxStat]) classList.push("default-stat-value")
                    if (idxInit === activeIndices[idxStat]) classList.push("active")
                    return <div key={idxInit} className={classList.join(" ")}>{num}</div>
                  })
                }
                <button onClick={() => changeStat(idxStat, 1)}>+</button>
              </div>
            </div>
          )
        })
      }

      <h2>ROOMS VISITED</h2>
      <div className={"room-buttons"}>
        {
          Object.keys(roomStats).map((room, idx) => {
            return (
              <button key={idx} className={"room-button"} disabled={roomsVisited[room]} onClick={() => visitRoom(room)}>
                <div>{room}</div>
                <div>{roomStats[room]} +1</div>
              </button>
            )
          })
        }
      </div>

      <h2>ITEMS AND OMENS</h2>
      <div className={"item-buttons"}>
        {
          Object.keys(itemsOmensTemplate).map((item, idx) => {
            return (
              <div key={idx} className={"item-checkbox-wrapper"}>
                <input type={"checkbox"} checked={itemsOmens[item]} onChange={() => equipItem(item)}/>
                <div>{item}</div>
              </div>
            )
          })
        }
      </div>
    </>
  )

}

export default Characters