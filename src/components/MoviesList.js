import React from "react"
const imagePath="https://image.tmdb.org/t/p/w500"

const MoviesList=({movies,handleFavouritesClick,favouriteComponent})=>{
  const FavouriteComponent = favouriteComponent;
  return (
		<>
			{movies.map((movie, index) => (
				<div className='movie'>
					<img src={imagePath+movie.poster_path} alt={movie.title}/>
					<div className="movie-info">
					<h3>{movie.title}</h3>
					<span>{movie.vote_average}</span>
          		</div>

				<div
					onClick={() => handleFavouritesClick(movie)}
				>
					<FavouriteComponent />
				</div>
          {/* <div className="overview">
            <h3>overview:</h3>
            <p>{movie.overview}</p>
          </div> */}
				</div>
			))}
		</>
	);
  
}
export default MoviesList