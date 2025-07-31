import React from 'react'
import { servicesData } from './ServicesData'

const Services = () => {
    return (
        <div className="section-box mt-4" id="services">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <p className="title-heading-titre-six mb-3" data-backdrop-text={servicesData.mainData.title}>{servicesData.mainData.title}</p>
                    <h2>{servicesData.mainData.title2}</h2>
                    <p>{servicesData.mainData.description}</p>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                <ul className="services-list">
                    {servicesData.services.map((item, index) => (
                        <li key={index} className="services-item">
                            <div className="services-number">
                                <p className="font-family-mono fw-semi-bold stroke-text display-4">{item.number}</p>
                            </div>
                            <div className="services-title icon-xl">
                                <i className={item.bootstrapIcon}></i>
                                <p className="mono-heading-titre-six">{item.title}</p>
                            </div>
                            <div>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Services