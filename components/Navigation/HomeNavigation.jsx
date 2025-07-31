import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeLink, setActiveLink] = useState('about');

    // Define an array of navigation items with their corresponding IDs and icons
    const navItems = [
        { label: 'À propos', id: 'about', icon: 'fas fa-user' },
        { label: 'Portfolio', id: 'portfolio', icon: 'fas fa-briefcase' },
        { label: 'Services', id: 'services', icon: 'fas fa-cogs' },
        { label: 'Parcours', id: 'resume', icon: 'fas fa-graduation-cap' },
        { label: 'Certifications', id: 'certifications', icon: 'fas fa-certificate' },
        { label: 'Technologies', id: 'technologies', icon: 'fas fa-code' },
        { label: 'Blog', id: 'blog', icon: 'fas fa-blog' },
        { label: 'Contact', id: 'contact', icon: 'fas fa-envelope' },
    ];

    // Define a function to handle the scroll event
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Determine which link is active based on the scroll position
        for (const item of navItems) {
            const element = document.getElementById(item.id);
            if (element && scrollY >= element.offsetTop) {
                setActiveLink(item.id);
            }
        }

        // Calculate headerHeight and update isFixed
        const headerHeight = document.getElementById('header').clientHeight;
        const windowWidth = window.innerWidth;

        if (windowWidth < 992) {
            if (scrollY >= headerHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
    };

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Get the initial headerHeight
        const initialHeaderHeight = document.getElementById('header').clientHeight;

        // Check and update isFixed initially
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            if (window.scrollY >= initialHeaderHeight) {
                setIsFixed(true);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav-wrapper">
            <div className={`section-nav ${isFixed ? 'fixed' : ''}`}>
                <ul className="nav">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <Link
                                href={`#${item.id}`}
                                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                            >
                                <span className="nav-link-desktop">{item.label}</span>
                                <span className="nav-link-mobile">
                                    <i className={item.icon}></i>
                                </span>
                                <span className="nav-circle"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navigation