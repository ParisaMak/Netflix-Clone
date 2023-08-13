import { useState ,useEffect } from "react";
import request from "../request";
import axios from "axios";


const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(request.requestNowPlaying, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWE2NTY4NjNhMTExYThhMGMwMWJhMWZlZGY1Njk1ZCIsInN1YiI6IjY0Y2JiODIyZTA0ZDhhMDEwMDhlZTE3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TWQ1qDN6i6KNaeCl71QBkjLdVjxDBXF9XHnaAEAfaw'
          }
        });
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const movieRandom = movies[Math.floor(Math.random() * movies.length)];
  const truncatedOverview =
    movieRandom?.overview?.length > 100
      ? movieRandom.overview.slice(0, 100) + "..."
      : movieRandom?.overview;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-screen text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movieRandom?.backdrop_path}`}
            alt={movieRandom?.title}
          />

          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-2xl py-4 font-bold md:text-3xl">
              {movieRandom?.title}
            </h1>
            <div>
              <button className="border-2 bg-gray-300 border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border-2 text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="py-4 text-gray-400 text-sm">
              Released: {movieRandom?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncatedOverview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;