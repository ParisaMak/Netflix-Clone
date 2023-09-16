import Main from '../components/Main';
import Row from '../components/Row';
import request from '../request';

const Home = () => {

    return(
      <div>

        <Main />
        <Row id={1} title ='Now Playing' fetchURL={ request.requestNowPlaying }/>    
        <Row id={2} title ='Up coming' fetchURL={ request.requestUpcoming }/>  
        <Row id={3} title ='Popular'  fetchURL={ request.requestPopural}/>  
        <Row id={4} title ='Top Rated' fetchURL={ request.requestTopRated }/> 

      </div>
    
    )
}
export default Home;
