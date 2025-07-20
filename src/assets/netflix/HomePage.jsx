import React from 'react'
import HomeHeader from './HomeHeader'
import "../netflix/style/HomePage.css"
import Movie_card from './Movie_card';
import Footer from './footer';

const HomePage = () => {


  return (
    <>
      <section id='hero-section'>
        <HomeHeader />
      <div className="hero-content">
    <p>discover his ties to a secreate ancient order.A young man living modern ambarks on a quest to save the city for an enemy.</p>
    <div className="hero-btn">
        <button  className='button'><img height="20px" width="20px" src="https://img.icons8.com/?size=100&id=59862&format=png&color=000000" alt="" /> Play</button>
        <button className='button-2'><img height="20px" width="20px" src="https://img.icons8.com/?size=100&id=77&format=png&color=FFFFFF" alt="" /> More Info</button>
    </div>
    </div>
        <Movie_card title={"Now Playing"} Movie={"now_playing"} />
      </section>
      <section className='movies-section'>
      <Movie_card title={"Popular"} Movie={"popular"} />
        <Movie_card title={"Top Rated"} Movie={"top_rated"} />
        <Movie_card title={"Upcoming"} Movie={"upcoming"} />



      </section>
      <Footer/>
    </>
  )
}

export default HomePage