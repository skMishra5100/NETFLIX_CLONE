import React from 'react'
import  Heading from "./img/Logonetflix.png";
import HomeContent from './Home-Content';
import {Link} from "react-router-dom"

const Header = () => {
  return (
 
<header>

<div className="header">
<nav>
    <div className="png">
        <img  id='png'  src={Heading} alt=""/>
    </div>
    <div className="flex">
        <div className="eng">
         <button> english </button>
        </div>
        <div className="sign">
           <Link to="/Login" > <button> sign In </button></Link>
        </div>
    </div>
</nav>

<HomeContent></HomeContent>

</div>

</header>
  )
}

export default Header