import { starships } from '../data/starships'
import StarShipsCard from './StarShipsCard'

const StarShipsContainer = () => {
    return (
        <div>
            {starships.map((starships) => {
                return (
                    <StarShipsCard
                        shipName={starships.name}
                        shipModel={starships.model}
                    />
                )
            })}
        </div>
    )
}

export default StarShipsContainer