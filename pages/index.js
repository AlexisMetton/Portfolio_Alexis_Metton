import Head from 'next/head'
import { BackgroundImages, Header, Navigation, About, Portfolio, Services, Testimonial, Clients, Resume, Blog, Connect, Map, Technologies, Certifications } from '@/components'
import { mainData } from '@/lib/data'

export default function Home() {
    return (
        <>
            <Head>
                <title>{mainData.websiteTitle}</title>
                <meta name="description" content={mainData.description} />
                <meta name="keywords" content={mainData.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content={mainData.robots} />
                <meta name="author" content={mainData.author} />
                <meta name="publisher" content={mainData.publisher} />
                <meta name="language" content={mainData.lang} />
                <meta httpEquiv="X-Robots-Tag" content={mainData.xRobotsTag} />
                
                {/* Canonical URL */}
                <link rel="canonical" href={mainData.canonical} />
                
                {/* Open Graph */}
                <meta property="og:type" content={mainData.ogType} />
                <meta property="og:title" content={mainData.ogTitle} />
                <meta property="og:description" content={mainData.ogDescription} />
                <meta property="og:image" content={mainData.ogImage} />
                <meta property="og:image:alt" content={mainData.ogImageAlt} />
                <meta property="og:site_name" content={mainData.ogSiteName} />
                <meta property="og:locale" content={mainData.ogLocale} />
                <meta property="og:locale:alternate" content={mainData.ogLocaleAlternate} />
                <meta property="og:url" content={mainData.ogUrl} />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content={mainData.twitterCard} />
                <meta name="twitter:site" content={mainData.twitterSite} />
                <meta name="twitter:creator" content={mainData.twitterCreator} />
                <meta name="twitter:title" content={mainData.twitterTitle} />
                <meta name="twitter:description" content={mainData.twitterDescription} />
                <meta name="twitter:image" content={mainData.twitterImage} />
                <meta name="twitter:image:alt" content={mainData.twitterImageAlt} />
                                
                {/* Schema.org structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": mainData.schemaType,
                            "name": mainData.schemaName,
                            "jobTitle": mainData.schemaJobTitle,
                            "description": mainData.schemaDescription,
                            "url": mainData.schemaUrl,
                            "image": mainData.schemaImage,
                            "sameAs": mainData.schemaSameAs,
                            "worksFor": {
                                "@type": "Organization",
                                "name": mainData.schemaWorksFor.name,
                                "url": mainData.schemaWorksFor.url
                            },
                            "knowsAbout": mainData.schemaKnowsAbout,
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "FR"
                            }
                        })
                    }}
                />
                
                {/* PWA Manifest */}
                <link rel="manifest" href="/manifest.json" />
                
                {/* Additional meta tags */}
                <meta name="theme-color" content={mainData.themeColor} />
                <meta name="msapplication-TileColor" content={mainData.msTileColor} />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content={mainData.websiteTitle} />
                
                {/* Preconnect to external domains */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>
            <div className="container">
                {/* Header */}
                <Header />
                {/* Main row */}
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <Navigation />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9">
                        <div className="sections-wrapper">
                            {/* About Section */}
                            <About />
                            {/* Portfolio Section */}
                            <Portfolio />
                            {/* Services Section */}
                            <Services />
                            {/* Resume Section */}
                            <Resume />
                            {/* Testimonial Section */}
                            {/*<Testimonial />*/}
                            {/* Certifications Section */}
                            <Certifications />
                            {/* Clients Section */}
                            {/*<Clients />*/}
                            {/* Technologies Section */}
                            <Technologies />
                            {/* Blog Section */}
                            <Blog />
                            {/* Connect Section */}
                            <Connect />
                            {/* Map Section */}
                            {/*<Map />*/}
                        </div>
                    </div>
                </div>  {/* end main row */}
                {/* <bout */}
                {/*Background Vertical lines  */}
                <BackgroundImages />
            </div>
        </>
    )
}
