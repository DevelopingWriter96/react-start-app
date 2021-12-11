import * as React from 'react'
import axios from 'axios'

const GamesContext = React.createContext({
    names: []
})

export const GamesContextProvider = (props) => {
    const [names, setNames] = React.useState([])

    React.useEffect(() => {
      // first define the async function
      const fetchNames = async () => {
          const zeldaURL = `/.netlify/functions/games`
          try {
            const zeldaResponse = await axios.get(zeldaURL) 
            const names = await zeldaResponse.data
            setNames(names)
          } catch (error) {
            console.log(error)
          }
      }
      //then call the function
      fetchNames()
    }, [])
    
    return (
      <GamesContext.Provider value={{
        names
      }}>
        {props.children}
      </GamesContext.Provider>
    )
}

export const useGameContext = () => React.useContext(GamesContext)