import React, {useState, useEffect} from "react";

function WatchList() {
    const [favourites, setWatchList] = useState([])
  

    useEffect(() => {
        let moviesFromLocalStorage = JSON.parse(localStorage.getItem("imdb"));
          setWatchList(moviesFromLocalStorage);
        }, [])

    return (
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
            {favourites.map((movies)=>{
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
                    <td className="py-4">
                        Action
                    </td>
                  </tr>
                );
            }

            )}
            
          </tbody>
        </table>
      </div>
    );
}

export default WatchList;
