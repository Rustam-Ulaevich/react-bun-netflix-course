export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  return <button onClick={ () => setIsFavorite(!isFavorite)}>
			{isFavorite ? 'Favorite' : 'Is not favorite'}
		</button>

}