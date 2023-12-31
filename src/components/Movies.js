import React, { useEffect , useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";
import WatchList from "./WatchList";
import { json } from "react-router-dom";
function Movies() {

    const [movies, setMovies] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [watchList, setWatchList] = useState([])
    const [hovered, setHovered] = useState('')

    // pagination Handlers
    const onNext = () => {
        setPageNum(pageNum + 1)
    }
    const onPrev = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1)
        }
    }
    // WatchList Handlers
    const addToWatchList = (movie) => {
        // ... is the spread operator
        let newWatchList = JSON.parse(localStorage.getItem('imdb')) || []
         newWatchList = [...newWatchList, movie]
        setWatchList(newWatchList)
        localStorage.setItem('imdb', JSON.stringify(newWatchList))
    }
    const removeFromWatchList = (movie) => {
        let newWatchList = JSON.parse(localStorage.getItem('imdb')) || []
        const filteredWatchList = newWatchList.filter((item) => item.id != movie.id)
        setWatchList(filteredWatchList)
        localStorage.setItem('imdb', JSON.stringify(filteredWatchList))
    };

    const showButton = (id) => {
        setHovered(id)
    };
    const hideButton = (id) => {
        setHovered('')
    };

  
    
    useEffect(() => {
        // good practice to use an IIFE
        // IIFE = Immediately Invoked Function Expression
        // use function inside useEffect
        (function(){
            let moviesFromLocalStorage = JSON.parse(localStorage.getItem("imdb")) || [];
            setWatchList(moviesFromLocalStorage);
            axios
              .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=6bf4ade6a0cbdd6c609693a468fb080f&page=${pageNum}   `
              )
              .then((res) => {
                
                setMovies(res.data.results);
                
              });
        })()
        
    }, [pageNum])
    

  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>

      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => {
          return (
            <div
              onMouseOver={() => showButton(movie.id)}
              onMouseLeave={() => hideButton(movie.id)}
              key={movie.id}
              className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180px] hover:scale-110 duration-300 relative flex items-end"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}
            >
              <div
                className="text-xl p-2 bg-gray-900 rounded-xl absolute right-2 top-2 opacity-70"
                style={{ display: hovered == movie.id ? "block" : "none" }}
              >
                {/* {watchList.includes(movie) == false ? (
                  <div onClick={() => addToWatchList(movie)}>🤩</div>
                ) : (
                  <div onClick={()=>removeFromWatchList(movie)}>❌</div>
                )} */}
                {/* {!watchList.some((item) => item.id === movie.id) ? (
                  <div onClick={() => addToWatchList(movie)}>🤩</div>
                ) : (
                  <div onClick={() => removeFromWatchList(movie)}>❌</div>
                )} */}
                {!watchList.filter((item) => item.id === movie.id).length >
                0 ? (
                  <div onClick={() => addToWatchList(movie)}>🤩</div>
                ) : (
                  <div onClick={() => removeFromWatchList(movie)}>❌</div>
                )}
              </div>

              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-50">
                {movie.title}
              </div>
            </div>
          );
          
        })}
        
      </div>

      <Pagination pageNum={pageNum} onNext={onNext} onPrev = {onPrev} />
      
    </div>
  );
}

export default Movies;
