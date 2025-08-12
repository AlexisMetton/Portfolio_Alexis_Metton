import KubeSecureBoxImg from '@/public/images/portfolio/kubesecurebox.jpg';
import ScrollMotionImg from '@/public/images/portfolio/scroll_motion.jpg';
import ScrollMotion1 from '@/public/images/portfolio/scroll_motion_1.jpg';
import ScrollMotion2 from '@/public/images/portfolio/scroll_motion_2.jpg';
import ScrollMotion3 from '@/public/images/portfolio/scroll_motion_3.jpg';
import ScrollMotion4 from '@/public/images/portfolio/scroll_motion_4.jpg';
import ScrollMotion5 from '@/public/images/portfolio/scroll_motion_5.jpg';
import ScrollMotion6 from '@/public/images/portfolio/scroll_motion_6.jpg';
import ScrollMotion7 from '@/public/images/portfolio/scroll_motion_7.jpg';
import ScrollMotion8 from '@/public/images/portfolio/scroll_motion_8.jpg';
import ScrollMotion9 from '@/public/images/portfolio/scroll_motion_9.jpg';
import ScrollMotion10 from '@/public/images/portfolio/scroll_motion_10.jpg';
import PwnagotchiImg from '@/public/images/portfolio/pwnagotchi_portfolio.jpg';
import USBScannerImg from '@/public/images/portfolio/usb_scanner.jpg';
import USBScannerImg1 from '@/public/images/portfolio/usb_scanner_1.jpg';
import USBScannerImg2 from '@/public/images/portfolio/usb_scanner_2.jpg';
import USBScannerImg3 from '@/public/images/portfolio/usb_scanner_3.jpg';
import USBScannerImg4 from '@/public/images/portfolio/usb_scanner_4.jpg';
import DockerRedTeamImg from '@/public/images/portfolio/docker_redteam.jpg';
import DockerRedTeam1 from '@/public/images/portfolio/docker_redteam_1.jpg';
import DockerRedTeam2 from '@/public/images/portfolio/docker_redteam_2.jpg';
import DockerRedTeam3 from '@/public/images/portfolio/docker_redteam_3.jpg';
import DockerRedTeam4 from '@/public/images/portfolio/docker_redteam_4.jpg';
import InfrastructureCloudImg from '@/public/images/portfolio/infra_cloud.jpg';
import InfrastructureCloud1 from '@/public/images/portfolio/infra_cloud_1.jpg';
import InfrastructureCloud2 from '@/public/images/portfolio/infra_cloud_2.jpg';
import InfrastructureCloud3 from '@/public/images/portfolio/infra_cloud_3.jpg';
import ServeurPersoImg from '@/public/images/portfolio/serveur_perso.jpg';
import ServeurPersoEM1 from '@/public/images/portfolio/serveur_perso_em_1.jpg';
import ServeurPersoEM2 from '@/public/images/portfolio/serveur_perso_em_2.jpg';
import ANSSIImg from '@/public/images/blog/compliance_anssi.png';
import PwnaImage1 from '@/public/images/portfolio/pwnagotchi_1.jpg';
import PwnaImage2 from '@/public/images/portfolio/pwnagotchi_2.jpg';
import PwnaImage3 from '@/public/images/portfolio/pwnagotchi_3.jpg';
import MainImage from '@/public/images/portfolio/pwnagotchi_portfolio.jpg';
import VoteChainImg from '@/public/images/portfolio/votechain.jpg';
import VoteChainImg1 from '@/public/images/portfolio/votechain_1.jpg';
import VoteChainImg2 from '@/public/images/portfolio/votechain_2.jpg';
import VoteChainImg3 from '@/public/images/portfolio/votechain_3.jpg';
import VoteChainImg4 from '@/public/images/portfolio/votechain_4.jpg';
import VoteChainImg5 from '@/public/images/portfolio/votechain_5.jpg';

const moisFrancais = {
  'Jan': 'Jan',
  'Fev': 'Feb',
  'Mar': 'Mar',
  'Avr': 'Apr',
  'Mai': 'May',
  'Juin': 'Jun',
  'Jul': 'Jul',
  'Aoû': 'Aug',
  'Sep': 'Sep',
  'Oct': 'Oct',
  'Nov': 'Nov',
  'Dec': 'Dec'
};

// --- DÉBUT DU TABLEAU PROJECTS ---
const projects = [
    {
        projectTitle: "VoteChain - Système de Vote Blockchain",
        slug: "votechain",
        seoTitle: "VoteChain - Système de Vote Blockchain | Alexis Metton",
        seoDescription: "Application de vote décentralisée utilisant la blockchain pour garantir la transparence, l'immuabilité et la sécurité des votes.",
        description: `
           <div class="row g-4 mt-2">
               <div class="col-12">
                   <h2 class="fw-medium" style="color: rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); padding-bottom: 10px;">Système de Vote Décentralisé et Sécurisé sur Blockchain</h2>
                   <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">VoteChain</strong> est une application de vote qui utilise la technologie blockchain pour garantir la transparence, l'immuabilité et la sécurité des processus de vote.</p>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">I. Contexte et Objectifs</h3>
                   <p style="color: rgb(0, 0, 0);">Le projet illustre l'application pratique des concepts blockchain dans un contexte de gouvernance numérique, démontrant comment la technologie peut renforcer la confiance dans les processus démocratiques.</p>
                   <p style="color: rgb(0, 0, 0);">L'objectif était de créer un système de vote transparent et immuable basé sur la blockchain, implémenter un chiffrement hybride pour la sécurité des données, développer une architecture full-stack moderne et assurer la gestion sécurisée des clés privées et des wallets.</p>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">II. Architecture Technique</h3>
                   <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Stack de Développement</h4>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Frontend :</strong> React avec interface utilisateur moderne et Bootstrap</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Backend :</strong> Node.js/Express avec API REST sécurisée et middleware d'authentification</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Base de données :</strong> PostgreSQL avec Prisma ORM pour le stockage persistant</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Blockchain :</strong> Implémentation complète avec algorithme Proof of Work</li>
                   </ul>
                   <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Sécurité et Infrastructure</h4>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Chiffrement :</strong> AES-256-GCM + RSA-2048 pour la sécurité des données</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Containerisation :</strong> Docker et Docker Compose pour l'orchestration</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">CI/CD :</strong> GitHub Actions pour l'automatisation des tests et du déploiement</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Tests :</strong> Suite complète de tests automatisés (87/87 tests passants)</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">III. Fonctionnalités Développées</h3>
                   <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Gestion des Wallets et Sécurité</h4>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Création et gestion sécurisée de wallets avec chiffrement des clés privées</li>
                       <li style="color: rgb(0, 0, 0);">Gestion sécurisée des clés privées sans exposition en base de données</li>
                       <li style="color: rgb(0, 0, 0);">Chiffrement hybride pour protéger les réponses de vote</li>
                       <li style="color: rgb(0, 0, 0);">Vérification d'intégrité des données</li>
                   </ul>
                   <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Système de Vote</h4>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Création de votes avec questions personnalisables et options (Pour ou Contre)</li>
                       <li style="color: rgb(0, 0, 0);">Soumission de votes chiffrés avec vérification d'intégrité</li>
                       <li style="color: rgb(0, 0, 0);">Interface utilisateur intuitive pour toutes les opérations</li>
                       <li style="color: rgb(0, 0, 0);">Système de résultats en temps réel avec visualisation</li>
                   </ul>
                   <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Blockchain et Consensus</h4>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Mining de blocs avec algorithme Proof of Work ajustable</li>
                       <li style="color: rgb(0, 0, 0);">Validation et vérification de l'intégrité de la blockchain</li>
                       <li style="color: rgb(0, 0, 0);">Implémentation d'un algorithme de consensus Proof of Work fonctionnel</li>
                       <li style="color: rgb(0, 0, 0);">Architecture full-stack avec synchronisation temps réel</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">IV. Technologies et Compétences Développées</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Développement Web :</strong> React, Node.js, Express.js, Bootstrap</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Base de données :</strong> PostgreSQL, Prisma ORM, gestion des données</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Blockchain :</strong> Implémentation Proof of Work, cryptographie appliquée</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Sécurité :</strong> AES-256-GCM, RSA-2048, PBKDF2, gestion des clés</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">DevOps :</strong> Docker, GitHub Actions, CI/CD, tests automatisés</li>
                       <li style="color: rgb(0, 0, 0);">Architecture distribuée, sécurité applicative, développement full-stack</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">V. Défis et Solutions</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Gestion des clés privées :</strong> Implémentation d'un système sécurisé sans exposition en base de données</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Consensus blockchain :</strong> Développement d'un algorithme Proof of Work fonctionnel et optimisé</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Chiffrement hybride :</strong> Combinaison AES-256-GCM et RSA-2048 pour la sécurité maximale</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Architecture temps réel :</strong> Synchronisation full-stack avec gestion des états</li>
                       <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Tests automatisés :</strong> Suite complète de tests avec 100% de couverture</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VI. Impact et Résultats</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Système de vote fonctionnel avec 100% de tests passants</li>
                       <li style="color: rgb(0, 0, 0);">Démonstration pratique des concepts blockchain et cryptographie</li>
                       <li style="color: rgb(0, 0, 0);">Architecture sécurisée</li>
                       <li style="color: rgb(0, 0, 0);">Documentation complète</li>
                       <li style="color: rgb(0, 0, 0);">Base solide pour l'extension vers d'autres cas d'usage</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VII. Aspects Éducatifs et Professionnels</h3>
                   <p style="color: rgb(0, 0, 0);">Ce projet illustre la maîtrise des technologies blockchain, de la cryptographie appliquée et du développement full-stack moderne. Il démontre la capacité à concevoir et implémenter des systèmes complexes avec des exigences de sécurité élevées, tout en maintenant une architecture propre et testable.</p>
                   <div style="background: rgb(242, 245, 248); border: 1px solid rgb(0, 0, 0); padding: 20px; border-radius: 6px; margin-top: 30px;">
                       <p style="color: rgb(0, 0, 0); font-weight: 500; margin: 0; text-align: center;">VoteChain représente l'aboutissement d'un système de vote blockchain complet, démontrant l'importance de la transparence, de la sécurité et de l'immuabilité dans les processus démocratiques numériques.</p>
                   </div>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">Lien du Projet</h3>
                   <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Repository GitHub :</strong> <a href="https://github.com/AlexisMetton/VoteChain" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">github.com/AlexisMetton/VoteChain</a></p>
                    <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Documentation GitBook :</strong> <a href="https://alexis-metton.gitbook.io/votechain" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">https://alexis-metton.gitbook.io/votechain</a></p>
                </div>
           </div>
       `,
        keywords: "blockchain, vote, sécurité, cryptographie, react, nodejs, postgresql, docker",
        category: "web3",
        services: "Développement Blockchain, Sécurité Applicative, Architecture Full-Stack",
        client: "Projet Personnel",
        duration: "En cours",
        date: "Juin 01, 2025",
        postedBy: "Alexis Metton",
        imageSrc: VoteChainImg,
        mainImage: VoteChainImg,
        categories: [
          {
            "name": "Blockchain"
          },
          {
            "name": "Sécurité"
          },
          {
            "name": "Full-Stack"
          },
          {
            "name": "Cryptographie"
          }
        ],
        images: [
            { image: VoteChainImg1 },
            { image: VoteChainImg2 },
            { image: VoteChainImg3 },
            { image: VoteChainImg4 },
            { image: VoteChainImg5 },
        ]
    },
       {
           projectTitle: 'KubeSecureBox - Laboratoire Cybersécurité',
           slug: 'kubesecurebox',
           seoTitle: 'KubeSecureBox - Lab Cybersécurité Kubernetes | Alexis Metton',
           seoDescription: 'Laboratoire de cybersécurité complet sur Kubernetes avec Raspberry Pi. Stack Red/Blue Team, monitoring centralisé et workflow GitOps.',
           description: `
           <div class="row g-4 mt-2">
               <div class="col-12">
                   <h2 class="fw-medium" style="color: rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); padding-bottom: 10px;">Environnement Cybersécurité Offensive & Défensive sur Kubernetes</h2>
                   <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">KubeSecureBox</strong> est un laboratoire complet de cybersécurité basé sur un cluster Kubernetes (k3s) composé de deux Raspberry Pi (Pi 4 & Pi 5). Ce projet vise à expérimenter et démontrer des compétences avancées en DevSecOps, cybersécurité offensive et défensive, automatisation et infrastructure GitOps, dans un environnement bare-metal distribué et 100% maîtrisé.</p>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">I. Objectifs Techniques</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Déployer un cluster Kubernetes sécurisé, résilient et auto-géré</li>
                       <li style="color: rgb(0, 0, 0);">Orchestrer une stack offensive (Red Team) et défensive (Blue Team)</li>
                       <li style="color: rgb(0, 0, 0);">Implémenter un workflow GitOps avec ArgoCD</li>
                       <li style="color: rgb(0, 0, 0);">Monitoring centralisé avec Prometheus, Loki, Grafana</li>
                       <li style="color: rgb(0, 0, 0);">Alertes automatisées (email, mobile, Discord) sur incidents critiques</li>
                       <li style="color: rgb(0, 0, 0);">Automatiser des audits de sécurité internes et externes</li>
                       <li style="color: rgb(0, 0, 0);">Accès distant chiffré et cloisonné via VPN (Tailscale)</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">II. Contexte d'Utilisation</h3>
                   <p style="color: rgb(0, 0, 0);">Ce projet s'inscrit dans une démarche d'apprentissage approfondi de Kubernetes, de la pratique DevSecOps (CI, tests de vulnérabilité, sécurité du pipeline), et de la cybersécurité offensive/défensive. Il permet d'exécuter des audits avancés hors ligne ou via VPN sécurisé, et de créer une base de lab personnel extensible pour des projets futurs (Pentest, BlueTeam, RedTeam, etc.).</p>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">III. Architecture Technique</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Cluster Kubernetes (k3s) sur 2 Raspberry Pi (Pi 4 & Pi 5)</li>
                       <li style="color: rgb(0, 0, 0);">Stack Red Team : outils d'audit, pentest, anonymat</li>
                       <li style="color: rgb(0, 0, 0);">Stack Blue Team : monitoring, alerting, SIEM, défense active</li>
                       <li style="color: rgb(0, 0, 0);">Workflow GitOps (ArgoCD) pour la gestion continue</li>
                       <li style="color: rgb(0, 0, 0);">Monitoring centralisé (Prometheus, Loki, Grafana)</li>
                       <li style="color: rgb(0, 0, 0);">Alertes automatisées multi-canaux</li>
                       <li style="color: rgb(0, 0, 0);">Accès VPN Tailscale pour administration distante</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">IV. Fonctionnalités Clés</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Déploiement automatisé de la stack sécurité (offensive/défensive)</li>
                       <li style="color: rgb(0, 0, 0);">Audits de sécurité automatisés sur sites/applications/serveurs</li>
                       <li style="color: rgb(0, 0, 0);">Alertes en temps réel (email, mobile, Discord) sur incidents</li>
                       <li style="color: rgb(0, 0, 0);">Monitoring et logs centralisés (Prometheus, Loki, Grafana)</li>
                       <li style="color: rgb(0, 0, 0);">Accès distant sécurisé et cloisonné (VPN Tailscale)</li>
                       <li style="color: rgb(0, 0, 0);">Extensibilité pour de futurs labs (Pentest, SIEM, etc.)</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">V. Technologies et Compétences Développées</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);"><strong>Kubernetes (k3s)</strong>, <strong>Raspberry Pi</strong>, <strong>ArgoCD</strong></li>
                       <li style="color: rgb(0, 0, 0);"><strong>Prometheus</strong>, <strong>Loki</strong>, <strong>Grafana</strong></li>
                       <li style="color: rgb(0, 0, 0);"><strong>DevSecOps</strong>, <strong>GitOps</strong>, <strong>CI/CD</strong></li>
                       <li style="color: rgb(0, 0, 0);"><strong>VPN Tailscale</strong>, <strong>Alerting multi-canaux</strong></li>
                       <li style="color: rgb(0, 0, 0);">Automatisation, monitoring, sécurité offensive/défensive</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VI. Défis et Solutions</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Gestion de la résilience et de la sécurité sur cluster bare-metal</li>
                       <li style="color: rgb(0, 0, 0);">Automatisation du monitoring et des alertes multi-canaux</li>
                       <li style="color: rgb(0, 0, 0);">Intégration GitOps et CI/CD sur environnement local</li>
                       <li style="color: rgb(0, 0, 0);">Sécurisation des accès distants et cloisonnement réseau</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VII. Impact et Résultats</h3>
                   <ul class="list-circle">
                       <li style="color: rgb(0, 0, 0);">Environnement de lab personnel extensible et réutilisable</li>
                       <li style="color: rgb(0, 0, 0);">Démonstration de compétences avancées en DevSecOps et cybersécurité</li>
                       <li style="color: rgb(0, 0, 0);">Automatisation complète des audits et du monitoring</li>
                       <li style="color: rgb(0, 0, 0);">Documentation claire et reproductible</li>
                   </ul>
               </div>
               <div class="col-12">
                   <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VIII. Aspects Éducatifs et Professionnels</h3>
                   <p style="color: rgb(0, 0, 0);">Ce projet illustre la capacité à concevoir un environnement complet de cybersécurité, à intégrer des outils open-source, à automatiser la gestion et la sécurité, et à documenter l'ensemble du processus pour la formation et la démonstration professionnelle.</p>
                   <div style="background: rgb(242, 245, 248); border: 1px solid rgb(0, 0, 0); padding: 20px; border-radius: 6px; margin-top: 30px;">
                       <p style="color: rgb(0, 0, 0); font-weight: 500; margin: 0; text-align: center;">KubeSecureBox représente l'aboutissement d'un lab DevSecOps complet, démontrant l'importance de l'automatisation, du monitoring et de la sécurité dans les environnements Kubernetes modernes.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">Lien du Projet</h3>
                       <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Documentation GitBook :</strong> <a href="https://alexiss-organization-12.gitbook.io/kubesecurebox/" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">alexiss-organization-12.gitbook.io/kubesecurebox/</a></p>
                   </div>
               </div>
           </div>
       `,
           keywords: 'kubernetes, cybersécurité, red team, blue team, raspberry pi, devops, monitoring',
           category: 'Cybersécurité',
           services: 'Architecture Sécurisée, DevSecOps, Monitoring',
           client: 'Projet Personnel',
           duration: 'En cours',
           date: 'Mai 01, 2025',
           postedBy: 'Alexis Metton',
           imageSrc: KubeSecureBoxImg,
           mainImage: KubeSecureBoxImg,
           categories: [
               { name: 'Kubernetes' },
               { name: 'Red Team' },
               { name: 'Blue Team' },
               { name: 'DevSecOps' }
           ],
           images: [
               /*{ image: MainImage },
               { image: MainImage },*/
           ]
       },
       /*{
           projectTitle: 'ANSSI Compliance Scanner',
           slug: 'anssi-scanner',
           seoTitle: 'Scanner Conformité ANSSI - Audit Sécurité Python | Alexis Metton',
           seoDescription: 'Outil d\'audit automatisé de conformité ANSSI en Python. Scanner réseau, vérification de 40+ règles de sécurité françaises et génération de rapports PDF pour organisations gouvernementales.',
           description: 'Outil d\'audit automatisé de conformité ANSSI développé en Python. Scanner réseau, vérification de 40+ règles de sécurité françaises, génération de rapports PDF et dashboard de compliance pour organisations gouvernementales.',
           keywords: 'ANSSI, compliance, audit sécurité, python, conformité, gouvernemental',
           category: 'Cybersécurité',
           services: 'Développement Python, Audit Sécurité, Compliance',
           client: 'Projet Personnel',
           duration: '1 mois',
           date: 'Jan 15, 2025',
           postedBy: 'Alexis Metton',
           imageSrc: ANSSIImg,
           mainImage: ANSSIImg,
           categories: [
               { name: 'ANSSI' },
               { name: 'Python' },
               { name: 'Audit' },
               { name: 'Compliance' }
           ],
           images: [
               { image: MainImage },
               { image: MainImage },
           ]
       },*/
       {
           projectTitle: 'Docker Red Team Lab',
           slug: 'docker-redteam',
           seoTitle: 'Docker Red Team Lab - Pentest Containerisé | Alexis Metton',
           seoDescription: 'Laboratoire de tests de pénétration containerisé avec Docker. Équipe Red Team virtualisée, connexions Tor/VPN et outils d\'attaque automatisés.',
           description: `
               <div class="row g-4 mt-2">
                   <div class="col-12">
                       <h2 class="fw-medium" style="color: rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); padding-bottom: 10px;">Laboratoire Red Team Containerisé</h2>
                       <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Docker Red Team Lab</strong> est un environnement de tests de pénétration complet développé en formation personnelle pour faciliter les audits de sécurité en simulant des attaques. Ce laboratoire containerisé combine un arsenal d'outils Red Team, des connexions Tor et ProtonVPN intégrées, et une automatisation des logs pour offrir un environnement de pentest isolé et éphémère.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">I. Contexte et Objectifs</h3>
                       <p style="color: rgb(0, 0, 0);">Développé dans un contexte de formation personnelle, ce projet répond au besoin d'avoir un environnement de pentest flexible et sécurisé pour maîtriser les outils Red Team. L'objectif était de créer un laboratoire qui facilite les audits en simulant des attaques, automatise la gestion des logs et offre un environnement contrôlé pour l'apprentissage de la sécurité offensive.</p>
                       <p style="color: rgb(0, 0, 0);">Le projet vise à éliminer la complexité de l'installation et de la configuration des outils de pentest en offrant un conteneur unique qui se supprime automatiquement à la fermeture, garantissant ainsi un environnement propre et sécurisé pour chaque session de test.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">II. Architecture Technique</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Stack de Conteneurisation</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Conteneurisation :</strong> Docker avec Docker Compose pour orchestration</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Architecture :</strong> Conteneur unique contenant tous les outils Red Team</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Éphémérité :</strong> Suppression automatique du conteneur à la fermeture</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Anonymisation :</strong> Intégration Tor et ProtonVPN pour connexions sécurisées</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Arsenal d'Outils Red Team</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Web Scanning :</strong> ZAP, Nikto, Wapiti, FFUF pour audit web</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Vulnérabilités :</strong> WPScan, SSLyze, SQLMap pour tests de vulnérabilités</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Réseau :</strong> Nmap, Masscan pour reconnaissance réseau</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Reconnaissance :</strong> WhatWeb, Amass pour gathering d'informations</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Brute Force :</strong> Hydra, John pour tests de force brute</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">III. Fonctionnalités Développées</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Environnement Containerisé</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Conteneur unique intégrant tous les outils Red Team</li>
                           <li style="color: rgb(0, 0, 0);">Suppression automatique à la fermeture pour environnement propre</li>
                           <li style="color: rgb(0, 0, 0);">Isolation complète du système hôte</li>
                           <li style="color: rgb(0, 0, 0);">Configuration Docker Compose pour déploiement simplifié</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Anonymisation et Sécurité</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Intégration Tor pour anonymisation des connexions</li>
                           <li style="color: rgb(0, 0, 0);">Connexion ProtonVPN pour protection de l'identité</li>
                           <li style="color: rgb(0, 0, 0);">Routage automatique du trafic via les tunnels sécurisés</li>
                           <li style="color: rgb(0, 0, 0);">Configuration réseau isolée pour tests sécurisés</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Automatisation et Logging</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Automatisation complète des logs d'activité</li>
                           <li style="color: rgb(0, 0, 0);">Centralisation des résultats de tests</li>
                           <li style="color: rgb(0, 0, 0);">Gestion des sessions de pentest</li>
                           <li style="color: rgb(0, 0, 0);">Archivage automatique des rapports</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">IV. Technologies et Compétences Développées</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Conteneurisation :</strong> Docker, Docker Compose, orchestration de conteneurs</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Cybersécurité Offensive :</strong> Maîtrise des outils Red Team, méthodologies de pentest</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Web Security :</strong> ZAP, Nikto, Wapiti, FFUF pour audit web</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Vulnérabilités :</strong> WPScan, SSLyze, SQLMap pour tests de vulnérabilités</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Reconnaissance :</strong> Nmap, Masscan, WhatWeb, Amass pour gathering</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Anonymisation :</strong> Configuration Tor et ProtonVPN, protection de l'identité</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Automatisation :</strong> Scripts de déploiement, gestion des logs automatisée</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">V. Défis et Solutions</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Intégration d'outils multiples :</strong> Configuration d'un conteneur unique avec tous les outils Red Team</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Anonymisation réseau :</strong> Configuration complexe de Tor et ProtonVPN dans l'environnement Docker</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Éphémérité :</strong> Gestion de la suppression automatique du conteneur tout en préservant les logs</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Performance :</strong> Optimisation des ressources pour un conteneur contenant de nombreux outils</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Sécurité :</strong> Isolation complète du système hôte tout en permettant les tests de pentest</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VI. Impact et Résultats</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Maîtrise complète des outils Red Team dans un environnement contrôlé</li>
                           <li style="color: rgb(0, 0, 0);">Facilitation des audits de sécurité avec environnement prêt à l'emploi</li>
                           <li style="color: rgb(0, 0, 0);">Automatisation des logs pour traçabilité complète des tests</li>
                           <li style="color: rgb(0, 0, 0);">Environnement éphémère garantissant la sécurité et la propreté</li>
                           <li style="color: rgb(0, 0, 0);">Compétences avancées en conteneurisation et cybersécurité offensive</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VII. Aspects Éducatifs et Professionnels</h3>
                       <p style="color: rgb(0, 0, 0);">Ce projet démontre une maîtrise approfondie de la conteneurisation appliquée à la cybersécurité offensive. Il illustre la capacité à créer des environnements de test sécurisés et éphémères, combinant expertise technique en Docker et compétences avancées en pentest. Cette approche moderne de la sécurité offensive facilite l'apprentissage et l'exécution d'audits de sécurité.</p>
                       <div style="background: rgb(242, 245, 248); border: 1px solid rgb(0, 0, 0); padding: 20px; border-radius: 6px; margin-top: 30px;">
                           <p style="color: rgb(0, 0, 0); font-weight: 500; margin: 0; text-align: center;">Le Docker Red Team Lab représente une approche moderne de la formation en cybersécurité offensive, démontrant l'importance de la conteneurisation dans la création d'environnements de test sécurisés et éphémères. Cette solution illustre la capacité à maîtriser les outils Red Team tout en respectant les bonnes pratiques de sécurité.</p>
                       </div>
                   </div>
               </div>
           `,
           keywords: 'docker, red team, pentest, tor, vpn, sécurité offensive',
           category: 'Cybersécurité',
           services: 'Pentest, Conteneurisation, Sécurité Offensive',
           client: 'Formation Personnelle',
           duration: '1 semaine',
           date: 'Jan 10, 2025',
           postedBy: 'Alexis Metton',
           imageSrc: DockerRedTeamImg,
           mainImage: DockerRedTeamImg,
           categories: [
               { name: 'Docker' },
               { name: 'Red Team' },
               { name: 'Pentest' },
               { name: 'Tor/VPN' }
           ],
           images: [
               { image: DockerRedTeam1 },
               { image: DockerRedTeam2 },
               { image: DockerRedTeam3 },
               { image: DockerRedTeam4 },
           ]
       },
       {
           projectTitle: 'Infrastructure Cloud Google - GCP Kubernetes',
           slug: 'infrastructure-cloud',
           seoTitle: 'Infrastructure Cloud Google - GCP Kubernetes Terraform | Alexis Metton',
           seoDescription: 'Infrastructure cloud robuste et évolutive sur Google Cloud Platform. Kubernetes, Terraform, Prometheus monitoring et stratégies de déploiement avancées.',
           description: `
               <div class="row g-4 mt-2">
                   <div class="col-12">
                       <h2 class="fw-medium" style="color: rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); padding-bottom: 10px;">Infrastructure Cloud Robuste et Évolutive</h2>
                       <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Infrastructure Cloud Google</strong> est un projet d'infrastructure cloud complet développé pour démontrer la capacité à gérer une infrastructure cloud efficace et évolutive. Ce projet met en place une infrastructure robuste intégrant des outils modernes tels que Kubernetes et Terraform pour la gestion et le déploiement d'applications conteneurisées sur Google Cloud Platform (GCP).</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">I. Contexte et Objectifs</h3>
                       <p style="color: rgb(0, 0, 0);">Ce projet a été développé pour démontrer la maîtrise des technologies cloud modernes et la capacité à concevoir une infrastructure évolutive. L'objectif était de créer une infrastructure cloud complète utilisant Google Cloud Platform (GCP), Kubernetes pour l'orchestration de conteneurs, Terraform pour l'Infrastructure as Code, et Prometheus pour le monitoring avancé.</p>
                       <p style="color: rgb(0, 0, 0);">Le projet vise à illustrer les bonnes pratiques DevOps en combinant conteneurisation, orchestration, monitoring et stratégies de déploiement avancées pour créer une infrastructure cloud professionnelle et scalable.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">II. Architecture Technique</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Stack Cloud et Conteneurisation</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Cloud Provider :</strong> Google Cloud Platform (GCP) pour l'infrastructure cloud</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Orchestration :</strong> Kubernetes (GKE) pour la gestion des conteneurs</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Infrastructure as Code :</strong> Terraform pour l'automatisation de l'infrastructure</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Monitoring :</strong> Prometheus pour la surveillance et les alertes</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Architecture Application</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Frontend :</strong> Application web conteneurisée avec stratégies de déploiement avancées</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Backend :</strong> API REST conteneurisée avec gestion des données</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Base de données :</strong> Services de base de données managés sur GCP</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Load Balancing :</strong> Répartition de charge et haute disponibilité</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">III. Fonctionnalités Développées</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Infrastructure as Code</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Configuration Terraform complète pour l'infrastructure GCP</li>
                           <li style="color: rgb(0, 0, 0);">Automatisation du déploiement de l'infrastructure</li>
                           <li style="color: rgb(0, 0, 0);">Gestion des ressources cloud via code</li>
                           <li style="color: rgb(0, 0, 0);">Versioning et contrôle de l'infrastructure</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Stratégies de Déploiement</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Déploiement Rolling Update pour zéro downtime</li>
                           <li style="color: rgb(0, 0, 0);">Blue-Green Deployment pour tests et rollback</li>
                           <li style="color: rgb(0, 0, 0);">Canary Deployment pour déploiements progressifs</li>
                           <li style="color: rgb(0, 0, 0);">Gestion des versions et rollback automatique</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Monitoring et Observabilité</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Prometheus pour la collecte de métriques</li>
                           <li style="color: rgb(0, 0, 0);">Alertes automatisées et dashboards de monitoring</li>
                           <li style="color: rgb(0, 0, 0);">Surveillance des performances et de la santé des services</li>
                           <li style="color: rgb(0, 0, 0);">Logs centralisés et analyse des événements</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">IV. Technologies et Compétences Développées</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Cloud Computing :</strong> Google Cloud Platform, services managés, architecture cloud</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Conteneurisation :</strong> Docker, Kubernetes (GKE), orchestration de conteneurs</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Infrastructure as Code :</strong> Terraform, automatisation de l'infrastructure</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Monitoring :</strong> Prometheus, métriques, alertes, observabilité</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">DevOps :</strong> CI/CD, stratégies de déploiement, automation</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Documentation :</strong> GitBook, guides de déploiement, runbooks</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">V. Défis et Solutions</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Complexité de l'infrastructure :</strong> Gestion d'une architecture cloud multi-services avec Terraform</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Orchestration Kubernetes :</strong> Configuration et optimisation de clusters GKE</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Stratégies de déploiement :</strong> Implémentation de déploiements avancés (Blue-Green, Canary)</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Monitoring :</strong> Configuration de Prometheus et système d'alertes</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Documentation :</strong> Création d'une documentation complète avec GitBook</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VI. Impact et Résultats</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Infrastructure cloud robuste et évolutive sur GCP</li>
                           <li style="color: rgb(0, 0, 0);">Automatisation complète de l'infrastructure avec Terraform</li>
                           <li style="color: rgb(0, 0, 0);">Stratégies de déploiement avancées pour zéro downtime</li>
                           <li style="color: rgb(0, 0, 0);">Système de monitoring et d'alertes opérationnel</li>
                           <li style="color: rgb(0, 0, 0);">Documentation complète avec guides et runbooks</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VII. Aspects Éducatifs et Professionnels</h3>
                       <p style="color: rgb(0, 0, 0);">Ce projet démontre une maîtrise complète des technologies cloud modernes et des pratiques DevOps. Il illustre la capacité à concevoir, déployer et maintenir une infrastructure cloud professionnelle, combinant expertise technique en GCP, Kubernetes, Terraform et monitoring. Cette approche de l'infrastructure cloud facilite la scalabilité et la maintenance des applications.</p>
                       <div style="background: rgb(242, 245, 248); border: 1px solid rgb(0, 0, 0); padding: 20px; border-radius: 6px; margin-top: 30px;">
                           <p style="color: rgb(0, 0, 0); font-weight: 500; margin: 0; text-align: center;">L'Infrastructure Cloud Google représente une approche de la gestion d'infrastructure cloud, démontrant l'importance de l'Infrastructure as Code et des stratégies de déploiement avancées. Cette solution illustre la capacité à créer des infrastructures cloud robustes et évolutives pour des applications modernes.</p>
                       </div>
                       <div class="col-12">
                           <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">Liens du Projet</h3>
                           <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Documentation GitBook :</strong> <a href="https://alexiss-organization-12.gitbook.io/documentation-introduction-cloud/" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">alexiss-organization-12.gitbook.io/documentation-introduction-cloud/</a></p>
                           <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Dépôt GitHub :</strong> <a href="https://github.com/AlexisMetton/Infrastructure-Cloud.git" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">github.com/AlexisMetton/Infrastructure-Cloud</a></p>
                       </div>
                   </div>
               </div>
           `,
           keywords: 'gcp, kubernetes, terraform, prometheus, cloud, devops, infrastructure',
           category: 'Infrastructure',
           services: 'Infrastructure Cloud, DevOps, Monitoring',
           client: 'Projet Personnel',
           duration: '1 semaine',
           date: 'Jan 02, 2025',
           postedBy: 'Alexis Metton',
           imageSrc: InfrastructureCloudImg,
           mainImage: InfrastructureCloudImg,
           categories: [
               { name: 'GCP' },
               { name: 'Kubernetes' },
               { name: 'Terraform' },
               { name: 'DevOps' }
           ],
           images: [
               { image: InfrastructureCloud1 },
               { image: InfrastructureCloud2 },
               { image: InfrastructureCloud3 },
           ]
       },
       {
           projectTitle: 'USB Security Scanner',
           slug: 'usb-scanner',
           seoTitle: 'USB Security Scanner - Sécurisation Périphériques | Alexis Metton',
           seoDescription: 'Script automatisé de sécurisation des périphériques USB sous WSL. Scan antivirus ClamAV, détection automatique et démontage sécurisé pour prévenir les infections par USB.',
           description: `
               <div class="row g-4 mt-2">
                   <div class="col-12">
                       <h2 class="fw-medium" style="color: rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); padding-bottom: 10px;">Sécurisation Automatisée des Périphériques USB</h2>
                       <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">USB Security Scanner</strong> est un projet de cybersécurité développé en Python et Bash pour sécuriser automatiquement les périphériques USB connectés à un système Linux. Ce script surveille en continu les points de montage, lance des scans antivirus automatiques avec ClamAV et démonte sécuritairement les périphériques infectés pour prévenir les infections par USB.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">I. Contexte et Objectifs</h3>
                       <p style="color: rgb(0, 0, 0);">Développé dans un contexte de formation et d'usage personnel, ce projet répond au besoin critique de sécuriser les périphériques USB qui représentent un vecteur d'attaque majeur. L'objectif était de créer un système automatisé capable de détecter et bloquer les menaces avant qu'elles n'infectent le système hôte, en combinant surveillance continue, scan antivirus et démontage sécurisé.</p>
                       <p style="color: rgb(0, 0, 0);">Le projet vise à éliminer le risque humain en automatisant complètement le processus de vérification des périphériques USB, garantissant qu'aucune clé USB ne peut être utilisée sans avoir été préalablement analysée par ClamAV.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">II. Architecture Technique</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Stack de Développement</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Langage principal :</strong> Python pour la logique de surveillance et de scan</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Scripts d'installation :</strong> Bash pour l'automatisation du déploiement</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Antivirus :</strong> ClamAV pour la détection de signatures virales</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Environnement :</strong> Testé sur machine virtuelle (accès USB requis)</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Architecture de Surveillance</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Surveillance continue :</strong> Monitoring du dossier /media toutes les 2 secondes</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Détection automatique :</strong> Lancement du scan dès le montage d'un périphérique</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Gestion des conflits :</strong> Système de verrou pour éviter les scans simultanés</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">III. Fonctionnalités Développées</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Système de Surveillance</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Monitoring continu du dossier /media avec intervalle de 2 secondes</li>
                           <li style="color: rgb(0, 0, 0);">Détection automatique des nouveaux périphériques USB montés</li>
                           <li style="color: rgb(0, 0, 0);">Système de verrou pour prévenir les scans simultanés sur le même périphérique</li>
                           <li style="color: rgb(0, 0, 0);">Gestion robuste des événements de montage/démontage</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Scan Antivirus Automatisé</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Intégration complète avec ClamAV pour scan de signatures virales</li>
                           <li style="color: rgb(0, 0, 0);">Analyse automatique de tous les fichiers du périphérique</li>
                           <li style="color: rgb(0, 0, 0);">Détection du mot-clé "FOUND" dans la sortie de ClamAV</li>
                           <li style="color: rgb(0, 0, 0);">Scan récursif de tous les dossiers et sous-dossiers</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Sécurisation et Démontage</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Démontage automatique du périphérique après scan complet</li>
                           <li style="color: rgb(0, 0, 0);">Blocage d'accès en cas de détection de menaces</li>
                           <li style="color: rgb(0, 0, 0);">Gestion sécurisée des périphériques infectés</li>
                           <li style="color: rgb(0, 0, 0);">Protection contre les accès non autorisés</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">IV. Technologies et Compétences Développées</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Développement Python :</strong> Surveillance système, gestion des processus, parsing de logs</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Scripting Bash :</strong> Automatisation d'installation, gestion des services système</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Cybersécurité :</strong> Intégration ClamAV, détection de menaces, sécurisation USB</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Administration Linux :</strong> Gestion des points de montage, permissions système</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Monitoring :</strong> Surveillance continue, gestion des événements système</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Logging :</strong> Système de logs avec archivage automatique et timestamps</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">V. Défis et Solutions</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Accès USB :</strong> Contournement des limitations WSL/conteneurs par utilisation de machine virtuelle</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Scans simultanés :</strong> Implémentation d'un système de verrou pour éviter les conflits</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Performance :</strong> Optimisation de l'intervalle de surveillance (2 secondes) pour équilibrer réactivité et charge système</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Détection de menaces :</strong> Parsing intelligent de la sortie ClamAV pour identification précise des infections</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Automatisation :</strong> Développement de scripts Bash pour déploiement et configuration automatiques</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VI. Impact et Résultats</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Système de protection USB automatisé et fiable</li>
                           <li style="color: rgb(0, 0, 0);">Élimination du risque humain dans la vérification des périphériques</li>
                           <li style="color: rgb(0, 0, 0);">Détection et blocage automatiques des menaces USB</li>
                           <li style="color: rgb(0, 0, 0);">Système de logs complet pour audit et monitoring</li>
                           <li style="color: rgb(0, 0, 0);">Architecture scalable permettant l'ajout de nouvelles fonctionnalités</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VII. Limitations et Évolutions Futures</h3>
                       <p style="color: rgb(0, 0, 0);">Le système actuel présente quelques limitations qui pourraient être améliorées dans de futures versions : absence de scan manuel via interface web, pas de configuration du comportement de scan, et absence de système de quarantaine pour les fichiers infectés. Ces améliorations permettraient d'offrir une solution encore plus complète et flexible.</p>
                       <div style="background: rgb(242, 245, 248); border: 1px solid rgb(0, 0, 0); padding: 20px; border-radius: 6px; margin-top: 30px;">
                           <p style="color: rgb(0, 0, 0); font-weight: 500; margin: 0; text-align: center;">L'USB Security Scanner représente une approche proactive de la sécurité USB, démontrant l'importance de l'automatisation dans la protection contre les vecteurs d'attaque physiques. Cette solution illustre la capacité à développer des outils de sécurité pratiques et efficaces pour usage personnel et formation.</p>
                       </div>
                        <div class="col-12">
                           <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">Liens du Projet</h3>
                           <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Dépôt GitHub :</strong> <a href="https://github.com/AlexisMetton/usb_scanner.git" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">github.com/AlexisMetton/usb_scanner</a></p>
                       </div>
                   </div>
               </div>
           `,
           keywords: 'usb security, clamav, wsl, automatisation, antivirus, script',
           category: 'Cybersécurité',
           services: 'Sécurité Endpoint, Automatisation, Scripts',
           client: 'Usage Personnel',
           duration: '2 semaines',
           date: 'Fev 05, 2025',
           postedBy: 'Alexis Metton',
           imageSrc: USBScannerImg,
           mainImage: USBScannerImg,
           categories: [
               { name: 'Sécurité USB' },
               { name: 'ClamAV' },
               { name: 'Machine Virtuelle' },
               { name: 'Automatisation' }
           ],
           images: [
               { image: USBScannerImg1 },
               { image: USBScannerImg2 },
               { image: USBScannerImg3 },
               { image: USBScannerImg4 },
           ]
       },
       {
           projectTitle: 'Pwnagotchi WiFi Auditor & Analyzer',
           slug: 'pwnagotchi',
           seoTitle: 'Pwnagotchi WiFi Auditor - Audit WiFi Automatisé | Alexis Metton',
           seoDescription: 'Dispositif portable d\'audit WiFi avec plateforme d\'analyse web. Capture passive automatisée de handshakes WPA et interface d\'analyse configurable.',
           description: `
               <div class="row g-4 mt-2">
                   <div class="col-12">
                       <h2 class="fw-medium" style="color: rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); padding-bottom: 10px;">Audit WiFi Automatisé avec IA</h2>
                       <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Pwnagotchi WiFi Auditor & Analyzer</strong> est un projet complet de cybersécurité combinant un dispositif portable d'audit WiFi et une plateforme d'analyse web avancée. Ce projet s'inspire du célèbre Pwnagotchi tout en apportant une dimension analytique configurable pour l'évaluation de la robustesse des réseaux WiFi.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">I. Contexte et Objectifs</h3>
                       <p style="color: rgb(0, 0, 0);">Dans un contexte où la sécurité des réseaux WiFi devient critique, ce projet répond au besoin d'outils d'audit avec capture automatisée et analyse configurable. Il combine la capture passive automatisée de handshakes WPA avec une interface d'analyse personnalisable pour identifier les vulnérabilités potentielles dans les mots de passe WiFi, contribuant ainsi à l'amélioration de la posture de sécurité globale.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">II. Architecture Technique</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Composant Hardware (Pwnagotchi)</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Matériel :</strong> Raspberry Pi Zero W, écran e-Ink Waveshare_4 2.13", batterie LiPo (8h+ d'autonomie), carte microSD 32GB</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Logiciels embarqués :</strong> Pwnagotchi (IA autonome)</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Fonctionnalités :</strong> Capture passive automatisée, interface minimaliste, gestion d'énergie optimisée, stockage local sécurisé</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Composant Software (Analyzer Web)</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Backend :</strong> Flask 2.3.3, Python 3.11, architecture RESTful, gestion asynchrone des tâches</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Frontend :</strong> Interface web responsive</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Outils d'analyse :</strong> Hashcat (GPU/CPU)</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Infrastructure :</strong> Docker containerisation</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">III. Fonctionnalités Avancées</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Capture et Collecte</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Capture passive automatisée de handshakes WPA/WPA2/WPA3 (sans intervention)</li>
                           <li style="color: rgb(0, 0, 0);">Interface e-Ink affichant statistiques en temps réel (réseaux détectés, handshakes capturés, statut IA)</li>
                           <li style="color: rgb(0, 0, 0);">Stockage sécurisé avec chiffrement des données sensibles</li>
                           <li style="color: rgb(0, 0, 0);">Export automatique au format .pcapng pour compatibilité maximale</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Analyse et Évaluation</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Interface web intuitive pour l'upload manuel et l'analyse des captures</li>
                           <li style="color: rgb(0, 0, 0);">Support multi-formats : PCAP, CAP, HCCAPX, HC22000</li>
                           <li style="color: rgb(0, 0, 0);">Attaques par dictionnaire configurables avec progression temps réel</li>
                           <li style="color: rgb(0, 0, 0);">Dictionnaires intégrés : RockYou (14M), Top 10M</li>
                           <li style="color: rgb(0, 0, 0);">API REST pour intégration avec d'autres outils</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Sécurité et Conformité</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Isolation Docker complète pour la sécurité</li>
                           <li style="color: rgb(0, 0, 0);">Logging et audit de toutes les activités</li>
                           <li style="color: rgb(0, 0, 0);">Conformité aux bonnes pratiques de cybersécurité</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">IV. Technologies et Compétences Développées</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Développement Python :</strong> Flask, Scapy, threading, subprocess, API REST</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">DevOps :</strong> Docker, Docker Compose, conteneurisation, déploiement</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Cybersécurité :</strong> Protocoles WiFi, cryptographie, outils de pentest, méthodologies d'audit</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Web Development :</strong> HTML5, CSS3, JavaScript,responsive design</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Systèmes embarqués :</strong> Raspberry Pi, Linux, gestion d'énergie, interfaces hardware</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">V. Impact et Résultats</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Capture automatisée des handshakes WiFi avec interface d'analyse configurable</li>
                           <li style="color: rgb(0, 0, 0);">Interface utilisateur intuitive réduisant la courbe d'apprentissage</li>
                           <li style="color: rgb(0, 0, 0);">Architecture scalable permettant l'ajout de nouveaux outils d'analyse</li>
                           <li style="color: rgb(0, 0, 0);">Documentation complète et guides d'utilisation pour la communauté</li>
                           <li style="color: rgb(0, 0, 0);">Respect des standards éthiques et légaux en cybersécurité</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VI. Aspects Éducatifs et Professionnels</h3>
                       <p style="color: rgb(0, 0, 0);">Ce projet démontre une maîtrise approfondie des concepts de cybersécurité, du développement full-stack, et de l'architecture système. Il illustre la capacité à concevoir des solutions complètes intégrant hardware et software, tout en respectant les contraintes éthiques et légales du domaine de la sécurité informatique.</p>
                   </div>
                    <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">Dépôt GitHub</h3>
                       <p style="color: rgb(0, 0, 0);"><a href="https://github.com/AlexisMetton/Pwnagotchi-Analyzer" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">github.com/AlexisMetton/Pwnagotchi-Analyzer</a></p>
                       <div style="background: rgb(242, 245, 248); border: 1px solid rgb(0, 0, 0); padding: 20px; border-radius: 6px; margin-top: 30px;">
                           <p style="color: rgb(0, 0, 0); font-weight: 500; margin: 0; text-align: center;">Le Pwnagotchi WiFi Auditor représente l'aboutissement d'un projet complet intégrant hardware et software pour l'audit de sécurité WiFi. Cette solution démontre l'importance de la capture automatisée et de l'interface utilisateur configurable dans les outils de cybersécurité modernes.</p>
                       </div>
                   </div>
               </div>
           `,
           keywords: 'pwnagotchi, wifi audit, raspberry pi, pentest wifi, handshake, ia',
           category: 'Cybersécurité',
           services: 'Audit WiFi, Hardware Hacking, IA',
           client: 'Projet personnel',
           duration: '1 semaine',
           date: 'Mai 01, 2025',
           postedBy: 'Alexis Metton',
           imageSrc: PwnagotchiImg,
           mainImage: PwnagotchiImg,
           categories: [
               { name: 'WiFi Audit' },
               { name: 'Raspberry Pi' },
               { name: 'Hardware' },
               { name: 'IA' }
           ],
           images: [
               { image: PwnaImage1 },
               { image: PwnaImage2 },
               { image: PwnaImage3 },
           ]
       },
       {
           projectTitle: 'Scroll Motion Pro - Plugin WordPress',
           slug: 'scroll-motion-pro',
           seoTitle: 'Scroll Motion Pro - Plugin WordPress Animations | Alexis Metton',
           seoDescription: 'Plugin WordPress pour animations de scroll avec éditeur visuel GrapesJS. Extraction de frames optimisée, système de licences, etc.',
           description: `
               <div class="row g-4 mt-2">
                   <div class="col-12">
                       <h2 class="fw-medium" style="color: rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); padding-bottom: 10px;">Plugin WordPress Premium - Animations de Scroll</h2>
                       <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Scroll Motion Pro</strong> est un plugin WordPress premium développé pour révolutionner les animations de défilement sur les sites web. Ce projet commercial combine un éditeur visuel GrapesJS intégré, un système d'extraction de frames optimisé et une gestion complète des licences pour offrir une solution complète aux développeurs et agences web.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">I. Contexte et Objectifs</h3>
                       <p style="color: rgb(0, 0, 0);">Développé en 2 mois avec un objectif commercial, Scroll Motion Pro répond au besoin d'améliorer l'expérience utilisateur des sites WordPress avec des effets visuels. L'objectif était de créer un plugin qui permette aux développeurs et agences web d'ajouter facilement des animations de scroll immersives sans compromettre les performances ou la compatibilité SEO.</p>
                       <p style="color: rgb(0, 0, 0);">Le projet vise à combler le fossé entre les animations WordPress traditionnelles et les attentes modernes des utilisateurs, en offrant une solution complète intégrant extraction de frames, éditeur visuel et optimisation automatique.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">II. Architecture Technique</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Stack de Développement</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Backend :</strong> PHP natif WordPress avec intégration complète à l'écosystème</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Frontend :</strong> HTML5, CSS3, JavaScript avec requêtes AJAX asynchrones</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Base de données :</strong> Enregistrement natif dans les tables WordPress</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Éditeur visuel :</strong> Intégration GrapesJS pour interface drag-and-drop</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Optimisations Performance</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Format d'image :</strong> Conversion automatique vers WebP pour réduction de taille</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Chargement :</strong> Lazy loading intelligent pour optimiser les performances</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Compatibilité :</strong> Support multi-thèmes et responsive design</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">III. Fonctionnalités Développées</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Système d'Extraction de Frames</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Extraction automatique de frames depuis GIFs et vidéos</li>
                           <li style="color: rgb(0, 0, 0);">Conversion optimisée vers format WebP</li>
                           <li style="color: rgb(0, 0, 0);">Gestion intelligente des ressources serveur</li>
                           <li style="color: rgb(0, 0, 0);">Support multi-formats d'entrée</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Interface d'Administration</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Éditeur visuel GrapesJS intégré (similaire à Elementor)</li>
                           <li style="color: rgb(0, 0, 0);">Interface drag-and-drop intuitive</li>
                           <li style="color: rgb(0, 0, 0);">Configuration avancée des animations</li>
                           <li style="color: rgb(0, 0, 0);">Prévisualisation en temps réel</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Système Commercial</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Gestion complète des licences (Essential/Professional)</li>
                           <li style="color: rgb(0, 0, 0);">Intégration paiement Stripe (e-commerce)</li>
                           <li style="color: rgb(0, 0, 0);">Système de validation des licences</li>
                           <li style="color: rgb(0, 0, 0);">Support client intégré</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">IV. Technologies et Compétences Développées</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Développement WordPress :</strong> Plugin development, hooks, API WordPress</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Frontend :</strong> JavaScript ES6+, AJAX, CSS3 animations, responsive design</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Backend :</strong> PHP 8+, MySQL, architecture plugin WordPress</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Intégration :</strong> GrapesJS, Stripe API, gestion des médias</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Performance :</strong> Optimisation WebP, lazy loading, compression d'images</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Commercial :</strong> Gestion des licences, e-commerce, support client</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">V. Défis et Solutions</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Performance :</strong> Optimisation des animations pour éviter l'impact sur le SEO et la vitesse de chargement</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Intégration GrapesJS :</strong> Adaptation de l'éditeur visuel pour l'écosystème WordPress</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Extraction de frames :</strong> Développement d'un système robuste pour GIFs et vidéos</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Compatibilité :</strong> Support multi-thèmes et responsive design</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Commercialisation :</strong> Mise en place du système de licences et paiements</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VI. Impact et Résultats</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Plugin WordPress premium avec modèle commercial viable</li>
                           <li style="color: rgb(0, 0, 0);">Solution complète d'animations de scroll pour développeurs et agences</li>
                           <li style="color: rgb(0, 0, 0);">Intégration réussie de GrapesJS dans l'écosystème WordPress</li>
                           <li style="color: rgb(0, 0, 0);">Système d'extraction de frames optimisé pour les performances</li>
                           <li style="color: rgb(0, 0, 0);">Expérience utilisateur améliorée avec interface drag-and-drop</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VII. Aspects Éducatifs et Professionnels</h3>
                       <p style="color: rgb(0, 0, 0);">Ce projet démontre une maîtrise du développement de plugins WordPress, combinant développement technique avancé, intégration d'outils tiers, optimisation des performances et commercialisation. Il illustre la capacité à créer des solutions commerciales viables dans l'écosystème WordPress.</p>
                       <div style="background: rgb(242, 245, 248); border: 1px solid rgb(0, 0, 0); padding: 20px; border-radius: 6px; margin-top: 30px;">
                           <p style="color: rgb(0, 0, 0); font-weight: 500; margin: 0; text-align: center;">Scroll Motion Pro représente l'aboutissement d'un projet commercial, démontrant la capacité à développer des solutions WordPress premium innovantes. Cette approche combine expertise technique, vision commerciale et compréhension des besoins du marché des développeurs web.</p>
                       </div>
                       <div class="col-12">
                           <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">Liens du Projet</h3>
                           <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Boutique E-commerce :</strong> <a href="https://scroll-motion-pro.com/" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">scroll-motion-pro.com</a></p>
                           <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Dépôt GitHub :</strong> <a href="https://github.com/AlexisMetton/Scroll-Motion-Release" target="_blank" style="color: rgb(0, 0, 0); text-decoration: underline;">github.com/AlexisMetton/Scroll---Motion</a></p>
                       </div>
                   </div>
               </div>
           `,
           keywords: 'wordpress plugin, scroll animation, css, développement web',
           category: 'Plugin',
           services: 'Développement WordPress, Animation CSS, UX',
           client: 'Commercialisation',
           duration: '2 mois',
           date: 'Nov 1, 2024',
           postedBy: 'Alexis Metton',
           imageSrc: ScrollMotionImg,
           mainImage: ScrollMotionImg,
           categories: [
               { name: 'WordPress' },
               { name: 'Plugin' },
               { name: 'CSS' },
               { name: 'Animation' }
           ],
           images: [
               { image: ScrollMotion1 },
               { image: ScrollMotion2 },
               { image: ScrollMotion3 },
               { image: ScrollMotion4 },
               { image: ScrollMotion5 },
               { image: ScrollMotion6 },
               { image: ScrollMotion7 },
               { image: ScrollMotion8 },
               { image: ScrollMotion9 },
               { image: ScrollMotion10 },
           ]
       },
       {
           projectTitle: 'Serveur Web Personnel + NAS',
           slug: 'serveur-perso',
           seoTitle: 'Serveur Web Personnel + NAS - Raspberry Pi | Alexis Metton',
           seoDescription: 'Infrastructure complète sur Raspberry Pi : hébergement web, stockage NAS, analytics Matomo et monitoring. Application ReactJS + Symfony.',
           description: `
               <div class="row g-4 mt-2">
                   <div class="col-12">
                       <h2 class="fw-medium" style="color: rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); padding-bottom: 10px;">Infrastructure complète - Raspberry Pi</h2>
                       <p style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Serveur Web Personnel + NAS</strong> est un projet d'infrastructure complète développé pendant ma formation Bac+3 pour héberger une application web de flashcards (ReactJS + Symfony) avec services annexes. Cette solution combine hébergement web, stockage NAS, analytics et monitoring sur une architecture Raspberry Pi optimisée.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">I. Contexte et Objectifs</h3>
                       <p style="color: rgb(0, 0, 0);">Dans le cadre de ma formation Bac+3, j'ai développé une application web de flashcards utilisant la méthode d'apprentissage par répétition espacée. Cette application combine ReactJS pour le frontend et Symfony pour l'API REST, nécessitant une infrastructure d'hébergement complète. Le choix du Raspberry Pi s'est imposé pour allier coût abordable, flexibilité technique et développement de compétences en administration système.</p>
                       <p style="color: rgb(0, 0, 0);">L'objectif était de créer une plateforme d'apprentissage collaborative permettant aux utilisateurs de créer, partager et réviser des flashcards sur divers sujets (langues, Histoire, Géographie, etc.), avec des fonctionnalités de quiz automatique et de suivi des progrès.</p>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">II. Architecture Technique</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Composant Hardware</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Serveur :</strong> Raspberry Pi 4 avec boîtier Argon EON pour refroidissement optimisé</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Stockage :</strong> Disque dur Seagate BarraCuda 4 To (3,5" SATA, 5400 tr/min, 256 Mo cache)</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Système :</strong> Carte microSD SanDisk 64GB pour le système d'exploitation</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Stack Technique</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Système :</strong> Raspbian en ligne de commande (headless)</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Serveur Web :</strong> Apache2 avec PHP 8.0</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Base de données :</strong> MySQL MariaDB avec phpMyAdmin</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Stockage :</strong> Samba pour le partage NAS</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Sécurité :</strong> SSL Let's Encrypt, ClamAV antivirus</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">III. Services Déployés</h3>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Application Web Flashcards</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Frontend ReactJS avec interface utilisateur intuitive</li>
                           <li style="color: rgb(0, 0, 0);">API REST Symfony pour la gestion des données</li>
                           <li style="color: rgb(0, 0, 0);">Système de flashcards personnalisables et partageables</li>
                           <li style="color: rgb(0, 0, 0);">Quiz automatique avec suivi des progrès</li>
                           <li style="color: rgb(0, 0, 0);">Interface collaborative pour partager des listes d'apprentissage</li>
                       </ul>
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(0, 0, 0);">Infrastructure Complémentaire</h4>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Matomo analytics pour le suivi des statistiques d'utilisation</li>
                           <li style="color: rgb(0, 0, 0);">NAS Samba avec 4 To de stockage partagé</li>
                           <li style="color: rgb(0, 0, 0);">Accès distant sécurisé via OpenVPN</li>
                           <li style="color: rgb(0, 0, 0);">Nom de domaine dynamique avec ddns.net</li>
                           <li style="color: rgb(0, 0, 0);">Scripts automatisés de sauvegarde</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">IV. Technologies et Compétences Développées</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Administration Système :</strong> Linux Raspbian, gestion des services, configuration réseau</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Développement Web :</strong> ReactJS, Symfony, PHP 8, MySQL MariaDB</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Infrastructure :</strong> Apache2, Samba, SSL/TLS, OpenVPN</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Sécurité :</strong> ClamAV, Let's Encrypt, configuration firewall</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Monitoring :</strong> Matomo analytics, scripts de sauvegarde automatisés</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">DevOps :</strong> Déploiement continu, gestion des versions, maintenance système</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">V. Défis et Solutions</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Performance :</strong> Optimisation d'Apache2 et MySQL pour les ressources limitées du Pi4</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Sécurité :</strong> Configuration SSL/TLS, protection contre les attaques web, antivirus ClamAV</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Accès distant :</strong> Configuration OpenVPN pour un accès sécurisé depuis l'extérieur</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Sauvegarde :</strong> Scripts automatisés pour protéger les données critiques</li>
                           <li style="color: rgb(0, 0, 0);"><strong style="color: rgb(0, 0, 0);">Maintenance :</strong> Gestion des mises à jour système et des services</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VI. Impact et Résultats</h3>
                       <ul class="list-circle">
                           <li style="color: rgb(0, 0, 0);">Infrastructure fonctionnelle pendant 2 ans sans interruption majeure</li>
                           <li style="color: rgb(0, 0, 0);">Application de flashcards opérationnelle avec utilisateurs actifs</li>
                           <li style="color: rgb(0, 0, 0);">Acquisition de compétences solides en administration système Linux</li>
                           <li style="color: rgb(0, 0, 0);">Maîtrise du déploiement d'applications web complètes</li>
                           <li style="color: rgb(0, 0, 0);">Compréhension approfondie des enjeux de sécurité et de performance</li>
                       </ul>
                   </div>
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(0, 0, 0); margin-top: 30px;">VII. Aspects Éducatifs et Professionnels</h3>
                       <p style="color: rgb(0, 0, 0);">Ce projet a constitué une expérience complète en infrastructure web, combinant développement d'application, administration système et gestion de services. Il démontre la capacité à concevoir et maintenir une solution technique complète, de la conception à la mise en production, en passant par la sécurité et la maintenance opérationnelle.</p>
                       <div style="background: rgb(242, 245, 248); border: 1px solid rgb(0, 0, 0); padding: 20px; border-radius: 6px; margin-top: 30px;">
                           <p style="color: rgb(0, 0, 0); font-weight: 500; margin: 0; text-align: center;">Ce serveur web personnel représente une expérience complète en infrastructure technique, démontrant la capacité à concevoir, déployer et maintenir une solution web complète sur architecture embarquée. Cette approche pragmatique illustre l'importance de l'optimisation et de la robustesse dans les environnements contraints.</p>
                       </div>
                   </div>
               </div>
           `,
           keywords: 'raspberry pi, serveur web, nas, matomo, hébergement, ssl',
           category: 'Infrastructure',
           services: 'Administration Système, Hébergement, Monitoring',
           client: 'Formation Bac+3',
           duration: '1 an et demi',
           date: 'Dec 5, 2022',
           postedBy: 'Alexis Metton',
           imageSrc: ServeurPersoImg,
           mainImage: ServeurPersoImg,
           categories: [
               { name: 'Raspberry Pi' },
               { name: 'Serveur Web' },
               { name: 'NAS' },
               { name: 'Matomo' }
           ],
           images: [
               { image: ServeurPersoEM1 },
               { image: ServeurPersoEM2 },
           ]
       }
   ];
// --- FIN DU TABLEAU PROJECTS ---

// Trie les projets du plus récent au plus ancien
projects.sort((a, b) => {
  function parseDate(str) {
    const [mois, jour, annee] = str.replace(',', '').split(' ');
    const moisEn = moisFrancais[mois] || mois;
    return new Date(`${moisEn} ${jour}, ${annee}`);
  }
  return parseDate(b.date) - parseDate(a.date);
});

export const portfolioData = {
   mainData: {
       title: "Portfolio",
       title2: "Mes Projets Techniques",
       description: "Découvrez mes projets personnels en cybersécurité, développement et infrastructure. De l'audit de conformité ANSSI aux laboratoires Red Team."
   },
   navigationList: [
       {
           title: "Cybersécurité",
           classes: "Cybersécurité",
           dataFilter: ".Cybersécurité"
       },
       {
           title: "Plugin",
           classes: "Plugin",
           dataFilter: ".Plugin"
       },
       {
           title: "Infrastructure",
           classes: "Infrastructure",
           dataFilter: ".Infrastructure"
       },
       {
        title: "Web3",
        classes: "Web3",
        dataFilter: ".Web3"
    }
   ],
   projects,
};