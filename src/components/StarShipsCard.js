import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import  Typography  from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import FavoriteIcon from '@mui/icons-material/Favorite'

const StarShipsCard = (props) => {
    const [favorite, setFavorite] = React.useState(false)
    
    const handleInfoClick = () => {
        props.modalFunction()
    } 

    const handleFavoriteClick = () => {
        console.log(props.data.games)
        setFavorite(!favorite)
        props.addToFavoritesFunction(props.data.games)
    }
    
    return (
    <Card 
        className="card"sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 168,
        height: 250,
        m: 1,
        '&:hover': {
          backgroundColor: '#bbb',
          opacity: [0.9, 0.8, 0.7],
        },
    }}>
        <CardContent>
            <Typography variant="h5" color="success.dark">{props.data.games}</Typography>
            <Typography sx={{ fontSize : 14 }} color="success.dark">{props.data.games}</Typography>
        </CardContent>
    <CardActions>
    <IconButton sx={{ p : 0}} onClick={handleInfoClick}>
        <InfoIcon />
    </IconButton>
    <IconButton sx={{ p: 0, m: 0}} onClick={handleFavoriteClick}>
        <FavoriteIcon sx={{ color: favorite ? '#F00' : '#000'}}/>
    </IconButton>      
    </CardActions>
    </Card>
    )
}
export default StarShipsCard
