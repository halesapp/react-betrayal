import React, {useEffect, useState} from "react"

import "./Rooms.css"

const LOCAL_STORAGE_ROOMS = "rooms-db"

const Rooms = () => {
  const [roomsDb, setRoomsDb] = useState(null)

  useEffect(() => {
    const roomsFromCache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ROOMS))
    if (roomsFromCache !== null) {
      setRoomsDb(roomsFromCache)
      return
    }
    fetch("rooms.json")
      .then(rooms => rooms.json())
      .then(rooms => {
        setRoomsDb(rooms)
        localStorage.setItem(LOCAL_STORAGE_ROOMS, JSON.stringify(rooms))
      })
  }, [])

  if (roomsDb == null) return <></>
  return (
    <div className={"room-table"}>
      <div className={"table-row"}>
        <div className={"room-name"}>Room</div>
        <div className={"room-check"}>B</div>
        <div className={"room-check"}>G</div>
        <div className={"room-check"}>U</div>
        <div className={"room-check"}>R</div>
        <div className={"room-check"}>E</div>
        <div className={"room-check"}>O</div>
        <div className={"room-check"}>I</div>
        <div className={"room-check"}>D</div>
      </div>
        {
        Object.keys(roomsDb).map((room, idx) => {
          return (
            <div key={idx} className={"table-row"}>
              <div className={"room-name"}>{room}</div>
              {
                Object.keys(roomsDb[room]).map((check, idx) => {
                  return <div key={idx} className={"room-check"}>{roomsDb[room][check] === "x" ? "X" : ""}</div>
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Rooms