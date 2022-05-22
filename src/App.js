import React, {useState} from "react";
import "./App.css";
import MovieListContainer from "./Components/MovieListContainer";
import axios from 'axios';
import logo from './Assets/Images/movies-app.png'
import MovieInfo from "./Components/MovieInfo";
export const API_KEY="94c2a3a3";


function App() {
  const [text, setText] = useState();
  const [timerId, setTimerId] = useState();
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchData=async (movieName)=>{
    const response=await axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`);
    console.log(response);
    setMovieList(response.data.Search);
  };

const OnTextChange=(e)=>{
    clearTimeout(timerId);
    setText(e.target.value);
    const timeOutId=setTimeout(()=>fetchData(e.target.value),500);
    setTimerId(timeOutId);
  }


return (
    <>
    <div className="top">
      <div className="row mainRow">
        <div className="col-2 row align-items-center justify-content-center">
        <div className="col-3"><img src={logo} width="40px" height="43px"/></div>
        <div className="col-9">Movie Info App</div>
        </div>
        <input  className="col-6 offset-1 searchBar pl-2" type="text" placeholder="Search your movie...." value={text}
         onChange={OnTextChange}/>
        <div className="col-2 row offset-1 align-items-center justify-content-end">About Us</div>
      </div>
    </div>    
    {selectedMovie && <MovieInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>}  
    <MovieListContainer movieList={movieList} setSelectedMovie={setSelectedMovie}/>
    </>
  );
}

export default App;
