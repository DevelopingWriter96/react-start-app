import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import  Typography  from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import './StarShipsCards.css'

const StarShipsCard = (starships) => {
    /* const {
        shipName,
        shipModel,
        shipCrew
    } = props */

    return (
    <Card key={starships.shipCrew} className="card"sx={{
        width: 168,
        bgcolor: 'primary.dark',
        '&:hover': {
          backgroundColor: '#bbb',
          opacity: [0.9, 0.8, 0.7],
        },
    }}>
        <CardContent>
            <Typography variant="h5" color="success.dark">{starships.name}</Typography>
            <Typography sx={{ fontSize : 14 }} color="success.dark">{starships.model}</Typography>
        </CardContent>
    <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
    )
}
export default StarShipsCard
