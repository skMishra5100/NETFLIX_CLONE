import React, { useEffect, useRef } from 'react'
import Heading from "./img/Logonetflix.png";
import "./style/HomeHeader.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeHeader = () => {

    const headerRef = useRef();


    useEffect(() => {
        const side = document.getElementById("side-bar");
        const hamburger = document.getElementById("hamburger-icon");
        const close = document.getElementById("close");

        const openSidebar = () => {
            side.style.display="block";
        };
        
        const closeSidebar = () => {
            side.style.display="none";
        };

        hamburger.addEventListener("click", openSidebar);
        close.addEventListener("click", closeSidebar);

        // Cleanup when component unmounts
        return () => {
            hamburger.removeEventListener("click", openSidebar);
            close.removeEventListener("click", closeSidebar);
        };
    }, []);





    const HeaderScroll = () => {
        //e.preventDefault();
        if (window.scrollY >= 50) {
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
            <nav ref={headerRef}>

                <div className='Homeheader'>
                    <div className="Header-1st" id='header'>
                        <div className="logo">
                            <Link to="/"><img height="30px" width="150px" src={Heading} /></Link>
                        </div>
                        <div className="heading-list" id="list">
                            <ul>
                                <li>Home</li>
                                <li>TV shows</li>
                                <li>Movies</li>
                                <li>New & popular</li>
                                <li>My List</li>
                                <li>Browse By languages</li>
                            </ul>
                        </div>
                        <div id='hamburger-icon'>
                            <img height="30px" width="30px" src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF" />
                        </div>
                    </div>

                    <div className="header-icons" id='H-icons'>
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

                    <div id='side-bar'>
                        <div id="close">
                            <img height="25px" width="25px" src="https://img.icons8.com/?size=100&id=vu5kHwGC4PNb&format=png&color=FFFFFF" alt="" />
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>TV shows</li>
                            <li>Movies</li>
                            <li>New & popular</li>
                            <li>My List</li>
                            <li>Browse By languages</li>
                        </ul>
                        <div className='screen-icons'>
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

                </div>
            </nav>
        </header>
    )
}

export default HomeHeader