// CertificationsData.js (renommé depuis TestimonialData.js)
import CertGoogle1 from '@/public/images/certifications/deploy-kubernetes-applications-on-google-cloud-skil.png';
import CertGoogle2 from '@/public/images/certifications/manage-kubernetes-in-google-cloud-skill-badge.png';
import CertRGPD from '@/public/images/certifications/certificat_rgpd.png';

export const certificationsData = {
    mainData: {
        title: "Certifications",
        title2: "Expertise Certifiée"
    },
    certifications: [
        {
            name: "Deploy Kubernetes Applications on Google Cloud",
            jobTitle: "Google Cloud Platform",
            description: "Certification en déploiement et gestion d'applications containerisées sur GKE. Maîtrise de Kubernetes, Docker, CI/CD et Infrastructure as Code.",
            avatar: CertGoogle1,
            date: "Avril 2025",
            skills: ["Kubernetes", "GKE", "Docker", "CI/CD", "IaC"]
        },
        {
            name: "Manage Kubernetes in Google Cloud",
            jobTitle: "Google Cloud Platform", 
            description: "Expertise en administration de clusters Kubernetes haute disponibilité, conteneurisation avancée et DevOps sur Google Cloud Platform.",
            avatar: CertGoogle2,
            date: "Novembre 2024",
            skills: ["Kubernetes", "Cloud Computing", "DevOps", "Haute Disponibilité"]
        },
        {
            name: "Certification RGPD",
            jobTitle: "Commission Nationale de l'Informatique et des Libertés",
            description: "Formation complète sur la protection des données personnelles, conformité RGPD, sécurité des données et Privacy by Design.",
            avatar: CertRGPD,
            date: "Janvier 2024",
            skills: ["RGPD", "Protection des données", "Conformité", "Privacy by Design"]
        }
    ]
};