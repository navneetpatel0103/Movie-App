import React from 'react'
import MovieInfo from './MovieInfo';

export default function MovieContainer(props) {
  const {Title, Year, imdbID, Type, Poster}=props.movie;
 
  return (
    <div style={{width:"270px", padding:"10px", boxShadow:"0 3px 10px 0 #aaa", cursor:"pointer"}} onClick={()=>{props.onclick(imdbID)}}>
       <img className='poster' src={Poster} width="360px" height="400px" />
       <div style={{padding:"10px 0", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontWeight:"600"}}>{Title} </div>
       <div className="row">
           <div className='col-5'>Year: {Year}</div>
           <div className='col-5 offset-2'>Type: {Type}</div>
       </div>

    </div>
    
  )
}
