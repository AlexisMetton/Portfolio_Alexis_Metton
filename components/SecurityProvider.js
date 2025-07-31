import React, { useEffect } from 'react';

const SecurityProvider = ({ children }) => {
  useEffect(() => {
    // Configuration sécurisée des cookies
    const setSecureCookies = () => {
      // Supprimer les cookies non sécurisés existants
      document.cookie.split(";").forEach((c) => {
        const eqPos = c.indexOf("=");
        const name = eqPos > -1 ? c.substr(0, eqPos) : c;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      });
    };

    // Protection contre les attaques XSS
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', (e) => {
          // Nettoyer les entrées utilisateur
          const value = e.target.value;
          const sanitized = value.replace(/[<>]/g, '');
          if (value !== sanitized) {
            e.target.value = sanitized;
          }
        });
      });
    };

    // Protection contre le clickjacking
    const preventClickjacking = () => {
      if (window.self !== window.top) {
        window.top.location = window.self.location;
      }
    };

    // Désactiver les fonctionnalités dangereuses
    const disableDangerousFeatures = () => {
      // Désactiver eval
      window.eval = () => {
        throw new Error('eval is disabled for security reasons');
      };
      
      // Désactiver Function constructor
      window.Function = () => {
        throw new Error('Function constructor is disabled for security reasons');
      };
    };

    // Initialiser les protections de sécurité
    setSecureCookies();
    sanitizeInputs();
    preventClickjacking();
    disableDangerousFeatures();

    // Nettoyer les timestamps sensibles
    const removeTimestamps = () => {
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (script.src && script.src.includes('timestamp')) {
          script.remove();
        }
      });
    };

    removeTimestamps();

  }, []);

  return <>{children}</>;
};

export default SecurityProvider; 