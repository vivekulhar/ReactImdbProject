import React from "react";
import axios from "axios";
function Movies() {


    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=6bf4ade6a0cbdd6c609693a468fb080f`
      )
      .then((res) => {
        console.log(res.data.results);
      });

  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>

      <div className="flex">
        <div
          className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180px] hover:scale-110 duration-300 relative flex items-end"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original//6KErczPBROQty7QoIsaa6wJYXZi.jpg)`,
          }}
        >
            <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-50">
                Tom & Jerry
            </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
