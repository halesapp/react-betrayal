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
            <div>Room</div>
            <div>B</div>
            <div>G</div>
            <div>U</div>
            <div>R</div>
            <div>E</div>
            <div>O</div>
            <div>I</div>
            <div>D</div>
            {
                Object.keys(roomsDb).map(room => {
                    return (
                        <>
                            <div>{room}</div>
                            {
                                Object.keys(roomsDb[room]).map((check, idx) => {
                                    return <div key={idx}>{roomsDb[room][check] === "x" ? "X" : ""}</div>
                                })
                            }
                        </>
                    )
                })
            }
        </div>
    )
}

export default Rooms