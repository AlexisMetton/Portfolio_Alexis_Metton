import React, { useState } from 'react';
import { connectData } from './ConnectData';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 200) {
            setSubmitStatus('success');
        } else {
            setSubmitStatus('error');
        }
    };

    return (
        <div className="section-box mt-4" id="contact">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <p className="title-heading-titre-six mb-3" data-backdrop-text={connectData.mainData.title}>{connectData.mainData.title2}</p>
                    <h2>{connectData.mainData.title3}</h2>
                    <p>{connectData.mainData.description}</p>
                    <ul className="list-inline-pills mt-4">
                        <li>
                            <a href={`tel:${connectData.mainData.phone.replace(/\s/g, '')}`} className="contact-link">
                                <i className="fas fa-phone contact-icon phone-icon"></i>
                                {connectData.mainData.phone}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${connectData.mainData.email}`} className="contact-link">
                                <i className="fas fa-envelope contact-icon email-icon"></i>
                                {connectData.mainData.email}
                            </a>
                        </li>
                        <li>
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(connectData.mainData.address)}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <i className="fas fa-map-marker-alt contact-icon address-icon"></i>
                                {connectData.mainData.address}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                {/* Contact Form */}
                <div className="contact-form">
                    <form method="post" id="contactform" action="https://formspree.io/f/mgvyjlag">
                        <div className="row gx-3 gy-0">
                            <div className="col-12 col-md-6">
                                <input type="text" id="name" name="name" placeholder="Nom" required />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                        </div>
                        <input type="text" id="subject" name="subject" placeholder="Sujet" required />
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                        <button className="button button-md button-dark" type="submit">Envoyer</button>
                    </form>
                    {/* Submit result */}
                    <div className="submit-result">
                        {submitStatus === 'success' && (
                            <span id="success">Merci ! Votre message a été envoyé.</span>
                        )}
                        {submitStatus === 'error' && (
                            <span id="error">Une erreur est survenue. Veuillez réessayer.</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
