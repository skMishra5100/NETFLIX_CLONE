import React from 'react'
import  Heading from "./img/Logonetflix.png";
import Log from './log';

const LogHeader = () => {
  return (
 
<header>

<div class="header">
<nav>
    <div class="png">
        <img height="50px" width="190px" src={Heading} alt=""/>
    </div>
    <div class="flex">
        <div class="eng">
            <button> english </button>
        </div>
        <div class="sign">
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