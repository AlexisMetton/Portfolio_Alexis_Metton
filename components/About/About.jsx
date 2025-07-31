import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { aboutData } from './AboutData';

const About = () => {
    const initialCounters = aboutData.skills.reduce((obj, skill) => {
        obj[skill.id] = 0;
        return obj;
    }, {});

    const [counters, setCounters] = useState({
        ...initialCounters,
        yearsOfExperience: 0,
        hoursOfWorking: 0,
        projectsDone: 0,
    });

    // Refs for skill rows
    const firstRowRef = useRef(null);
    const secondRowRef = useRef(null);
    
    // Separate states for each row
    const [isFirstRowManual, setIsFirstRowManual] = useState(false);
    const [isSecondRowManual, setIsSecondRowManual] = useState(false);
    
    // Animation refs
    const firstRowAnimationRef = useRef(null);
    const secondRowAnimationRef = useRef(null);

    const targetCounters = {
        ...aboutData.skills.reduce((obj, skill) => {
            obj[skill.id] = skill.percent;
            return obj;
        }, {}),
        yearsOfExperience: aboutData.mainData.yearsOfExperience,
        hoursOfWorking: aboutData.mainData.hoursOfWorking,
        projectsDone: aboutData.mainData.projectsDone,
    };

    // JavaScript-based auto-scroll for first row
    const startFirstRowAutoScroll = () => {
        if (isFirstRowManual) return;
        
        if (firstRowRef.current) {
            firstRowRef.current.scrollLeft += 1;
            if (firstRowRef.current.scrollLeft >= firstRowRef.current.scrollWidth / 4) {
                firstRowRef.current.scrollLeft = 0;
            }
        }
        
        firstRowAnimationRef.current = requestAnimationFrame(startFirstRowAutoScroll);
    };

    // JavaScript-based auto-scroll for second row
    const startSecondRowAutoScroll = () => {
        if (isSecondRowManual) return;
        
        if (secondRowRef.current) {
            secondRowRef.current.scrollLeft -= 1;
            if (secondRowRef.current.scrollLeft <= 0) {
                secondRowRef.current.scrollLeft = secondRowRef.current.scrollWidth / 4;
            }
        }
        
        secondRowAnimationRef.current = requestAnimationFrame(startSecondRowAutoScroll);
    };

    // Start auto-scroll on mount
    useEffect(() => {
        const startAnimations = () => {
            startFirstRowAutoScroll();
            startSecondRowAutoScroll();
        };
        
        // Small delay to ensure refs are ready
        setTimeout(startAnimations, 100);
        
        return () => {
            if (firstRowAnimationRef.current) {
                cancelAnimationFrame(firstRowAnimationRef.current);
            }
            if (secondRowAnimationRef.current) {
                cancelAnimationFrame(secondRowAnimationRef.current);
            }
        };
    }, []);

    // Handle manual scrolling state changes
    useEffect(() => {
        if (isFirstRowManual) {
            if (firstRowAnimationRef.current) {
                cancelAnimationFrame(firstRowAnimationRef.current);
            }
        } else {
            startFirstRowAutoScroll();
        }
    }, [isFirstRowManual]);

    useEffect(() => {
        if (isSecondRowManual) {
            if (secondRowAnimationRef.current) {
                cancelAnimationFrame(secondRowAnimationRef.current);
            }
        } else {
            startSecondRowAutoScroll();
        }
    }, [isSecondRowManual]);

    // Mouse scroll functionality for first row
    const handleMouseDownFirstRow = (e) => {
        if (!firstRowRef.current) return;
        
        e.preventDefault();
        e.stopPropagation();
        setIsFirstRowManual(true);
        
        const row = firstRowRef.current;
        const startX = e.clientX;
        const startScrollLeft = row.scrollLeft;
        let isDown = true;

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            e.stopPropagation();
            const x = e.clientX;
            const walk = (x - startX) * 2;
            row.scrollLeft = startScrollLeft - walk;
        };

        const handleMouseUp = (e) => {
            if (!isDown) return;
            isDown = false;
            setIsFirstRowManual(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Mouse scroll functionality for second row
    const handleMouseDownSecondRow = (e) => {
        if (!secondRowRef.current) return;
        
        e.preventDefault();
        e.stopPropagation();
        setIsSecondRowManual(true);
        
        const row = secondRowRef.current;
        const startX = e.clientX;
        const startScrollLeft = row.scrollLeft;
        let isDown = true;

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            e.stopPropagation();
            const x = e.clientX;
            const walk = (x - startX) * 2;
            row.scrollLeft = startScrollLeft + walk;
        };

        const handleMouseUp = (e) => {
            if (!isDown) return;
            isDown = false;
            setIsSecondRowManual(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Wheel scroll functionality for first row
    const handleWheelFirstRow = (e) => {
        if (!firstRowRef.current) return;
        
        e.preventDefault();
        setIsFirstRowManual(true);
        
        const row = firstRowRef.current;
        const scrollSpeed = 50;
        
        if (e.deltaY > 0) {
            row.scrollLeft += scrollSpeed;
        } else {
            row.scrollLeft -= scrollSpeed;
        }
        
        setTimeout(() => setIsFirstRowManual(false), 500);
    };

    // Wheel scroll functionality for second row
    const handleWheelSecondRow = (e) => {
        if (!secondRowRef.current) return;
        
        e.preventDefault();
        setIsSecondRowManual(true);
        
        const row = secondRowRef.current;
        const scrollSpeed = 50;
        
        if (e.deltaY > 0) {
            row.scrollLeft -= scrollSpeed;
        } else {
            row.scrollLeft += scrollSpeed;
        }
        
        setTimeout(() => setIsSecondRowManual(false), 500);
    };

    useEffect(() => {
        const animateCounters = () => {
            const duration = 2400;
            const interval = 50;

            Object.keys(targetCounters).forEach((key) => {
                const increment = (targetCounters[key] / duration) * interval;

                let current = 0;
                const intervalId = setInterval(() => {
                    current += increment;
                    setCounters((prevCounters) => ({
                        ...prevCounters,
                        [key]: Math.min(Math.ceil(current), targetCounters[key]),
                    }));

                    if (current >= targetCounters[key]) {
                        clearInterval(intervalId);
                    }
                }, interval);
            });
        };

        animateCounters();
    }, []);

    return (
        <div className="section-box" id="about">

            <div className="row g-4 g-xl-5">
                <div className="col-12 col-xl-4">
                    {/* Hero Avatar */}
                    <div className="hero-avatar">
                        <Image src={aboutData.mainData.heroAvatar} alt="hero-avatar" placeholder="blur" />
                        <div className="hero-avatar-text">
                            <Typewriter
                                options={{
                                    strings: aboutData.mainData.typewriter,
                                    cursor: '_',
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 15
                                }}
                            />
                        </div>
                    </div>
                    {/* end Hero Avatar */}
                </div>
                <div className="col-12 col-xl-8">
                    <p className="title-heading-titre-six mb-4" data-backdrop-text={aboutData.mainData.title}>{aboutData.mainData.title2}</p>
                    <h2>{aboutData.mainData.jobTitle}</h2>
                    
                    {/* Skills container with horizontal scroll on two rows */}
                    <div className="skills-container mt-2">
                        <div 
                            className={`skills-row ${isFirstRowManual ? 'manual-scrolling' : ''}`}
                            ref={firstRowRef}
                            onMouseDown={handleMouseDownFirstRow}
                            onWheel={handleWheelFirstRow}
                            style={{ userSelect: 'none' }}
                        >
                            {/* Multiple copies for seamless infinite scrolling - first half of skills */}
                            {Array.from({ length: 4 }, (_, copyIndex) => 
                                aboutData.skills.slice(0, Math.ceil(aboutData.skills.length / 2)).map((skill, index) => (
                                    <div key={`row1-copy${copyIndex}-${index}`} className="skill-pill">
                                        <i className={`${skill.fontawesomeIcon} pe-2`}></i> {skill.name}
                                    </div>
                                ))
                            ).flat()}
                        </div>
                        <div 
                            className={`skills-row ${isSecondRowManual ? 'manual-scrolling' : ''}`}
                            ref={secondRowRef}
                            onMouseDown={handleMouseDownSecondRow}
                            onWheel={handleWheelSecondRow}
                            style={{ userSelect: 'none' }}
                        >
                            {/* Multiple copies for seamless infinite scrolling - second half of skills */}
                            {Array.from({ length: 4 }, (_, copyIndex) => 
                                aboutData.skills.slice(Math.ceil(aboutData.skills.length / 2)).map((skill, index) => (
                                    <div key={`row2-copy${copyIndex}-${index}`} className="skill-pill">
                                        <i className={`${skill.fontawesomeIcon} pe-2`}></i> {skill.name}
                                    </div>
                                ))
                            ).flat()}
                        </div>
                    </div>
                    
                    <p className="mt-1">{aboutData.mainData.description}</p>
                </div>
            </div>{/* end row */}
            <div className="row g-4 mt-1">
                <div className="col-12 col-xl-4">
                    <div className="d-flex align-items-center">
                        <div className="d-inline-block">
                            <p className="titre-trois font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{counters.yearsOfExperience}</span></p>
                        </div>
                        <div className="d-inline-block ps-2">
                            <p className="titre-quatre line-height-100 fw-normal mb-0">+</p>
                            <p className="mono-heading text-black">Années d&apos;expérience</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4">
                    <div className="d-flex align-items-center">
                        <div className="d-inline-block">
                            <p className="titre-trois font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{counters.hoursOfWorking}</span></p>
                        </div>
                        <div className="d-inline-block ps-2">
                            <p className="titre-quatre line-height-100 fw-normal mb-0">k+</p>
                            <p className="mono-heading text-black">Heures de travail</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4">
                    <div className="d-flex align-items-center">
                        <div className="d-inline-block">
                            <p className="titre-trois font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{counters.projectsDone}</span></p>
                        </div>
                        <div className="d-inline-block ps-2">
                            <p className="titre-quatre line-height-100 fw-normal mb-0">+</p>
                            <p className="mono-heading text-black">Projets réalisés</p>
                        </div>
                    </div>
                </div>
            </div>{/* end row */}
        </div>
    )
}

export default About