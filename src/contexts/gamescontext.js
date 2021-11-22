import * as React from 'react'
import axios from 'axios'

const GamesContext = React.createContext({
    names: [],
    descriptions: [],
})

export const GamesContextProvider = (props) => {
    const [names, setNames] = React.useState([])
    const [descriptions, setDescriptions] = React.useState([])

    React.useEffect(() => {
      // first define the async function
      const fetchNames = async () => {
          try {
            const response = await axios.get('/games') 
            const names = await response.data.results
            console.log(response)
            setNames(names)
          } catch (error) {
            console.log(error)
          }
      }
      //then call the function
      fetchNames()
    }, [])
}