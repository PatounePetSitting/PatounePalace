import { BlogPost, Testimonial, PricingTier, GalleryItem } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "palaces-conciergeries-monaco-pet-sitting",
    title: {
      fr: "Partenariat Palaces & Conciergeries : Le standard de garde 5 étoiles à Monaco",
      en: "Palace & Concierge Partnerships: 5-Star Pet Sitting Standards in Monaco"
    },
    excerpt: {
      fr: "Comment Patoune d'Or collabore avec les concierges Clefs d'Or et majordomes des plus grands palaces pour un service in-suite discret, sécurisé et disponible 24h/24.",
      en: "How Patoune d'Or collaborates with Clefs d'Or concierges and elite butlers of major palaces to provide discrete, secure, 24/7 in-suite care."
    },
    content: {
      fr: `Les hôtels de prestige de la Principauté de Monaco accueillent une clientèle exigeante qui voyage souvent avec ses compagnons à quatre pattes. Pour les concierges Clefs d'Or et Guest Relation Officers, pouvoir recommander un service de pet sitting d'une confiance absolue est indispensable.

### Un protocole de garde adapté aux Palaces
La collaboration avec les palaces de prestige et les grands établissements de luxe de la Principauté exige une discrétion absolue et un professionnalisme rigoureux :
1. **Intégration transparente** : Nos sitters s'adaptent parfaitement aux règlements des établissements de prestige et collaborent main dans la main avec le personnel de chambre.
2. **Discrétion & Secret professionnel** : Signature systématique de clauses de confidentialité (NDA) pour les personnalités publiques et royautés.
3. **Disponibilité absolue (24/7)** : Que ce soit pour un dîner d'affaires de dernière minute ou un départ matinal, notre service répond instantanément sous 2 heures.

### La certification ACACED et l'assurance sur-mesure
Toutes nos prestations sont couvertes par une assurance responsabilité civile professionnelle haut de gamme couvrant spécifiquement la garde d'animaux de valeur dans les suites impériales et les résidences privées de prestige.`,
      en: `The luxury hotels of the Principality of Monaco welcome a highly demanding clientele who frequently travel with their beloved pets. For Clefs d'Or concierges and Guest Relation Officers, recommending an absolutely trustworthy and elite pet sitting service is paramount.

### A Palace-Grade Care Protocol
Collaborating with prestigious high-end hotels and luxury suites of the Principality demands absolute discretion and rigorous professionalism:
1. **Seamless Integration**: Our professional sitters adapt perfectly to prestige hotel rules and work hand-in-hand with butler and housekeeping teams.
2. **Absolute Confidentiality**: We systematically adhere to strict NDAs and privacy agreements for high-profile guests, executives, and royal clients.
3. **Round-the-Clock Responsiveness (24/7)**: Whether for a last-minute business dinner or an early morning departure, our services respond in under two hours.

### Elite Certifications & Coverage
Our services carry full top-tier professional liability insurance explicitly covering high-value pet custody inside presidential suites, yachts, and luxury private villas.`
    },
    keywords: ["pet sitting Monaco", "palace pet sitting", "concierge services Monaco", "luxury hotel pet care", "sitter Monaco luxury"],
    date: "24 Juin 2026",
    readTime: "4 mins",
    category: {
      fr: "Palace & Conciergerie",
      en: "Palace & Concierge"
    },
    image: "/src/assets/images/client_dog_stream_1779629873281.png"
  },
  {
    id: "2",
    slug: "garde-suite-hotel-yacht-prive-riviera",
    title: {
      fr: "Garde de prestige en Suite d'Hôtel et Yacht Privé : Mode d'emploi",
      en: "Prestige Care in Hotel Suites & Private Yachts: The Ultimate Guide"
    },
    excerpt: {
      fr: "Les spécificités de la garde d'animaux à bord des superyachts ou dans les suites présidentielles de la Croisette. Nos secrets pour un compagnon serein.",
      en: "The unique dynamics of pet sitting aboard superyachts and inside presidential suites on the Croisette. Our secrets to maintaining your companion's serenity."
    },
    content: {
      fr: `Que vous séjourniez dans un somptueux palace de Cannes ou que votre superyacht soit ancré dans le port de Monaco, faire garder votre animal dans un environnement temporaire nécessite une approche experte et personnalisée.

### Gérer la garde à bord d'un Yacht
La garde d'un chien ou d'un chat sur un yacht privé présente des défis uniques en termes de sécurité et de confort :
- **Sécurisation des ponts** : Nos sitters veillent en permanence à ce que les filets de sécurité soient en place et que l'animal porte un gilet de sauvetage adapté si nécessaire.
- **Gestion du mal de mer** : Application rigoureuse des recommandations vétérinaires pour apaiser le stress ou le mal des transports de vos compagnons.
- **Rapports vidéo en temps réel** : Restez connecté avec votre animal grâce à des vidéos HD envoyées directement par WhatsApp pendant que vous profitez de votre escale.

### L'excellence du service In-Suite
Dans une suite d'hôtel 5 étoiles, nous mettons en place un protocole "zéro bruit" et "zéro perturbation" pour respecter la quiétude des clients voisins, tout en garantissant des moments de stimulation mentale, de caresses et de jeux à votre animal de manière totalement discrète.`,
      en: `Whether you are staying in a sumptuous hotel suite in Cannes or your superyacht is anchored in the Port of Monaco, arranging pet sitting in a temporary high-end environment requires an expert and personalized touch.

### Managing Pet Sitting Aboard Superyachts
Caring for a dog or cat on a private yacht presents unique safety and lifestyle challenges:
- **Deck Safety Protocols**: Our pet sitters guarantee that safety nets are correctly set up and ensure that your pet wears a customized life vest when on open decks.
- **Motion Sickness Management**: Careful compliance with elite veterinarian instructions to soothe travel stress or seasickness.
- **Real-Time Video Reporting**: Stay instantly connected to your pet via HD videos sent directly to your phone via WhatsApp while enjoying your ashore excursions.

### Elite In-Suite Protocols
Inside 5-star hotel suites, we enforce a strict "zero noise, zero disruption" protocol to respect neighboring guests, while offering continuous companion play and affection in absolute discretion.`
    },
    keywords: ["yacht pet sitting", "hotel suite pet care Cannes", "superyacht dogs Monaco", "luxury cat care", "VIP pet service Riviera"],
    date: "18 Juin 2026",
    readTime: "3 mins",
    category: {
      fr: "Yacht & Suite",
      en: "Yacht & Suite"
    },
    image: "/src/assets/images/client_maine_coon_1779629892210.png"
  },
  {
    id: "3",
    slug: "promenades-luxe-chien-monaco-cote-azur",
    title: {
      fr: "Protocole de Promenade de Prestige : L'art de la marche canine de luxe",
      en: "Prestige Dog Walking Protocol: The Art of Luxury Canine Walks"
    },
    excerpt: {
      fr: "Comment nos promenades canines à Monaco et Saint-Jean-Cap-Ferrat respectent l'étiquette locale, la sécurité thermique et le prestige de vos compagnons.",
      en: "How our dog walks in Monaco and Saint-Jean-Cap-Ferrat uphold local etiquette, thermal safety standards, and your companion's prestige."
    },
    content: {
      fr: `Une promenade canine dans les quartiers exclusifs de Monte-Carlo ou le long des somptueuses villas de Saint-Jean-Cap-Ferrat ne s'improvise pas. Elle obéit à un protocole d'excellence strict, digne des meilleurs services de majordome.

### L'importance de la sécurité thermique
Sur la Côte d'Azur, le soleil brille intensément. Nous appliquons la règle des 5 secondes pour tester la température de l'asphalte et éviter tout risque de brûlure des coussinets. Nos parcours privilégient toujours les allées ombragées des jardins du Casino ou des sentiers côtiers boisés.

### Un protocole d'étiquette rigoureux
- **Équipement de prestige** : Utilisation exclusive de laisses et harnais ergonomiques haut de gamme respectant l'intégrité physique de votre chien.
- **Suivi GPS en direct** : Pour votre tranquillité d'esprit, chaque balade est géolocalisée et vous est transmise sous forme de rapport interactif.
- **Hydratation Premium** : Nous servons de l'eau fraîche purifiée tout au long de l'exercice pour préserver l'énergie et la santé de votre compagnon.`,
      en: `A dog walk in the exclusive neighborhoods of Monte-Carlo or along the sumptuous villas of Saint-Jean-Cap-Ferrat is not just exercise—it is a butler-level service executed with the utmost care and respect for local etiquette.

### Prioritizing Thermal Safety
On the sun-kissed French Riviera, temperatures can soar. We systematically apply the 5-second asphalt test to safeguard sensitive paws from burns. Our walking routes are meticulously routed through shaded garden walks, like those around the Monte-Carlo Casino, or cool pine forest trails.

### A Professional Etiquette Protocol
- **Premium Gear Only**: We work with high-quality ergonomic harnesses and leashes that protect your dog's posture and throat.
- **Live GPS Tracking**: Every single stroll is mapped and logged, providing you with a full, transparent route report.
- **Premium Hydration**: We carry pure bottled mineral water to keep your companion fully refreshed during their outdoor sessions.`
    },
    keywords: ["luxury dog walks Monaco", "dog walking Saint-Jean-Cap-Ferrat", "elite walker Riviera", "gps dog walk Côte d'Azur", "luxury pet services"],
    date: "10 Juin 2026",
    readTime: "5 mins",
    category: {
      fr: "Services 5 Étoiles",
      en: "5-Star Services"
    },
    image: "/src/assets/images/client_terrier_forest_1779629909127.png"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Sophie de Monte-Carlo",
    location: "Monaco Larvotto",
    rating: 5,
    petName: "Aramis",
    petType: "cat",
    comment: {
      fr: "Patoune est incroyable de gentillesse et de professionnalisme. Mon Persan Aramis est d'habitude très peureux, mais il adore ses visites quotidiennes ! Je pars l'esprit totalement libre grâce aux photos reçues chaque matin.",
      en: "Patoune is incredibly gentle and professional. My Persian Cat Aramis is usually very shy, but he absolutely loves her daily visits! I travel with infinite peace of mind thanks to the premium photo updates sent every morning."
    },
    date: "Mai 2026"
  },
  {
    id: "t2",
    author: "Jean-Marc & Hélène",
    location: "Cannes Croisette",
    rating: 5,
    petName: "Toby",
    petType: "dog",
    comment: {
      fr: "Superbe dog-sitter ! Toby (notre Golden Retriever) a eu droit à des balades de rêve au Mont Boron et sur les plages de Cannes autorisées. Un suivi exceptionnel, de l'eau fraîche et une affection sincère. Recommandé à 1000 %.",
      en: "Amazing dog sitter! Toby (our Golden Retriever) had wonderful long walks in Mont Boron and Cannes' pet-friendly coast. Exceptional tracking, fresh water, and genuinely deep affection. Strongly recommended!"
    },
    date: "Avril 2026"
  },
  {
    id: "t3",
    author: "Priscillia",
    location: "Nice Cimiez",
    rating: 5,
    petName: "Milo & Nala",
    petType: "cat",
    comment: {
      fr: "Un service de garde exceptionnel pour mes deux chats. La litière est toujours impeccable, les bols nettoyés, et Milo a même eu droit à son brossage quotidien qu'il apprécie tant. On sent une vraie passion pour les animaux !",
      en: "An outstanding cat sitting service for my two furry cats. The litter box is clean, feed bowls spotless, and Milo loved the daily brushing. You can feel a real, deep passion for pets' happiness here!"
    },
    date: "Mai 2026"
  },
  {
    id: "t4",
    author: "Stéphane",
    location: "Saint-Jean-Cap-Ferrat",
    rating: 5,
    petName: "Samy",
    petType: "dog",
    comment: {
      fr: "Garde absolument exceptionnelle en villa pour mon Golden Retriever. Le pet sitting est d'un professionnalisme hors pair, très attentionné, avec des promenades sportives et des nouvelles régulières avec de magnifiques photos quotidiennes. On se sent en totale confiance !",
      en: "Absolutely exceptional villa care for my Golden Retriever. Incredible professionalism, extremely attentive, energetic long daily walks, and wonderful high-quality updates. Total peace of mind!"
    },
    date: "Mars 2026"
  }
];

export const GALLERY_ITEMS = (
  heroUrl: string,
  dogUrl: string,
  catUrl: string,
  clientBerneseUrl?: string,
  clientStreamUrl?: string,
  clientCatUrl?: string,
  clientKittenSofaUrl?: string,
  clientCowCatChairUrl?: string,
  clientWinkingGingerCatUrl?: string,
  clientTabbyTreatStandUrl?: string,
  clientFluffyOrangeCatUrl?: string,
  clientSmilingCreamDogUrl?: string,
  clientFrenchieTongueUrl?: string,
  clientCorgiFloorUrl?: string,
  clientDachshundPairUrl?: string
): GalleryItem[] => {
  const items: GalleryItem[] = [];

  if (clientBerneseUrl) {
    items.push({
      id: "g_client_bernese",
      src: clientBerneseUrl,
      alt: {
        fr: "Nos magnifiques pensionnaires (Bouvier Bernois et ses amis) réunis devant un portail ensoleillé",
        en: "Our stunning guests (Bernese Mountain Dog and friends) enjoying the sunny Riviera courtyard"
      },
      tag: "dogs",
      location: "Villefranche-sur-Mer"
    });
  }

  if (clientStreamUrl) {
    items.push({
      id: "g_client_stream",
      src: clientStreamUrl,
      alt: {
        fr: "Moment de rafraîchissement mérité dans un ruisseau d'eau fraîche pour notre loulou",
        en: "A refreshing swim for our lovely furry guest in a cool mountain stream"
      },
      tag: "dogs",
      location: "Nice Arrière-pays"
    });
  }

  if (clientCatUrl) {
    items.push({
      id: "g_client_cat",
      src: clientCatUrl,
      alt: {
        fr: "Le somptueux chat de race Maine Coon en vacances reposantes sur notre balcon sécurisé",
        en: "Majestic Maine Coon cat enjoying a peaceful balcony staycation on the sun-kissed coast"
      },
      tag: "cats",
      location: "Monaco Larvotto"
    });
  }

  if (clientKittenSofaUrl) {
    items.push({
      id: "g_client_kitten_sofa",
      src: clientKittenSofaUrl,
      alt: {
        fr: "Le doux petit chaton siamois se blottissant sur notre canapé bouclé ultra-confortable",
        en: "The sweet little Siamese-mix kitten cuddles on our cozy cloud sofa under careful eyes"
      },
      tag: "cats",
      location: "Cannes Croisette"
    });
  }

  if (clientCowCatChairUrl) {
    items.push({
      id: "g_client_cow_cat_chair",
      src: clientCowCatChairUrl,
      alt: {
        fr: "Un moment de sérénité pour notre adorable pensionnaire bicolore confortablement installé",
        en: "A peaceful moment for our lovely bicolor guest resting on the elegant dining chair"
      },
      tag: "cats",
      location: "Monaco Condamine"
    });
  }

  if (clientWinkingGingerCatUrl) {
    items.push({
      id: "g_client_winking_ginger_cat",
      src: clientWinkingGingerCatUrl,
      alt: {
        fr: "Un clin d'œil plein d'amour de notre ami roux pendant sa séance quotidienne de caresses",
        en: "A sweet loving wink from our orange tabby friend during their daily petting session"
      },
      tag: "cats",
      location: "Nice Cimiez"
    });
  }

  if (clientTabbyTreatStandUrl) {
    items.push({
      id: "g_client_tabby_treat_stand",
      src: clientTabbyTreatStandUrl,
      alt: {
        fr: "Le petit gourmand de Scottish Fold debout pour sa pause friandise liquide préférée",
        en: "The darling Scottish fold standing high for his favorite premium lickable treat"
      },
      tag: "cats",
      location: "Antibes Juan-les-Pins"
    });
  }

  if (clientFluffyOrangeCatUrl) {
    items.push({
      id: "g_client_fluffy_orange_cat",
      src: clientFluffyOrangeCatUrl,
      alt: {
        fr: "Portrait rapproché de l'irrésistible et très câlin chat roux à long poil de la villa",
        en: "Beautiful close-up of our fluffy long-haired ginger guest looking straight into the lens"
      },
      tag: "cats",
      location: "Cap d'Ail"
    });
  }

  if (clientSmilingCreamDogUrl) {
    items.push({
      id: "g_client_smiling_cream_dog",
      src: clientSmilingCreamDogUrl,
      alt: {
        fr: "Un grand sourire complice pour notre loulou couleur crème alangui sur la pelouse ensoleillée",
        en: "The happiest cream-colored retriever mix playing in the park on a bright summer afternoon"
      },
      tag: "dogs",
      location: "Nice Promenade"
    });
  }

  if (clientFrenchieTongueUrl) {
    items.push({
      id: "g_client_frenchie_tongue",
      src: clientFrenchieTongueUrl,
      alt: {
        fr: "Le pétillant bouledogue français noir respirant la joie de vivre après sa promenade active",
        en: "Our energetic black French bulldog guest looking up with dynamic enthusiasm during his stroll"
      },
      tag: "dogs",
      location: "Monaco Fontvieille"
    });
  }

  if (clientCorgiFloorUrl) {
    items.push({
      id: "g_client_corgi_floor",
      src: clientCorgiFloorUrl,
      alt: {
        fr: "Le craquant petit chiot Corgi sagement allongé sur le parquet après une grosse session d'éveil",
        en: "The adorable Corgi puppy chilling on the warm wood flooring after an active training session"
      },
      tag: "dogs",
      location: "Beaulieu-sur-Mer"
    });
  }

  if (clientDachshundPairUrl) {
    items.push({
      id: "g_client_dachshund_pair",
      src: clientDachshundPairUrl,
      alt: {
        fr: "Le joyeux duo de teckels prenant la pose de profil sur notre banquette extérieure ensoleillée",
        en: "The dynamic dachshund duo smiling together during their beachfront relaxation session"
      },
      tag: "dogs",
      location: "Cannes Midi Beach"
    });
  }

  return [
    ...items,
    {
      id: "g1",
      src: heroUrl,
      alt: {
        fr: "Chien et chat côte à côte devant la mer azur de la Côte d'Azur",
        en: "Dog and cat side by side facing the pristine blue of the French Riviera"
      },
      tag: "moments",
      location: "Nice Promenade"
    },
    {
      id: "g2",
      src: dogUrl,
      alt: {
        fr: "Magnifique petit Spitz câliné à Monaco",
        en: "Adorable little Spitz receiving loving cuddles in Monaco"
      },
      tag: "dogs",
      location: "Monaco Gardens"
    },
    {
      id: "g3",
      src: catUrl,
      alt: {
        fr: "Un magnifique chat persan sur un sofa en velours à Cannes",
        en: "Beautiful Persian cat relaxing on a velvet sofa in Cannes"
      },
      tag: "cats",
      location: "Cannes Croisette"
    },
    {
      id: "g4",
      src: "/src/assets/images/client_dog_stream_1779629873281.png",
      alt: {
        fr: "Chien joyeux qui court dans un parc canin",
        en: "Happy dog playing catching games in a dog park"
      },
      tag: "dogs",
      location: "Nice Cimiez"
    },
    {
      id: "g5",
      src: "/src/assets/images/cat_sitting_1779628668753.png",
      alt: {
        fr: "Chat trop mignon avec des lunettes de soleil au soleil",
        en: "Cool tabby kitten soaking up the Mediterranean sunshine"
      },
      tag: "cats",
      location: "Monaco Condamine"
    },
    {
      id: "g6",
      src: "/src/assets/images/dog_sitting_1779628649488.png",
      alt: {
        fr: "Golden retriever heureux recevant des grattouilles de ventre",
        en: "Thrilled golden retriever getting tummy scratches outdoors"
      },
      tag: "moments",
      location: "Cannes Midi Beach"
    }
  ];
};
