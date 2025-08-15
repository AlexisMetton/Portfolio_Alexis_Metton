const fs = require('fs')
const path = require('path')

// Configuration du site
const SITE_URL = 'https://alexismetton.com'
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml')

// Données des projets portfolio (copiées depuis PortfolioData.jsx)
const portfolioData = {
    projects: [
        {
            slug: 'cryptoshield',
            date: 'Avr 01, 2025'
        },
        {
            slug: 'votechain',
            date: 'Avr 01, 2025'
        },
        {
            slug: 'kubesecurebox',
            date: 'Mar 01, 2025'
        },
        {
            slug: 'docker-redteam',
            date: 'Jan 10, 2025'
        },
        {
            slug: 'infrastructure-cloud',
            date: 'Jan 02, 2025'
        },
        {
            slug: 'usb-scanner',
            date: 'Fev 01, 2025'
        },
        {
            slug: 'pwnagotchi',
            date: 'Fev 02, 2025'
        },
        {
            slug: 'scroll-motion-pro',
            date: 'Nov 1, 2024'
        },
        {
            slug: 'serveur-perso',
            date: 'Dec 5, 2022'
        }
    ]
}

// Données des articles de blog (copiées depuis BlogData.jsx)
const blogData = {
    posts: [
        {
            slug: 'incident-response-agence-web',
            date: 'Jan 15, 2025'
        }
    ]
}

// Pages statiques
const STATIC_PAGES = [
    { path: '/', priority: '1.0', changefreq: 'weekly' }
]

// Fonction pour convertir les dates françaises en format ISO
function parseFrenchDate(dateStr) {
    const moisFrancais = {
        'Jan': '01', 'Fev': '02', 'Mar': '03', 'Avr': '04',
        'Mai': '05', 'Juin': '06', 'Jul': '07', 'Aoû': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    }
    
    const [mois, jour, annee] = dateStr.replace(',', '').split(' ')
    const moisNum = moisFrancais[mois] || '01'
    return `${annee}-${moisNum}-${jour.padStart(2, '0')}`
}

// Fonction pour générer le sitemap
function generateSitemap() {
    const today = new Date().toISOString().split('T')[0]
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

    // Ajouter les pages statiques
    STATIC_PAGES.forEach(page => {
        sitemap += `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
    })

    // Ajouter les pages de projets portfolio
    portfolioData.projects.forEach(project => {
        const lastmod = parseFrenchDate(project.date)
        sitemap += `  <url>
    <loc>${SITE_URL}/portfolio/${project.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`
    })

    // Ajouter les pages d'articles de blog
    blogData.posts.forEach(post => {
        const lastmod = parseFrenchDate(post.date)
        sitemap += `  <url>
    <loc>${SITE_URL}/blog/${post.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
    })

    sitemap += '</urlset>'

    // Écrire le fichier
    fs.writeFileSync(OUTPUT_FILE, sitemap)
    console.log(`✅ Sitemap généré: ${OUTPUT_FILE}`)
    console.log(`📊 Pages incluses:`)
    console.log(`   - ${STATIC_PAGES.length} page(s) statique(s)`)
    console.log(`   - ${portfolioData.projects.length} projet(s) portfolio`)
    console.log(`   - ${blogData.posts.length} article(s) de blog`)
    console.log(`   - Total: ${STATIC_PAGES.length + portfolioData.projects.length + blogData.posts.length} URL(s)`)
}

// Exécuter si appelé directement
if (require.main === module) {
    generateSitemap()
}

module.exports = { generateSitemap } 