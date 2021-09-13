import {starships} from '../data/starships.js'
import {Card} from '@material-ui/core'

const starShipCard = () => {
    return starships.map((starship) => {
        return (<Card key={starship.name}>
        <h2 sx={{
        mt: '10px',
        width: 200,
        color: '#00FF00',        
    }}>{starship.name + ": " + starship.model}</h2>
        </Card>)
    })
}

export default starShipCard