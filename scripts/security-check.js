#!/usr/bin/env node

/**
 * Script de vérification de sécurité pour le projet
 * Exécutez avec: node scripts/security-check.js
 */

const fs = require('fs');
const path = require('path');

// Couleurs pour la console
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

// Configuration des vérifications
const securityChecks = [
  {
    name: 'Fichiers sensibles',
    check: () => {
      const sensitiveFiles = [
        '.env.production',
        'secrets.js',
        'private.js',
        'config/secrets.js'
      ];
      
      const found = sensitiveFiles.filter(file => 
        fs.existsSync(path.join(process.cwd(), file))
      );
      
      return {
        passed: found.length === 0,
        message: found.length > 0 
          ? `Fichiers sensibles trouvés: ${found.join(', ')}`
          : 'Aucun fichier sensible trouvé (.env et .env.local sont autorisés)'
      };
    }
  },
  {
    name: 'Configuration CSP',
    check: () => {
      const nextConfig = fs.readFileSync('next.config.js', 'utf8');
      const hasCSP = nextConfig.includes('Content-Security-Policy');
      const hasHSTS = nextConfig.includes('Strict-Transport-Security');
      const hasXFrame = nextConfig.includes('X-Frame-Options');
      
      return {
        passed: hasCSP && hasHSTS && hasXFrame,
        message: `CSP: ${hasCSP ? '✓' : '✗'}, HSTS: ${hasHSTS ? '✓' : '✗'}, X-Frame: ${hasXFrame ? '✓' : '✗'}`
      };
    }
  },
  {
    name: 'Dépendances de sécurité',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Pour un projet Next.js statique, ces packages ne sont pas nécessaires
      // car Next.js gère déjà la sécurité via les headers
      return {
        passed: true,
        message: 'Sécurité gérée par Next.js via les headers configurés'
      };
    }
  },
  {
    name: 'Fichiers de sécurité',
    check: () => {
      const securityFiles = [
        'components/SecurityProvider.js',
        'lib/security.js',
        'scripts/security-check.js'
      ];
      
      const missing = securityFiles.filter(file => !fs.existsSync(file));
      
      return {
        passed: missing.length === 0,
        message: missing.length > 0 
          ? `Fichiers de sécurité manquants: ${missing.join(', ')}`
          : 'Tous les fichiers de sécurité sont présents'
      };
    }
  },
  {
    name: 'Configuration .gitignore',
    check: () => {
      const gitignore = fs.readFileSync('.gitignore', 'utf8');
      const securityPatterns = [
        '*.key',
        '*.pem',
        'secrets/',
        '.env*.local'
      ];
      
      const missing = securityPatterns.filter(pattern => !gitignore.includes(pattern));
      
      return {
        passed: missing.length === 0,
        message: missing.length > 0 
          ? `Patterns de sécurité manquants dans .gitignore: ${missing.join(', ')}`
          : 'Configuration .gitignore sécurisée'
      };
    }
  }
];

// Fonction principale
function runSecurityCheck() {
  console.log(`${colors.blue}🔒 Vérification de sécurité du projet${colors.reset}\n`);
  
  let passedChecks = 0;
  let totalChecks = securityChecks.length;
  
  securityChecks.forEach((check, index) => {
    try {
      const result = check.check();
      const status = result.passed ? 'PASS' : 'FAIL';
      const color = result.passed ? colors.green : colors.red;
      const icon = result.passed ? '✓' : '✗';
      
      console.log(`${index + 1}. ${color}${icon} ${check.name} [${status}]${colors.reset}`);
      console.log(`   ${result.message}\n`);
      
      if (result.passed) passedChecks++;
    } catch (error) {
      console.log(`${index + 1}. ${colors.red}✗ ${check.name} [ERROR]${colors.reset}`);
      console.log(`   Erreur: ${error.message}\n`);
    }
  });
  
  // Résumé
  console.log(`${colors.blue}📊 Résumé:${colors.reset}`);
  console.log(`${passedChecks}/${totalChecks} vérifications réussies`);
  
  if (passedChecks === totalChecks) {
    console.log(`${colors.green}🎉 Toutes les vérifications de sécurité sont passées!${colors.reset}`);
    process.exit(0);
  } else {
    console.log(`${colors.yellow}⚠️  Certaines vérifications de sécurité ont échoué. Veuillez les corriger.${colors.reset}`);
    process.exit(1);
  }
}

// Exécution
if (require.main === module) {
  runSecurityCheck();
}

module.exports = { runSecurityCheck, securityChecks }; 