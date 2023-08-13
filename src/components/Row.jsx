import axios from "axios";
import { useEffect , useState } from 'react';
import Movie from './Movie';
import {BiSolidChevronRightCircle , BiSolidChevronLeftCircle } from "react-icons/bi";

const Row = ({title , fetchURL , id}) => {

    const [movies,setMovies ] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWE2NTY4NjNhMTExYThhMGMwMWJhMWZlZGY1Njk1ZCIsInN1YiI6IjY0Y2JiODIyZTA0ZDhhMDEwMDhlZTE3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TWQ1qDN6i6KNaeCl71QBkjLdVjxDBXF9XHnaAEAfaw'
            }
        };

        axios.get(fetchURL, options)
            .then(res => {
                setMovies(res?.data?.results)
                setIsLoading(false)
            })
            .catch(err => {
                console.error('error:' + err);
                setError(err)
                setIsLoading(false)
            });
    },[fetchURL])

    const slider = document.getElementById('slider' + id);
    const handleslideLeft = () => {
        slider.scrollLeft += 500;
    }
    const handleslideRight = () => {
        let slider = document.getElementById('slider' + id);
          slider.scrollLeft-= 500;
      }
      
    return(
        <>
            <h2 className="text-white ml-2 font-bold md:text-xlvp-4">{title}</h2>
            <div className="relative flex items-center ">
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div className="relative  overflow-x-scroll whitespace-nowrap  scrollbar-hide flex items-center group">
                       <BiSolidChevronLeftCircle 
                       onClick={handleslideLeft}
                       size={40} 
                       className="bg-white left-0 rounded-full absolute topacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
                        <div id={'slider'+ id} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                            {movies?.map((movie,id)=>{
                            return <Movie movie={movie} key={id}/>
                            })}
                       </div>
                       <BiSolidChevronRightCircle
                       onClick={handleslideRight}
                       size={40} 
                       className="bg-white right-0 rounded-full absolute topacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
                    </div>
                 
                )}
            </div>
        </>
    )
}
export default Row;