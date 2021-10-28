import React, {useEffect, useState} from "react"

const LOCAL_STORAGE_ITEM = "omens-db"

const Omens = () => {
  const [omensDb, setOmensDb] = useState(null)

  useEffect(() => {
    const fromCache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM))
    if (fromCache !== null) {
      setOmensDb(fromCache)
      return
    }

    fetch("omens.json")
      .then(omens => omens.json())
      .then(omens => {
        setOmensDb(omens)
        localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(omens))
      })
  }, [])

  if (omensDb == null) return <></>
  return (
    <>
      <h2>Base Game ({omensDb.base.length})</h2>
      <ol>
        {omensDb.base.map(omen => <li>{omen}</li>)}
      </ol>
      <h2>Widow's Walk ({omensDb.widows_walk.length})</h2>
      <ol>
        {omensDb.widows_walk.map(omen => <li>{omen}</li>)}
      </ol>
    </>
  )
}

export default Omens