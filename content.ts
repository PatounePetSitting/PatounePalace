export type Lang = 'fr' | 'en';
type Bi = { fr: string; en: string };

export const CONTACT = {
  phone: '+33 7 63 20 87 13',
  phoneHref: 'tel:+33763208713',
  whatsappNumber: '33763208713',
  instagram: 'https://www.instagram.com/patounenice',
};

export const IMG = {
  hero: '/img/hero-chat.png',
  gallery: [
    { src: '/img/chat-1.png', alt: { fr: 'Chaton aux yeux bleus sur un plaid', en: 'Blue-eyed kitten on a blanket' } as Bi },
    { src: '/img/chat-2.png', alt: { fr: 'Chat tigré qui attend une friandise', en: 'Tabby cat waiting for a treat' } as Bi },
    { src: '/img/chat-4.png', alt: { fr: 'Chat roux et blanc au regard doux', en: 'Ginger and white cat with a gentle gaze' } as Bi },
    { src: '/img/chat-5.png', alt: { fr: 'Chat noir et blanc endormi sur une chaise', en: 'Black and white cat asleep on a chair' } as Bi },
  ],
};

export const ZONES = [
  { name: 'Nice', center: [43.7102, 7.262] as [number, number], radius: 4500 },
  { name: 'Villefranche-sur-Mer', center: [43.7036, 7.3109] as [number, number], radius: 1100 },
  { name: 'Beaulieu-sur-Mer', center: [43.7074, 7.3318] as [number, number], radius: 1100 },
];

export const T = {
  nav: {
    services: { fr: 'Tarif', en: 'Rate' } as Bi,
    zones: { fr: 'Zones', en: 'Areas' } as Bi,
    about: { fr: 'À propos', en: 'About' } as Bi,
    faq: { fr: 'FAQ', en: 'FAQ' } as Bi,
    book: { fr: 'Réserver', en: 'Book' } as Bi,
    lang: { fr: 'EN', en: 'FR' } as Bi,
  },
  hero: {
    kicker: { fr: 'Cat sitting · Nice · Villefranche · Beaulieu', en: 'Cat sitting · Nice · Villefranche · Beaulieu' } as Bi,
    title: { fr: 'Partez l’esprit léger, les ronrons continuent', en: 'Travel light, the purrs go on' } as Bi,
    text: {
      fr: 'Votre chat reste chez lui, dans ses habitudes et sur son coussin préféré. Je viens le câliner, le nourrir, veiller sur lui, et vous envoie des nouvelles en photo à chaque visite.',
      en: 'Your cat stays home, in their routine and on their favourite cushion. I come to cuddle, feed and look after them, and send you photo news after every visit.',
    } as Bi,
    cta: { fr: 'Réserver sur WhatsApp', en: 'Book on WhatsApp' } as Bi,
    cta2: { fr: 'Voir le tarif', en: 'See the rate' } as Bi,
  },
  trust: [
    { icon: '🎓', title: { fr: 'Certifiée ACACED', en: 'ACACED certified' } as Bi, text: { fr: 'Attestation officielle pour les animaux de compagnie', en: 'Official French pet-care certificate' } as Bi },
    { icon: '🛡️', title: { fr: 'Assurée RC Pro', en: 'Liability insured' } as Bi, text: { fr: 'Responsabilité civile professionnelle', en: 'Professional liability cover' } as Bi },
    { icon: '📸', title: { fr: 'Photos à chaque visite', en: 'Photos every visit' } as Bi, text: { fr: 'Des nouvelles directement sur WhatsApp', en: 'News straight to WhatsApp' } as Bi },
    { icon: '🐱', title: { fr: 'Uniquement des chats', en: 'Cats only' } as Bi, text: { fr: 'Une spécialiste, toujours la même personne', en: 'A specialist, always the same person' } as Bi },
  ],
  service: {
    eyebrow: { fr: 'Le tarif', en: 'The rate' } as Bi,
    title: { fr: 'La visite à domicile', en: 'The home visit' } as Bi,
    name: { fr: 'Visite chat à domicile', en: 'Cat home visit' } as Bi,
    price: '20 €',
    unit: { fr: '/ visite de 45 min', en: '/ 45-min visit' } as Bi,
    points: {
      fr: ['Nourriture, eau fraîche et litière', 'Câlins, jeux et brossage', 'Soins et médicaments si besoin', 'Photos envoyées après chaque visite'],
      en: ['Food, fresh water and litter', 'Cuddles, play and brushing', 'Care and medication if needed', 'Photos sent after every visit'],
    },
    note: {
      fr: 'Une rencontre de présentation est proposée avant la première garde.',
      en: 'A meet and greet is offered before the first stay.',
    } as Bi,
  },
  how: {
    eyebrow: { fr: 'Le parcours', en: 'The journey' } as Bi,
    title: { fr: 'De votre message au premier ronron', en: 'From your message to the first purr' } as Bi,
    steps: [
      { icon: '💬', title: { fr: 'Vous m’écrivez', en: 'You message me' } as Bi, text: { fr: 'Dates, ville, nombre de chats : un message WhatsApp suffit.', en: 'Dates, city, number of cats: one WhatsApp message is enough.' } as Bi },
      { icon: '🤝', title: { fr: 'On se rencontre', en: 'We meet' } as Bi, text: { fr: 'Je rencontre votre chat chez vous pour apprendre ses petites manies.', en: 'I meet your cat at home to learn their little quirks.' } as Bi },
      { icon: '📸', title: { fr: 'Je veille sur lui', en: 'I look after them' } as Bi, text: { fr: 'Visites avec photos et nouvelles à chaque passage.', en: 'Visits with photos and news every time.' } as Bi },
      { icon: '🏠', title: { fr: 'Retrouvailles', en: 'Reunion' } as Bi, text: { fr: 'Vous rentrez, un chat serein vous attend.', en: 'You come home to a calm cat.' } as Bi },
    ],
  },
  estimate: {
    eyebrow: { fr: 'Simulateur', en: 'Estimator' } as Bi,
    title: { fr: 'Estimer ma garde', en: 'Estimate my stay' } as Bi,
    qty: { fr: 'Nombre de visites', en: 'Number of visits' } as Bi,
    total: { fr: 'Estimation', en: 'Estimate' } as Bi,
    note: { fr: 'Estimation indicative, confirmée lors de votre demande.', en: 'Indicative estimate, confirmed when you book.' } as Bi,
    cta: { fr: 'Réserver sur WhatsApp', en: 'Book on WhatsApp' } as Bi,
  },
  gallery: {
    eyebrow: { fr: 'Les pensionnaires', en: 'The guests' } as Bi,
    title: { fr: 'Des moustaches heureuses', en: 'Happy whiskers' } as Bi,
  },
  zones: {
    eyebrow: { fr: 'Zone d’intervention', en: 'Service area' } as Bi,
    title: { fr: 'Nice, Villefranche et Beaulieu', en: 'Nice, Villefranche and Beaulieu' } as Bi,
    text: {
      fr: 'Je me déplace chez vous dans ces trois communes. Une autre adresse ? Écrivez-moi sur WhatsApp.',
      en: 'I come to your home in these three towns. Another address? Message me on WhatsApp.',
    } as Bi,
    hint: { fr: 'Cliquez sur la carte pour zoomer avec la molette', en: 'Click the map to zoom with the scroll wheel' } as Bi,
  },
  about: {
    title: { fr: 'Bonjour, je suis Sophie', en: 'Hi, I’m Sophie' } as Bi,
    text: [
      {
        fr: 'Franco-allemande, diplômée de l’ESSEC, j’ai travaillé comme juriste à Monaco puis dans l’événementiel de prestige avant de me consacrer aux animaux sur la Côte d’Azur.',
        en: 'French-German, ESSEC graduate, I worked as a lawyer in Monaco and then in premium events before dedicating myself to animals on the Riviera.',
      },
      {
        fr: 'Les chats n’aiment pas le changement : je privilégie des visites calmes, régulières et dans leur environnement, avec la rigueur d’un service professionnel.',
        en: 'Cats dislike change, so I focus on calm, regular visits in their own surroundings, with the rigour of a professional service.',
      },
      { fr: 'Je parle français, anglais et allemand.', en: 'I speak French, English and German.' },
    ] as Bi[],
  },
  faq: {
    title: { fr: 'Questions fréquentes', en: 'Frequently asked questions' } as Bi,
    items: [
      {
        q: { fr: 'Combien de visites par jour ?', en: 'How many visits a day?' } as Bi,
        a: { fr: 'Pour un chat adulte en bonne santé, une visite par jour convient souvent pour un week-end ; au-delà de quelques jours, deux visites sont plus rassurantes. Je vous conseille selon votre chat.', en: 'For a healthy adult cat, one visit a day often works for a weekend; beyond a few days two visits are more reassuring. I will advise you based on your cat.' } as Bi,
      },
      {
        q: { fr: 'Et si mon chat est craintif ?', en: 'What if my cat is shy?' } as Bi,
        a: { fr: 'Nous commençons par une rencontre chez vous. J’avance au rythme du chat, sans le brusquer, et je vous donne des nouvelles à chaque visite.', en: 'We start with a meeting at your home. I go at the cat’s pace, never forcing contact, and I update you after every visit.' } as Bi,
      },
      {
        q: { fr: 'Pouvez-vous donner des médicaments ?', en: 'Can you give medication?' } as Bi,
        a: { fr: 'Oui, selon les consignes de votre vétérinaire. Précisez-le dans votre demande pour que nous organisions les horaires.', en: 'Yes, following your vet’s instructions. Mention it in your request so we can plan the timings.' } as Bi,
      },
      {
        q: { fr: 'Êtes-vous assurée ?', en: 'Are you insured?' } as Bi,
        a: { fr: 'Oui, je dispose d’une assurance responsabilité civile professionnelle et du certificat ACACED.', en: 'Yes, I hold professional liability insurance and the ACACED certificate.' } as Bi,
      },
      {
        q: { fr: 'Comment réserver ?', en: 'How do I book?' } as Bi,
        a: { fr: 'Remplissez le formulaire : il prépare un message prêt à m’envoyer sur WhatsApp. Je réponds rapidement.', en: 'Fill in the form: it prepares a ready-to-send WhatsApp message. I reply quickly.' } as Bi,
      },
    ],
  },
  form: {
    title: { fr: 'Demander une garde', en: 'Request a stay' } as Bi,
    intro: { fr: 'Indiquez vos dates et quelques infos sur votre chat : le formulaire prépare votre message WhatsApp, il ne reste qu’à l’envoyer.', en: 'Share your dates and a few details about your cat: the form prepares your WhatsApp message, you just send it.' } as Bi,
    name: { fr: 'Votre prénom et nom', en: 'Your full name' } as Bi,
    city: { fr: 'Ville', en: 'Town' } as Bi,
    cat: { fr: 'Nom(s) du ou des chats', en: 'Cat name(s)' } as Bi,
    start: { fr: 'Du', en: 'From' } as Bi,
    end: { fr: 'Au', en: 'To' } as Bi,
    notes: { fr: 'Précisions (caractère, traitement, accès…)', en: 'Details (temperament, treatment, access…)' } as Bi,
    send: { fr: 'Envoyer ma demande sur WhatsApp', en: 'Send my request on WhatsApp' } as Bi,
    hello: { fr: 'Bonjour Sophie, je souhaite réserver une garde pour mon chat.', en: 'Hello Sophie, I would like to book a stay for my cat.' } as Bi,
  },
  footer: {
    text: { fr: 'Cat sitting à Nice, Villefranche-sur-Mer et Beaulieu-sur-Mer.', en: 'Cat sitting in Nice, Villefranche-sur-Mer and Beaulieu-sur-Mer.' } as Bi,
    rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' } as Bi,
  },
};
