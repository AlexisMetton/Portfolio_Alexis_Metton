import React, { useEffect, useState, useRef } from 'react';
import { technologiesData } from './TechnologiesData';
import Image from 'next/image';

const Technologies = () => {
    // Dupliquer les technologies pour l'effet infini
    const duplicatedTechnologies = [...technologiesData.technologies, ...technologiesData.technologies];
    
    // Diviser les technologies en deux groupes pour les deux lignes
    const firstHalf = technologiesData.technologies.slice(0, Math.ceil(technologiesData.technologies.length / 2));
    const secondHalf = technologiesData.technologies.slice(Math.ceil(technologiesData.technologies.length / 2));
    
    // Refs for technology rows
    const firstRowRef = useRef(null);
    const secondRowRef = useRef(null);
    
    // Separate states for each row
    const [isFirstRowManual, setIsFirstRowManual] = useState(false);
    const [isSecondRowManual, setIsSecondRowManual] = useState(false);
    
    // Animation refs
    const firstRowAnimationRef = useRef(null);
    const secondRowAnimationRef = useRef(null);

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

    return (
        <div className="section-box mt-4" id="technologies">

            <p className="title-heading-titre-six mb-3" data-backdrop-text={technologiesData.mainData.title}>{technologiesData.mainData.title}</p>
            <h2>{technologiesData.mainData.title2}</h2>

            <div className="technologies-container">
                {/* First row - scrolls left */}
                <div 
                    className={`technologies-row ${isFirstRowManual ? 'manual-scrolling' : ''}`}
                    ref={firstRowRef}
                    onMouseDown={handleMouseDownFirstRow}
                    onWheel={handleWheelFirstRow}
                    style={{ userSelect: 'none' }}
                >
                    {/* Multiple copies for seamless infinite scrolling - first half of technologies */}
                    {Array.from({ length: 4 }, (_, copyIndex) => 
                        firstHalf.map((tech, index) => (
                            <div key={`row1-copy${copyIndex}-${index}`} className="technology-item">
                                <div className="technology-box">
                                    <Image 
                                        src={tech.logo} 
                                        alt={tech.name}
                                        width={50}
                                        height={50}
                                        className="technology-logo"
                                    />
                                    <span className="technology-name">{tech.name}</span>
                                </div>
                            </div>
                        ))
                    ).flat()}
                </div>
                
                {/* Second row - scrolls right */}
                <div 
                    className={`technologies-row ${isSecondRowManual ? 'manual-scrolling' : ''}`}
                    ref={secondRowRef}
                    onMouseDown={handleMouseDownSecondRow}
                    onWheel={handleWheelSecondRow}
                    style={{ userSelect: 'none' }}
                >
                    {/* Multiple copies for seamless infinite scrolling - second half of technologies */}
                    {Array.from({ length: 4 }, (_, copyIndex) => 
                        secondHalf.map((tech, index) => (
                            <div key={`row2-copy${copyIndex}-${index}`} className="technology-item">
                                <div className="technology-box">
                                    <Image 
                                        src={tech.logo} 
                                        alt={tech.name}
                                        width={50}
                                        height={50}
                                        className="technology-logo"
                                    />
                                    <span className="technology-name">{tech.name}</span>
                                </div>
                            </div>
                        ))
                    ).flat()}
                </div>
            </div>
        </div>
    );
};

export default Technologies;