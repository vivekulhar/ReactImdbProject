import React, { useEffect , useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";
import WatchList from "./WatchList";
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
    const addToWatchList = (id) => {
        // ... is the spread operator
        const newWatchList = [...watchList, id]
        setWatchList(newWatchList)
    }
    const removeFromWatchList = (id) => {
        const filteredWatchList = watchList.filter((item) => item !== id)
        setWatchList(filteredWatchList)
    }

    const showButton = (id) => {
        setHovered(id)
    }
    const hideButton = (id) => {
        setHovered('')
    }

    console.log(movies)
    useEffect(() => {
        // good practice to use an IIFE
        // IIFE = Immediately Invoked Function Expression
        // use function inside useEffect
        (function(){
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

      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div
                onMouseOver = {() => showButton(movie.id)}
                onMouseLeave = {() => hideButton(movie.id)}
              key={movie.id}
              className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180px] hover:scale-110 duration-300 relative flex items-end"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}


            >
              <div className="text-xl p-2 bg-gray-900 rounded-xl absolute right-2 top-2 opacity-70"
              style={{display:hovered==movie.id?'block':'none'}}
              >
                {watchList.includes(movie.id) == false ? (
                  <div onClick={() => addToWatchList(movie.id)}>🤩</div>
                ) : (
                  <div onClick={()=>removeFromWatchList(movie.id)}>❌</div>
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
