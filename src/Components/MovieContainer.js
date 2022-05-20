import React from 'react'

export default function MovieContainer() {
  return (
    <div style={{width:"310px", padding:"10px", boxShadow:"0 3px 10px 0 #aaa", cursor:"pointer"}}>
       <img className='poster' src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" width="360px" height="395px" />
       <div style={{padding:"10px 0", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontWeight:"600"}}>Guardians of the Galaxy Vol. 2 </div>
       <div className="row">
           <div className='col-5'>Date-2014</div>
           <div className='col-5 offset-2'>Genre-Action</div>
       </div>
    </div>
  )
}
