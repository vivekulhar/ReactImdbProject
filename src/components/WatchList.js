import React from "react";

function WatchList() {
  let movies = [
    {
      "adult": false,
      "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      "id": 848326,
      "title": "Rebel Moon - Part One: A Child of Fire",
      "original_language": "en",
      "original_title": "Rebel Moon - Part One: A Child of Fire",
      "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      "media_type": "movie",
      "genre_ids": [
        878,
        28,
        12
      ],
      "popularity": 923.889,
      "release_date": "2023-12-15",
      "video": false,
      "vote_average": 6.43,
      "vote_count": 459
    },
    {
      "adult": false,
      "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
      "id": 572802,
      "title": "Aquaman and the Lost Kingdom",
      "original_language": "en",
      "original_title": "Aquaman and the Lost Kingdom",
      "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      "media_type": "movie",
      "genre_ids": [
        28,
        12,
        14
      ],
      "popularity": 1999.169,
      "release_date": "2023-12-20",
      "video": false,
      "vote_average": 6.544,
      "vote_count": 182
    },
    {
      "adult": false,
      "backdrop_path": "/ipmUfBf3RxIdATbYI4CcPlnTsWs.jpg",
      "id": 930564,
      "title": "Saltburn",
      "original_language": "en",
      "original_title": "Saltburn",
      "overview": "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
      "poster_path": "/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
      "media_type": "movie",
      "genre_ids": [
        18,
        35,
        53
      ],
      "popularity": 375.845,
      "release_date": "2023-11-16",
      "video": false,
      "vote_average": 7.215,
      "vote_count": 202
    },
    {
      "adult": false,
      "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      "id": 695721,
      "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
      "original_language": "en",
      "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
      "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      "media_type": "movie",
      "genre_ids": [
        18,
        878,
        28
      ],
      "popularity": 3233.513,
      "release_date": "2023-11-15",
      "video": false,
      "vote_average": 7.215,
      "vote_count": 1028
    }];

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
            {movies.map((movies)=>{
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
