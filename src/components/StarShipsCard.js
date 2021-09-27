import { Card } from '@material-ui/core'
import './StarShipsCards.css'

const StarShipsCard = (props) => {
    const {
        shipName,
        shipModel,
        shipCrew
    } = props

    return (<Card key ={shipCrew}>
        {shipName} {shipModel}
    </Card>)
}
export default StarShipsCard