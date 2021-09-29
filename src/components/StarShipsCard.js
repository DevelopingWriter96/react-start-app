import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import  Typography  from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
//import { flexbox } from '@mui/system'

const StarShipsCard = (props) => {

    const handleInfoClick = () => {
        console.log('click!')
        props.modalFunction()
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
            <Typography variant="h5" color="success.dark">{props.starships.name}</Typography>
            <Typography sx={{ fontSize : 14 }} color="success.dark">{props.starships.model}</Typography>
        </CardContent>
    <CardActions>
    <IconButton sx={{ p : 0}} onClick={handleInfoClick}>
        <InfoIcon />
    </IconButton>  
    </CardActions>
    </Card>
    )
}
export default StarShipsCard
