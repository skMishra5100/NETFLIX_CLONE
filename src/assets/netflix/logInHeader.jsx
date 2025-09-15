import React from 'react'
import  Heading from "./img/Logonetflix.png";
import Log from './log';
import { Link } from 'react-router-dom';

const LogHeader = () => {
  return (
 
<header>

<div className="header">
<nav>
    <div className="png">
       <Link to="/"> <img height="50px" width="190px" src={Heading} alt=""/></Link>
    </div>
    <div className="flex">
        <div className="eng">
            <button> english </button>
        </div>
        <div className="sign">
            <button> sign In </button>
        </div>
    </div>
</nav>

<Log></Log>

</div>

</header>
  )
}

export default LogHeader