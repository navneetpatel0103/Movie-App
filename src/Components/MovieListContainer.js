import React,{useState} from 'react'
import MovieContainer from './MovieContainer'
export default function MovieListContainer(props) {
  
  return (
    <>
    <div className='box' >
      {
      props.movieList?.length ?props.movieList.map((movie, index)=><MovieContainer key={index} movie={movie} 
      onclick={props.setSelectedMovie}/>): "No movie Search"
      }
    </div>
    </>
  )
}
