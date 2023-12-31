import React, { useState, useEffect } from "react";

function WatchList() {
  const [favourites, setWatchList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  useEffect(() => {
    let moviesFromLocalStorage = JSON.parse(localStorage.getItem("imdb"));
    setWatchList(moviesFromLocalStorage);
  }, []);

  useEffect(() => {
    let temp = favourites.map((movies) => genreids[movies.genre_ids[0]]);
    temp = new Set(temp); // important
    setGenres(["All Genres", ...temp]);
  });
  let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  let filteredArray = [];

  // genre filter
  filteredArray =
    currentGenre === "All Genres"
      ? favourites
      : favourites.filter(
          (movies) => genreids[movies.genre_ids[0]] === currentGenre
        );

  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genres.map((genre) => {
          return (
            <button
              className={
                currentGenre === genre
                  ? "m-2 text-lg p-1 px-2 bg-blue-400 hover:bg-blue-400  text-white rounded-xl font-bold"
                  : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400  text-white rounded-xl font-bold"
              }
                onClick={() => setCurrentGenre(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>

              <th>
                <div className="flex">
                  <div>Rating</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {favourites.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No favorite movies to display
                </td>
              </tr>
            ) : (
              filteredArray.map((movies) => {
                return (
                  <tr className="hover:bg-gray-50">
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
                      <img
                        className="h-[6rem] w-[10rem] object-fit"
                        src={`https://image.tmdb.org/t/p/original/t/p/original/${movies.poster_path}`}
                        alt="movie poster"
                      />

                      <div>{movies.title}</div>
                    </td>
                    <td className="pl-6 py-4">{movies.vote_average}</td>
                    <td className="pl-6 py-4">{movies.popularity}</td>
                    <td className="py-4">{genreids[movies.genre_ids[0]]}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
