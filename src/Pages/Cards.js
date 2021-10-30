import React, {useState, useEffect} from "react"

const LOCAL_STORAGE_ITEM = "cards-db"

const Omens = () => {
  const [cardsDB, setCardsDB] = useState(null)

  useEffect(() => {
    const fromCache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM))
    if (fromCache !== null) {
      setCardsDB(fromCache)
      return
    }

    fetch("cards.json")
      .then(items => items.json())
      .then(items => {
        setCardsDB(items)
        localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(items))
      })
  }, [])

  if (cardsDB === null) return <></>
  return (
    <>
      <h1>Cards</h1>
      {
        Object.keys(cardsDB).map(card => {
          return (
            <>
              <h2>{card}</h2>
              <h2>Base Game ({cardsDB[card].base.length})</h2>
              <ol>
                {cardsDB[card].base.map(item => <li>{item}</li>)}
              </ol>
              <h2>Widow's Walk ({cardsDB[card].widows_walk.length})</h2>
              <ol>
                {cardsDB[card].widows_walk.map(item => <li>{item}</li>)}
              </ol>
            </>
          )
        })
      }
    </>
  )
}

export default Omens