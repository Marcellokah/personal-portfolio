import React from "react";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <nav className={scrolled ? " navbar navbar-expand-lg scrolled" : "navbar navbar-expand-lg"}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a href="#home" className={activeLink === 'home' ? 'active nav-link navbar-link' : 'nav-link navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</a>
                        <a href="#skills" className={activeLink === 'skills' ? 'active nav-link navbar-link' : 'nav-link navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                        <a href="#projects" className={activeLink === 'projects' ? 'active nav-link navbar-link' : 'nav-link navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
                    </div>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Contact Me</span></button>
                    </span>
                </div>
            </div>
        </nav>
    )
}