import React from 'react'
import { resumeData } from './ResumeData'

const Resume = () => {
    return (
        <div className="section-box mt-4" id="resume">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <p className="title-heading-titre-six mb-3" data-backdrop-text={resumeData.mainData.title}>{resumeData.mainData.title}</p>
                    <h2>{resumeData.mainData.title2}</h2>
                    <p>{resumeData.mainData.description}</p>
                </div>
            </div>
            <div className="row g-4 g-lg-5 mt-0">
                <div className="col-12 col-xl-6">
                    <div className="resume-wrapper education-section">
                        <div className="icon-2xl text-black mb-3">
                            <i className="bi bi-mortarboard line-height-100"></i>
                        </div>
                        {resumeData.education.map((item, index) => (
                            <div key={index} className="resume-box">
                                <span className="resume-date education-date">{item.date}</span>
                                <p className="titre-cinq fw-medium">{item.degree}</p>
                                <span>@ {item.university}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 col-xl-6">
                    <div className="resume-wrapper experience-section">
                        <div className="icon-2xl text-black mb-3">
                            <i className="bi bi-briefcase line-height-100"></i>
                        </div>
                        {resumeData.experience.map((item, index) => (
                            <div key={index} className="resume-box">
                                <span className="resume-date experience-date">{item.date}</span>
                                <p className="titre-cinq fw-medium">{item.degree}</p>
                                <span>@ {item.university}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume