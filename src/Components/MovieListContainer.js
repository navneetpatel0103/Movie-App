import React from 'react'
import MovieContainer from './MovieContainer'

export default function MovieListContainer(props) {
  return (
    <>
    <div className='box' style={{border:"2px solid red"}}>
      {
      props.movieList?.length ?props.movieList.map(()=><MovieContainer/>): "No movie Search"
      }
    </div>
    </>
  )
}
