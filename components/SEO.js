import Head from 'next/head'
import { mainData } from '@/lib/data'

export default function SEO({ 
    title, 
    description, 
    keywords, 
    image, 
    url, 
    type = 'website',
    article = false 
}) {
    const seoTitle = title ? `${title} - ${mainData.websiteTitle}` : mainData.websiteTitle
    const seoDescription = description || mainData.description
    const seoKeywords = keywords || mainData.keywords
    const seoImage = image || mainData.ogImage
    const seoUrl = url || mainData.canonical

    return (
        <Head>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />
            <meta name="robots" content={mainData.robots} />
            <meta name="author" content={mainData.author} />
            <meta name="language" content={mainData.lang} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={seoUrl} />
            
            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:image:alt" content={mainData.ogImageAlt} />
            <meta property="og:site_name" content={mainData.ogSiteName} />
            <meta property="og:locale" content={mainData.ogLocale} />
            <meta property="og:url" content={seoUrl} />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content={mainData.twitterCard} />
            <meta name="twitter:site" content={mainData.twitterSite} />
            <meta name="twitter:creator" content={mainData.twitterCreator} />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={seoImage} />
            <meta name="twitter:image:alt" content={mainData.twitterImageAlt} />
            
            {/* Article specific meta tags */}
            {article && (
                <>
                    <meta property="article:author" content={mainData.articleAuthor} />
                    <meta property="article:section" content={mainData.articleSection} />
                    <meta property="article:tag" content={mainData.articleTag} />
                    <meta property="article:published_time" content={mainData.publishDate} />
                    <meta property="article:modified_time" content={mainData.lastModified} />
                </>
            )}
        </Head>
    )
} 