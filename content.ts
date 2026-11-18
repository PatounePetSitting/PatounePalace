export type Lang = 'fr' | 'en';

export const CONTACT = {
  phone: '+33 7 63 20 87 13',
  phoneHref: 'tel:+33763208713',
  whatsapp: 'https://wa.me/33763208713',
  whatsappNumber: '33763208713',
  email: 'contact@patounecoteazur.fr',
  instagram: 'https://www.instagram.com/patounenice',
};

export const IMG = {
  hero: '/img/hero-chat.png',
  sophie: '/img/sophie.jpg',
  gallery: [
    { src: '/img/chat-6.png', alt: { fr: 'Chat persan dans un fauteuil vert face à la baie de Cannes', en: 'Persian cat on a green armchair facing the bay of Cannes' } },
    { src: '/img/chat-1.png', alt: { fr: 'Chaton sur un canapé', en: 'Kitten on a sofa' } },
    { src: '/img/chat-2.png', alt: { fr: 'Chat tigré qui attend une friandise', en: 'Tabby cat waiting for a treat' } },
    { src: '/img/chat-3.png', alt: { fr: 'Chat roux au poil soyeux', en: 'Fluffy orange cat' } },
    { src: '/img/chat-4.png', alt: { fr: 'Maine Coon majestueux', en: 'Majestic Maine Coon' } },
    { src: '/img/chat-5.png', alt: { fr: 'Chat noir et blanc endormi sur une chaise', en: 'Black and white cat asleep on a chair' } },
  ],
};

export const ZONES = [
  'Nice', 'Monaco', 'Cannes', 'Saint-Jean-Cap-Ferrat', 'Beaulieu-sur-Mer', 'Villefranche-sur-Mer',
  'Cap-d\'Ail', 'Èze', 'Antibes', 'Mougins',
];

type Bi = { fr: string; en: string };

export const T = {
  nav: {
    services: { fr: 'Services & tarifs', en: 'Services & rates' } as Bi,
    about: { fr: 'À propos', en: 'About' } as Bi,
    reviews: { fr: 'Avis', en: 'Reviews' } as Bi,
    faq: { fr: 'FAQ', en: 'FAQ' } as Bi,
    contact: { fr: 'Réserver', en: 'Book' } as Bi,
    lang: { fr: 'EN', en: 'FR' } as Bi,
  },
  hero: {
    kicker: { fr: 'Cat sitting · Nice · Cannes · Monaco', en: 'Cat sitting · Nice · Cannes · Monaco' } as Bi,
    title: { fr: 'Partez l’esprit léger, les ronrons continuent', en: 'Travel light, the purrs go on' } as Bi,
    text: {
      fr: 'Votre chat reste chez lui, dans ses habitudes et sur son coussin préféré. Je viens le câliner, le nourrir, veiller sur lui, et vous envoie des nouvelles en photo à chaque visite.',
      en: 'Your cat stays home, in their routine and on their favourite cushion. I come to cuddle, feed and look after them, and send you photo news after every visit.',
    } as Bi,
    cta: { fr: 'Voir les tarifs', en: 'See rates' } as Bi,
    cta2: { fr: 'Demander des dates', en: 'Request dates' } as Bi,
    ctaEstimate: { fr: 'Estimer ma garde', en: 'Estimate my stay' } as Bi,
  },
  trust: [
    { icon: '🎓', title: { fr: 'Certifiée ACACED', en: 'ACACED certified' } as Bi, text: { fr: 'Attestation officielle pour les animaux de compagnie', en: 'Official French pet-care certificate' } as Bi },
    { icon: '🛡️', title: { fr: 'Assurée RC Pro', en: 'Liability insured' } as Bi, text: { fr: 'Responsabilité civile professionnelle GMF', en: 'Professional liability cover (GMF)' } as Bi },
    { icon: '📸', title: { fr: 'Photos chaque jour', en: 'Daily photos' } as Bi, text: { fr: 'Des nouvelles par WhatsApp à chaque visite', en: 'WhatsApp updates after every visit' } as Bi },
    { icon: '🤝', title: { fr: 'Toujours la même personne', en: 'Always the same person' } as Bi, text: { fr: 'Aucun intermédiaire, votre chat me connaît', en: 'No intermediary, your cat gets to know me' } as Bi },
  ],
  services: {
    eyebrow: { fr: 'Services', en: 'Services' } as Bi,
    from: { fr: 'dès', en: 'from' } as Bi,
    title: { fr: 'Trois façons de chouchouter votre chat', en: 'Three ways to pamper your cat' } as Bi,
    intro: { fr: 'Des formules simples pensées pour le bien-être des chats. Chaque visite inclut photos et nouvelles.', en: 'Simple plans designed around cat wellbeing. Every visit includes photos and news.' } as Bi,
    items: [
      {
        icon: '🏡',
        name: { fr: 'Visite à domicile', en: 'Home visit' } as Bi,
        price: '20 €',
        amount: 20,
        per: 'visit' as 'visit' | 'day',
        unit: { fr: '/ visite de 45 min', en: '/ 45-min visit' } as Bi,
        points: {
          fr: ['Nourriture, eau fraîche et litière', 'Câlins, jeux et brossage', 'Soins et médicaments si besoin', 'Photos envoyées après chaque visite'],
          en: ['Food, fresh water and litter', 'Cuddles, play and brushing', 'Care and medication if needed', 'Photos sent after every visit'],
        },
        popular: true,
      },
      {
        icon: '🛋️',
        name: { fr: 'Chat chez le pet sitter', en: 'Cat boarding' } as Bi,
        price: '25 €',
        amount: 25,
        per: 'day' as 'visit' | 'day',
        unit: { fr: '/ jour', en: '/ day' } as Bi,
        points: {
          fr: ['Accueil dans un cadre calme', 'Repas, litière et attention quotidienne', 'Idéal pour les longs séjours', 'Nouvelles et photos régulières'],
          en: ['Calm, cosy hosting', 'Meals, litter and daily attention', 'Ideal for longer stays', 'Regular news and photos'],
        },
      },
      {
        icon: '🔑',
        name: { fr: 'Garde à votre domicile', en: 'In-home sitting' } as Bi,
        price: '50 €',
        amount: 50,
        per: 'day' as 'visit' | 'day',
        unit: { fr: '/ jour', en: '/ day' } as Bi,
        points: {
          fr: ['Présence prolongée chez vous', 'Parfait pour plusieurs chats', 'Vigilance sur la maison', 'Compte rendu quotidien'],
          en: ['Extended presence at your home', 'Perfect for several cats', 'Keeping an eye on your home', 'Daily report'],
        },
      },
    ],
    note: {
      fr: 'Tarifs indicatifs, tout inclus. Une rencontre de présentation est proposée avant la première garde.',
      en: 'Indicative all-inclusive rates. A meet and greet is offered before the first stay.',
    } as Bi,
  },
  how: {
    eyebrow: { fr: 'Le parcours', en: 'The journey' } as Bi,
    title: { fr: 'De votre message au premier ronron', en: 'From your message to the first purr' } as Bi,
    steps: [
      { icon: '💬', title: { fr: 'Vous me contactez', en: 'You get in touch' } as Bi, text: { fr: 'Dates, ville, nombre de chats : un message suffit, je réponds vite.', en: 'Dates, city, number of cats: one message is enough, I reply fast.' } as Bi },
      { icon: '🧮', title: { fr: 'On cale le devis', en: 'We fix the quote' } as Bi, text: { fr: 'Je vous confirme la formule et le tarif, sans surprise.', en: 'I confirm the plan and the price, no surprises.' } as Bi },
      { icon: '🤝', title: { fr: 'On se rencontre', en: 'We meet' } as Bi, text: { fr: 'Je rencontre votre chat chez vous pour apprendre ses petites manies.', en: 'I meet your cat at home to learn their little quirks.' } as Bi },
      { icon: '🔑', title: { fr: 'Je prépare tout', en: 'I get ready' } as Bi, text: { fr: 'Clés, consignes, repas, traitement : tout est noté avant votre départ.', en: 'Keys, instructions, meals, treatment: everything is noted before you leave.' } as Bi },
      { icon: '📸', title: { fr: 'Je veille sur lui', en: 'I look after them' } as Bi, text: { fr: 'Visites ou garde selon la formule, avec photos et nouvelles à chaque passage.', en: 'Visits or sitting depending on the plan, with photos and news every time.' } as Bi },
      { icon: '🏠', title: { fr: 'Retrouvailles', en: 'Reunion' } as Bi, text: { fr: 'Vous rentrez, un chat serein vous attend. On refait ça quand vous voulez.', en: 'You come home to a calm cat. We can do it again whenever you like.' } as Bi },
    ],
  },
  estimate: {
    eyebrow: { fr: 'Simulateur', en: 'Estimator' } as Bi,
    title: { fr: 'Estimer ma garde', en: 'Estimate my stay' } as Bi,
    plan: { fr: 'Formule', en: 'Plan' } as Bi,
    qtyVisits: { fr: 'Nombre de visites', en: 'Number of visits' } as Bi,
    qtyDays: { fr: 'Nombre de jours', en: 'Number of days' } as Bi,
    total: { fr: 'Estimation', en: 'Estimate' } as Bi,
    note: { fr: 'Estimation indicative, confirmée lors de votre demande.', en: 'Indicative estimate, confirmed when you book.' } as Bi,
    cta: { fr: 'Réserver avec cette estimation', en: 'Book with this estimate' } as Bi,
  },
  more: {
    eyebrow: { fr: 'Pour aller plus loin', en: 'Going further' } as Bi,
    insta: { fr: 'Suivre les aventures sur Instagram', en: 'Follow the adventures on Instagram' } as Bi,
  },
  gallery: {
    eyebrow: { fr: 'Les pensionnaires', en: 'The guests' } as Bi,
    title: { fr: 'Des moustaches heureuses', en: 'Happy whiskers' } as Bi,
  },
  about: {
    title: { fr: 'Bonjour, je suis Sophie', en: 'Hi, I’m Sophie' } as Bi,
    text: [
      {
        fr: 'Franco-allemande, diplômée de l’ESSEC, j’ai travaillé comme juriste à Monaco puis dans l’événementiel de prestige avant de me consacrer aux animaux sur la Côte d’Azur.',
        en: 'French-German, ESSEC graduate, I worked as a lawyer in Monaco and then in premium events before dedicating myself to animals on the Riviera.',
      },
      {
        fr: 'Les chats n’aiment pas le changement : je privilégie donc des visites calmes, régulières et dans leur environnement, avec la rigueur d’un service professionnel.',
        en: 'Cats dislike change, so I focus on calm, regular visits in their own surroundings, with the rigour of a professional service.',
      },
      {
        fr: 'Je parle français, anglais et allemand.',
        en: 'I speak French, English and German.',
      },
    ] as Bi[],
  },
  reviews: {
    title: { fr: 'Ce que disent les propriétaires', en: 'What owners say' } as Bi,
    items: [
      {
        name: 'Sophie, Monaco Larvotto',
        cat: 'Aramis',
        text: {
          fr: 'Mon Persan Aramis est d’habitude très peureux, mais il adore ses visites quotidiennes ! Je pars l’esprit libre grâce aux photos reçues chaque matin.',
          en: 'My Persian cat Aramis is usually very shy, but he loves his daily visits! I travel with peace of mind thanks to the photos I get every morning.',
        } as Bi,
      },
      {
        name: 'Priscillia, Nice Cimiez',
        cat: 'Milo & Nala',
        text: {
          fr: 'Un service exceptionnel pour mes deux chats. La litière est impeccable, les bols nettoyés, et Milo a même eu son brossage quotidien. On sent une vraie passion pour les animaux.',
          en: 'An outstanding service for my two cats. The litter box is clean, bowls spotless, and Milo even got his daily brushing. You can feel a real passion for animals.',
        } as Bi,
      },
    ],
  },
  zones: {
    title: { fr: 'Zones desservies', en: 'Areas served' } as Bi,
    text: { fr: 'Je me déplace sur la Côte d’Azur et à Monaco :', en: 'I travel across the French Riviera and Monaco:' } as Bi,
  },
  faq: {
    title: { fr: 'Questions fréquentes', en: 'Frequently asked questions' } as Bi,
    items: [
      {
        q: { fr: 'Combien de fois par jour dois-je faire venir quelqu’un ?', en: 'How often should someone visit each day?' } as Bi,
        a: { fr: 'Pour un chat adulte en bonne santé, une visite par jour convient souvent pour un week-end ; au-delà de quelques jours, deux visites sont plus rassurantes. Je vous conseille selon votre chat.', en: 'For a healthy adult cat, one visit a day often works for a weekend; beyond a few days two visits are more reassuring. I will advise you based on your cat.' } as Bi,
      },
      {
        q: { fr: 'Et si mon chat est craintif ?', en: 'What if my cat is shy?' } as Bi,
        a: { fr: 'Nous commençons par une rencontre chez vous. J’avance au rythme du chat, sans le brusquer, et je vous donne des nouvelles à chaque visite.', en: 'We start with a meeting at your home. I go at the cat’s pace, never forcing contact, and I update you after every visit.' } as Bi,
      },
      {
        q: { fr: 'Pouvez-vous donner des médicaments ?', en: 'Can you give medication?' } as Bi,
        a: { fr: 'Oui, selon les consignes de votre vétérinaire. Précisez-le dans le formulaire pour que nous organisions les horaires.', en: 'Yes, following your vet’s instructions. Mention it in the form so we can plan the timings.' } as Bi,
      },
      {
        q: { fr: 'Êtes-vous assurée ?', en: 'Are you insured?' } as Bi,
        a: { fr: 'Oui, je dispose d’une assurance responsabilité civile professionnelle et du certificat ACACED.', en: 'Yes, I hold professional liability insurance and the ACACED certificate.' } as Bi,
      },
      {
        q: { fr: 'Comment réserver ?', en: 'How do I book?' } as Bi,
        a: { fr: 'Remplissez le formulaire ci-dessous : il prépare un message prêt à m’envoyer par WhatsApp ou par e-mail. Je réponds rapidement.', en: 'Fill in the form below: it prepares a ready-to-send message for WhatsApp or email. I reply quickly.' } as Bi,
      },
    ],
  },
  form: {
    title: { fr: 'Demander une garde', en: 'Request a stay' } as Bi,
    intro: { fr: 'Indiquez vos dates et quelques infos sur votre chat. Le formulaire prépare votre message, il ne reste qu’à l’envoyer.', en: 'Share your dates and a few details about your cat. The form prepares your message, you just send it.' } as Bi,
    name: { fr: 'Votre nom', en: 'Your name' } as Bi,
    email: { fr: 'E-mail', en: 'Email' } as Bi,
    phone: { fr: 'Téléphone', en: 'Phone' } as Bi,
    city: { fr: 'Ville', en: 'City' } as Bi,
    cat: { fr: 'Nom(s) du ou des chats', en: 'Cat name(s)' } as Bi,
    start: { fr: 'Du', en: 'From' } as Bi,
    end: { fr: 'Au', en: 'To' } as Bi,
    service: { fr: 'Formule', en: 'Plan' } as Bi,
    notes: { fr: 'Précisions (caractère, traitement, accès…)', en: 'Details (temperament, treatment, access…)' } as Bi,
    whatsapp: { fr: 'Envoyer par WhatsApp', en: 'Send via WhatsApp' } as Bi,
    mail: { fr: 'Envoyer par e-mail', en: 'Send by email' } as Bi,
    hello: { fr: 'Bonjour Sophie, je souhaite une garde pour mon chat.', en: 'Hello Sophie, I would like a stay for my cat.' } as Bi,
  },
  footer: {
    text: { fr: 'Cat sitting et pet sitting sur la Côte d’Azur.', en: 'Cat sitting and pet sitting on the French Riviera.' } as Bi,
    rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' } as Bi,
  },
};
