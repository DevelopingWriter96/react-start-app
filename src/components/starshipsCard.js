
import { Card } from '@material-ui/core'

const StarShipsCard = (props) => {
    const {
        shipName,
        shipModel
    } = props

    return (<Card id ={shipName}>
        {shipName} {shipModel}
    </Card>)
}
export default StarShipsCard