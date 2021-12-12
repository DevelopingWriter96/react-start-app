import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia' 
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
        console.log(props.game)
        setFavorite(!favorite)
        props.addToFavoritesFunction(props.game)
    }
    
    return (
    <Card 
        className="card"sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 350,
        height: 710,
        m: 1,
        border: 5,
        borderColor: "#00CC00"
        // '&:hover': {
          //backgroundColor: '#bbb',
          //opacity: [0.9, 0.8, 0.7],
        //},
    }}>
        <CardMedia component='img' alt='Zelda Game Cover' width='325' src='./zeldacoverart/5f6ce9d805615a85623ec2b8.jpg'/>
        <CardContent>
            <Typography variant="h6" color="success.dark">{props.game.name}</Typography>
            <Typography sx={{ fontSize : 12 }} color="success.dark">{props.game.description}</Typography>
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
