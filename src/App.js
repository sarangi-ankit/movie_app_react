import React,{useState,useEffect} from "react"
import MoviesList from "./components/MoviesList"
import AddFavourite from "./components/AddFavourite"
import RemoveFavourite from "./components/RemoveFavourite"
import Heading from "./components/Heading"
import "./App.css";

const featured_api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=93a9e0753db51ee50c523885574fb580&page=1"
const search_api="https://api.themoviedb.org/3/search/movie?api_key=93a9e0753db51ee50c523885574fb580&query="



const App=()=>{

  const [movieList,setMovieList]=useState([])
  const [text,setText]=useState('')
  const [favourites,setFavourites]=useState([])
  

  useEffect(()=>{
    
    fetch(featured_api)
    .then(res=>res.json())
    .then(data=>{
      setMovieList(data.results)
      
    })
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch(search_api+text)
    .then(res=>res.json())
    .then(data=>{
      setMovieList(data.results)
      
    })

  }

  const changeText=(e)=>{
    setText(e.target.value)
  }

  const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		
  };
  
  const removeFav=(movie)=>{
    const newFavouriteList=favourites.filter((favourite)=>(
      favourite.id!==movie.id
    ))
    setFavourites(newFavouriteList);
  }

 if (movieList.length===0){
   return (
     <h1>no data found</h1>
   )
  }
 
  return (
    <div className="container">
      <header>
        <form onSubmit={handleSubmit}>
          <input className="search"  type="text" onChange={changeText} placeholder="search..." value={text}/>
          <button className="search_btn" type="submit">search</button>
        </form>
      </header>
      
      
        <Heading />
      

      <div className="movie-container">
      
          <MoviesList movies={favourites}
          handleFavouritesClick={removeFav}
          favouriteComponent={RemoveFavourite}
        />
       </div> 
       <div>
          <hr
            style={{
              color: "white",
              height: 5
            }}
          />   
      </div> 
        
      <div className="movie-container">
      
        <div>
           
          <h1>Movies</h1>
        </div>        
              
          <MoviesList movies={movieList}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourite}
          />
      </div>  
     
    </div>  
  )
  
}

export default App
