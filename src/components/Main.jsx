import { useState ,useEffect } from "react";


const Main = () => {
    const [ movies,setMovies ] = useState([])
    const movie=movies[Math.floor(Math.random()*movies.length)]
console.log(movie)
    useEffect(() => {
        fetch("https://moviesdatabase.p.rapidapi.com/titles", {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
              "53c14de0e0msh35541b6d6f0feb1p166c7fjsn6fcc9ebaa163",
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
          })
          .then(response => response.json())
          .then(data => {
           setMovies(data.results)})
          .catch(err => {
            console.log(err);
          });
    },[]);
    
    return (
    <div className="text-white w-full flex flex-col ">

        <div className="w-full h-[550px] text-red-600">
            <div className="w-full h-full bg-red-400">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            <img className="w-full h-full object-cover border-white border-2"  key={movie.id}  alt={movie.originalTitleText.text} />
            </div>
            <div>
                <button>Play</button>
                <button>Watch Later</button>
            </div>
        </div>
        {movies.map((movie) => {return <div className='blog-preview' key={movie.id}>
        <img className="h-72 w-52 border-white border-2"  key={movie.id}  alt={movie.originalTitleText.text} />
        <h1>{movie.originalTitleText.text}</h1>
        <h2>{movie.releaseYear.year}</h2>
        </div>})}
    </div>
    );
}

export default Main