/**
 * Utilitaires de sécurité pour la validation et le nettoyage des données
 */

// Fonction pour nettoyer les entrées utilisateur
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>]/g, '') // Supprimer les balises HTML
    .replace(/javascript:/gi, '') // Supprimer les protocoles dangereux
    .replace(/on\w+=/gi, '') // Supprimer les gestionnaires d'événements
    .trim();
};

// Fonction pour valider les URLs
export const validateUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Fonction pour valider les emails
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Fonction pour nettoyer les objets de données
export const sanitizeObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  const sanitized = Array.isArray(obj) ? [] : {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else if (typeof value === 'object') {
      sanitized[key] = sanitizeObject(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};

// Fonction pour générer des tokens CSRF
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Fonction pour valider les tokens CSRF
export const validateCSRFToken = (token, storedToken) => {
  return token && storedToken && token === storedToken;
};

// Fonction pour nettoyer les commentaires sensibles
export const removeSensitiveComments = (code) => {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '') // Supprimer les commentaires multi-lignes
    .replace(/\/\/.*$/gm, '') // Supprimer les commentaires mono-ligne
    .replace(/<!--[\s\S]*?-->/g, ''); // Supprimer les commentaires HTML
};

// Fonction pour masquer les informations sensibles dans les URLs
export const maskSensitiveUrlParams = (url) => {
  const sensitiveParams = ['password', 'token', 'key', 'secret', 'api_key'];
  const urlObj = new URL(url);
  
  sensitiveParams.forEach(param => {
    if (urlObj.searchParams.has(param)) {
      urlObj.searchParams.set(param, '***MASKED***');
    }
  });
  
  return urlObj.toString();
};

// Fonction pour valider les types de fichiers
export const validateFileType = (file, allowedTypes) => {
  return allowedTypes.includes(file.type);
};

// Fonction pour valider la taille des fichiers
export const validateFileSize = (file, maxSizeInMB) => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

// Fonction pour nettoyer les timestamps sensibles
export const removeTimestamps = (data) => {
  if (typeof data === 'string') {
    return data.replace(/\d{10,13}/g, '[TIMESTAMP]');
  }
  return data;
};

// Configuration par défaut pour la sécurité
export const securityConfig = {
  maxFileSize: 10, // MB
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  maxInputLength: 1000,
  sessionTimeout: 3600000, // 1 heure en millisecondes
}; 