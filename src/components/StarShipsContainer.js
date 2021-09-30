import * as React from 'react'
import { starships } from '../data/starships'
import  StarShipsCard  from './StarShipsCard'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typograpy  from '@mui/material/Typography'

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

const initialNames = ["starship"]

const StarShipsContainer = () => {
const [open, setOpen] = React.useState(false)
const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false)
const [favorites, setFavorites] = React.useState(initialNames)

const addToFavorites = (starshipName) => {
    console.log(`${starshipName} added to favorites`)
setFavorites((prevState) => {
        return [...prevState, starshipName]
    })
}

    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap"
        }}>
            {favorites.map((starshipName) =>{
                return (
                    <p>{starshipName}</p>
                )
            })}
            {starships.map((starships) => {
                return (
                    <StarShipsCard addToFavoritesFunction={addToFavorites} modalFunction={handleOpen} starships={{...starships}}
                    />
                )
            })}
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typograpy variant="h6">
                        StarShip Information
                    </Typograpy>
                </Box>
            </Modal>
        </Box>
    )
}

export default StarShipsContainer