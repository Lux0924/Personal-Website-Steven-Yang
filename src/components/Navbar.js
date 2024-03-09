import React, {useState} from 'react';
import Scene from '../assets/scene1.jpg';
import {Link} from 'react-router-dom';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import '../styles/Navbar.css'
function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks? "open": "close"}>
            <img src={Scene}/>
            <div className="hiddenLinks">
                <Link to="/">Main </Link>
                <Link to="/about"> About</Link>
                <Link to="/project"> Project</Link>
                <Link to="/contact"> Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Main </Link>
            <Link to="/about"> About</Link>
            <Link to="/project"> Project</Link>
            <Link to="/contact"> Contact</Link>
            <button onClick={toggleNavBar}>
                <ReorderSharpIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar
