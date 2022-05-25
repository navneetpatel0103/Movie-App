import axios from 'axios'
import React, {useEffect,useState} from 'react'
import cross from '../Assets/Images/cross.png'
import { API_KEY } from '../App'

export default function MovieInfo(props) {
    const [movieInfo, setMovieInfo] = useState();


    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${props.selectedMovie}&apikey=${API_KEY}`)
        .then((response)=>{
            setMovieInfo(response.data);
        })
    }, [props.selectedMovie])
    


  return (
    <div className='movieInfoContainer' >
        {movieInfo?<>
            <img className='poster' style={{margin:"0 25px"}} src={movieInfo?.Poster} />
        <div className="movieInfo">
            <div style={{fontSize:"20px", fontWeight:"600", margin:"0 0 12px 0" }}>Movie: {movieInfo?.Title}</div>
            <div className='indInfoHeading'>IMDB Rating: <span className='infoHeading'>{movieInfo?.imdbRating}</span></div>
            <div className='indInfoHeading'>Year: <span className='infoHeading'>{movieInfo?.Year}</span></div>
            <div className='indInfoHeading'>Language: <span className='infoHeading'>{movieInfo?.Language}</span></div>
            <div className='indInfoHeading'>Rated:  <span className='infoHeading'>{movieInfo?.Rated}</span></div>
            <div className='indInfoHeading'>Released: <span className='infoHeading'>{movieInfo?.Released}</span></div>
            <div className='indInfoHeading'>Runtime: <span className='infoHeading'> {movieInfo?.Runtime}</span></div>
            <div className='indInfoHeading'>Genre: <span className='infoHeading'> {movieInfo?.Genre}</span></div>
            <div className='indInfoHeading'>Director: <span className='infoHeading'>{movieInfo?.Director}</span></div>
            <div className='indInfoHeading'>Actors: <span className='infoHeading'>{movieInfo?.Actors}</span></div>
            <div className='indInfoHeading'>Plot: <span className='infoHeading'>{movieInfo?.Plot}</span></div>
        </div>
        <span>< img src={cross} width="15px" height="15px" style={{cursor:"pointer"}} onClick={()=>props.setSelectedMovie()}/></span>
        </>:" Loading...."}
       
        </div>
  )
}
