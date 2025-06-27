import { useState } from "react"

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(true)

  return <button onClick={ () => setIsFavorite(!isFavorite)}>
			{isFavorite ? '🖤' : '💖'}
		</button>

}