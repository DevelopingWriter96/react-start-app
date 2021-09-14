
import { Card } from '@material-ui/core'

const StarShipsCard = (props) => {
    const {
        shipName,
        shipModel
    } = props

    return (<Card>
        {shipName} {shipModel}
    </Card>)
}
export default StarShipsCard