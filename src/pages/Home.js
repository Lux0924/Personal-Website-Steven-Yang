import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/ayakaArcher.png"
import "../styles/Home.css"
import "../styles/Footer.css"

function Home() {
  return (
    <div className="home"  style={{ backgroundImage: `url(${BannerImage})` }}>

        <div 
            className="headerContainer" 
        >

        Hello World
        <h1> Bonjour </h1>
        <p>weeeee</p>
        <Link to="/about">
            <button>hello</button>
        </Link>
        </div>
    </div>
  )
}

export default Home
