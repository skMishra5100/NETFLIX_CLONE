import React, { useEffect, useRef, useState } from 'react'


const Movie_card = ({ title, Movie }) => {

    const [ApiDATA, setAPI] = useState([{
        title: "shashank",
        release_date: '2-4-2021',
    }]);

    const MOVIE_LIST = useRef();


    const Connection = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzVjZGY0NWY5MTgyNzI1MDFlMGI1NTQwYzQ0OGJjZiIsIm5iZiI6MTc0MjYzMjk3NC40MzYsInN1YiI6IjY3ZGU3ODBlMzM4ZTc3NzgzZmY1OGQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WINZ7vBgMnYHVBTeHGv8WwPjJt1o5mAb4c3dSbfJfI8',
        }
    }
    const MovieScroll = (e) => {
        e.preventDefault();
        MOVIE_LIST.current.scrollLeft += e.deltaY;
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${Movie}?language=en-US&page=1`, Connection)
            .then(response => response.json())
            .then(data => setAPI(data.results))
        MOVIE_LIST.current.addEventListener("wheel", MovieScroll);
    }, [])

    return (
        <>
            <div id='finalList'>
                <h1 id="first-movie">{title}</h1>
                <div className="movie-list" ref={MOVIE_LIST} >

                    {ApiDATA.map((Api, index) => <div key={index} className='movie-card'>
                        <img id='movie-img' src={`https://image.tmdb.org/t/p/w500` + Api.backdrop_path} alt="" />
                     
                            <p id='p1'>title: {Api.title}</p>
                            <p id='p2'>date: {Api.release_date}</p>
                     
                    </div>

                    )
                    }
                </div>
            </div>
        </>
    )
}

export default Movie_card