import React, { useEffect, useRef } from 'react'
import Heading from "./img/Logonetflix.png";
import "./style/HomeHeader.css"
import { Link } from 'react-router-dom';

const HomeHeader = () => {

    const headerRef = useRef();

    const HeaderScroll = () => {
        //e.preventDefault();
        if (window.scrollY >=50) {
            headerRef.current.classList.add("ActiveHeader")
        } else {
            headerRef.current.classList.remove("ActiveHeader")
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => HeaderScroll());
    }, [])

    return (
        <header>
            <nav>
                <div ref={headerRef} className='Homeheader'>
                    <div className="Header-1st">
                        <div className="logo">
                            <Link to="/"><img height="30px" width="150px" src={Heading}/></Link>
                        </div>
                        <div className="heading-list">
                            <ul>
                                <li>Home</li>
                                <li>TV shows</li>
                                <li>Movies</li>
                                <li>New & popular</li>
                                <li>My List</li>
                                <li>Browse By languages</li>
                            </ul>
                        </div>
                    </div>

                    <div className="header-icons">
                        <div className="search-bar">
                            <img height="30px" width="30px" src="https://img.icons8.com/?size=100&id=59878&format=png&color=FFFFFF" />
                        </div>
                        <div className="header-bell">
                            <img height="35px" width="35px" src="https://img.icons8.com/?size=100&id=68376&format=png&color=FFFFFF" />
                        </div>
                        <div className="header-smile-logo">
                            <img height="45px" width="45px" src="https://img.icons8.com/?size=100&id=AfSTfNslQzaI&format=png&color=000000" />
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default HomeHeader