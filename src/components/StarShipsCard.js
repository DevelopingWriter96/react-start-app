import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia' 
import CardContent from '@mui/material/CardContent'
import  Typography  from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/CheckCircle'
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
        height: 700,
        m: 1,
        border: 5,
        borderColor: "#00CC00"
        // '&:hover': {
          //backgroundColor: '#bbb',
          //opacity: [0.9, 0.8, 0.7],
        //},
    }}>
    <CardMedia component='img' alt='Zelda Game Cover' width='325' image={`../images/${props.game._id}.jpg`} onClick={handleInfoClick}/>
        <CardContent>
            <Typography variant="h6" color="success.dark">{props.game.name}</Typography>
            {/*<Typography sx={{ fontSize : 12 }} color="success.dark">{props.game.description}</Typography>
            <Typography variant="h6" color="success.dark">Developed by: {props.game.publisher}</Typography>
            <Typography variant="h6" color="success.dark">Published by: {props.game.developer}</Typography>
            <Typography variant="h6" color="success.dark">Released: {props.game.released_date}</Typography>*/}
        </CardContent>
    <CardActions>
    <IconButton sx={{ p : 0}}>
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
