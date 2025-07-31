import React, { useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { BackgroundImages, Lightbox, PortfolioNavigation } from '@/components';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { headerData } from '@/components/Header/HeaderData';
import Link from 'next/link';

// Composant Header personnalisé pour la page de portfolio
const PortfolioHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    React.useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setIsDarkMode(savedDarkMode === 'true');
        }

        if (isDarkMode) {
            document.body.classList.add('theme-dark');
            document.querySelector('.toggle-menu')?.classList.remove('bg-black');
        } else {
            document.body.classList.remove('theme-dark');
            document.querySelector('.toggle-menu')?.classList.add('bg-black');
        }
    }, [isDarkMode]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const currentYear = new Date().getFullYear();

    return (
        <div>
            {/* Toggle Menu */}
            <div className={`toggle-menu ${isMenuOpen ? 'show' : ''} bg-black`}>
                <button className="toggle-close" onClick={closeMenu}>
                    <i className="bi bi-x"></i>
                </button>
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
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 order-lg-1 col-xl-9">
                        <div className="py-4">
                            <Link href={headerData.mainData.url} className="" title={headerData.mainData.url} rel="noopener noreferrer">
                                <p className="display-2 fw-semi-bold m-0" style={{color: "black"}}>{headerData.mainData.firstName} <span className="stroke-text">{headerData.mainData.secondName}</span></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PortfolioPage = ({ project }) => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    // Fonction pour extraire le texte brut de la description HTML
    const getPlainTextDescription = (htmlContent) => {
        if (typeof htmlContent === 'string' && htmlContent.includes('<')) {
            // Si c'est du HTML, extraire le texte en supprimant les balises
            return htmlContent.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
        }
        return htmlContent;
    };

    const plainDescription = getPlainTextDescription(project.description);

    return (
        <>
            <Head>
                <title>{project.seoTitle || project.projectTitle}</title>
                <meta name="description" content={project.seoDescription || plainDescription} />
                <meta name="keywords" content={project.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="author" content="Alexis Metton" />
                <meta name="publisher" content="Alexis Metton" />
                <meta name="language" content="fr" />
                <meta httpEquiv="X-Robots-Tag" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                
                {/* Canonical URL */}
                <link rel="canonical" href={`https://alexismetton.com/portfolio/${project.slug}/`} />
                
                {/* Schema.org structured data for project */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CreativeWork",
                            "name": project.seoTitle || project.projectTitle,
                            "description": project.seoDescription || plainDescription,
                            "image": `https://alexismetton.com${project.mainImage.src}`,
                            "author": {
                                "@type": "Person",
                                "name": "Alexis Metton",
                                "url": "https://alexismetton.com"
                            },
                            "creator": {
                                "@type": "Person",
                                "name": "Alexis Metton",
                                "url": "https://alexismetton.com"
                            },
                            "dateCreated": project.date,
                            "dateModified": project.date,
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://alexismetton.com/portfolio/${project.slug}`
                            },
                            "keywords": project.keywords,
                            "genre": project.category,
                            "about": project.category,
                            "audience": {
                                "@type": "Audience",
                                "audienceType": "Professionnels de la cybersécurité"
                            }
                        })
                    }}
                />
                
                {/* Additional meta tags */}
                <meta name="theme-color" content="#F1F5F8" />
                <meta name="msapplication-TileColor" content="#F1F5F8" />
            </Head>
            <div className="container">
                {/* Header personnalisé pour la page de portfolio */}
                <PortfolioHeader />
                {/* Main row */}
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <PortfolioNavigation />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9" id='portfolio'>
                        <div className="sections-wrapper">
                            {/* Project content */}
                            <div className="section-box">
                                <div className="row g-4">
                                    <div className="col-12 col-xl-3">
                                        <p className="mono-heading-titre-six mb-0">Client:</p>
                                        <p>{project.client}</p>
                                    </div>
                                    <div className="col-12 col-xl-3">
                                        <p className="mono-heading-titre-six mb-0">Services:</p>
                                        <p>{project.services}</p>
                                    </div>
                                    <div className="col-12 col-xl-3">
                                        <p className="mono-heading-titre-six mb-0">Durée:</p>
                                        <p>{project.duration}</p>
                                    </div>
                                    <div className="col-12 col-xl-3">
                                        <p className="mono-heading-titre-six mb-0">Créé le:</p>
                                        <p>{project.date}</p>
                                    </div>
                                </div>{/* end row */}
                                <div className="mt-4">
                                    <h1>{project.projectTitle}</h1>
                                    <div className="col-12">
                                        <Image className="border-radius" src={project.mainImage} alt={project.projectTitle} placeholder="blur" />
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: project.description }} />
                                    <ul className="list-inline-pills mt-3">
                                        {project.categories.map((item, index) => (
                                            <li key={index}>{item.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="row g-4 mt-2">
                                    {project.images.map((item, index) => (
                                        <div
                                            className="col-12 col-xl-6"
                                            key={index}
                                            onClick={() => openLightbox(item.image)}
                                        >
                                            <div className="lightbox-image-box border-radius" >
                                                <Image src={item.image} alt={project.projectTitle} placeholder="blur" />
                                                <i className="bi bi-arrows-fullscreen"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>{/* end section-box */}
                            </div>{/* end section-box */}
                            {/* end Project Content */}
                        </div>
                        {lightboxImage && (
                            <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                        )}
                    </div>
                </div> {/* end main row */}
                {/*Background Vertical lines  */}
                <BackgroundImages />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    // Generate paths for all your blog projects
    const paths = portfolioData.projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog project with the matching slug
    const project = portfolioData.projects.find((project) => project.slug === slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project,
        },
    };
}
export default PortfolioPage