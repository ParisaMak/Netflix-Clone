import { FaHeart ,FaRegHeart  } from "react-icons/fa";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from '../fireBase';
import { arrayUnion , doc , updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved , setSaved] = useState(false)
  const { user } = UserAuth();

  const movieID= doc(db , 'users', `${user?.email}`);
  const savedShow = async() =>{
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID ,{
        savedShow : arrayUnion({
          id:movie.id,
          title:movie.title,
          img:movie.backdrop_path,
        })
      })
    } else{
       alert('Please log in to save a movie!')
    }
   }
  console.log(saved)
  return (
    <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <div className="absolute w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80  text-white flex justify-center items-center">
        <p className="white-space-normal  md:text-sm font-bold text-xs px-6 text-center">{movie?.title}</p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" onClick={savedShow} />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" onClick={savedShow} />
          )}
        </p>
      </div>
      <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
    </div>
  );
};

export default Movie;
