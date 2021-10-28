import React, {useEffect, useState} from "react"

const LOCAL_STORAGE_ITEM = "items-db"

const Items = () => {
  const [itemsDb, setItemsDb] = useState(null)

  useEffect(() => {
    const fromCache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM))
    if (fromCache !== null) {
      setItemsDb(fromCache)
      return
    }

    fetch("items.json")
      .then(items => items.json())
      .then(items => {
        setItemsDb(items)
        localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(items))
      })
  }, [])

  if (itemsDb == null) return <></>
  return (
    <>
      <h2>Base Game ({itemsDb.base.length})</h2>
      <ol>
        {itemsDb.base.map(item => <li>{item}</li>)}
      </ol>
      <h2>Widow's Walk ({itemsDb.widows_walk.length})</h2>
      <ol>
        {itemsDb.widows_walk.map(item => <li>{item}</li>)}
      </ol>
    </>
  )
}

export default Items