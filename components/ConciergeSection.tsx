import { useState } from 'react';
import { Sparkles, Check, PhoneCall, ShieldCheck, Heart, Clock, Home, MessageSquare, Plus, Minus, ArrowRight, Calculator } from 'lucide-react';
import { Language } from '../types';

interface ConciergeSectionProps {
  language: Language;
  onSelectFormula: (formula: string) => void;
  prices?: {
    boarding: number;
    catBoarding: number;
    homeSitting: number;
    walk: number;
    catVisit: number;
  };
}

export default function ConciergeSection({ language, onSelectFormula, prices }: ConciergeSectionProps) {
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  // Dynamic prices fallback
  const pBoarding = prices?.boarding ?? 40;
  const pCatBoarding = prices?.catBoarding ?? 25;
  const pHomeSitting = prices?.homeSitting ?? 50;
  const pWalk = prices?.walk ?? 25;
  const pCatVisit = prices?.catVisit ?? 20;

  const getSrvTrans = (idx: number) => {
    const data: Record<number, Record<Language, { title: string; unit: string; desc: string; bullets: string[] }>> = {
      0: {
        fr: {
          title: "Garde Chien chez le Pet Sitter",
          unit: "par jour",
          desc: "Votre compagnon est accueilli directement au domicile chaleureux de Sophie. Cadre familial calme, sécurisé et tout confort.",
          bullets: ["Garde attentionnée chez Sophie", "+10 € par chien supplémentaire", "Promenades quotidiennes & jeux", "Nouvelles avec photos & vidéos"]
        },
        en: {
          title: "Dog Boarding at Sitter's Home",
          unit: "per day",
          desc: "Your companion is welcomed directly at Sophie's own warm home. Comfortable, secure, and quiet family-like setting.",
          bullets: ["Loving boarding at Sophie's home", "+10 € per additional dog", "Daily active walks & playtime", "Daily photo and video updates"]
        },
        ru: {
          title: "Передержка собак у ситтера",
          unit: "в день",
          desc: "Ваш питомец живет в уютном и безопасном доме Софи. Спокойная домашняя обстановка со всеми удобствами.",
          bullets: ["Заботливое проживание у Софи", "+10 € за каждую дополнительную собаку", "Ежедневные активные прогулки и игры", "Регулярные фото и видео отчеты"]
        },
        uk: {
          title: "Перетримка собак у ситтера",
          unit: "на день",
          desc: "Ваш хвостик проживає в затишному та безпечному домі Софі. Спокійна домашня атмосфера з усіма зручностями.",
          bullets: ["Турботливе проживання у Софі", "+10 € за кожну додаткову собаку", "Щоденні активні прогулянки та ігри", "Регулярні фото та відео звіти"]
        },
        it: {
          title: "Pensione Cani a Casa del Sitter",
          unit: "al giorno",
          desc: "Il vostro compagno è accolto direttamente nella calda casa di Sophie. Un ambiente familiare, tranquillo e sicuro.",
          bullets: ["Soggiorno premuroso da Sophie", "+10 € per cane aggiuntivo", "Passeggiate quotidiane e giochi", "Aggiornamenti giornalieri con foto/video"]
        },
        de: {
          title: "Hundeunterbringung bei der Sitterin",
          unit: "pro Tag",
          desc: "Ihr Begleiter wird direkt im gemütlichen Zuhause von Sophie aufgenommen. Ruhige, sichere und komfortable familiäre Atmosphäre.",
          bullets: ["Liebevolle Betreuung bei Sophie", "+10 € pro zusätzlichem Hund", "Tägliche Spaziergänge & Spiele", "Updates mit Fotos & Videos"]
        }
      },
      1: {
        fr: {
          title: "Garde Chat chez le Pet Sitter",
          unit: "par jour",
          desc: "Votre chat est accueilli au domicile calme et sécurisé de Sophie. Idéal pour un séjour serein avec brossage et câlins réguliers.",
          bullets: ["Garde douce au calme chez Sophie", "Litière et gamelles nettoyées", "Séances de brossage et de jeux", "Nouvelles quotidiennes par WhatsApp"]
        },
        en: {
          title: "Cat Boarding at Sitter's Home",
          unit: "per day",
          desc: "Your cat is welcomed at Sophie's calm, secure home. Ideal for a peaceful stay with regular grooming and cuddle sessions.",
          bullets: ["Gentle, quiet care at Sophie's home", "Clean litter & dishes daily", "Play and grooming sessions", "Daily WhatsApp photos & videos"]
        },
        ru: {
          title: "Передержка кошек у ситтера",
          unit: "в день",
          desc: "Ваш кот размещается в тихом и безопасном доме Софи. Идеально для спокойного отдыха с лаской и уходом.",
          bullets: ["Мягкий и спокойный уход у Софи", "Ежедневная чистка лотка и мисок", "Игры и вычесывание шерсти", "Ежедневные новости по WhatsApp"]
        },
        uk: {
          title: "Перетримка котів у ситтера",
          unit: "на день",
          desc: "Ваш кіт розміщується в тихому та безпечному домі Софі. Ідеально для спокійного відпочинку з ласкою та доглядом.",
          bullets: ["Ніжний та спокійний догляд у Софі", "Щоденне чищення лотка та мисок", "Ігри та вичісування шерсті", "Щоденні новини через WhatsApp"]
        },
        it: {
          title: "Pensione Gatti a Casa del Sitter",
          unit: "al giorno",
          desc: "Il vostro gatto è accolto nella casa tranquilla e sicura di Sophie. Ideale per un soggiorno sereno con spazzolatura e coccole.",
          bullets: ["Cure delicate e tranquille da Sophie", "Lettiera e ciotole pulite ogni giorno", "Sessioni di gioco e spazzolatura", "Aggiornamenti quotidiani via WhatsApp"]
        },
        de: {
          title: "Katzenunterbringung bei der Sitterin",
          unit: "pro Tag",
          desc: "Ihre Katze wird im ruhigen und sicheren Zuhause von Sophie aufgenommen. Ideal für einen entspannten Aufenthalt mit Kuscheln und Kämmen.",
          bullets: ["Sanfte Betreuung in ruhiger Lage bei Sophie", "Tägliche Reinigung von Katzenklo & Näpfen", "Spiele- und Fellpflege-Einheiten", "Tägliche Updates über WhatsApp"]
        }
      },
      2: {
        fr: {
          title: "Garde à domicile (Chien / Chiot)",
          unit: "par jour",
          desc: "Sophie se déplace et passe la journée chez vous pour veiller sur votre chien ou chiot. Présence continue et rassurante.",
          bullets: ["Présence continue chez vous", "Idéal pour chiots et repères stables", "Promenades de quartier incluses", "Arrosage plantes & courrier inclus"]
        },
        en: {
          title: "In-Home Sitting (Dog / Puppy)",
          unit: "per day",
          desc: "Sophie spends the day at your home to care for your dog or puppy. Continuous, comforting, and dedicated care.",
          bullets: ["Continuous in-home presence", "Perfect for puppies & familiar setups", "Neighborhood walks included", "Plants watered & mail collected"]
        },
        ru: {
          title: "Дневная сиделка дома (Собаки/Щенки)",
          unit: "в день",
          desc: "Софи приезжает к вам домой и проводит день с вашей собакой или щенком, даря заботу в привычной обстановке.",
          bullets: ["Постоянное присутствие у вас дома", "Идеально для щенков и стабильного режима", "Прогулки по району включены", "Полив растений и сбор почты входят в стоимость"]
        },
        uk: {
          title: "Денна догсіттер вдома (Собаки/Цуценята)",
          unit: "на день",
          desc: "Софі приїжджає до вас додому та проводить день з вашою собакою або цуценям у звичних для них умовах.",
          bullets: ["Постійна присутність у вас вдома", "Ідеально для цуценят та стабільного режиму", "Прогулянки районом включені", "Полив рослин та збір пошти входять у вартість"]
        },
        it: {
          title: "Pet Sitting a Domicilio (Cane/Cucciolo)",
          unit: "al giorno",
          desc: "Sophie si sposta e passa la giornata a casa vostra per accudire il vostro cane o cucciolo. Presenza continua e rassicurante.",
          bullets: ["Presenza continua a casa vostra", "Ideale per cuccioli e per mantenere i punti di riferimento", "Passeggiate nel quartiere incluse", "Annaffiatura piante e ritiro posta inclusi"]
        },
        de: {
          title: "Tierbetreuung bei Ihnen zu Hause (Hund / Welpe)",
          unit: "pro Tag",
          desc: "Sophie kommt zu Ihnen nach Hause und verbringt den Tag dort, um sich um Ihren Hund oder Welpen zu kümmern. Durchgehende und beruhigende Präsenz.",
          bullets: ["Durchgehende Präsenz bei Ihnen zu Hause", "Ideal für Welpen & gewohnte Umgebungen", "Spaziergänge in der Nachbarschaft inklusive", "Blumengießen & Postkastenentleerung inklusive"]
        }
      },
      3: {
        fr: {
          title: "Promenade 1 Heure",
          unit: "par balade",
          desc: "Une heure complète de marche active, de stimulation et de détente adaptée au rythme de votre chien pour se dépenser en toute sécurité.",
          bullets: ["1 heure complète de balade", "Parcours ombragés et sécurisés", "Hydratation à l'eau fraîche", "Rapport de balade avec photos"]
        },
        en: {
          title: "1-Hour Active Walk",
          unit: "per walk",
          desc: "A full hour of active walking, sensory stimulation, and relaxation tailored to your dog's natural pace to exercise safely.",
          bullets: ["Full 1-hour active walk", "Shaded and safe local routes", "Fresh water hydration during effort", "Walk report with live pictures"]
        },
        ru: {
          title: "Активная прогулка 1 час",
          unit: "за прогулку",
          desc: "Час полноценной активной ходьбы и игр, адаптированный под темп вашей собаки для безопасного расхода энергии.",
          bullets: ["Полный 1 час прогулки", "Тенистые и безопасные маршруты", "Свежая питьевая вода во время прогулки", "Фотоотчет и трек прогулки"]
        },
        uk: {
          title: "Активна прогулянка 1 година",
          unit: "за прогулянку",
          desc: "Година повноцінної активної ходьби та ігор, адаптована під темп вашої собаки для безпечного розходу енергії.",
          bullets: ["Повна 1 година прогулянки", "Тінисті та безпечні маршрути", "Свіжа питна вода під час прогулянки", "Фотозвіт та деталі прогулянки"]
        },
        it: {
          title: "Passeggiata Attiva di 1 Ora",
          unit: "a passeggiata",
          desc: "Un'ora intera di camminata attiva, stimolazione e relax adatta al ritmo del vostro cane per sfogarsi in totale sicurezza.",
          bullets: ["1 ora intera di passeggiata", "Percorsi ombreggiati e sicuri", "Idratazione con acqua fresca", "Rapporto della passeggiata con foto"]
        },
        de: {
          title: "Aktiver Spaziergang 1 Std.",
          unit: "pro Spaziergang",
          desc: "Eine volle Stunde aktives Laufen, Schnüffeln und Entspannen, angepasst an das Tempo Ihres Hundes für einen sicheren Auslauf.",
          bullets: ["Volle 1 Stunde aktiver Spaziergang", "Schattige und sichere Wege vor Ort", "Frisches Trinkwasser währenddessen", "Spaziergang-Bericht mit Live-Fotos"]
        }
      },
      4: {
        fr: {
          title: "Visite Chat (45 min)",
          unit: "par visite",
          desc: "Visite à votre domicile comprenant les jeux, le nourrissage, les câlins, l'eau fraîche et le nettoyage minutieux de la litière.",
          bullets: ["45 min de présence dédiée", "Nettoyage litière & gamelles", "Distribution de nourriture & eau", "Jeux, brossage et câlins"]
        },
        en: {
          title: "45-Min Cat Visit",
          unit: "per visit",
          desc: "Bespoke home visit including interactive play, feeding, affectionate petting, fresh water, and meticulous litter box care.",
          bullets: ["45 minutes of dedicated attention", "Litter box & bowl scooping", "Fresh food & water refills", "Play, grooming & cuddle sessions"]
        },
        ru: {
          title: "Визит к кошке (45 мин)",
          unit: "за визит",
          desc: "Визит к вам домой: игры, кормление, чистка лотка, свежая вода и много заботливых поглаживаний.",
          bullets: ["45 минут выделенного времени", "Чистка лотка и мытье мисок", "Выдача корма и свежей воды", "Игры, вычесывание и ласка"]
        },
        uk: {
          title: "Візит до кота (45 хв)",
          unit: "за візит",
          desc: "Візит до вас додому: ігри, годування, чищення лотка, свіжа вода та багато ласки.",
          bullets: ["45 хвилин виділеного часу", "Чищення лотка та миття мисок", "Видача корму та свіжої води", "Ігри, вичісування та ласка"]
        },
        it: {
          title: "Visita Gatti (45 min)",
          unit: "a visita",
          desc: "Visita a d'omicilio che include giochi, pappa, coccole, acqua fresca e pulizia accurata della lettiera.",
          bullets: ["45 min di présence dédiée", "Pulizia lettiera e ciotole", "Distribuzione cibo e acqua", "Giochi, spazzolatura e coccole"]
        },
        de: {
          title: "Katzenbesuch (45 Min.)",
          unit: "pro Besuch",
          desc: "Besuch bei Ihnen zu Hause inklusive interaktivem Spielen, Fütterung, liebevollem Streicheln, frischem Wasser und Reinigung des Katzenklos.",
          bullets: ["45 Minuten engagierte Aufmerksamkeit", "Reinigung von Katzenklo & Näpfen", "Frisches Futter & Wasser", "Spielen, Kämmen & Kuscheln"]
        }
      }
    };
    return data[idx]?.[language] || data[idx]?.en || data[idx]?.fr;
  };

  const servicesList = [
    { icon: <Home className="h-6 w-6 text-white shrink-0" />, price: `${pBoarding} €`, ...getSrvTrans(0) },
    { icon: <Heart className="h-6 w-6 text-white shrink-0" />, price: `${pCatBoarding} €`, ...getSrvTrans(1) },
    { icon: <Home className="h-6 w-6 text-white shrink-0" />, price: `${pHomeSitting} €`, ...getSrvTrans(2) },
    { icon: <Sparkles className="h-6 w-6 text-white shrink-0" />, price: `${pWalk} €`, ...getSrvTrans(3) },
    { icon: <Heart className="h-6 w-6 text-white shrink-0" />, price: `${pCatVisit} €`, ...getSrvTrans(4) }
  ];

  const t = {
    fr: {
      badge: "TARIFS TRANSPARENTS POUR PARTICULIERS",
      title: "Nos Formules de Garde & Tarifs",
      subtitle: "Des prestations de confiance adaptées au bien-être de votre compagnon. Sans abonnement, sans frais cachés et avec envoi systématique de nouvelles quotidiennes.",
      btnBook: "Réserver cette prestation",
      simBadge: "Simulateur Instantané & Transparent",
      simTitle: "Calculez Votre Tarif Sur-Mesure",
      simSub: "Devis Net — Zéro Frais Cachés",
      gridTitle: "Grille tarifaire synthétique",
      gridSub: "Retrouvez nos tarifs de référence. Pour toute demande spécifique (garde de plusieurs animaux, week-ends prolongés), contactez-nous.",
      thService: "Prestation de Garde",
      thFormat: "Durée / Format",
      thRate: "Tarif Net Particulier",
      rateDay: "Journée",
      quote: "sur devis",
      srvBoardDog: "Garde Chien chez le Pet Sitter (Sophie)",
      srvBoardDogSub: "Votre chien réside au domicile chaleureux de Sophie. +10 € / jour par chien supplémentaire.",
      srvBoardCat: "Garde Chat chez le Pet Sitter (Sophie)",
      srvBoardCatSub: "Votre chat est accueilli au domicile calme et sécurisé de Sophie dans un espace calme.",
      srvHomeSitting: "Garde à votre Domicile (Chien / Chiot)",
      srvHomeSittingSub: "Sophie s'occupe de votre chien ou chiot à votre propre domicile pour la journée",
      srvWalk: "Promenade d'une heure",
      srvWalkSub: "Balade sportive, hygiène, hydratation et envoi de photos",
      srvCatVisit: "Visite Chat (Jeux, Nourriture, Hygiène)",
      srvCatVisitSub: "Visite complète à domicile avec moments de câlins exclusifs",
      srvCustom: "Garde longue durée, multi-animaux ou week-end",
      srvCustomSub: "Tarif dégressif ou formule adaptée selon vos besoins",
      certTitle: "Agréée d'État & Assurée Professionnellement",
      certDesc: "Garde assurée directement par Sophie (diplômée d'État ACACED obligatoire et RC Pro GMF spécifique)."
    },
    en: {
      badge: "TRANSPARENT PRIVATE OWNER RATES",
      title: "Our Sitting Services & Rates",
      subtitle: "Trusted pet sitting solutions tailored to your animal's lifestyle. No subscriptions, no hidden fees, and systematic daily updates with photos and videos.",
      btnBook: "Book this service",
      simBadge: "Instant & Transparent Estimator",
      simTitle: "Customize Your Premium Estimate",
      simSub: "Net Rates — Zero Hidden Fees",
      gridTitle: "Rates Overview",
      gridSub: "Check our reference rate card. For specific requests (multi-pet homes, long weekends), please feel free to ask.",
      thService: "Pet Sitting Service",
      thFormat: "Duration / Format",
      thRate: "Net Private Rate",
      rateDay: "Full Day",
      quote: "on quote",
      srvBoardDog: "Dog Boarding at Sitter's Home (Sophie)",
      srvBoardDogSub: "Your dog stays at Sophie's comfortable home. +€10 / day per extra dog.",
      srvBoardCat: "Cat Boarding at Sitter's Home (Sophie)",
      srvBoardCatSub: "Your cat stays at Sophie's quiet, secure and comfortable home.",
      srvHomeSitting: "In-Home Sitting (Dog / Puppy)",
      srvHomeSittingSub: "Sophie takes full care of your dog or puppy at your home during the day",
      srvWalk: "1-Hour Active Walk",
      srvWalkSub: "Active walk, hygiene, hydration, and direct photo updates",
      srvCatVisit: "Cat Visit (Play, Food, Hygiene)",
      srvCatVisitSub: "Detailed home visit with feeding and exclusive cuddle sessions",
      srvCustom: "Long-term stays, multi-pet, or weekends",
      srvCustomSub: "Volume discounts or bespoke schedule based on your needs",
      certTitle: "State Certified & Fully Insured",
      certDesc: "Pet sitting provided directly by Sophie (State-approved ACACED certification and GMF professional liability insurance)."
    },
    ru: {
      badge: "ПРОЗРАЧНЫЕ ТАРИФЫ ДЛЯ ВЛАДЕЛЬЦЕВ",
      title: "Наши Услуги & Цены",
      subtitle: "Качественные услуги ухода, адаптированные к образу жизни вашего питомца. Без абонентской платы, скрытых расходов и с ежедневными фото/видео отчетами.",
      btnBook: "Забронировать эту услугу",
      simBadge: "Быстрый и Прозрачный Расчет стоимости",
      simTitle: "Рассчитайте Стоимость Ухода онлайн",
      simSub: "Итоговая Цена — Никаких Скрытых Доплат",
      gridTitle: "Общий Прайс-лист",
      gridSub: "Базовые тарифы на услуги. Для индивидуальных запросов (несколько питомцев, длительные периоды), свяжитесь с нами.",
      thService: "Услуга Ухода",
      thFormat: "Формат / Срок",
      thRate: "Чистый Тариф",
      rateDay: "Весь день",
      quote: "по запросу",
      srvBoardDog: "Передержка собак у ситтера (Софи)",
      srvBoardDogSub: "Ваша собака живет в уютной квартире Софи. Доплата за вторую собаку той же семьи +10 € в день.",
      srvBoardCat: "Передержка кошек у ситтера (Софи)",
      srvBoardCatSub: "Ваша кошка живет в тихой и безопасной квартире Софи, в полном комфорте и заботе.",
      srvHomeSitting: "Дневная сиделка у вас дома (Собаки / Щенки)",
      srvHomeSittingSub: "Софи проводит весь день у вас дома, заботясь о собаке или щенке в привычной обстановке.",
      srvWalk: "Активная прогулка 1 час",
      srvWalkSub: "Активная ходьба, игры, гигиена, свежая вода и отправка фотографий.",
      srvCatVisit: "Визит к кошке (Игры, Кормление, Гигиена)",
      srvCatVisitSub: "Полноценный домашний визит с играми, уборкой лотка и нежной заботой.",
      srvCustom: "Долгосрочный уход, несколько питомцев или выходные",
      srvCustomSub: "Скидки от объема или тариф по запросу в зависимости от ваших пожеланий",
      certTitle: "Государственная Лицензия & Проф. Страхование",
      certDesc: "Уход осуществляется лично Софи (сертификат ACACED и профессиональное страхование ответственности в GMF)."
    },
    uk: {
      badge: "ПРОЗОРІ ТАРИФИ ДЛЯ ВЛАСНИКІВ",
      title: "Наші Послуги & Ціни",
      subtitle: "Якісні послуги догляду, адаптовані до потреб вашої тварини. Без абонплати, прихованих витрат та з щоденними фото/відео звітами.",
      btnBook: "Забронювати цю послугу",
      simBadge: "Швидкий та Прозорий Розрахунок вартості",
      simTitle: "Розрахуйте Вартість Догляду онлайн",
      simSub: "Кінцева Ціна — Жодних Прихованих Доплат",
      gridTitle: "Загальний Прайс-лист",
      gridSub: "Базові тарифи на послуги. Для індивідуальних запитів (кілька тварин, тривалі періоди), зв'яжіться з нами.",
      thService: "Послуга Догляду",
      thFormat: "Формат / Термін",
      thRate: "Чистий Тариф",
      rateDay: "Весь день",
      quote: "за запитом",
      srvBoardDog: "Перетримка собак у ситтера (Софі)",
      srvBoardDogSub: "Ваша собака живе у затишній квартирі Софі. Доплата за другу собаку з тієї ж родини +10 € на день.",
      srvBoardCat: "Перетримка котів у ситтера (Софі)",
      srvBoardCatSub: "Ваша кішка живе у тихій та безпечній квартирі Софі, в повному комфорті та турботі.",
      srvHomeSitting: "Денна сиделка у вас вдома (Собаки / Цуценята)",
      srvHomeSittingSub: "Софі проводить весь день у вас вдома, піклуючись про собаку чи цуценя у звичних для них умовах.",
      srvWalk: "Активна прогулянка 1 година",
      srvWalkSub: "Активна ходьба, ігри, гігієна, свіжа вода та відправка фотографій.",
      srvCatVisit: "Візит до кота (Ігри, Годування, Гігієна)",
      srvCatVisitSub: "Повноцінный домашній візит з іграми, прибиранням лотка та ніжною турботою.",
      srvCustom: "Довготривалий догляд, кілька тварин або вихідні",
      srvCustomSub: "Знижки від обсягу або тариф за запитом відповідно до ваших побажань",
      certTitle: "Державна Ліцензія & Проф. Страховання",
      certDesc: "Догляд здійснюється особисто Софі (сертифікат ACACED та професійне страхування відповідальності в GMF)."
    },
    it: {
      badge: "TARIFFE TRASPARENTI PER PRIVATI",
      title: "Le Nostre Formule di Custodia & Tariffe",
      subtitle: "Servizi di fiducia su misura per le esigenze del vostro compagno. Senza abbonamento, senza costi nascosti e con invio sistematico di foto e video quotidiani.",
      btnBook: "Prenotare questa prestazione",
      simBadge: "Simulatore Istantaneo & Trasparente",
      simTitle: "Calcolate la Vostra Tariffa su Misura",
      simSub: "Preventivo Netto — Zero Spese Nascoste",
      gridTitle: "Tariffario Sintetico",
      gridSub: "Trovate le nostre tariffe di riferimento. Per qualsiasi richiesta specifica (custodia di più animali, weekend prolungati), contattateci.",
      thService: "Servizio di Custodia",
      thFormat: "Durata / Format",
      thRate: "Tariffa Netta Privato",
      rateDay: "Giornata",
      quote: "su preventivo",
      srvBoardDog: "Pensione Cani da Sophie (Sitter)",
      srvBoardDogSub: "Il vostro cane soggiorna nella calda casa di Sophie. +10 € / giorno per ogni cane aggiuntivo.",
      srvBoardCat: "Pensione Gatti da Sophie (Sitter)",
      srvBoardCatSub: "Il vostro gatto è accolto nella casa tranquilla e sicura di Sophie in uno spazio dedicato.",
      srvHomeSitting: "Sitter a Domicilio (Cane / Cucciolo)",
      srvHomeSittingSub: "Sophie si prende cura del vostro cane o cucciolo direttamente a casa vostra per la giornata.",
      srvWalk: "Passeggiata di 1 Ora",
      srvWalkSub: "Passeggiata attiva, igiene, idratazione e invio di foto e aggiornamenti.",
      srvCatVisit: "Visita Gatti (Giochi, Cibo, Igiene)",
      srvCatVisitSub: "Visita completa a domicilio con momenti di coccole e attenzioni esclusive.",
      srvCustom: "Custodia a lungo termine, multi-animale o weekend",
      srvCustomSub: "Tariffa degressiva o formula adatta in base alle vostre esigenze",
      certTitle: "Certificata dallo Stato & Assicurata Professionalmente",
      certDesc: "Servizio garantito direttamente da Sophie (diploma di Stato ACACED obbligatorio e assicurazione professionale RC Pro GMF)."
    }
  }[language] || {
    badge: "TRANSPARENT PRIVATE OWNER RATES",
    title: "Our Sitting Services & Rates",
    subtitle: "Trusted pet sitting solutions tailored to your animal's lifestyle. No subscriptions, no hidden fees, and systematic daily updates with photos and videos.",
    btnBook: "Book this service",
    simBadge: "Instant & Transparent Estimator",
    simTitle: "Customize Your Premium Estimate",
    simSub: "Net Rates — Zero Hidden Fees",
    gridTitle: "Rates Overview",
    gridSub: "Check our reference rate card. For specific requests (multi-pet homes, long weekends), please feel free to ask.",
    thService: "Pet Sitting Service",
    thFormat: "Duration / Format",
    thRate: "Net Private Rate",
    rateDay: "Full Day",
    quote: "on quote",
    srvBoardDog: "Dog Boarding at Sitter's Home (Sophie)",
    srvBoardDogSub: "Your dog stays at Sophie's comfortable home. +€10 / day per extra dog.",
    srvBoardCat: "Cat Boarding at Sitter's Home (Sophie)",
    srvBoardCatSub: "Your cat stays at Sophie's quiet, secure and comfortable home.",
    srvHomeSitting: "In-Home Sitting (Dog / Puppy)",
    srvHomeSittingSub: "Sophie takes full care of your dog or puppy at your home during the day",
    srvWalk: "1-Hour Active Walk",
    srvWalkSub: "Active walk, hygiene, hydration, and direct photo updates",
    srvCatVisit: "Cat Visit (Play, Food, Hygiene)",
    srvCatVisitSub: "Detailed home visit with feeding and exclusive cuddle sessions",
    srvCustom: "Long-term stays, multi-pet, or weekends",
    srvCustomSub: "Volume discounts or bespoke schedule based on your needs",
    certTitle: "State Certified & Fully Insured",
    certDesc: "Pet sitting provided directly by Sophie (State-approved ACACED certification and GMF professional liability insurance)."
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-stone-900 text-stone-100 p-8 md:p-14 border border-stone-850 shadow-2xl">
      {/* Decorative Minimal Elements */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 h-52 w-52 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10 text-xs font-mono font-bold tracking-wider text-white uppercase">
            <Sparkles className="h-3.5 w-3.5 text-stone-300 animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-serif font-black leading-tight tracking-tight text-white">
            {t.title}
          </h3>

          <p className="text-stone-350 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {servicesList.map((srv, i) => (
            <div 
              key={i} 
              className="bg-stone-850/40 hover:bg-stone-800/60 p-6 sm:p-8 rounded-2xl border border-stone-800 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-inner relative group"
            >
              <div className="space-y-4">
                {/* Header Icon + Price */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/10 shadow-sm leading-none">
                    {srv.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-black font-mono text-white leading-none">
                      {srv.price}
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      {srv.unit}
                    </span>
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white font-serif">
                    {srv.title}
                  </h4>
                  <p className="text-stone-350 text-xs leading-relaxed font-sans min-h-[50px]">
                    {srv.desc}
                  </p>
                </div>

                {/* Bullets List */}
                <ul className="space-y-2 pt-2 border-t border-stone-800/60">
                  {srv.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-stone-250 font-sans">
                      <span className="text-emerald-500 font-bold">✔</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectFormula(srv.title)}
                className="w-full py-3 bg-white hover:bg-stone-200 text-stone-950 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {t.btnBook}
              </button>
            </div>
          ))}
        </div>

        {/* --- INTERACTIVE LUXURY PRICE ESTIMATOR --- */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-950 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-riviera-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-850 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-riviera-gold font-bold uppercase block">
                {t.simBadge}
              </span>
              <h4 className="text-2xl font-serif font-black text-white">
                {t.simTitle}
              </h4>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-xl border border-white/5 text-xs text-stone-300 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.simSub}</span>
            </div>
          </div>

          <PriceEstimatorWidget language={language} onSelectFormula={onSelectFormula} prices={prices} />
        </div>

        {/* Comparison Rate Table */}
        <div className="pt-6 border-t border-stone-800/60 space-y-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-xl font-serif font-bold text-white tracking-tight">
              {t.gridTitle}
            </h4>
            <p className="text-stone-400 text-xs md:text-sm font-sans max-w-3xl leading-relaxed">
              {t.gridSub}
            </p>
          </div>

          {/* Grille Tarifaire - Version Mobile (optimisée à 100% pour téléphone, sans défilement, extrêmement simple) */}
          <div className="block sm:hidden overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 divide-y divide-stone-800/60 shadow-lg">
            {[
              {
                icon: "🏡",
                title: t.srvBoardDog,
                desc: t.srvBoardDogSub,
                format: t.rateDay,
                rate: `${pBoarding} €`
              },
              {
                icon: "🐈",
                title: t.srvBoardCat,
                desc: t.srvBoardCatSub,
                format: t.rateDay,
                rate: `${pCatBoarding} €`
              },
              {
                icon: "🏠",
                title: t.srvHomeSitting,
                desc: t.srvHomeSittingSub,
                format: t.rateDay,
                rate: `${pHomeSitting} €`
              },
              {
                icon: "🦮",
                title: t.srvWalk,
                desc: t.srvWalkSub,
                format: "1H",
                rate: `${pWalk} €`
              },
              {
                icon: "🐈",
                title: t.srvCatVisit,
                desc: t.srvCatVisitSub,
                format: "45min",
                rate: `${pCatVisit} €`
              },
              {
                icon: "💬",
                title: t.srvCustom,
                desc: t.srvCustomSub,
                format: t.quote,
                rate: t.quote,
                isCustom: true
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => !item.isCustom && onSelectFormula(item.title)}
                className="p-5 flex flex-col gap-3 active:bg-stone-900 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <span className="text-2xl select-none shrink-0" role="img" aria-label="service-icon">{item.icon}</span>
                    <div className="space-y-1">
                      <h5 className={`font-serif font-black text-sm leading-tight ${item.isCustom ? 'text-stone-400' : 'text-white'}`}>
                        {item.title}
                      </h5>
                      <p className="text-stone-400 text-[11px] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-1">
                  <span className="px-2 py-0.5 bg-stone-900 text-stone-300 font-bold rounded-lg font-mono text-[9px] border border-stone-800 uppercase tracking-wider">
                    {item.format}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`font-mono font-black ${item.isCustom ? 'text-xs text-stone-400 italic' : 'text-base text-amber-400'}`}>
                      {item.rate}
                    </span>
                    {!item.isCustom && (
                      <span className="text-stone-500 text-xs">➔</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grille Tarifaire - Version Tableaux pour Bureau / Tablette (visible uniquement sur écran large) */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-stone-850 bg-stone-950 shadow-inner">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-850 font-sans text-left">
                <thead>
                  <tr className="bg-stone-900/85 text-xs font-bold text-stone-300 font-mono tracking-wider">
                    <th scope="col" className="px-6 py-4">{t.thService}</th>
                    <th scope="col" className="px-6 py-4 text-center">{t.thFormat}</th>
                    <th scope="col" className="px-6 py-4 text-right">{t.thRate}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-850 bg-stone-900/20 text-xs text-stone-200">
                  {/* Boarding Sitter - Dog */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span className="text-emerald-500">🏡</span>
                        <span>{t.srvBoardDog}</span>
                      </div>
                      <span className="text-stone-400 text-[10.5px] block mt-1">
                        {t.srvBoardDogSub}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="px-3 py-1 bg-stone-850 text-stone-200 font-bold rounded-lg font-mono border border-stone-700/60 inline-block text-xs">
                        {t.rateDay}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-base font-black font-mono text-white">
                      {pBoarding} €
                    </td>
                  </tr>

                  {/* Boarding Sitter - Cat */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span className="text-emerald-500">🐈</span>
                        <span>{t.srvBoardCat}</span>
                      </div>
                      <span className="text-stone-400 text-[10.5px] block mt-1">
                        {t.srvBoardCatSub}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="px-3 py-1 bg-stone-850 text-stone-200 font-bold rounded-lg font-mono border border-stone-700/60 inline-block text-xs">
                        {t.rateDay}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-base font-black font-mono text-white">
                      {pCatBoarding} €
                    </td>
                  </tr>

                  {/* Day Sitting Client */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span className="text-emerald-500">🏠</span>
                        <span>{t.srvHomeSitting}</span>
                      </div>
                      <span className="text-stone-400 text-[10.5px] block mt-1">
                        {t.srvHomeSittingSub}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="px-3 py-1 bg-stone-850 text-stone-200 font-bold rounded-lg font-mono border border-stone-700/60 inline-block text-xs">
                        {t.rateDay}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-base font-black font-mono text-white">
                      {pHomeSitting} €
                    </td>
                  </tr>

                  {/* 1H Walk */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span className="text-emerald-500">🦮</span>
                        <span>{t.srvWalk}</span>
                      </div>
                      <span className="text-stone-400 text-[10.5px] block mt-1">
                        {t.srvWalkSub}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="px-3 py-1 bg-stone-850 text-stone-200 font-bold rounded-lg font-mono border border-stone-700/60 inline-block text-xs">
                        1H
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-base font-black font-mono text-white">
                      {pWalk} €
                    </td>
                  </tr>

                  {/* Cat Visit */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span className="text-emerald-500">🐈</span>
                        <span>{t.srvCatVisit}</span>
                      </div>
                      <span className="text-stone-400 text-[10.5px] block mt-1">
                        {t.srvCatVisitSub}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="px-3 py-1 bg-stone-850 text-stone-200 font-bold rounded-lg font-mono border border-stone-700/60 inline-block text-xs">
                        45min
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-base font-black font-mono text-white">
                      {pCatVisit} €
                    </td>
                  </tr>

                  {/* Custom Plan */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-sm text-stone-400 flex items-center gap-2">
                        <span className="text-stone-400">💬</span>
                        <span>{t.srvCustom}</span>
                      </div>
                      <span className="text-stone-450 text-[10.5px] block mt-1">
                        {t.srvCustomSub}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="px-3 py-1 bg-stone-850/40 text-stone-300 font-mono rounded-lg inline-block text-[11px] italic">
                        {t.quote}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-xs sm:text-sm font-bold font-mono text-stone-350 italic">
                      {t.quote}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Under-table notes and guarantees */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-5 bg-stone-900 border border-stone-850 rounded-xl text-stone-400 text-[11px] leading-relaxed">
            <div className="flex items-start gap-2.5">
              <span className="text-white text-xs bg-white/10 h-5 w-5 rounded-full flex items-center justify-center font-bold">i</span>
              <div>
                <p className="font-bold text-white text-[11.5px] mb-0.5">
                  {t.certTitle}
                </p>
                <p>
                  {t.certDesc}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 shrink-0">
              <span className="px-2 py-0.5 bg-white/5 text-stone-250 font-bold font-mono rounded border border-white/5">Nice</span>
              <span className="px-2 py-0.5 bg-white/5 text-stone-250 font-bold font-mono rounded border border-white/5">Cannes</span>
              <span className="px-2 py-0.5 bg-white/5 text-stone-250 font-bold font-mono rounded border border-white/5">Monaco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SELF-CONTAINED HIGH-END PRICE ESTIMATOR WIDGET ---
function PriceEstimatorWidget({ 
  language, 
  onSelectFormula,
  prices: propPrices
}: { 
  language: Language; 
  onSelectFormula: (formula: string) => void;
  prices?: {
    boarding: number;
    catBoarding: number;
    homeSitting: number;
    walk: number;
    catVisit: number;
  };
}) {
  const [service, setService] = useState<'boarding' | 'catBoarding' | 'homeSitting' | 'walk' | 'catVisit'>('boarding');
  const [duration, setDuration] = useState(5);
  const [extraDogs, setExtraDogs] = useState(0);

  // Core pricing configuration
  const prices = propPrices ?? {
    boarding: 40,
    catBoarding: 25,
    homeSitting: 50,
    walk: 25,
    catVisit: 20
  };

  const extraDogRate = 10; // € per extra dog per day for boarding

  // Calculate totals
  const baseRate = prices[service];
  const baseTotal = baseRate * duration;
  const extraTotal = service === 'boarding' ? (extraDogs * extraDogRate * duration) : 0;
  const grandTotal = baseTotal + extraTotal;

  const estT = {
    fr: {
      step1: "1. Sélectionnez votre prestation",
      step2: "2. Quantité / Durée",
      spec: "Spécificité Garde chez Sophie",
      extraDogs: "Chiens supplémentaires de la même famille ?",
      extraDogsDesc: `Garde à ${prices.boarding} € pour le premier chien, puis +10 € par jour par chien supplémentaire.`,
      summaryBadge: "Devis Estimatif Net",
      baseRate: "Tarif de base",
      extraSurcharge: "Chiens suppl.",
      insurance: "Assurance GMF & Agrément d'État",
      insuranceVal: "INCLUS",
      intro: "Rencontre préalable à domicile",
      introVal: "OFFERT",
      btnBook: "Réserver avec cette formule",
      inclTaxes: "TVA incluse • Prix Net",
      balades: "balades",
      balade: "balade",
      visites: "visites",
      visite: "visite",
      jours: "jours",
      jour: "jour",
      quoteLabel: "Estimation de devis",
      daysLabel: "jours",
      visitsLabel: "visites",
      walksLabel: "balades",
      withExtraLabel: "avec",
      extraDogsQuoteLabel: "chien(s) supplémentaire(s)",
      totalEstimatedLabel: "Total estimé",
      options: {
        boarding: {
          title: "Garde Chien chez Sophie",
          unit: "/ jour",
          extra: "+10 € / chien suppl."
        },
        catBoarding: {
          title: "Garde Chat chez Sophie",
          unit: "/ jour",
          desc: "Espace calme & douillet"
        },
        homeSitting: {
          title: "Garde à votre Domicile",
          unit: "/ jour",
          desc: "Pour chien ou chiot"
        },
        walk: {
          title: "Promenade Active 1H",
          unit: "/ balade",
          desc: "Parcs, mer & forêt"
        },
        catVisit: {
          title: "Visite Chat (45 min)",
          unit: "/ visite",
          desc: "Jeux, litière & câlins"
        }
      }
    },
    en: {
      step1: "1. Choose Your Sitting Service",
      step2: "2. Quantity / Duration",
      spec: "Sitter Boarding Option",
      extraDogs: "Additional dogs from same family?",
      extraDogsDesc: `Regular ${prices.boarding} € rate for the first companion, then +10 € per day for each extra dog.`,
      summaryBadge: "Estimated Quote Summary",
      baseRate: "Base rate",
      extraSurcharge: "Extra dog surcharge",
      insurance: "GMF Liability Insurance & Licensing",
      insuranceVal: "INCLUDED",
      intro: "Initial introduction visit",
      introVal: "FREE",
      btnBook: "Pre-book with this formula",
      inclTaxes: "All inclusive • Net Price",
      balades: "walks",
      balade: "walk",
      visites: "visits",
      visite: "visit",
      jours: "days",
      jour: "day",
      quoteLabel: "Estimated Quote",
      daysLabel: "days",
      visitsLabel: "visits",
      walksLabel: "walks",
      withExtraLabel: "with",
      extraDogsQuoteLabel: "additional dog(s)",
      totalEstimatedLabel: "Estimated Total",
      options: {
        boarding: {
          title: "Dog Boarding at Sophie's",
          unit: "/ day",
          extra: "+10 € / extra dog"
        },
        catBoarding: {
          title: "Cat Boarding at Sophie's",
          unit: "/ day",
          desc: "Quiet & cozy environment"
        },
        homeSitting: {
          title: "In-Home Sitting (Dog/Puppy)",
          unit: "/ day",
          desc: "For dog or puppy"
        },
        walk: {
          title: "1-Hour Active Walk",
          unit: "/ walk",
          desc: "Coastal or park routes"
        },
        catVisit: {
          title: "45-Min Cat Visit",
          unit: "/ visit",
          desc: "Bespoke feeding & care"
        }
      }
    },
    ru: {
      step1: "1. Выберите услугу ухода",
      step2: "2. Количество / Продолжительность",
      spec: "Опция передержки у ситтера",
      extraDogs: "Дополнительные собаки из той же семьи?",
      extraDogsDesc: `Обычный тариф ${prices.boarding} € за первую собаку, затем +10 € за каждый день для каждой дополнительной собаки.`,
      summaryBadge: "Итоговый Расчет (оценка)",
      baseRate: "Базовый тариф",
      extraSurcharge: "Доплата за доп. собак",
      insurance: "Страхование ответственности GMF & Лицензия",
      insuranceVal: "ВКЛЮЧЕНО",
      intro: "Первая встреча-знакомство",
      introVal: "БЕСПЛАТНО",
      btnBook: "Забронировать по этой стоимости",
      inclTaxes: "Все налоги включены • Чистая Цена",
      balades: "прогулок",
      balade: "прогулка",
      visites: "визитов",
      visite: "визит",
      jours: "дней",
      jour: "день",
      quoteLabel: "Оценка стоимости",
      daysLabel: "дней",
      visitsLabel: "визитов",
      walksLabel: "прогулок",
      withExtraLabel: "с",
      extraDogsQuoteLabel: "дополнительной собакой(ами)",
      totalEstimatedLabel: "Итоговая цена",
      options: {
        boarding: {
          title: "Передержка собак у Софи",
          unit: "/ день",
          extra: "+10 € / доп. собака"
        },
        catBoarding: {
          title: "Передержка кошек у Софи",
          unit: "/ день",
          desc: "Тихая и уютная обстановка"
        },
        homeSitting: {
          title: "Дневной уход у вас дома",
          unit: "/ день",
          desc: "Для собак и щенков"
        },
        walk: {
          title: "Активная прогулка 1 час",
          unit: "/ прогулка",
          desc: "Маршруты в парке или у моря"
        },
        catVisit: {
          title: "Визит к кошке (45 мин)",
          unit: "/ визит",
          desc: "Игры, чистка лотка и уход"
        }
      }
    },
    uk: {
      step1: "1. Оберіть послугу догляду",
      step2: "2. Кількість / Тривалість",
      spec: "Опція перетримки у ситтера",
      extraDogs: "Додаткові собаки з тієї ж родини?",
      extraDogsDesc: `Звичайний тариф ${prices.boarding} € за першу собаку, потім +10 € за кожен день для кожної додаткової собаки.`,
      summaryBadge: "Підсумковий Розрахунок (оцінка)",
      baseRate: "Базовий тариф",
      extraSurcharge: "Доплата за дод. собак",
      insurance: "Страховання відповідальності GMF & Ліцензія",
      insuranceVal: "ВКЛЮЧЕНО",
      intro: "Перша зустріч-знайомство",
      introVal: "БЕЗКОШТОВНО",
      btnBook: "Забронювати за цією вартістю",
      inclTaxes: "Усі податки включено • Чиста Ціна",
      balades: "прогулянок",
      balade: "прогулянка",
      visites: "візитів",
      visite: "візит",
      jours: "днів",
      jour: "день",
      quoteLabel: "Оцінка вартості",
      daysLabel: "днів",
      visitsLabel: "візитів",
      walksLabel: "прогулянок",
      withExtraLabel: "з",
      extraDogsQuoteLabel: "додатковою собакою(ами)",
      totalEstimatedLabel: "Кінцева ціна",
      options: {
        boarding: {
          title: "Перетримка собак у Софі",
          unit: "/ день",
          extra: "+10 € / дод. собака"
        },
        catBoarding: {
          title: "Перетримка котів у Софі",
          unit: "/ день",
          desc: "Тиха та затишна обстановка"
        },
        homeSitting: {
          title: "Денний догляд у вас вдома",
          unit: "/ день",
          desc: "Для собак та цуценят"
        },
        walk: {
          title: "Активна прогулянка 1 година",
          unit: "/ прогулянка",
          desc: "Маршруты в парку або біля моря"
        },
        catVisit: {
          title: "Візит до кота (45 хв)",
          unit: "/ візит",
          desc: "Ігри, чищення лотка та турбота"
        }
      }
    },
    it: {
      step1: "1. Seleziona la tua prestazione",
      step2: "2. Quantità / Durata",
      spec: "Opzione Pensione da Sophie",
      extraDogs: "Cani aggiuntivi della stessa famiglia?",
      extraDogsDesc: `Tariffa regolare di ${prices.boarding} € per il primo cane, poi +10 € al giorno per ogni cane aggiuntivo.`,
      summaryBadge: "Riepilogo Preventivo Stimato",
      baseRate: "Tariffa base",
      extraSurcharge: "Supplemento can extra",
      insurance: "Assicurazione Responsabilità GMF & Licenza",
      insuranceVal: "INCLUSO",
      intro: "Incontro preventivo gratuito a domicilio",
      introVal: "GRATUITO",
      btnBook: "Prenotare con questa formula",
      inclTaxes: "Tasse incluse • Prezzo Netto",
      balades: "passeggiate",
      balade: "passeggiata",
      visites: "visite",
      visite: "visita",
      jours: "giorni",
      jour: "giorno",
      quoteLabel: "Preventivo Stimato",
      daysLabel: "giorni",
      visitsLabel: "visite",
      walksLabel: "passeggiate",
      withExtraLabel: "con",
      extraDogsQuoteLabel: "cane(i) aggiuntivo(i)",
      totalEstimatedLabel: "Prezzo totale stimato",
      options: {
        boarding: {
          title: "Pensione Cani da Sophie",
          unit: "/ giorno",
          extra: "+10 € / cane aggiuntivo"
        },
        catBoarding: {
          title: "Pensione Gatti da Sophie",
          unit: "/ giorno",
          desc: "Ambiente tranquillo & accogliente"
        },
        homeSitting: {
          title: "Sitter a Domicilio",
          unit: "/ giorno",
          desc: "Per cane o cucciolo"
        },
        walk: {
          title: "Passeggiata di 1 Ora",
          unit: "/ passeggiata",
          desc: "Percorsi costieri o parchi"
        },
        catVisit: {
          title: "Visita Gatti (45 min)",
          unit: "/ visita",
          desc: "Giochi, lettiera & coccole"
        }
      }
    },
    de: {
      step1: "1. Wählen Sie Ihre Leistung",
      step2: "2. Menge / Dauer",
      spec: "Sitter-Unterbringung Option",
      extraDogs: "Zusätzliche Hunde aus derselben Familie?",
      extraDogsDesc: `Regulärer Tarif von ${prices.boarding} € für den ersten Begleiter, dann +10 € pro Tag für jeden zusätzlichen Hund.`,
      summaryBadge: "Geschätzte Angebotsübersicht",
      baseRate: "Basistarif",
      extraSurcharge: "Zuschlag für zusätzliche Hunde",
      insurance: "GMF Haftpflichtversicherung & Lizenz",
      insuranceVal: "INKLUSIVE",
      intro: "Kostenloser Erstbesuch zum Kennenlernen",
      introVal: "KOSTENLOS",
      btnBook: "Mit diesem Paket buchen",
      inclTaxes: "Inklusive aller Steuern • Nettopreis",
      balades: "Spaziergänge",
      balade: "Spaziergang",
      visites: "Besuche",
      visite: "Besuch",
      jours: "Tage",
      jour: "Tag",
      quoteLabel: "Geschätztes Angebot",
      daysLabel: "Tage",
      visitsLabel: "Besuche",
      walksLabel: "Spaziergänge",
      withExtraLabel: "mit",
      extraDogsQuoteLabel: "zusätzliche(r) Hund(e)",
      totalEstimatedLabel: "Geschätzter Gesamtpreis",
      options: {
        boarding: {
          title: "Hundeunterbringung bei Sophie",
          unit: "/ Tag",
          extra: "+10 € / zusätzlicher Hund"
        },
        catBoarding: {
          title: "Katzenunterbringung bei Sophie",
          unit: "/ Tag",
          desc: "Ruhige & gemütliche Umgebung"
        },
        homeSitting: {
          title: "Tierbetreuung bei Ihnen zu Hause",
          unit: "/ Tag",
          desc: "Für Hunde oder Welpen"
        },
        walk: {
          title: "Aktiver Spaziergang 1 Std.",
          unit: "/ Spaziergang",
          desc: "Parks, Strand oder Wald"
        },
        catVisit: {
          title: "Katzenbesuch (45 Min.)",
          unit: "/ Besuch",
          desc: "Spielen, Katzenklo & Kuscheln"
        }
      }
    }
  }[language] || {
    step1: "1. Choose Your Sitting Service",
    step2: "2. Quantity / Duration",
    spec: "Sitter Boarding Option",
    extraDogs: "Additional dogs from same family?",
    extraDogsDesc: `Regular ${prices.boarding} € rate for the first companion, then +10 € per day for each extra dog.`,
    summaryBadge: "Estimated Quote Summary",
    baseRate: "Base rate",
    extraSurcharge: "Extra dog surcharge",
    insurance: "GMF Liability Insurance & Licensing",
    insuranceVal: "INCLUDED",
    intro: "Initial introduction visit",
    introVal: "FREE",
    btnBook: "Pre-book with this formula",
    inclTaxes: "All inclusive • Net Price",
    balades: "walks",
    balade: "walk",
    visites: "visits",
    visite: "visit",
    jours: "days",
    jour: "day",
    quoteLabel: "Estimated Quote",
    daysLabel: "days",
    visitsLabel: "visits",
    walksLabel: "walks",
    withExtraLabel: "with",
    extraDogsQuoteLabel: "additional dog(s)",
    totalEstimatedLabel: "Estimated Total",
    options: {
      boarding: {
        title: "Dog Boarding at Sophie's",
        unit: "/ day",
        extra: "+10 € / extra dog"
      },
      catBoarding: {
        title: "Cat Boarding at Sophie's",
        unit: "/ day",
        desc: "Quiet & cozy environment"
      },
      homeSitting: {
        title: "In-Home Sitting (Dog/Puppy)",
        unit: "/ day",
        desc: "For dog or puppy"
      },
      walk: {
        title: "1-Hour Active Walk",
        unit: "/ walk",
        desc: "Coastal or park routes"
      },
      catVisit: {
        title: "45-Min Cat Visit",
        unit: "/ visit",
        desc: "Bespoke feeding & care"
      }
    }
  };

  const handleBook = () => {
    const serviceLabel = estT.options[service].title;
    const unitNoun = service === 'walk' 
      ? (duration > 1 ? estT.walksLabel : estT.balade)
      : service === 'catVisit'
        ? (duration > 1 ? estT.visitsLabel : estT.visite)
        : (duration > 1 ? estT.daysLabel : estT.jour);

    const extraString = extraDogs > 0 
      ? ` (${estT.withExtraLabel} ${extraDogs} ${estT.extraDogsQuoteLabel})` 
      : "";

    const summary = `${estT.quoteLabel} : ${serviceLabel} - ${duration} ${unitNoun}${extraString} - ${estT.totalEstimatedLabel} : ${grandTotal} €`;

    onSelectFormula(summary);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left panel: Inputs & Controls */}
      <div className="lg:col-span-7 space-y-6">
        {/* Step 1: Select Service Formule */}
        <div className="space-y-3">
          <label className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider block">
            {estT.step1}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Dog Boarding at Sophie's */}
            <button
              type="button"
              onClick={() => { setService('boarding'); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 relative overflow-hidden ${
                service === 'boarding'
                  ? 'border-riviera-gold bg-stone-850 ring-1 ring-riviera-gold/30'
                  : 'border-stone-800 bg-stone-900/40 hover:bg-stone-900/90'
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${service === 'boarding' ? 'bg-riviera-gold text-stone-950' : 'bg-white/5 text-white'}`}>
                <Home className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block font-serif font-bold text-sm text-white">
                  {estT.options.boarding.title}
                </span>
                <span className="block text-[11px] text-stone-400">
                  {prices.boarding} € <span className="font-mono text-[9px]">{estT.options.boarding.unit}</span>
                </span>
                <span className="block text-[9.5px] text-riviera-gold font-mono font-medium">
                  {estT.options.boarding.extra}
                </span>
              </div>
              {service === 'boarding' && (
                <span className="absolute top-3 right-3 text-xs bg-riviera-gold text-stone-950 px-1.5 py-0.5 rounded font-bold font-mono">OK</span>
              )}
            </button>

            {/* Cat Boarding at Sophie's */}
            <button
              type="button"
              onClick={() => { setService('catBoarding'); setExtraDogs(0); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 relative overflow-hidden ${
                service === 'catBoarding'
                  ? 'border-riviera-gold bg-stone-850 ring-1 ring-riviera-gold/30'
                  : 'border-stone-800 bg-stone-900/40 hover:bg-stone-900/90'
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${service === 'catBoarding' ? 'bg-riviera-gold text-stone-950' : 'bg-white/5 text-white'}`}>
                <Heart className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block font-serif font-bold text-sm text-white">
                  {estT.options.catBoarding.title}
                </span>
                <span className="block text-[11px] text-stone-400">
                  {prices.catBoarding} € <span className="font-mono text-[9px]">{estT.options.catBoarding.unit}</span>
                </span>
                <span className="block text-[9.5px] text-stone-400 font-sans italic">
                  {estT.options.catBoarding.desc}
                </span>
              </div>
              {service === 'catBoarding' && (
                <span className="absolute top-3 right-3 text-xs bg-riviera-gold text-stone-950 px-1.5 py-0.5 rounded font-bold font-mono">OK</span>
              )}
            </button>

            {/* In-home Day Sitting */}
            <button
              type="button"
              onClick={() => { setService('homeSitting'); setExtraDogs(0); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 relative overflow-hidden ${
                service === 'homeSitting'
                  ? 'border-riviera-gold bg-stone-850 ring-1 ring-riviera-gold/30'
                  : 'border-stone-800 bg-stone-900/40 hover:bg-stone-900/90'
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${service === 'homeSitting' ? 'bg-riviera-gold text-stone-950' : 'bg-white/5 text-white'}`}>
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block font-serif font-bold text-sm text-white">
                  {estT.options.homeSitting.title}
                </span>
                <span className="block text-[11px] text-stone-400">
                  {prices.homeSitting} € <span className="font-mono text-[9px]">{estT.options.homeSitting.unit}</span>
                </span>
                <span className="block text-[9.5px] text-stone-400 font-sans italic">
                  {estT.options.homeSitting.desc}
                </span>
              </div>
              {service === 'homeSitting' && (
                <span className="absolute top-3 right-3 text-xs bg-riviera-gold text-stone-950 px-1.5 py-0.5 rounded font-bold font-mono">OK</span>
              )}
            </button>

            {/* Active Walk */}
            <button
              type="button"
              onClick={() => { setService('walk'); setExtraDogs(0); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 relative overflow-hidden ${
                service === 'walk'
                  ? 'border-riviera-gold bg-stone-850 ring-1 ring-riviera-gold/30'
                  : 'border-stone-800 bg-stone-900/40 hover:bg-stone-900/90'
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${service === 'walk' ? 'bg-riviera-gold text-stone-950' : 'bg-white/5 text-white'}`}>
                <Clock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block font-serif font-bold text-sm text-white">
                  {estT.options.walk.title}
                </span>
                <span className="block text-[11px] text-stone-400">
                  {prices.walk} € <span className="font-mono text-[9px]">{estT.options.walk.unit}</span>
                </span>
                <span className="block text-[9.5px] text-stone-400 font-sans italic">
                  {estT.options.walk.desc}
                </span>
              </div>
              {service === 'walk' && (
                <span className="absolute top-3 right-3 text-xs bg-riviera-gold text-stone-950 px-1.5 py-0.5 rounded font-bold font-mono">OK</span>
              )}
            </button>

            {/* Cat Visit */}
            <button
              type="button"
              onClick={() => { setService('catVisit'); setExtraDogs(0); }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 relative overflow-hidden ${
                service === 'catVisit'
                  ? 'border-riviera-gold bg-stone-850 ring-1 ring-riviera-gold/30'
                  : 'border-stone-800 bg-stone-900/40 hover:bg-stone-900/90'
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${service === 'catVisit' ? 'bg-riviera-gold text-stone-950' : 'bg-white/5 text-white'}`}>
                <Heart className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block font-serif font-bold text-sm text-white">
                  {estT.options.catVisit.title}
                </span>
                <span className="block text-[11px] text-stone-400">
                  {prices.catVisit} € <span className="font-mono text-[9px]">{estT.options.catVisit.unit}</span>
                </span>
                <span className="block text-[9.5px] text-stone-400 font-sans italic">
                  {estT.options.catVisit.desc}
                </span>
              </div>
              {service === 'catVisit' && (
                <span className="absolute top-3 right-3 text-xs bg-riviera-gold text-stone-950 px-1.5 py-0.5 rounded font-bold font-mono">OK</span>
              )}
            </button>
          </div>
        </div>

        {/* Step 2: Duration / Frequency Selector */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
              {estT.step2}
            </label>
            <span className="font-mono text-sm font-bold text-white">
              {duration} {
                service === 'walk' 
                  ? (duration > 1 ? estT.balades : estT.balade)
                  : service === 'catVisit' 
                    ? (duration > 1 ? estT.visites : estT.visite)
                    : (duration > 1 ? estT.jours : estT.jour)
              }
            </span>
          </div>

          <div className="flex items-center gap-4 bg-stone-950 p-2.5 rounded-2xl border border-stone-850">
            <button
              type="button"
              onClick={() => setDuration(prev => Math.max(1, prev - 1))}
              className="h-11 w-11 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-white hover:bg-stone-800 transition-all cursor-pointer active:scale-90"
              title="Diminuer"
            >
              <Minus className="h-5 w-5" />
            </button>
            
            {/* Hidden Input but nice responsive visual slider */}
            <input 
              type="range" 
              min="1" 
              max="30" 
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
              className="flex-grow accent-riviera-gold cursor-pointer h-1.5 rounded-lg bg-stone-800"
            />

            <button
              type="button"
              onClick={() => setDuration(prev => Math.min(30, prev + 1))}
              className="h-11 w-11 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-white hover:bg-stone-800 transition-all cursor-pointer active:scale-90"
              title="Augmenter"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Step 3: Additional Dog Surcharge (Only for Boarding) */}
        {service === 'boarding' && (
          <div className="p-5 bg-stone-950 rounded-2xl border border-stone-850 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <span className="inline-flex bg-riviera-gold/15 text-riviera-gold font-mono font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border border-riviera-gold/20">
                  {estT.spec}
                </span>
                <h5 className="font-serif font-bold text-sm text-white">
                  {estT.extraDogs}
                </h5>
                <p className="text-[10.5px] text-stone-450 leading-relaxed font-sans">
                  {estT.extraDogsDesc}
                </p>
              </div>
              
              <div className="flex items-center gap-2.5 bg-stone-900 border border-stone-800 p-1.5 rounded-xl">
                <button
                  type="button"
                  onClick={() => setExtraDogs(prev => Math.max(0, prev - 1))}
                  className="h-8 w-8 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center text-white hover:bg-stone-800 cursor-pointer active:scale-90"
                  disabled={extraDogs === 0}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-mono text-sm font-black text-white px-2 w-5 text-center">
                  {extraDogs}
                </span>
                <button
                  type="button"
                  onClick={() => setExtraDogs(prev => Math.min(3, prev + 1))}
                  className="h-8 w-8 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center text-white hover:bg-stone-800 cursor-pointer active:scale-90"
                  disabled={extraDogs === 3}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right panel: Custom live Quote Receipt Card */}
      <div className="lg:col-span-5 bg-stone-950 rounded-2xl border border-stone-850 p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 h-28 w-28 bg-white/5 rounded-full blur-xl"></div>
        
        <div className="space-y-4 relative">
          <div className="flex items-center gap-2 text-stone-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Calculator className="h-4 w-4 text-riviera-gold" />
            <span>{estT.summaryBadge}</span>
          </div>
          
          <div className="border-t border-dashed border-stone-800 pt-4 space-y-3 font-sans text-xs">
            {/* Row 1: Base sitting */}
            <div className="flex justify-between text-stone-350">
              <span>
                {estT.baseRate} ({baseRate} € x {duration} {
                  service === 'walk' 
                    ? estT.balades 
                    : service === 'catVisit' 
                      ? estT.visites 
                      : estT.jours
                })
              </span>
              <span className="font-mono text-white font-semibold">{baseTotal} €</span>
            </div>

            {/* Row 2: Extra dogs (if applicable) */}
            {service === 'boarding' && extraDogs > 0 && (
              <div className="flex justify-between text-riviera-gold animate-in fade-in duration-200">
                <span>
                  {estT.extraSurcharge} ({extraDogs} x {extraDogRate} € x {duration} {estT.jours})
                </span>
                <span className="font-mono font-semibold">+{extraTotal} €</span>
              </div>
            )}

            {/* Row 3: Assurance & Guarantee inclusion */}
            <div className="flex justify-between text-stone-450 border-t border-stone-900 pt-3">
              <span>{estT.insurance}</span>
              <span className="text-emerald-500 font-bold uppercase text-[10px] tracking-wider">{estT.insuranceVal}</span>
            </div>

            <div className="flex justify-between text-stone-450">
              <span>{estT.intro}</span>
              <span className="text-emerald-500 font-bold uppercase text-[10px] tracking-wider">{estT.introVal}</span>
            </div>
          </div>
        </div>

        {/* Huge dynamic Total visualizer */}
        <div className="bg-stone-900 rounded-xl p-4 border border-stone-850 flex items-center justify-between">
          <span className="text-xs font-serif font-bold text-white uppercase tracking-wide">TOTAL</span>
          <div className="text-right">
            <span className="block text-3xl sm:text-4xl font-black font-mono text-white leading-none">
              {grandTotal} €
            </span>
            <span className="text-[9.5px] text-stone-400 font-mono">
              {estT.inclTaxes}
            </span>
          </div>
        </div>

        {/* CTA Button to submit estimate */}
        <button
          type="button"
          onClick={handleBook}
          className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-xs tracking-widest uppercase rounded-xl shadow-lg hover:shadow-amber-500/10 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{estT.btnBook}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
