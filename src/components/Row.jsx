import axios from "axios";
import { useEffect , useState ,useRef } from 'react';
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

    const sliderRef = useRef(null);

    const handleSlideLeft = () => {
      const sliderWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy(-sliderWidth, 0);
    };
  
    const handleSlideRight = () => {
      const sliderWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy(sliderWidth, 0);
    };
  
    useEffect(() => {
      const handleResize = () => {
        sliderRef.current.scrollTo(0, 0);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <>
            <h2 className="text-white ml-2 font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center ">
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div className="relative  overflow-x-scroll whitespace-nowrap  scrollbar-hide flex items-center group ">
                       <BiSolidChevronLeftCircle 
                       onClick={handleSlideLeft}
                       size={40} 
                    
                       className="bg-white left-0 rounded-full absolute topacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
                        <div ref={sliderRef} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                            {movies?.map((movie,id)=>{
                            return <Movie movie={movie} key={id} />
                            })}
                       </div>
                       <BiSolidChevronRightCircle
                       onClick={handleSlideRight}
                       size={40} 
                       className="bg-white right-0 rounded-full absolute topacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
                    </div>
                 
                )}
            </div>
        </>
    )
}
export default Row;