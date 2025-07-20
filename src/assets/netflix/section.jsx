import React from 'react'
import Sec2img from "./img/section2.png";
const Section = () => {
  return (
    <section className="first">
      <div className="gap">

      </div>

      <div className="way">
        <div className="text">
          <h1>enjoy on your TV</h1>
          <p>watch on smart tvs,Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="img">
          <img  height="300px"
            width="300px" src={Sec2img} alt="" />

        </div>
      </div>
    </section>

  )
}

export default Section
