import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Main from './components/Main';
import { Routes ,Route , Link, NavLink }  from 'react-router-dom';
import { useEffect } from 'react';

function App() {
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
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
},[])
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />}>
      </Route>
    </Routes>
    </>
   
  );
}

export default App;
