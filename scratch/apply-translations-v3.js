const fs = require('fs');

const updateTranslations = (lang) => {
  const filePath = `./messages/${lang}.json`;
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return;
  }

  if (lang === 'en') {
    // Hero Buttons
    data.Hero.share_btn = "Share Your Concern";
    data.Hero.volunteer_btn = "Volunteer";
    data.Hero.support_btn = "Support the Campaign";
    data.Hero.meet_btn = "Meet Muyiwa";
    
    // WhyRunning Button
    data.WhyRunning.read_story_btn = "Read My Full Story";
    
    // NewsEvents titles
    data.NewsEvents.voting_info = "Voting Information";
    data.NewsEvents.key_dates = "Key Election Dates";
  }

  if (lang === 'fr') {
    // Hero Buttons
    data.Hero.share_btn = "Partager votre préoccupation";
    data.Hero.volunteer_btn = "Bénévolat";
    data.Hero.support_btn = "Soutenir la campagne";
    data.Hero.meet_btn = "Rencontrez Muyiwa";
    data.Hero.eyebrow = "Muyiwa Ojo pour le Quartier 22 — Riverside South & Findlay Creek";
    data.Hero.desc1 = "Votre voisin dans le quartier 22 — à vos portes, dans vos rues, et à votre écoute en premier. Candidat au conseil municipal d'Ottawa pour s'assurer que les résidents ont une voix forte à l'hôtel de ville.";
    
    // WhyRunning Button
    data.WhyRunning.read_story_btn = "Lire mon histoire complète";
    data.WhyRunning.quote = "Le quartier 22 croît rapidement et les résidents méritent un conseiller présent, pragmatique et responsable. J'ai frappé à des milliers de portes, écouté les résidents, siégé au conseil d'administration de l'Association communautaire de Findlay Creek et travaillé avec des organismes communautaires. Je me concentrerai sur : Des rues plus sûres. Un meilleur transport en commun. De meilleures opportunités pour les jeunes. Des infrastructures qui suivent le rythme de la croissance.";
    
    // NewsEvents titles
    data.NewsEvents.voting_info = "Informations sur le vote";
    data.NewsEvents.key_dates = "Dates électorales clés";

    data.NewsEvents.e1_date = "26 oct. 2026";
    data.NewsEvents.e1_title = "Jour du scrutin";
    data.NewsEvents.e1_desc = "Les bureaux de vote seront ouverts de 10 h à 20 h.";
    data.NewsEvents.e2_date = "16 oct. 2026";
    data.NewsEvents.e2_title = "Jour de vote par anticipation";
    data.NewsEvents.e2_desc = "Les bureaux de vote sont ouverts de 10 h à 20 h.";
    data.NewsEvents.e3_date = "1 - 4 oct. 2026";
    data.NewsEvents.e3_title = "Jours de vote par anticipation spéciaux";
    data.NewsEvents.e3_desc = "Les bureaux de vote sont ouverts de 10 h à 20 h.";

    // Priorities
    data.Priorities.p1_desc = "Rendre le quartier 22 plus sûr pour les familles, les piétons, les cyclistes et les conducteurs en luttant contre les excès de vitesse, en améliorant la sécurité routière, en renforçant l'éclairage public et en investissant dans des parcs, sentiers et espaces publics plus sûrs.";
    data.Priorities.p2_title = "Autonomisation des jeunes et opportunités d'avenir";
    data.Priorities.p2_desc = "Donner aux jeunes des occasions pratiques de bâtir l'avenir — par l'entremise des STIM et de l'IA, des arts et de la créativité, de l'entrepreneuriat, du leadership, du mentorat, des métiers spécialisés et des emplois d'été, en partenariat avec les écoles, les entreprises et les organismes communautaires.";
    data.Priorities.p2_quote = "Les jeunes ne doivent pas seulement être préparés pour l'avenir — ils doivent avoir l'opportunité de le construire.";
    data.Priorities.p3_desc = "Plaider pour un service de transport en commun fiable et des solutions de circulation pratiques qui réduisent la congestion, améliorent la connectivité et répondent aux défis quotidiens de transport auxquels sont confrontés les résidents.";
    data.Priorities.p4_title = "Des infrastructures qui suivent le rythme de la croissance";
    data.Priorities.p4_desc = "Le quartier 22 croît rapidement. Les services municipaux et les infrastructures doivent suivre le rythme — qu'il s'agisse de parcs et d'installations récréatives, de sentiers pédestres et cyclables, de services quotidiens, et d'une représentation plus forte à l'hôtel de ville.";

    data.Priorities.p1_action = "Ce que cela signifie : Je travaillerai avec le personnel de la Ville et la police d'Ottawa pour mettre en œuvre des mesures de modération de la circulation dans les zones à haut risque, je plaiderai pour un meilleur éclairage dans nos parcs et je veillerai à ce que les passages pour piétons soient plus sûrs pour nos enfants et nos aînés.";
    data.Priorities.p2_action = "Ce que cela signifie : Je soutiendrai un Conseil consultatif des jeunes du quartier 22, j'établirai des partenariats avec des entreprises locales pour le mentorat et les emplois d'été, et je plaiderai pour des espaces communautaires qui soutiennent les programmes STIM, artistiques et de leadership.";
    data.Priorities.p3_action = "Ce que cela signifie : Je plaiderai pour une meilleure fiabilité d'OC Transpo, je proposerai des solutions aux goulots d'étranglement de la circulation dans nos quartiers et je veillerai à ce que les résidents disposent d'options de transport pratiques.";
    data.Priorities.p4_action = "Ce que cela signifie : J'exigerai que notre quartier reçoive sa juste part du financement des infrastructures, je donnerai la priorité à de nouveaux parcs et installations de loisirs, et je veillerai à ce que les services essentiels soient en place avant la construction de nouveaux développements.";

    // CommunityConnection
    if (data.CommunityConnection) {
      data.CommunityConnection.d4 = "5 000 accroche-portes distribués avec un sondage communautaire pour recueillir les commentaires des résidents qui ont contribué à éclairer les priorités de la campagne.";
      data.CommunityConnection.d1 = "Plus de 5 000 portes visitées depuis juin 2026 à travers Riverside South et Findlay Creek — écouter avant de prendre des engagements de plateforme.";
      data.CommunityConnection.d5 = "Accueillir les résidents du quartier 22 qui veulent aider à bâtir une communauté plus forte.";
    }

    // DonationAppeal
    data.DonationAppeal.rebate_title = "REMISE DE CONTRIBUTION D'OTTAWA — LES DONATEURS ADMISSIBLES PEUVENT RECEVOIR UNE REMISE";
    data.DonationAppeal.rebate_desc = "Les donateurs admissibles peuvent recevoir une remise de contribution de la Ville d'Ottawa. L'admissibilité et les montants des remises sont assujettis au Programme de remises des contributions de la Ville d'Ottawa. Seules les personnes qui résident habituellement en Ontario peuvent contribuer. Contribution individuelle maximale : 1 200 $. Toutes les contributions font l'objet d'un reçu officiel en vertu de la Loi sur les élections municipales (Ontario).";
    data.DonationAppeal.r1_n = "Contribution admissible de 50 $ : remise de 25 $";

    // Running
    data.Running.stat2_val = "Un quartier 22";
    data.Running.stat2_lbl = "en croissance rapide";

    // What We Hearing
    data.WhatWeHearing = {
      "title": "Ce que nous entendons aux portes",
      "traffic_title": "Circulation et routes",
      "traffic_desc": "Les résidents s'inquiètent de la congestion, des excès de vitesse et de la sécurité routière.",
      "transit_title": "Transport en commun",
      "transit_desc": "Les résidents veulent un service fiable et de meilleures connexions.",
      "growth_title": "Croissance et infrastructures",
      "growth_desc": "Les résidents veulent que les services et les infrastructures de la ville suivent le rythme du développement.",
      "youth_title": "Jeunesse et familles",
      "youth_desc": "Les résidents veulent plus d'opportunités pour les jeunes.",
      "safety_title": "Sécurité communautaire",
      "safety_desc": "Les résidents veulent des rues, des parcs et des sentiers plus sûrs."
    };

    // Mission (Timeline)
    data.Mission.t_aug = "Des milliers de conversations avec les résidents";
    data.Mission.t_aug_title = "S'engager avec notre communauté";
    data.Mission.t_jul = "4 priorités de campagne";
    data.Mission.t_jul_title = "Bâties à partir de l'écoute";
    data.Mission.t_jun = "5 000 accroche-portes distribués";
    data.Mission.t_jun_title = "Avec des sondages communautaires";
    data.Mission.t_may = "Plus de 5 000 portes visitées";
    data.Mission.t_may_title = "Depuis juin 2026";
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${lang}.json`);
};

['en', 'fr'].forEach(updateTranslations);
