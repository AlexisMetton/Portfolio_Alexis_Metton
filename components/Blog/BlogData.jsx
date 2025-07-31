import PostImage1 from '@/public/images/blog/incident_response.png';
import PostImage2 from '@/public/images/blog/compliance_anssi.png';
import PostImage3 from '@/public/images/blog/secure_lab.png';

export const blogData = {
   mainData: {
       title: "Blog",
       title2: "Articles Cybersécurité",
       description: "Retours d'expérience, guides techniques et analyses sur la cybersécurité appliquée au développement web et aux infrastructures"
   },
   posts: [
       {
           title: 'Incident Response : Gérer une Cyberattaque en Agence Web',
           slug: 'incident-response-agence-web',
           description: 'Guide pratique pour gérer une cyberattaque en agence web : plan de réponse, communication client, conformité RGPD et retour d\'expérience terrain.',
           keywords: 'incident response, cyberattaque, agence web, RGPD, forensics, plan de crise',
           category: 'Cybersécurité',
           date: 'Jan 15, 2025',
           postedBy: 'Alexis Metton',
           image: PostImage1,
           content: `
               <div class="row g-4 mt-2">
                   <div class="col-12">
                       <h2 class="fw-medium" style="color: rgb(28, 30, 32); border-bottom: 2px solid rgb(28, 30, 32); padding-bottom: 10px;">La Réalité des Cybermenaces pour les Agences</h2>
                       <p style="color: rgb(28, 30, 32);">Les agences de communication web sont devenues des cibles privilégiées des cybercriminels. Gérant de multiples sites clients, stockant des données sensibles et souvent sous-équipées en sécurité, elles représentent un maillon faible dans l'écosystème digital. En 3 ans d'expérience chez itiConseil, j'ai observé une augmentation significative des tentatives d'intrusion et des incidents de sécurité.</p>
                       <p style="color: rgb(28, 30, 32);">Les spécificités des agences web créent des défis uniques : multiplicité des projets clients, accès distant fréquent, budgets sécurité limités et pression temporelle constante. Un incident de sécurité peut non seulement compromettre l'agence elle-même, mais également impacter tous ses clients, créant un effet domino dévastateur pour la réputation et la viabilité économique.</p>
                   </div>
                   
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(28, 30, 32); margin-top: 30px;">I. Plan de Réponse aux Incidents (PRI)</h3>
                       <p style="color: rgb(28, 30, 32);">Un Plan de Réponse aux Incidents efficace repose sur quatre phases distinctes :</p>
                       
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(28, 30, 32);">1. Préparation</h4>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);">Constitution d'une équipe d'intervention (développeur senior, responsable technique, direction)</li>
                           <li style="color: rgb(28, 30, 32);">Définition des rôles et responsabilités de chacun</li>
                           <li style="color: rgb(28, 30, 32);">Mise en place d'outils de monitoring (logs centralisés, alertes automatiques)</li>
                           <li style="color: rgb(28, 30, 32);">Création de playbooks pour les incidents courants</li>
                           <li style="color: rgb(28, 30, 32);">Tests réguliers du plan (simulations d'incident)</li>
                       </ul>
                       
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(28, 30, 32);">2. Détection et Analyse</h4>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);">Monitoring 24/7 avec alertes SMS/email</li>
                           <li style="color: rgb(28, 30, 32);">Analyse comportementale des accès (connexions inhabituelles, volumes de données)</li>
                           <li style="color: rgb(28, 30, 32);">Vérification d'intégrité des fichiers critiques</li>
                           <li style="color: rgb(28, 30, 32);">Corrélation des événements de sécurité</li>
                       </ul>
                       
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(28, 30, 32);">3. Outils Forensics Essentiels</h4>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Wireshark</strong> : Analyse de trafic réseau en temps réel</li>
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Autopsy</strong> : Investigation numérique sur disques</li>
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">YARA</strong> : Détection de malware par signatures</li>
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Volatility</strong> : Analyse mémoire RAM</li>
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Log2timeline</strong> : Reconstruction de timeline</li>
                       </ul>
                   </div>
                   
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(28, 30, 32); margin-top: 30px;">II. Scénarios Concrets d'Incidents</h3>
                       
                       <h4 class="titre-cinq fw-medium" style="color: rgb(28, 30, 32);">Scenario 1 : Compromission Site Client WordPress</h4>
                       <p style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Situation :</strong> Un site e-commerce client présente des redirections malveillantes vers des sites de phishing.</p>
                       <p style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Actions immédiates :</strong></p>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);">Isolation du serveur compromis</li>
                           <li style="color: rgb(28, 30, 32);">Analyse des logs d'accès (identification du vecteur d'attaque)</li>
                           <li style="color: rgb(28, 30, 32);">Scan antimalware complet avec MalwareBytes</li>
                           <li style="color: rgb(28, 30, 32);">Vérification intégrité base de données</li>
                           <li style="color: rgb(28, 30, 32);">Restauration depuis sauvegarde propre</li>
                           <li style="color: rgb(28, 30, 32);">Durcissement sécurité (mise à jour, changement mots de passe)</li>
                       </ul>
                       
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(28, 30, 32);">Scenario 2 : Attaque Ransomware</h4>
                       <p style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Situation :</strong> Chiffrement des serveurs de développement suite à un email de phishing.</p>
                       <p style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Réponse coordonnée :</strong></p>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);">Déconnexion immédiate du réseau</li>
                           <li style="color: rgb(28, 30, 32);">Identification de la souche (RaaS ou custom)</li>
                           <li style="color: rgb(28, 30, 32);">Vérification intégrité des sauvegardes</li>
                           <li style="color: rgb(28, 30, 32);">Évaluation coût/bénéfice (paiement vs restauration)</li>
                           <li style="color: rgb(28, 30, 32);">Communication transparente avec clients affectés</li>
                       </ul>
                       
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(28, 30, 32);">Scenario 3 : Fuite de Données Personnelles</h4>
                       <p style="color: rgb(28, 30, 32);"><strong>Situation :</strong> Base de données clients exposée via une faille SQL injection.</p>
                       <p style="color: rgb(28, 30, 32);"><strong>Procédure RGPD :</strong></p>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);">Documentation précise de l'incident (qui, quoi, quand, comment)</li>
                           <li style="color: rgb(28, 30, 32);">Évaluation du risque pour les personnes concernées</li>
                           <li style="color: rgb(28, 30, 32);">Notification CNIL sous 72h si risque élevé</li>
                           <li style="color: rgb(28, 30, 32);">Communication aux personnes concernées sous 1 mois</li>
                           <li style="color: rgb(28, 30, 32);">Mesures de mitigation (surveillance fraude, changement mots de passe)</li>
                       </ul>
                   </div>
                   
                   <div class="col-12">
                       <h3 class="fw-medium" style="color: rgb(28, 30, 32); margin-top: 30px;">III. Communication et Conformité</h3>
                       
                       <h4 class="titre-cinq fw-medium" style="color: rgb(28, 30, 32);">Notification Clients</h4>
                       <p style="color: rgb(28, 30, 32);">La communication doit être rapide, transparente et rassurante :</p>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);">Appel direct pour les clients critiques</li>
                           <li style="color: rgb(28, 30, 32);">Email détaillé avec timeline et actions correctives</li>
                           <li style="color: rgb(28, 30, 32);">Points réguliers pendant la résolution</li>
                           <li style="color: rgb(28, 30, 32);">Rapport post-incident avec mesures préventives</li>
                       </ul>
                       
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(28, 30, 32);">Obligations Légales RGPD</h4>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Notification autorité :</strong> CNIL sous 72h si violation données personnelles</li>
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Notification personnes :</strong> Dans les meilleurs délais si risque élevé</li>
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Documentation :</strong> Registre des violations obligatoire</li>
                           <li style="color: rgb(28, 30, 32);"><strong style="color: rgb(28, 30, 32);">Coopération :</strong> Assistance complète aux enquêtes</li>
                       </ul>
                   </div>
                   
                   <div class="col-12">
                        <h3 class="fw-medium" style="color: rgb(28, 30, 32); margin-top: 30px;">IV. Amélioration Continue</h3>
                       
                       <h4 class="titre-cinq fw-medium" style="color: rgb(28, 30, 32);">Post-Mortem et Leçons Apprises</h4>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);">Réunion de débriefing dans les 48h</li>
                           <li style="color: rgb(28, 30, 32);">Analyse des causes racines (5 Whys)</li>
                           <li style="color: rgb(28, 30, 32);">Identification des améliorations processus</li>
                           <li style="color: rgb(28, 30, 32);">Mise à jour du plan de réponse</li>
                       </ul>
                       
                       <h4 class="titre-cinq fw-medium mt-4" style="color: rgb(28, 30, 32);">Renforcement Préventif</h4>
                       <ul class="list-circle" style="color: rgb(28, 30, 32);">
                           <li style="color: rgb(28, 30, 32);">Audit sécurité complet post-incident</li>
                           <li style="color: rgb(28, 30, 32);">Mise à niveau infrastructure et outils</li>
                           <li style="color: rgb(28, 30, 32);">Révision des accès et privilèges</li>
                           <li style="color: rgb(28, 30, 32);">Tests d'intrusion réguliers</li>
                       </ul>
                       
                       <div style="background: rgb(242, 245, 248); border: 1px solid rgb(28, 30, 32); padding: 20px; border-radius: 6px; margin-top: 30px;">
                           <p style="color: rgb(28, 30, 32); font-weight: 500; margin: 0; text-align: center;">La gestion d'incident en agence web requiert préparation, réactivité et transparence. L'investissement dans un plan de réponse robuste et des outils adaptés est rentabilisé dès le premier incident évité ou maîtrisé efficacement.</p>
                       </div>
                   </div>
               </div>
           `,
           images: [
               // { image: Image1 },
               // { image: Image2 },
           ],
           tags: [
               { name: 'Incident Response' },
               { name: 'Cybersécurité' },
               { name: 'RGPD' },
               { name: 'Agence Web' },
               { name: 'Forensics' }
           ]
       }, 
       // {
       //     title: 'Red Team vs Blue Team : Créer son Laboratoire de Cybersécurité',
       //     slug: 'red-blue-team-laboratoire-cybersecurite',
       //     description: 'Guide complet pour créer un laboratoire de cybersécurité personnel avec Kubernetes : architecture, outils Red/Blue Team et retour d\'expérience.',
       //     keywords: 'red team, blue team, laboratoire, cybersécurité, kubernetes, pentest',
       //     category: 'Infrastructure',
       //     date: 'Juil 05, 2025',
       //     postedBy: 'Alexis Metton',
       //     image: PostImage3,
       //     content: '<div class="row g-4 mt-2"><div class="col-12"> <p class="titre-quatre fw-medium" style="color: rgb(28, 30, 32);">Article en cours de rédaction</p> <p style="color: rgb(28, 30, 32);">Cet article présentera la création d\'un laboratoire Red/Blue Team complet sur infrastructure Kubernetes.</p> </div></div>',
       //     images: [],
       //     tags: [
       //         { name: 'Red Team' },
       //         { name: 'Blue Team' },
       //         { name: 'Kubernetes' },
       //         { name: 'Lab' }
       //     ]
       // },
   ],
};