import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { headerData } from './HeaderData';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const updateHeaderHeight = () => {
            const header = document.getElementById('header');
            if (header) {
                setHeaderHeight(header.clientHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setIsDarkMode(savedDarkMode === 'true');
        }

        // Add class to body element when dark mode is active
        if (isDarkMode) {
            document.body.classList.add('theme-dark');
            document.querySelector('.toggle-menu').classList.remove('bg-black');
        } else {
            document.body.classList.remove('theme-dark');
            document.querySelector('.toggle-menu').classList.add('bg-black');
        }

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, [isDarkMode]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Save dark mode preference in local storage
        localStorage.setItem('darkMode', !isDarkMode);
    };

    const currentYear = new Date().getFullYear();

    return (
        <div>
            {/* Toggle Menu */}
            <div className={`toggle-menu ${isMenuOpen ? 'show' : ''} bg-black`}>
                <button className="toggle-close" onClick={closeMenu}>
                    <i className="bi bi-x"></i>
                </button>
                {/* Close button */}
                <p className="mono-heading-titre-six fw-normal mb-2">Tél:</p>
                <a href={`tel:${headerData.mainData.phone.replace(/\s/g, '')}`} className="contact-link-toggle">
                    <p className="titre-quatre fw-medium">{headerData.mainData.phone}</p>
                </a>
                <div className="mt-4">
                    <p className="mono-heading-titre-six fw-normal mb-2">Email:</p>
                    <a href={`mailto:${headerData.mainData.email}`} className="contact-link-toggle">
                        <p className="titre-quatre fw-medium">{headerData.mainData.email}</p>
                    </a>
                    <ul className="list-inline-sm mt-3" style={{display: 'flex', gap: '12px'}}>
                        <li>
                            <Link href={headerData.mainData.linkedinURL} className="button-circle button-circle-sm button-circle-white" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href={headerData.mainData.githubURL} className="button-circle button-circle-sm button-circle-white" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href={headerData.mainData.cvURL} className="button-circle button-circle-sm button-circle-white" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-file-alt"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-4 mt-lg-5">
                    <ul className="list-circle">
                        {/*<li>
                            <button className="mono-heading link-decoration" onClick={toggleDarkMode}>
                                Dark Version
                            </button>
                        </li> */}
                        {headerData.links.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} className="mono-heading link-decoration">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tm-bottom">
                    <p>&copy; {currentYear} {headerData.mainData.copywriter}.</p>
                </div>
            </div>
            {/* End Toggle Menu */}

            {/* Header */}
            <div id="header">
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-3 order-lg-2 text-end">
                        <div className="d-inline-flex align-items-center">
                            {/* Social Links */}
                            <ul className="list-inline d-inline-block mono-heading fw-medium">
                                {headerData.socialLinks.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.url} className="link-decoration social-icon-link" title={item.name} target="_blank" rel="noopener noreferrer">
                                            <i className={item.icon}></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {/* Toggle Menu Button */}
                            <button className="menu-dots" aria-label="Menu" onClick={toggleMenu}>
                                <span></span>
                            </button>
                            {/* End Toggle Menu Button */}
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 order-lg-1 col-xl-9">
                        <div className="py-4">
                            <Link href={headerData.mainData.url} className="" title={headerData.mainData.url} rel="noopener noreferrer">
                                <h1 className="display-2 fw-semi-bold m-0">{headerData.mainData.firstName} <span className="stroke-text">{headerData.mainData.secondName}</span></h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header */}
        </div>
    );
};

export default Header;
