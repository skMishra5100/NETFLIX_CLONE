import React from 'react'
import Secimg from "./img/section.png";
const Section2 = () => {
  return (
    <section className="second">
    <div className="gap">

    </div>

    <div className="way">
        <div className="img">
            <img  height="300px"
    width="300px" src={Secimg} alt=""/>

        </div>
        <div className="text">
            <h1>Download your shows to watch offline</h1>
            <p>Save your favourites easily and always have something to watch.</p>
        </div>

    </div>
</section>
  )
}

export default Section2

