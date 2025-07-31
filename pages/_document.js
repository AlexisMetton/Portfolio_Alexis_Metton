import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Méta-tags de sécurité */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Préchargement des ressources critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        
        {/* DNS Prefetch pour améliorer les performances */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        
        {/* Configuration des cookies sécurisés */}
        <meta httpEquiv="Set-Cookie" content="HttpOnly; Secure; SameSite=Strict" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
