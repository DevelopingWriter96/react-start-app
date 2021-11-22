import * as React from 'react'
import { starships } from '../data/starships'
import StarShipsCard from './StarShipsCard'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material'
import axios from 'axios'

const style = {
  postion: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(75%, 75%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const StarShipsContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [favorites, setFavorites] = React.useState([])
  const [starshipsList, setStarshipsList] = React.useState([])

  React.useEffect(() => {
    const fetchStarshipList = async () => {
      console.log("I want to call my api now")
      try {
        const response = await axios.get('/starships')
        console.log(response.data)
        setStarshipsList(response.data) 
      } catch (error) {
        console.log(error)
      }
    }
    fetchStarshipList()
  }, [])

  const addToFavorites = (starships) => {
    console.log(`${starships.name} was clicked to add to favorites`)
    if (!favorites.includes(starships.name)) {
      setFavorites((prevState) => [...prevState, starships.name])
    } else {
      setFavorites(() => {
        return favorites.filter((item) => item !== starships.name)
      })
    }
  }

  return (
    <>
      <Box>
        <Typography variant="h4">
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap"
      }}>

        {starshipsList.map((starship) => {
          return (
            <StarShipsCard
              key={starship.name}
              addToFavoritesFunction={addToFavorites}
              modalFunction={handleOpen}
              //starship={{ ...starships }}
            />
          )
        })}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant="h6">
            </Typography>
          </Box>
        </Modal>
      </Box>
    </>
  )
}

export default StarShipsContainer