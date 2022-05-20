import React from 'react'
import logo from '../Assets/Images/movies-app.png'
import search from '../Assets/Images/magnifying-glass.png'
export default function header() {
  return (
    <>
    <div className="top">
      <div className="row mainRow">
        <div className="col-2 row align-items-center justify-content-center">
        <div className="col-3"><img src={logo} width="40px" height="43px"/></div>
        <div className="col-9">Movie Info App</div>
        </div>
        <input  className="col-6 offset-1 searchBar pl-2" type="text" placeholder="Search your movie...."/>
        <div className="col-2 row offset-1 align-items-center justify-content-end">About Us</div>
      </div>
      
      
    </div>

    </>
  )
}
