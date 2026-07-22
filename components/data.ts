import { BlogPost, Testimonial, PricingTier, GalleryItem } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "preparer-visite-chat-domicile",
    title: {
      fr: "Comment bien préparer son chat pour une visite à domicile ?",
      en: "How to perfectly prepare your cat for a home visit?"
    },
    excerpt: {
      fr: "Découvrez nos conseils pratiques pour que les visites de 45 minutes de votre chat se déroulent dans une sérénité totale pendant vos absences.",
      en: "Discover our practical tips to ensure your cat's 45-minute home visits are completely stress-free during your absences."
    },
    content: {
      fr: `Les chats sont des animaux très attachés à leur territoire et à leurs habitudes. Une visite de 45 minutes à domicile est l'alternative idéale à la pension pour préserver leur sérénité. Voici comment préparer au mieux ma venue pour le bien-être de votre félin.

### 1. Faciliter l'accès aux indispensables
Pour que la visite soit optimisée, veillez à laisser à portée de main :
- **L'alimentation et l'eau** : Indiquez clairement les doses de croquettes ou de pâtée. Les gamelles seront nettoyées à chaque visite.
- **La litière** : Laissez un sac de litière propre et une pelle à disposition. Une litière propre est essentielle pour éviter le stress et le marquage urinaire.
- **Les jouets préférés** : Plumeaux, balles, cannes à pêche... le jeu fait partie intégrante de nos visites de 45 minutes.

### 2. Le rituel de visite : Nourriture, Hygiène et Câlins
Chaque visite de 45 minutes suit un protocole rigoureux pour s'assurer que votre chat ne manque de rien :
1. **Renouvellement** de l'eau fraîche et de la nourriture dans des contenants propres.
2. **Nettoyage minutieux** de la litière.
3. **Session de jeux et de stimulation** mentale selon le tempérament de votre chat.
4. **Câlins et brossage** s'il l'apprécie.
5. **Envoi immédiat de photos et vidéos** avec un petit compte-rendu pour votre tranquillité d'esprit.`,
      en: `Cats are territorial animals that thrive on routine. A 45-minute home visit is the ideal alternative to boarding kennels to preserve their peace of mind. Here is how to best prepare for my visit for your feline's happiness.

### 1. Easy Access to Essentials
To optimize the visit, make sure to leave within easy reach:
- **Food and water**: Clearly indicate kibble or wet food portions. Feed bowls are cleaned at every visit.
- **Litter supplies**: Keep clean litter and a scoop nearby. A spotless litter box is crucial to prevent stress.
- **Favorite toys**: Feather toys, balls, wand toys... play is a key part of our 45-minute visits.

### 2. Our Visit Protocol: Food, Hygiene, and Play
Every 45-minute visit follows a structured routine to ensure your cat has everything they need:
1. **Refreshed** food and pure mineral water in clean bowls.
2. **Meticulous scooping** and cleaning of the litter box.
3. **Dedicated play and mental stimulation** session tailored to your cat's mood.
4. **Affection, petting, and brushing** sessions if they enjoy it.
5. **Immediate photo and video updates** sent directly to you with a quick report.`
    },
    keywords: ["visites chats Nice", "cat sitting Nice", "garde chat a domicile", "visite chat 45min", "sitter chat Monaco Cannes"],
    date: "24 Juin 2026",
    readTime: "3 mins",
    category: {
      fr: "Conseils Chats",
      en: "Cat Sitting Tips"
    },
    image: "/src/assets/images/client_maine_coon_1779629892210.png"
  },
  {
    id: "2",
    slug: "bienfaits-promenade-une-heure-chien",
    title: {
      fr: "Les bienfaits de la promenade quotidienne d'une heure pour votre chien",
      en: "The benefits of a daily 1-hour walk for your dog"
    },
    excerpt: {
      fr: "Pourquoi une promenade complète d'une heure est essentielle pour le bien-être physique et mental de votre compagnon à quatre pattes.",
      en: "Why a complete 1-hour walk is essential for the physical and mental well-being of your four-legged companion."
    },
    content: {
      fr: `Une simple sortie hygiénique de 5 minutes ne suffit pas à l'équilibre d'un chien. Une promenade active d'une heure apporte de nombreux bénéfices essentiels pour sa santé.

### Stimuler ses sens et s'aérer l'esprit
Pour un chien, la promenade est le moment idéal pour renifler et décoder son environnement. C'est sa façon de lire les nouvelles ! Cette stimulation olfactive est tout aussi fatigante et bénéfique qu'un exercice physique.

### Notre protocole de balade d'une heure :
- **Sécurité thermique** : Sur la Côte d'Azur, le soleil brille intensément. Nous appliquons toujours la règle des 5 secondes (vérification de la température de l'asphalte avec le dos de la main) pour protéger les coussinets de vos chiens.
- **Hydratation continue** : Nous emportons systématiquement de l'eau fraîche purifiée pour hydrater votre chien pendant l'effort.
- **Suivi et tranquillité** : Un rapport complet avec le tracé de la balade, des photos et des vidéos vous est envoyé en temps réel.`,
      en: `A quick 5-minute bathroom break is not enough for a dog's natural balance. A dedicated 1-hour active stroll brings countless benefits essential for their long-term health.

### Stimulating Senses & Outdoor Fun
For dogs, walking is the primary way to sniff and understand their neighborhood. It is their way of reading the newspaper! This olfactory stimulation is just as rewarding and tiring as active physical exercise.

### Our 1-Hour Walk Protocol:
- **Thermal safety**: On the sunny French Riviera, we always apply the 5-second test (checking asphalt temperature with the back of the hand) to protect your dog's sensitive paws.
- **Continuous hydration**: We carry fresh, purified water to keep your companion perfectly hydrated throughout the stroll.
- **Real-time updates**: A complete report with photos, videos, and a route summary is sent directly to your phone.`
    },
    keywords: ["promenade chien Nice", "dog walking Cannes", "promeneur de chien Monaco", "balade canine 1h", "bien etre chien"],
    date: "18 Juin 2026",
    readTime: "4 mins",
    category: {
      fr: "Bien-être Canin",
      en: "Dog Care Tips"
    },
    image: "/src/assets/images/client_terrier_forest_1779629909127.png"
  },
  {
    id: "3",
    slug: "garde-journee-sitter-professionnel",
    title: {
      fr: "Garde à la journée : Pourquoi privilégier un sitter de confiance ?",
      en: "Day sitting: Why choose a trusted professional sitter?"
    },
    excerpt: {
      fr: "Plutôt que la pension collective, la garde à la journée personnalisée offre calme, routine respectée et affection exclusive à votre domicile.",
      en: "Instead of crowded kennels, custom day sitting offers calm, a respected routine, and exclusive affection at home."
    },
    content: {
      fr: `Vous devez vous absenter pour la journée, votre travail vous prend beaucoup de temps, ou vous prévoyez une sortie à l'extérieur ? La garde à la journée à 35€ est la solution idéale pour votre compagnon.

### Préserver la routine de votre animal
Contrairement aux pensions collectives qui peuvent générer du stress, de l'anxiété et des bagarres, la garde personnalisée préserve la routine familière de votre animal. Il reste tranquille chez lui ou dans un cadre calme, mange à ses heures habituelles et bénéficie d'une attention exclusive.

### Ce qui est inclus dans notre tarif de 35€/jour :
- **Une présence affectueuse** et attentive de Sophie tout au long de la journée.
- **Des promenades régulières** pour se dépenser et s'aérer en toute sécurité.
- **Des sessions de jeux** stimulantes et des moments de caresses chaleureuses.
- **Le respect strict de ses habitudes** (repas, traitements médicaux si nécessaire).
- **Des nouvelles régulières** avec photos et vidéos envoyées en direct.`,
      en: `Need to head out for the day, working long hours, or planning an excursion? Professional day sitting at €35/day is the ideal solution to keep your companion happy and safe.

### Maintaining Your Pet's Normal Routine
Unlike busy collective boarding kennels which can generate anxiety and stress, custom day sitting preserves your animal's regular lifestyle. They stay comfortable at home or in a quiet frame, eat at their usual times, and get 100% exclusive affection.

### Included in our €35/day rate:
- **Loving presence** and continuous care by Sophie throughout the day.
- **Regular walks** to play, exercise, and explore in safety.
- **Interactive play sessions** and warm cuddle times.
- **Strict compliance with habits** (food schedule, medical treatment if needed).
- **Frequent updates** with live photos and videos sent straight to your phone.`
    },
    keywords: ["garde chien journee", "pet sitting Nice", "garde animaux particuliers", "garde 35 euros jour", "dog sitter Cote d'Azur"],
    date: "10 Juin 2026",
    readTime: "3 mins",
    category: {
      fr: "Garde & Services",
      en: "Pet Sitting Services"
    },
    image: "/src/assets/images/client_dog_stream_1779629873281.png"
  },
  {
    id: "4",
    slug: "cat-sitting-monaco-cap-d-ail-serenite",
    title: {
      fr: "Les secrets d'un cat sitting d'élite à Monaco et Cap d'Ail",
      en: "The secrets of elite cat sitting in Monaco and Cap d'Ail"
    },
    excerpt: {
      fr: "Découvrez comment les visites de luxe à domicile garantissent le bien-être de votre félin dans la principauté et ses environs.",
      en: "Discover how luxury home visits guarantee your feline's complete well-being in the Principality and surrounding areas."
    },
    content: {
      fr: `Faire garder son chat à Monaco ou Cap d'Ail exige une attention aux détails irréprochable. Pour les chats de race comme pour nos compagnons de gouttière, la visite de 45 minutes à domicile offre un confort inégalé.

### 1. Sécurisation de l'environnement azuréen
Les appartements et villas de la Côte d'Azur disposent souvent de grands balcons et de terrasses avec une vue imprenable sur la Méditerranée. 
- **La vérification systématique** : À chaque visite, nous nous assurons que les accès extérieurs sont parfaitement clos et sécurisés pour éviter tout risque de chute.
- **Gestion thermique** : Nous modulons la climatisation et les stores pour que votre compagnon reste bien au frais pendant les heures les plus chaudes.

### 2. Le rituel de jeux et de caresses personnalisés
Chaque chat a sa personnalité : certains réclament une attention immédiate tandis que d'autres nécessitent de la patience. Nos visites d'élite respectent ce rythme. Nous offrons des séances de brossage soignées, le nettoyage minutieux des gamelles, ainsi qu'un rapport photo/vidéo instantané envoyé directement sur votre WhatsApp.`,
      en: `Arranging cat sitting in Monaco or Cap d'Ail requires impeccable attention to detail. For pedigree cats and domestic companions alike, our dedicated 45-minute home visits offer unparalleled comfort.

### 1. Security in the Mediterranean Setting
Riviera apartments and villas often feature expansive balconies with stunning views.
- **Systematic checks**: During each visit, we ensure all outdoor accesses and safety nets are secure.
- **Climate control**: We manage shades and air conditioning to keep your cat perfectly comfortable in the summer sun.

### 2. Playtime and Affection Tailored to Their Personality
Every feline is unique. Some demand immediate play while others take time to warm up. We honor their personal pace. We provide grooming, pristine cleaning of dishes, fresh spring water, and high-definition photo and video updates sent straight to your phone.`
    },
    keywords: ["cat sitting Monaco", "garde chat Monaco", "pet sitter Monaco Larvotto", "visite chat Cap d'Ail", "garde animaux Monaco"],
    date: "05 Juillet 2026",
    readTime: "4 mins",
    category: {
      fr: "Luxe & Sérénité",
      en: "Luxury & Serenity"
    },
    image: "/src/assets/images/client_maine_coon_1779629892210.png"
  },
  {
    id: "5",
    slug: "promeneur-chien-agree-nice-acaced",
    title: {
      fr: "Trouver un promeneur de chien agréé à Nice : nos conseils de sécurité",
      en: "Finding a certified dog walker in Nice: our top safety tips"
    },
    excerpt: {
      fr: "Pourquoi le choix d'un promeneur titulaire de l'ACACED et assuré est indispensable pour la sécurité de votre chien à Nice.",
      en: "Why choosing an ACACED-certified and fully insured dog walker is essential for your dog's safety in Nice."
    },
    content: {
      fr: `Confier la laisse de son chien à Nice n'est pas un acte anodin. Qu'il s'agisse d'une promenade active d'une heure au Mont Boron ou d'une balade de quartier à Cimiez, la rigueur professionnelle est de mise.

### L'ACACED : La garantie d'une expertise certifiée
L'ACACED (Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques) est une certification d'État obligatoire. Elle valide les connaissances sur :
- **La santé et les premiers secours** : Reconnaître les signes de déshydratation ou de coup de chaleur (fréquents en été sur la Côte d'Azur).
- **Le comportement canin** : Gérer les interactions entre chiens lors des rencontres et anticiper les tensions.
- **L'assurance RCP** : Une assurance Responsabilité Civile Professionnelle spécifique protège votre animal contre tout incident pendant ses sorties.

### Les meilleurs parcours de balade à Nice
Nous sélectionnons des sentiers ombragés et adaptés (parcs arborés, collines niçoises) loin de la circulation dense pour que votre chien profite au maximum de sa promenade d'une heure en toute sécurité.`,
      en: `Entrusting your dog's leash to a walker in Nice is a serious decision. Whether it is an active 1-hour hike in Mont Boron or a stroll around Cimiez, professional rigor is non-negotiable.

### ACACED: The Certified Expertise Guarantee
The ACACED is a mandatory French state certification. It validates advanced knowledge of:
- **First aid & dog health**: Recognizing signs of dehydration or heatstroke (common on the sunny Riviera coast).
- **Canine behavior**: Successfully managing greetings with other dogs and de-escalating potential stress.
- **Professional liability insurance**: A dedicated policy ensures full protection for your pet in all circumstances.

### Best Walking Routes in Nice
We select beautiful, shaded pathways (such as Nice's olive parks and hillsides) away from heavy traffic to ensure your dog experiences a joyful, stimulating, and perfectly secure 1-hour stroll.`
    },
    keywords: ["promeneur chien Nice", "dog walker Nice", "ACACED pet sitting Nice", "balade canine Nice", "garde chien Nice"],
    date: "01 Juillet 2026",
    readTime: "4 mins",
    category: {
      fr: "Législation & Confiance",
      en: "Legislation & Trust"
    },
    image: "/src/assets/images/client_terrier_forest_1779629909127.png"
  },
  {
    id: "6",
    slug: "conciergerie-canine-feline-cote-d-azur",
    title: {
      fr: "Conciergerie canine et féline : le confort ultime sur la Côte d'Azur",
      en: "Elite pet concierge services: ultimate comfort on the French Riviera"
    },
    excerpt: {
      fr: "Simplifiez-vous la vie avec nos services de conciergerie haut de gamme à domicile pour vos chiens et chats de Nice à Monaco.",
      en: "Simplify your life with our premium home pet concierge services for your dogs and cats from Nice to Monaco."
    },
    content: {
      fr: `La vie active ou les déplacements fréquents sur la Côte d'Azur ne doivent pas compromettre le bien-être de vos précieux compagnons. C'est pourquoi la conciergerie Patoune propose un accompagnement sur-mesure haut de gamme.

### Des services exclusifs à la carte
Notre conciergerie s'occupe de tout pour simplifier votre quotidien :
- **Prise de rendez-vous et accompagnement** : Nous transportons votre animal chez le toiletteur de luxe à Cannes ou chez son vétérinaire habituel en toute sécurité.
- **Gestion des approvisionnements** : Livraison à domicile de sa nourriture favorite, de ses croquettes bio ou de ses friandises préférées.
- **Soins d'hygiène et bien-être** : Brossage régulier des poils longs, nettoyage doux des yeux et des oreilles, et administration rigoureuse de ses traitements médicaux sous ordonnance.

### Un interlocuteur unique de confiance
Avec Sophie, vous bénéficiez d'une relation de confiance directe, sans intermédiaire. Votre compagnon retrouve toujours le même visage rassurant, ce qui réduit considérablement son stress.`,
      en: `Active professional lives or regular travel on the French Riviera should never compromise the well-being of your beloved pets. That is why Patoune's elite pet concierge services offer high-end, tailored support.

### Exclusive Services on Demand
Our concierge handles everything to make your daily routine seamless:
- **Appointment coordination & transport**: We safely drive your pet to premium grooming salons in Cannes or to their trusted veterinarian in Nice or Monaco.
- **Supply management**: Home delivery of their favorite organic food, premium treats, or veterinary care accessories.
- **Hygiene & wellness treatments**: Dedicated brushing for long-haired breeds, gentle ear and eye cleaning, and precise administration of veterinary-prescribed medication.

### A Single, Trusted Care Provider
With Sophie, you receive direct, personalized care. Your companion always welcomes the same friendly face, significantly reducing separation anxiety.`
    },
    keywords: ["conciergerie canine Monaco", "pet concierge Cannes", "pet sitting de luxe", "garde animaux haut de gamme", "services VIP animaux Nice"],
    date: "28 Juin 2026",
    readTime: "5 mins",
    category: {
      fr: "Haut de Gamme",
      en: "Elite Concierge"
    },
    image: "/src/assets/images/client_dog_stream_1779629873281.png"
  },
  {
    id: "7",
    slug: "garder-animal-frais-ete-cote-d-azur",
    title: {
      fr: "Garder son animal au frais l'été sur la Côte d'Azur",
      en: "Keeping your pet cool during summer on the French Riviera"
    },
    excerpt: {
      fr: "Prévenir les risques de déshydratation et de coup de chaleur chez le chien et le chat lors des vagues de chaleur estivales.",
      en: "Preventing dehydration and heatstroke risks for dogs and cats during peak summer heat waves."
    },
    content: {
      fr: `L'été sur la Côte d'Azur est magnifique, mais les températures peuvent rapidement grimper à Nice, Cannes et Monaco. Les chiens et les chats régulent moins bien leur température que nous. Voici nos conseils de pro pour les protéger.

### 1. La règle d'or de la promenade
- **L'asphalte brûlant** : En plein soleil, le bitume peut atteindre plus de 50°C, risquant de brûler gravement les coussinets. Nous promenons toujours les chiens tôt le matin ou après le coucher du soleil.
- **Hydratation constante** : Lors de nos balades de 1 heure, nous emportons systématiquement des gourdes d'eau fraîche filtrée et faisons des pauses régulières à l'ombre.

### 2. Le confort à la maison
- **Ventilation et climatisation** : Pendant nos visites de 45 minutes pour chats, nous veillons à laisser les pièces ventilées et fraîches. Nous pouvons renouveler l'eau avec des glaçons et installer des tapis rafraîchissants.
- **Signes d'alerte** : Un halètement excessif, une léthargie ou des gencives très rouges sont des signes d'urgence. Grâce à notre formation ACACED, nous savons réagir immédiatement pour rafraîchir l'animal en toute sécurité.`,
      en: `Summer on the French Riviera is breath-taking, but high temperatures in Nice, Cannes, and Monaco can pose serious health risks. Dogs and cats do not sweat like humans, making them highly sensitive to hot weather. Here is our professional guide to keeping them safe.

### 1. Golden Rules for Dog Strolls
- **Avoid boiling asphalt**: In direct sunlight, streets can reach over 50°C, which can instantly blister paw pads. We schedule our active 1-hour dog walks in the cool mornings or refreshing evenings.
- **Hydration is key**: We carry fresh filtered water during every walk, offering frequent water breaks in shady spots.

### 2. Indoor Cooling Routines
- **Airflow & fresh water**: During our 45-minute home visits for cats, we adjust blinds and AC, add ice cubes to water bowls, and set up cooling mats in their favorite spots.
- **Warning signs**: Heavy panting, extreme lethargy, or dark red gums indicate a medical emergency. Thanks to our ACACED certification, we are trained to identify heat stress and apply safe, immediate cooling techniques.`
    },
    keywords: ["coup de chaleur chien", "garde animaux Cannes", "pet sitter Nice", "vacances Cote d'Azur chien", "canicule chien chat"],
    date: "15 Juin 2026",
    readTime: "4 mins",
    category: {
      fr: "Santé & Prévention",
      en: "Health & Safety"
    },
    image: "/src/assets/images/client_maine_coon_1779629892210.png"
  },
  {
    id: "8",
    slug: "visite-a-domicile-alternative-pension-animaux",
    title: {
      fr: "Pourquoi la visite à domicile est la meilleure alternative à la pension ?",
      en: "Why home visits are the best alternative to boarding kennels?"
    },
    excerpt: {
      fr: "Découvrez les nombreux avantages de la garde personnalisée à domicile pour préserver le bien-être émotionnel de vos compagnons.",
      en: "Discover the many benefits of tailored home visits to safeguard your pet's emotional well-being."
    },
    content: {
      fr: `Lorsqu'on s'absente, le choix du mode de garde de nos animaux est primordial. Si la pension collective a longtemps été la norme, la visite à domicile (pet sitting personnalisé) s'impose aujourd'hui comme la solution la plus sereine et hygiénique.

### 1. Le respect absolu de son territoire
Les chats et la plupart des chiens sont très attachés à leurs repères olfactifs et visuels. Changer d'environnement peut déclencher une anxiété sévère, des troubles du comportement ou de la perte d'appétit.
- **La routine est préservée** : Les repas sont servis dans leurs gamelles habituelles, à l'heure exacte.
- **Le sommeil est réparateur** : Votre compagnon dort dans son panier ou sur son canapé préféré, bercé par les bruits familiers de la maison.

### 2. Une sécurité sanitaire optimale
Dans une pension collective, la promiscuité favorise la transmission de maladies (comme la toux du chenil pour les chiens ou le coryza pour les chats). Le pet sitting à domicile élimine totalement ce risque de contamination. De plus, votre compagnon bénéficie d'une attention exclusive de Sophie, sans rivalité pour obtenir des caresses.`,
      en: `When traveling, deciding how to care for your beloved pet is a critical choice. While collective boarding kennels were once common, personalized home visits (in-home pet sitting) are now recognized as the most peaceful, hygienic option.

### 1. Complete Respect for Their Safe Territory
Cats and dogs are deeply attached to their familiar sensory surroundings. Placing them in unfamiliar structures can trigger separation anxiety, behavioral stress, or appetite loss.
- **Routines remain unchanged**: Meal schedules and play setups stay exactly the same.
- **Restful sleep**: Your companion sleeps peacefully in their own bed, comforted by the familiar sights and sounds of your home.

### 2. Optimal Health and Hygiene
In crowded kennels, close proximity with unknown pets facilitates the transmission of illnesses (such as kennel cough or feline flu). Custom home visits completely eliminate this risk. Your pet receives 100% of Sophie's individual care, with zero competition for cuddles.`
    },
    keywords: ["pension chien Nice", "pension chat Monaco", "alternative pension animaux", "visite domicile chat", "sitter confiance Nice"],
    date: "08 Juin 2026",
    readTime: "4 mins",
    category: {
      fr: "Psychologie Animale",
      en: "Pet Psychology"
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
      fr: "Sophie est incroyable de gentillesse et de professionnalisme. Mon Persan Aramis est d'habitude très peureux, mais il adore ses visites quotidiennes de 45 minutes ! Je pars l'esprit totalement libre grâce aux photos reçues chaque matin.",
      en: "Sophie is incredibly gentle and professional. My Persian Cat Aramis is usually very shy, but he absolutely loves her daily 45-minute visits! I travel with infinite peace of mind thanks to the photos sent every morning."
    },
    date: "Mai 2026",
    image: "/src/assets/images/client_kitten_sofa_1779635959811.png"
  },
  {
    id: "t2",
    author: "Jean-Marc & Hélène",
    location: "Cannes Croisette",
    rating: 5,
    petName: "Toby",
    petType: "dog",
    comment: {
      fr: "Superbe promeneuse ! Toby (notre Golden Retriever) a eu droit à des balades de rêve d'une heure au Mont Boron et sur les plages de Cannes autorisées. Un suivi exceptionnel, de l'eau fraîche et une affection sincère. Recommandé à 1000 %.",
      en: "Amazing dog walker! Toby (our Golden Retriever) had wonderful 1-hour walks in Mont Boron and Cannes' pet-friendly coast. Exceptional tracking, fresh water, and genuinely deep affection. Strongly recommended!"
    },
    date: "Avril 2026",
    image: "/src/assets/images/client_smiling_cream_dog_1779636065252.png"
  },
  {
    id: "t3",
    author: "Priscillia",
    location: "Nice Cimiez",
    rating: 5,
    petName: "Milo & Nala",
    petType: "cat",
    comment: {
      fr: "Un service de visite exceptionnel pour mes deux chats. La litière est toujours impeccable, les bols nettoyés, et Milo a même eu droit à son brossage quotidien lors des visites de 45 minutes. On sent une vraie passion pour les animaux !",
      en: "An outstanding cat sitting visit for my two furry cats. The litter box is clean, feed bowls spotless, and Milo loved the daily brushing during the 45-minute visits. You can feel a real, deep passion for pets' happiness here!"
    },
    date: "Mai 2026",
    image: "/src/assets/images/client_fluffy_orange_cat_1779636041845.png"
  },
  {
    id: "t4",
    author: "Stéphane",
    location: "Saint-Jean-Cap-Ferrat",
    rating: 5,
    petName: "Samy",
    petType: "dog",
    comment: {
      fr: "Garde absolument exceptionnelle à la journée pour mon Golden Retriever. Le pet sitting est d'un professionnalisme hors pair, très attentionné, avec des promenades régulières et des nouvelles fréquentes avec de magnifiques photos. On se sent en totale confiance !",
      en: "Absolutely exceptional day care for my Golden Retriever. Incredible professionalism, extremely attentive, regular daily walks, and wonderful high-quality updates. Total peace of mind!"
    },
    date: "Mars 2026",
    image: "/src/assets/images/client_dog_stream_1779629873281.png"
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
