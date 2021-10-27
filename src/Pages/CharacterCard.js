import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";

import CDB from "./CharacterData";

import "./CharacterCard.css"

const LOCAL_CACHE_ITEM = "react-state"

const CharacterCard = (props) => {
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
  const itemOmenStats = {
    "Amulet of Ages": "Speed",
    "Bell": "Might",
    "Book": "Knowledge",
    "Candle": "Sanity",
    "Mask": "Physical",
    "Madman": "Mental",
    "Girl": "Mental",
    "Dog": "Mental"
  }
  let roomsVisitedTemplate = {}
  Object.keys(roomStats).forEach(room => roomsVisitedTemplate[room] = false)
  let itemsOmensTemplate = {}
  Object.keys(itemOmenStats).forEach(item => itemsOmensTemplate[item] = false)

  const [activeIndices, setActiveIndices] = useState(CDB[name].init)
  const [roomsVisited, setRoomsVisited] = useState(JSON.parse(JSON.stringify(roomsVisitedTemplate)))
  const [itemsOmens, setItemsOmens] = useState(JSON.parse(JSON.stringify(itemsOmensTemplate)))

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
      if (newState[room]) return newState
      newState[room] = !newState[room]
      if (room === "Menagerie" || room === "Study") alert(`Room marked as visited. Choose 1 ${roomStats[room]} trait and gain 1 point in that trait.`)
      else inc(allStats.indexOf(roomStats[room].toLowerCase()))
      return newState
    })
  }
  const equipItem = (item) => {
    setItemsOmens(lastState => {
      let newState = (JSON.parse(JSON.stringify(lastState)))
      newState[item] = !newState[item]
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
    const stateFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_CACHE_ITEM))
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
    let stateFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_CACHE_ITEM)) || {}
    stateFromLocalStorage[name] = {activeIndices: activeIndices, roomsVisited: roomsVisited, itemsOmens: itemsOmens}
    localStorage.setItem(LOCAL_CACHE_ITEM, JSON.stringify(stateFromLocalStorage))
  }, [activeIndices, roomsVisited, itemsOmens, name])

  return (
    <>
      <div className={"page-title"}>{CDB[name].name}</div>
      <div>
        <button className={"character-buttons"} onClick={() => reset()}>Reset</button>
        <button className={"character-buttons"}><Link to={`/card/${CDB[name].alt}`}>Flip Card</Link></button>
      </div>
      {
        allStats.map((stat, idxStat) => {
          return (
            <div className={"stats-row"} key={idxStat}>
              <div className={"stats-label"}>{stat.toUpperCase()}</div>
              <div className={"stats-values"}>
                <button onClick={() => dec(idxStat)}>-</button>
                {
                  CDB[name][stat].map((num, idxInit) => {
                    let classList = []
                    if (idxInit === CDB[name].init[idxStat]) classList.push("default-stat-value")
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
          Object.keys(roomStats).map((name, idx) => {
            return (
              <button key={idx} className={"room-button"} disabled={roomsVisited[name]} onClick={() => visitRoom(name)}>
                <div>{name}</div>
                <div>{roomStats[name]} +1</div>
              </button>
            )
          })
        }
      </div>

      <h2>ITEMS AND OMENS</h2>
      <div className={"item-buttons"}>
        {
          Object.keys(itemOmenStats).map((item, idx) => {
            return (
              <div className={"item-checkbox-wrapper"}>
                <input type={"checkbox"} checked={itemsOmens[item]} onInput={() => equipItem(item)}/>
                <div>{item}</div>
              </div>
              // <button key={idx} className={"room-button"} onClick={() => equipItem(name)}>
              //   <div>{item}</div>
              // </button>
            )
          })
        }
      </div>
    </>
  )

}

export default CharacterCard