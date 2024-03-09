import React from 'react'
import Scene from '../assets/scene1.jpg'

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={Scene}/>
        </div>
        <div className="rightSide"></div>
    </div>
  )
}

export default Navbar
