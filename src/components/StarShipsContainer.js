import { starships } from '../data/starships'
import  StarShipsCard  from './StarShipsCard'
import { Box } from '@material-ui/core'

const StarShipsContainer = () => {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap" 
        }}>
            {starships.map((starships) => {
                return (
                    <StarShipsCard
                        shipName={starships.name}
                        shipModel={starships.model}
                        shipCrew = {starships.crew}
                    />
                )
            })}
        </Box>
    )
}

export default StarShipsContainer