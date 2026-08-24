const fs = require('fs')

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'))
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'))

const translated = {
  "Mission": {
    "eyebrow": "Vision de Campagne",
    "word1": "Un",
    "word2": "quartier",
    "word3": "où",
    "word4": "chaque famille peut vivre en sécurité",
    "m1_title": "Communauté plus sûre",
    "m1_desc": "Un quartier où chaque résident se sent en sécurité pour marcher, faire du vélo et conduire.",
    "m2_title": "Transport fiable",
    "m2_desc": "Un transport en commun fréquent, fiable et qui vaut la peine de laisser la voiture à la maison.",
    "m3_title": "Opportunité pour les jeunes",
    "m3_desc": "Des programmes qui préparent la prochaine génération à un monde en évolution rapide.",
    "m4_title": "Infrastructure",
    "m4_desc": "Des services et installations qui suivent le rythme de la croissance rapide du quartier 22.",
    "m5_title": "Leadership responsable",
    "m5_desc": "Un conseiller qui écoute d'abord et qui est présent tous les jours.",
    "banner1": "La vision pour le quartier 22 est simple : un quartier où chaque famille peut vivre en sécurité, se déplacer librement, élever ses enfants avec des opportunités et accéder aux services et espaces qu'elle mérite.",
    "banner2": "",
    "join_btn": "Lire la vision",
    "t_aug": "Août 2026",
    "t_aug_title": "Début du porte-à-porte phase 2 — Bénévoles bienvenus",
    "t_jul": "Juillet 2026",
    "t_jul_title": "Plateforme annoncée — Construite à partir de 5 000 conversations",
    "t_jun": "1er Juin 2026",
    "t_jun_title": "Début du porte-à-porte à Riverside South et Findlay Creek",
    "t_may": "1er Mai 2026",
    "t_may_title": "Candidature déposée — Candidat au Conseil municipal du quartier 22"
  },
  "Priorities": {
    "eyebrow": "Priorités de Campagne",
    "title_top": "Construit à partir de conversations avec plus de",
    "title_bottom": "5 000 résidents du quartier 22",
    "desc": "Construit à partir de conversations avec plus de 5 000 résidents du quartier 22 à travers Riverside South et Findlay Creek.",
    "p1_title": "Des rues plus sûres et des quartiers plus forts",
    "p1_desc": "Rendre le quartier 22 plus sûr pour les familles, les piétons, les cyclistes et les conducteurs en luttant contre les excès de vitesse, en améliorant la sécurité routière, en renforçant l'éclairage public et en investissant dans des parcs, sentiers et espaces publics plus sûrs.",
    "p1_bullets": [
      "Modération de la circulation dans les zones à haut risque",
      "Intersections et passages pour piétons plus sûrs",
      "Amélioration de l'éclairage des sentiers et des parcs",
      "Partenariats renforcés pour la sécurité communautaire",
      "Itinéraires plus sûrs pour les enfants et les aînés"
    ],
    "p1_quote": "Chaque résident mérite de se sentir en sécurité dans son quartier, que ce soit en marchant vers l'école, en faisant du vélo vers un parc ou en conduisant vers la maison.",
    "p2_title": "Autonomisation des jeunes et opportunités d'avenir",
    "p2_desc": "Préparer la prochaine génération de leaders en créant des voies de réussite pour les jeunes grâce à l'éducation, l'innovation, le leadership, les arts, l'entrepreneuriat, les STIM, l'IA et les métiers spécialisés.",
    "p2_bullets": [
      "Conseil consultatif des jeunes du quartier 22",
      "Programmes de développement du leadership",
      "Opportunités d'apprentissage en STIM et en IA",
      "Initiatives artistiques et culturelles",
      "Programmes d'entrepreneuriat et de mentorat",
      "Partenariats scolaires et communautaires"
    ],
    "p2_quote": "Investir dans nos jeunes aujourd'hui permet de bâtir un quartier 22 plus fort, plus sûr et plus prospère pour demain.",
    "p3_title": "Meilleurs transports et solutions de circulation",
    "p3_desc": "Lutter pour un service de transport en commun fiable et des solutions de circulation pratiques qui réduisent la congestion, améliorent la connectivité et minimisent les perturbations dues aux travaux sur la rue Bank.",
    "p3_bullets": [
      "Service OC Transpo plus fiable",
      "De meilleures connexions aux centres de transport en commun",
      "Réduction des goulots d'étranglement de la circulation",
      "Amélioration de la mobilité des navetteurs",
      "Une planification qui permet aux gens de continuer à bouger"
    ],
    "p3_quote": "Les résidents devraient passer moins de temps coincés dans la circulation et plus de temps avec leurs familles.",
    "p4_title": "Une infrastructure qui suit la croissance",
    "p4_desc": "Veiller à ce que le quartier 22 reçoive sa juste part des investissements alors que Riverside South et Findlay Creek continuent de croître.",
    "p4_bullets": [
      "Installations de loisirs et parcs",
      "Terrains de sport et espaces communautaires",
      "Accès aux épiceries et commerces",
      "Infrastructures pour les piétons et les cyclistes",
      "Amélioration des services de la ville"
    ],
    "p4_quote": "La croissance doit être accompagnée des infrastructures et des services dont les résidents ont besoin pour prospérer."
  },
  "CommunityConnection": {
    "eyebrow": "Connexion Communautaire",
    "t1": "Porte-à-porte",
    "d1": "Plus de 5 000 portes atteintes à travers Riverside South et Findlay Creek depuis le 1er juin 2026 — écouter avant de prendre des engagements électoraux.",
    "t2": "Service au conseil de la FCCA",
    "d2": "A siégé au conseil d'administration de l'Association communautaire de Findlay Creek — une expérience directe de la gouvernance communautaire du quartier 22.",
    "t3": "Conseil de l'association",
    "d3": "Siège actuellement au conseil d'une association de circonscription — apportant une expérience organisationnelle et politique à la campagne.",
    "t4": "Sondage auprès des résidents",
    "d4": "5 000 accroche-portes distribués avec un sondage communautaire — les commentaires des résidents ont directement façonné la plateforme.",
    "t5": "Mobilisation des bénévoles",
    "d5": "Une équipe grandissante de bénévoles résidents du quartier 22 qui font du porte-à-porte et encouragent le vote pour le 26 octobre 2026.",
    "t6": "Réseaux sociaux",
    "d6": "Actif sur Facebook et Instagram — en contact quotidien avec les résidents du quartier 22 à travers Riverside South et Findlay Creek."
  },
  "NewsEvents": {
    "eyebrow": "Actualités et Événements"
  },
  "GetInvolved": {
    "title1": "Bénévolat",
    "desc1": "Inscrivez-vous pour faire du porte-à-porte, distribuer des dépliants, téléphoner ou aider lors des événements.",
    "title2": "Pancarte",
    "desc2": "Demandez une pancarte pour votre propriété à Riverside South ou Findlay Creek.",
    "title3": "Participer à un événement",
    "desc3": "Rejoignez les séances de porte-à-porte et les rassemblements communautaires dans tout le quartier 22.",
    "title4": "Faire passer le mot",
    "desc4": "Partagez nos publications, parlez-en à vos voisins et présentez Muyiwa à votre réseau.",
    "title5": "Rejoindre l'équipe",
    "desc5": "Devenez un ambassadeur de quartier — organisez des rencontres dans votre secteur.",
    "title6": "Faire un don",
    "desc6": "Les contributions font l'objet de reçus et sont admissibles au programme de remises de la ville d'Ottawa."
  },
  "DonationAppeal": {
    "why_matter_title": "POURQUOI LES DONS SONT IMPORTANTS",
    "why_matter_desc": "Chaque contribution finance le porte-à-porte, le matériel de campagne, les événements communautaires, les pancartes électorales et la publicité numérique — impliquant les résidents du quartier 22 dans cette campagne.",
    "rebate_title": "REMISE DE CONTRIBUTION D'OTTAWA — LES DONATEURS SONT REMBOURSÉS",
    "rebate_desc": "Seuls les individus qui résident habituellement en Ontario peuvent contribuer. Contribution individuelle maximale : 1 200 $. Toutes les contributions font l'objet d'un reçu officiel en vertu de la Loi sur les élections municipales (Ontario).",
    "col1": "Don",
    "col2": "Remise",
    "col3": "Coût net pour le donateur",
    "col4": "Notes",
    "r1_n": "La plupart des donateurs donnent à ce niveau",
    "r2_n": "Forte contribution individuelle",
    "r3_n": "Remise maximale atteinte",
    "r4_n": "Contribution maximale autorisée"
  },
  "Newsletter": {
    "fname": "Prénom",
    "lname": "Nom de famille",
    "email": "Adresse courriel",
    "postal": "Code postal",
    "cta": "Restez connecté — Rejoignez la campagne"
  },
  "Footer": {
    "final_message": "\"Le quartier 22 mérite un conseiller qui est présent, pragmatique, responsable et déterminé à servir chaque résident. Cette communauté est notre foyer. Construisons-la bien, ensemble.\"",
    "candidate_info": "Muyiwa Ojo · Candidat au Conseil municipal d'Ottawa · Quartier 22",
    "col1_title": "Liens rapides",
    "link_about": "Rencontrez Muyiwa",
    "link_priorities": "Priorités",
    "link_community": "Communauté",
    "link_news": "Actualités",
    "link_volunteer": "S'impliquer",
    "link_contact": "Contact",
    "col2_title": "Ressources",
    "link_donate": "Faites un don aujourd'hui",
    "link_lawn": "Demander une pancarte",
    "link_website": "Site officiel",
    "col3_title": "Nous contacter",
    "contact_phone": "343-576-0956",
    "contact_email": "info@muyiwaojo.ca",
    "copyright": "© 2026 Campagne Muyiwa Ojo. Tous droits réservés.",
    "paid_for": "Payé par Muyiwa Ojo Quartier 22",
    "privacy": "Politique de confidentialité",
    "terms": "Conditions de service",
    "disclaimer": "Autorisé par l'agent officiel de la campagne de Muyiwa Ojo · Quartier 22, Ottawa · Loi sur les élections municipales (Ontario)",
    "link_running": "Pourquoi je me présente",
    "final_msg": "Le quartier 22 mérite un conseiller qui est présent, pragmatique, responsable et déterminé à servir chaque résident. Cette communauté est notre foyer. Construisons-la bien, ensemble.",
    "legal": "Loi sur les élections municipales (Ontario)",
    "auth": "Autorisé par l'agent officiel de la campagne de Muyiwa Ojo · Quartier 22, Ottawa · Loi sur les élections municipales (Ontario)",
    "rights": "© 2026 Campagne Muyiwa Ojo · Payé par Muyiwa Ojo Quartier 22 · Autorisé par l'agent officiel"
  }
}

// Merge them
Object.keys(en).forEach(key => {
  if (!fr[key]) {
    fr[key] = {}
  }
  if (translated[key]) {
    Object.keys(translated[key]).forEach(subKey => {
      fr[key][subKey] = translated[key][subKey]
    })
  }
  // Fill any remaining missing keys directly from EN to prevent NextIntl errors
  Object.keys(en[key]).forEach(subKey => {
    if (!fr[key][subKey]) {
      fr[key][subKey] = en[key][subKey]
    }
  })
})

fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2))
console.log('fr.json updated successfully.')
