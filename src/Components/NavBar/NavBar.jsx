import "./NavBarStyles.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AWSCloudClubLogo from "../../assets/img/logo.png";

function NavBar() {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const handleJoinClick = () => {
        window.open('https://linktr.ee/awscloudclubmjcet', '_blank');
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="nav-content">
                {/* Left side - Join button (desktop) / Menu icon (mobile) */}
                <div className="nav-left">
                    <button 
                        className="join-now-btn desktop-only"
                        onClick={handleJoinClick}
                    >
                        Join Now
                    </button>
                    <div className="menu-icon" onClick={handleClick}>
                        <div className={`hamburger ${click ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                {/* Center - Navigation Menu */}
                <ul className={`nav-menu ${click ? 'active' : ''}`}>
                    <li className="nav-item">
                        <NavLink to="/" 
                            className={({isActive}) => 
                                `nav-link ${isActive ? 'active' : ''}`
                            } 
                            onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/events" 
                            className={({isActive}) => 
                                `nav-link ${isActive ? 'active' : ''}`
                            } 
                            onClick={closeMobileMenu}>
                            Events
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/ExamPrep" 
                            className={({isActive}) => 
                                `nav-link ${isActive ? 'active' : ''}`
                            } 
                            onClick={closeMobileMenu}>
                            Get Certified
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" 
                            className={({isActive}) => 
                                `nav-link ${isActive ? 'active' : ''}`
                            } 
                            onClick={closeMobileMenu}>
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/gallery" 
                            className={({isActive}) => 
                                `nav-link ${isActive ? 'active' : ''}`
                            } 
                            onClick={closeMobileMenu}>
                          Gallery
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" 
                            className={({isActive}) => 
                                `nav-link ${isActive ? 'active' : ''}`
                            } 
                            onClick={closeMobileMenu}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/playground" 
                            className={({isActive}) => 
                                `nav-link playground-text ${isActive ? 'active' : ''}`
                            } 
                            onClick={closeMobileMenu}>
                           Play ground 
                        </NavLink>
                    </li>
                    <li className="nav-item mobile-only">
                        <button className="nav-link join-link" onClick={handleJoinClick}>
                            Join Now
                        </button>
                    </li>
                </ul>

                {/* Right side - Logo */}
                <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={AWSCloudClubLogo} alt="AWS Cloud Club MJCET" />
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
