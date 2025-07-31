import React from 'react'
import { LoadingScreen, ScrollToTop } from '@/components'
import SecurityProvider from '@/components/SecurityProvider'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/theme.scss'
import '@/styles/all.min.css'


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simuler un temps de chargement court puis désactiver le loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconde de loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <SecurityProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <React.Fragment>
          <Component {...pageProps} />
          <ScrollToTop />
        </React.Fragment>
      )}
    </SecurityProvider>
  )
}
