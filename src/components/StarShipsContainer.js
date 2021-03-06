import * as React from 'react'
import StarShipsCard from './StarShipsCard'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material'
//import axios from 'axios'
import { useGameContext } from '../contexts/gamescontext'

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
  const { names } = useGameContext()

  const addToFavorites = (game) => {
    console.log(`${game.name} was clicked to add to favorites`)
    if (!favorites.includes(game)) {
      setFavorites((prevState) => [...prevState, game])
    } else {
      setFavorites(() => {
        return favorites.filter((item) => item !== game)
      })
    }
  }

  return (
    <>
      <Box>
        <Typography variant="h8">
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap"
      }}>

        {names.map((game) => {
          return (
            <StarShipsCard
              key={game._id}
              addToFavoritesFunction={addToFavorites}
              modalFunction={handleOpen}
              game={ game }
            />
          )
        })}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
          {/*<Typography variant="h6" color="success.dark">{names.name}</Typography>
          <Typography sx={{ fontSize : 12 }} color="success.dark">{names.description}</Typography>
          <Typography sx={{ fontSize : 14}} color="success.dark">Developed by: {names.publisher}</Typography>
          <Typography variant="h8" color="success.dark">Published by: {names.developer}</Typography>
      <Typography variant="h6" color="success.dark">Released: {names.released_date}</Typography>*/}
          </Box>
        </Modal>
      </Box>
    </>
  )
}

export default StarShipsContainer