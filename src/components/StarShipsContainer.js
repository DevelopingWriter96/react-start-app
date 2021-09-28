import { starships } from '../data/starships'
import  StarShipsCard  from './StarShipsCard'
import Box from '@mui/material/Box'

const StarShipsContainer = () => {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap"
        }}>
            {starships.map((starships) => {
                return (
                    <StarShipsCard {...starships}
                    />
                )
            })}
        </Box>
    )
}

export default StarShipsContainer