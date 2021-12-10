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
          try {
            const response = await axios.get('/games') 
            const names = await response.data.data
            console.log(names)
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
        names,
      }}>
        {props.children}
      </GamesContext.Provider>
    )
}

export const useGameContext = () => React.useContext(GamesContext)