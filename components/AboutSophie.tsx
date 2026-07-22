import { useState } from 'react';
import { Award, ShieldCheck, Clock, Heart, GraduationCap, Globe, CheckCircle2, BookOpen, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface AboutSophieProps {
  language: Language;
  prices?: {
    boarding: number;
    catBoarding: number;
    homeSitting: number;
    walk: number;
    catVisit: number;
  };
}

export default function AboutSophie({ language, prices }: AboutSophieProps) {
  // Dynamic prices fallback
  const pBoarding = prices?.boarding ?? 40;
  const pCatBoarding = prices?.catBoarding ?? 25;
  const pHomeSitting = prices?.homeSitting ?? 50;

  const content = {
    fr: {
      sectionTitle: "Qui suis-je ?",
      sectionSubtitle: "Sophie — Accompagnement de confiance certifié d'État pour vos compagnons de vie.",
      badgeText: "PROFIL LUXE & INTERNATIONAL",
      storyTitle: "Bonjour, je m'appelle Sophie !",
      storyText1: "Passionnée de bien-être animal depuis 10 ans, je veille sur vos compagnons avec amour et dévouement.",
      storyText2: "D'origine franco-allemande et diplômée de l'ESSEC, j'ai été juriste à Monaco et j'ai travaillé pour de grandes maisons de luxe ainsi qu'en événementiel de prestige avant de m'installer sur la Côte d'Azur. Ce profil d'exception alliant rigueur juridique et standards du luxe me permet d'offrir une discrétion absolue, une organisation méticuleuse et une parfaite adaptabilité. Je parle couramment 4 langues (français, anglais, allemand, russe) pour accueillir et rassurer sereinement une clientèle haut de gamme locale et internationale. Je suis également formatrice pour les futurs pet-sitters préparant l'ACACED (la certification d'État) et j'ai rédigé mes propres manuels de préparation disponibles sur Amazon.",
      storyText3: `Garde de chien chez moi à ${pBoarding} € / jour, garde de chat chez le pet sitter à ${pCatBoarding} € / jour, et garde à votre domicile à ${pHomeSitting} € / jour pour chien ou chiot. Services haut de gamme sur-mesure de Nice à Monaco.`,
      credentialsTitle: "Garanties de Confiance",
      credential1Title: "Agréée d'État ACACED",
      credential1Desc: "Attestation obligatoire délivrée par la DDPP.",
      credential2Title: "Assurance GMF",
      credential2Desc: "RC Pro complète chez GMF couvrant la garde d'animaux.",
      credential3Title: "Profil Multilingue",
      credential3Desc: "4 langues parlées couramment pour une communication VIP.",
      sidebarHeader: "Sophie, 26 ans",
      sidebarLocation: "Nice & Monaco",
      sidebarStatsTitle: "Langues parlées :",
      statYears: "4 Langues",
      statYearsLabel: "Français, Anglais, Allemand, Russe",
      statCert: "Agréée GMF",
      statCertLabel: "ACACED & RC Pro GMF",
      sidebarStatsTitlePrivate: "Informations",
      statEducation: "Monaco & Luxe",
      statEducationLabel: "Ex-Juriste Monaco • ESSEC • Luxe",
      sloganQuote: "« Offrir une attention attentionnée et de l'amour sincère à l'être qui vous est le plus cher. »",
      bookSectionTitle: "Tu veux devenir Pet-Sitter ?",
      bookSectionSubtitle: "Réussissez votre ACACED avec les ouvrages de référence de Sophie",
      bookSectionDesc: "Formatrice agréée pour les élèves qui préparent l'ACACED (Accréditation d'État obligatoire pour exercer avec les animaux de compagnie), Sophie a rédigé ces manuels d'étude complets certifiés Qualiopi. Ils incluent le programme complet de formation, des fiches de révision illustrées, et 100 QCM d'entraînement pour vous préparer efficacement à l'examen officiel. Disponibles immédiatement sur Amazon en formats Ebook et imprimés (brochés).",
      bookCatTitle: "Manuel ACACED — Spécialité Chats",
      bookDogTitle: "Manuel ACACED — Spécialité Chien",
      bookFeatures: ["Programme Complet 2026", "Fiches de Révision illustrées", "100 QCM d'Entraînement", "Conforme Qualiopi"],
      bookShopBtn: "Commander sur Amazon",
      bookBadgeEbook: "Disponible en eBook",
      bookBadgePaperback: "Disponible en Broché",
    },
    en: {
      sectionTitle: "Who am I?",
      sectionSubtitle: "Sophie — Certified trusted caring companion for your beloved pets.",
      badgeText: "LUXURY & INTERNATIONAL PROFILE",
      storyTitle: "Hello, I'm Sophie!",
      storyText1: "Deeply passionate about animals for 10+ years, I look after your beloved pets with absolute care and devotion.",
      storyText2: "Of Franco-German origin and an ESSEC alumna, I served as a legal counsel in Monaco and worked for major luxury houses and prestigious events before settling on the French Riviera. This unique background, combining legal rigor with ultra-luxury standards, allows me to provide absolute discretion, meticulous organization, and adaptability. I speak 4 languages fluently (French, English, German, Russian) to seamlessly assist our elite local and international clientele. I am also a state-certified ACACED instructor for future professional pet sitters and have authored my own study preparation guides available on Amazon.",
      storyText3: `Dog boarding at my home for €${pBoarding}/day, cat boarding at the pet sitter's for €${pCatBoarding}/day, and in-home sitting for €${pHomeSitting}/day for dogs or puppies. Premium tailor-made services from Nice to Monaco.`,
      credentialsTitle: "Trusted Credentials",
      credential1Title: "Official ACACED License",
      credential1Desc: "State-approved certification for professional pet sitting.",
      credential2Title: "GMF Insurance",
      credential2Desc: "Comprehensive civil liability insurance with GMF.",
      credential3Title: "Multilingual Care",
      credential3Desc: "4 languages spoken fluently for seamless VIP contact.",
      sidebarHeader: "Sophie, 26 yo",
      sidebarLocation: "Nice & Monaco",
      sidebarStatsTitle: "Languages spoken:",
      statYears: "4 Languages",
      statYearsLabel: "French, English, German, Russian",
      statCert: "GMF Insured",
      statCertLabel: "ACACED & GMF RC Pro",
      statEducation: "Monaco & Luxury",
      statEducationLabel: "Ex-Jurist Monaco • ESSEC • Luxury",
      sloganQuote: "“Providing absolute safety standards and sincere love for your family member.”",
      bookSectionTitle: "Want to Become a Pet Sitter?",
      bookSectionSubtitle: "Pass your ACACED exam with Sophie's reference books",
      bookSectionDesc: "As an official trainer for students preparing for the ACACED (the French State-certified mandatory pet care license), Sophie authored these comprehensive Qualiopi-certified training manuals. They include the full study syllabus, clear visual revision cards, and 100 practice mock MCQs to guarantee your exam success. Available immediately on Amazon in both Kindle eBook and printed/paperback formats.",
      bookCatTitle: "ACACED Manual — Cats Specialty",
      bookDogTitle: "ACACED Manual — Dogs Specialty",
      bookFeatures: ["Complete 2026 Syllabus", "Illustrated Revision Sheets", "100 Practice MCQs", "Qualiopi Certified"],
      bookShopBtn: "Order on Amazon",
      bookBadgeEbook: "Available in eBook",
      bookBadgePaperback: "Available in Paperback",
    },
    ru: {
      sectionTitle: "Обо мне",
      sectionSubtitle: "Софи — Сертифицированный государственный специалист, которому доверяют питомцев.",
      badgeText: "ПРЕМИАЛЬНЫЙ И МЕЖДУНАРОДНЫЙ ПРОФИЛЬ",
      storyTitle: "Здравствуйте, я Софи!",
      storyText1: "С любовью и заботой оберегаю ваших питомцев уже более 10 лет, окружая их заботой и преданностью.",
      storyText2: "Франко-немецкого происхождения, выпускница бизнес-школы ESSEC, я работала юристом в Монако, а также сотрудничала с крупными модными домами класса люкс и престижными ивент-агентствами, прежде чем обосноваться на Лазурном Берегу. Этот уникальный опыт, сочетающий юридическую строгость и стандарты ультра-роскоши, позволяет мне гарантировать абсолютную надежность, конфиденциальность и гибкость. Я свободно говорю на 4 языках (французском, английском, немецком, русском), помогая премиальным местным и иностранным клиентам чувствовать себя спокойно. Также я являюсь преподавателем для будущих пет-ситтеров, сдающих экзамен ACACED, и написала собственные учебные пособия, доступные на Amazon.",
      storyText3: `Домашняя передержка собак у меня за ${pBoarding} € / день, передержка кошек за ${pCatBoarding} € / день и визиты/сиделка у вас дома за ${pHomeSitting} € / день для собак и щенков. Высококлассный индивидуальный уход от Ниццы до Монако.`,
      credentialsTitle: "Гарантии доверия",
      credential1Title: "Гос. лицензия ACACED",
      credential1Desc: "Обязательный сертификат, выданный DDPP Франции.",
      credential2Title: "Страхование GMF",
      credential2Desc: "Полное профессиональное страхование гражданской ответственности в GMF.",
      credentialsTitle3: "Мультиязычный уход",
      credential3Desc: "Свободное общение на 4 языках для максимального комфорта VIP-клиентов.",
      sidebarHeader: "Софи, 26 лет",
      sidebarLocation: "Ницца и Монако",
      sidebarStatsTitle: "Языки общения:",
      statYears: "4 языка",
      statYearsLabel: "Французский, Английский, Немецкий, Русский",
      statCert: "Застраховано GMF",
      statCertLabel: "ACACED и страховка RC Pro GMF",
      sidebarStatsTitlePrivate: "Информация",
      statEducation: "Монако и Люкс",
      statEducationLabel: "Экс-юрист Монако • ESSEC • Люкс",
      sloganQuote: "«Дарить искреннюю любовь и абсолютную безопасность тем, кто вам особенно дорог»",
      bookSectionTitle: "Хотите стать профессиональным пет-ситтером?",
      bookSectionSubtitle: "Успешно сдайте экзамен ACACED с помощью учебников Софи",
      bookSectionDesc: "Будучи сертифицированным преподавателем для студентов, сдающих экзамен на государственный сертификат ACACED (обязательная аккредитация для работы с домашними животными во Франции), Софи подготовила эти полные учебные пособия, соответствующие стандартам Qualiopi. Они включают официальную программу обучения, наглядные конспекты и 100 тренировочных тестов. Книги доступны на Amazon в электронном и печатном форматах.",
      bookCatTitle: "Руководство ACACED — Специализация «Кошки»",
      bookDogTitle: "Руководство ACACED — Специализация «Собаки»",
      bookFeatures: ["Полная программа 2026", "Иллюстрированные конспекты", "100 практических тестов", "Стандарт Qualiopi"],
      bookShopBtn: "Купить на Amazon",
      bookBadgeEbook: "Доступно в eBook",
      bookBadgePaperback: "Доступно в бумажном виде",
    },
    uk: {
      sectionTitle: "Про мене",
      sectionSubtitle: "Софі — Сертифікований державний спеціаліст, якому довіряють улюбленців.",
      badgeText: "ПРЕМІАЛЬНИЙ ТА МІЖНАРОДНИЙ ПРОФІЛЬ",
      storyTitle: "Привіт, я Софі!",
      storyText1: "З любов'ю та турботою піклуюсь про ваших улюбленців уже понад 10 років, даруючи їм тепло і захист.",
      storyText2: "Франко-німецького походження, випускниця ESSEC, я працювала юристом у Монако, а також співпрацювала з великими будинками моди класу люкс та престижними івент-агентствами, перш ніж переїхати на Блакитне узбережжя. Цей унікальний досвід, що поєднує юридичну суворість та стандарти ультра-розкоші, дозволяє мені гарантувати абсолютну надійність, конфіденційність та гнучкість. Я вільно спілкуюся 4 мовами (французькою, англійською, німецькою, російською) для комфорту VIP-клієнтів. Також я викладаю курс підготовки до іспиту ACACED для майбутніх пет-ситтерів і видала власні навчальні посібники, які можна придбати на Amazon.",
      storyText3: `Домашня перетримка собак у мене за ${pBoarding} € / день, перетримка котів за ${pCatBoarding} € / день та догляд у вас вдома за ${pHomeSitting} € / день для собак або цуценят. Першокласні послуги на будь-який смак від Ніцци до Монако.`,
      credentialsTitle: "Гарантії довіри",
      credential1Title: "Держ. ліцензія ACACED",
      credential1Desc: "Обов'язковий професійний сертифікат від DDPP Франції.",
      credential2Title: "Страхування GMF",
      credential2Desc: "Повне професійне страхування відповідальності в GMF.",
      credential3Title: "Мультимовний догляд",
      credential3Desc: "Вільне володіння 4 мовами для комфортного спілкування.",
      sidebarHeader: "Софі, 26 років",
      sidebarLocation: "Ніцца та Монако",
      sidebarStatsTitle: "Мови спілкування:",
      statYears: "4 мови",
      statYearsLabel: "Французька, Англійська, Німецька, Російська",
      statCert: "Застраховано GMF",
      statCertLabel: "ACACED та страховка RC Pro GMF",
      sidebarStatsTitlePrivate: "Інформація",
      statEducation: "Монако та Люкс",
      statEducationLabel: "Екс-юрист Монако • ESSEC • Люкс",
      sloganQuote: "«Дарувати щиру любов та абсолютну безпеку тим, хто вам найдорожчий»",
      bookSectionTitle: "Хочете стать професійним пет-ситтером?",
      bookSectionSubtitle: "Успішно складіть іспит ACACED за допомогою підручників Софі",
      bookSectionDesc: "Як сертифікований викладач для студентів, які готуються до складання іспиту на державний сертифікат ACACED (обов'язкова ліцензія для роботи з домашніми тваринами у Франції), Софі підготувала ці детальні навчальні посібники, що відповідають стандартам Qualiopi. Вони містять офіційну програму навчання, зрозумілі конспекти та 100 тренувальних тестів. Книги можна придбати на Amazon в електронному та паперовому форматах.",
      bookCatTitle: "Посібник ACACED — Спеціалізація «Коти»",
      bookDogTitle: "Посібник ACACED — Спеціалізація «Собаки»",
      bookFeatures: ["Повна програма 2026", "Ілюстровані конспекти", "100 тренувальних тестів", "Сертифіковано Qualiopi"],
      bookShopBtn: "Купити на Amazon",
      bookBadgeEbook: "Доступно в eBook",
      bookBadgePaperback: "Доступно в паперовому вигляді",
    },
    it: {
      sectionTitle: "Chi sono?",
      sectionSubtitle: "Sophie — Professionista certificata dallo Stato e di assoluta fiducia per i vostri amici a quattro zampe.",
      badgeText: "PROFILO LUXURY & INTERNAZIONALE",
      storyTitle: "Ciao, sono Sophie!",
      storyText1: "Appassionata del benessere animale da 10 anni, mi prendo cura dei vostri compagni con amore e totale dedizione.",
      storyText2: "Di origine franco-tedesca e laureata all'ESSEC, ho lavorato come giurista a Monaco e ho collaborato con grandi maison di lusso e nel settore degli eventi di prestigio prima di stabilirmi sulla Costa Azzurra. Questo profilo d'eccezione, che unisce il rigore legale agli standard del lusso, mi consente di offrire una discrezione assoluta, un'organizzazione meticolosa e una perfetta adattabilità. Parlo correntemente 4 lingue (franese, inglese, tedesco, russo) per accogliere serenamente una clientela di alto livello locale e internazionale. Sono inoltre formatrice per futuri pet-sitter che preparano l'ACACED e ho scritto i miei manuali di studio disponibili su Amazon.",
      storyText3: `Pensione per cani a casa mia a ${pBoarding} € / giorno, pensione per gatti a casa del pet sitter a ${pCatBoarding} € / giorno e pet sitting a domicilio a ${pHomeSitting} € / giorno per cani o cuccioli. Servizi premium su misura da Nizza a Monaco.`,
      credentialsTitle: "Garanzie di Fiducia",
      credential1Title: "Certificata ACACED",
      credential1Desc: "Certificazione obbligatoria rilasciata dalla DDPP francese.",
      credential2Title: "Assicurazione GMF",
      credential2Desc: "Responsabilità civile professionale completa con GMF.",
      credential3Title: "Profilo Multilingue",
      credential3Desc: "4 lingue parlate correntemente per una comunicazione VIP.",
      sidebarHeader: "Sophie, 26 anni",
      sidebarLocation: "Nizza e Monaco",
      sidebarStatsTitle: "Lingue parlate:",
      statYears: "4 Lingue",
      statYearsLabel: "Francese, Inglese, Tedesco, Russo",
      statCert: "Assicurata GMF",
      statCertLabel: "ACACED & RC Pro GMF",
      sidebarStatsTitlePrivate: "Informazioni",
      statEducation: "Monaco & Lusso",
      statEducationLabel: "Ex-Giurista Monaco • ESSEC • Luxury",
      sloganQuote: "«Offrire un'attenzione premurosa e amore sincero all'essere che vi è più caro.»",
      bookSectionTitle: "Vuoi diventare Pet-Sitter?",
      bookSectionSubtitle: "Supera l'esame ACACED con i libri di riferimento di Sophie",
      bookSectionDesc: "In qualità di formatrice accreditata per gli studenti che preparano l'ACACED (la certificazione statale obbligatoria per lavorare con gli animali domestici), Sophie ha scritto questi manuali di studio completi certificati Qualiopi. Includono il programma di formazione completo, schede di revisione illustrate e 100 quiz di esercitazione. Disponibili su Amazon in formato eBook Kindle e cartaceo.",
      bookCatTitle: "Manuale ACACED — Specializzazione Gatti",
      bookDogTitle: "Manuale ACACED — Specializzazione Cani",
      bookFeatures: ["Programma 2026 completo", "Schede illustrate di ripasso", "100 quiz d'esame", "Allineato Qualiopi"],
      bookShopBtn: "Ordina su Amazon",
      bookBadgeEbook: "Disponibile in eBook",
      bookBadgePaperback: "Disponibile in Cartaceo",
    },
    de: {
      sectionTitle: "Über mich",
      sectionSubtitle: "Sophie — Staatlich geprüfte, vertrauenswürdige Begleiterin für Ihre geliebten Haustiere.",
      badgeText: "PREMIUM- & INTERNATIONALES PROFIL",
      storyTitle: "Hallo, ich bin Sophie!",
      storyText1: "Seit über 10 Jahren leidenschaftliche Tierliebhaberin, kümmere ich mich mit absoluter Fürsorge und Hingabe um Ihre Lieblinge.",
      storyText2: "Mit deutsch-französischen Wurzeln und als Absolventin der ESSEC war ich als Juristin in Monaco tätig und arbeitete für renommierte Luxushäuser sowie im Bereich hochkarätiger Premium-Events, bevor ich mich an der Côte d'Azur niedergelassen habe. Dieses außergewöhnliche Profil, das rechtliche Präzision mit den höchsten Standards der Luxusklasse verbindet, ermöglicht es mir, absolute Diskretion, sorgfältige Organisation und Flexibilität zu garantieren. Ich spreche 4 Sprachen fließend (Französisch, Englisch, Deutsch, Russisch), um anspruchsvolle lokale und internationale Kunden bestmöglich zu betreuen. Zudem bin ich staatlich anerkannte ACACED-Ausbilderin und habe eigene Lehrbücher verfasst, die auf Amazon erhältlich sind.",
      storyText3: `Hundeunterbringung bei mir zu Hause für ${pBoarding} € / Tag, Katzenunterbringung bei der Tiersitterin für ${pCatBoarding} € / Tag und Tierbetreuung bei Ihnen zu Hause für ${pHomeSitting} € / Tag für Hunde oder Welpen. Premium-Maßschneiderei von Nizza bis Monaco.`,
      credentialsTitle: "Garantien des Vertrauens",
      credential1Title: "Staatliche ACACED-Lizenz",
      credential1Desc: "Erforderliche Zertifizierung, ausgestellt von der DDPP.",
      credential2Title: "GMF-Versicherung",
      credential2Desc: "Umfassende Haftpflichtversicherung bei der GMF für Tierbetreuung.",
      credential3Title: "Mehrsprachige Betreuung",
      credential3Desc: "4 fließend gesprochene Sprachen für eine erstklassige Kommunikation.",
      sidebarHeader: "Sophie, 26 Jahre",
      sidebarLocation: "Nizza & Monaco",
      sidebarStatsTitle: "Gesprochene Sprachen:",
      statYears: "4 Tiersprachen",
      statYearsLabel: "Französisch, Englisch, Deutsch, Russisch",
      statCert: "GMF-versichert",
      statCertLabel: "ACACED & GMF RC Pro",
      sidebarStatsTitlePrivate: "Informationen",
      statEducation: "Monaco & Luxus",
      statEducationLabel: "Ex-Juristin Monaco • ESSEC • Luxus",
      sloganQuote: "„Dem Wesen, das Ihnen am am Herzen liegt, liebevolle Aufmerksamkeit und ehrliche Fürsorge schenken.“",
      bookSectionTitle: "Möchtest du Tiersitter werden?",
      bookSectionSubtitle: "Bestehen Sie Ihre ACACED-Prüfung mit Sophies Referenzbüchern",
      bookSectionDesc: "Als anerkannte Ausbilderin für angehende Tiersitter, die sich auf die staatliche ACACED-Zertifizierung vorbereiten, hat Sophie diese umfassenden Qualiopi-zertifizierten Vorbereitungshandbücher verfasst. Sie enthalten den gesamten offiziellen Lehrplan, bebilderte Zusammenfassungen und 100 Übungsfragen. Erhältlich auf Amazon als eBook und Taschenbuch.",
      bookCatTitle: "ACACED-Handbuch — Spezialisierung Katzen",
      bookDogTitle: "ACACED-Handbuch — Spezialisierung Hunde",
      bookFeatures: ["Kompletter Lehrplan 2026", "Bebilderte Revisionsblätter", "100 Übungsfragen", "Qualiopi-zertifiziert"],
      bookShopBtn: "Auf Amazon bestellen",
      bookBadgeEbook: "Als eBook erhältlich",
      bookBadgePaperback: "Als Taschenbuch erhältlich",
    }
  };

  const t = content[language];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-150/80 shadow-sm relative overflow-hidden font-sans">
      {/* Decorative subtle background accent */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-stone-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-stone-100/50 rounded-full blur-3xl -z-10"></div>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Side: Editorial Bio details & Badges */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900 text-amber-400 text-[10px] font-bold font-mono tracking-wider uppercase rounded-md border border-stone-800 w-fit shadow-xs">
                <span>★ {language === 'fr' ? "CERTIFIÉE 5★" : "CERTIFIED 5★"}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-stone-900 text-[10px] font-bold font-mono tracking-wider uppercase rounded-md border border-stone-200 w-fit shadow-xs">
                <Globe className="h-3.5 w-3.5 text-stone-600" />
                <span>{t.badgeText}</span>
              </div>
            </div>
            
            {/* Custom elegant flags/international badge container instead of the photo */}
            <div className="flex justify-center sm:justify-start pt-1">
              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-3xs flex flex-col gap-2.5 w-full">
                <span className="text-[9px] font-mono font-extrabold text-stone-400 uppercase tracking-widest">
                  {language === 'fr' ? "PARCOURS" : "BACKGROUND"}
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-lg" title="France">🇫🇷</span>
                  <span className="text-lg" title="Germany">🇩🇪</span>
                  <span className="text-lg" title="Russia">🇷🇺</span>
                  <span className="text-lg" title="Canada">🇨🇦</span>
                  <span className="text-[10px] font-bold text-stone-800 font-mono ml-1">
                    FR • DE • RU • CA
                  </span>
                </div>
                <div className="text-[10.5px] text-stone-500 leading-normal border-t border-stone-100 pt-2 font-sans">
                  {language === 'fr' 
                    ? "Franco-Allemande • Ex-résidente en Russie et au Canada • Installée sur la Côte d'Azur depuis 1 an"
                    : "Franco-German • Lived in Russia & Canada • Settled on the French Riviera for 1 year"}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-black text-stone-900 tracking-tight">
                {t.sidebarHeader}
              </h3>
              <p className="text-xs font-semibold text-stone-800 font-mono uppercase tracking-wide mt-1">
                📍 {t.sidebarLocation}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-200 space-y-4">
              <span className="block text-[10px] uppercase font-mono tracking-widest font-bold text-stone-400">
                {t.sidebarStatsTitle}
              </span>
              
              {/* Stat 1 */}
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-stone-200/60 text-stone-900 flex items-center justify-center font-bold text-sm shrink-0">
                  🐾
                </div>
                <div>
                  <span className="block text-sm font-black text-stone-900 font-mono leading-none">{t.statYears}</span>
                  <span className="text-[11px] text-stone-500 font-medium">{t.statYearsLabel}</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-stone-200/60 text-stone-900 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-stone-800" />
                </div>
                <div>
                  <span className="block text-sm font-black text-stone-900 font-mono leading-none">{t.statCert}</span>
                  <span className="text-[11px] text-stone-500 font-medium">{t.statCertLabel}</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-stone-200/60 text-stone-900 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-stone-800" />
                </div>
                <div>
                  <span className="block text-sm font-black text-stone-900 font-mono leading-none">{t.statEducation}</span>
                  <span className="text-[11px] text-stone-500 font-medium">{t.statEducationLabel}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200">
            <p className="text-xs italic text-stone-500 font-serif leading-relaxed text-center sm:text-left">
              {t.sloganQuote}
            </p>
          </div>
        </div>

        {/* Right Side: Narrative Story & Guarantee Grid */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
          
          {/* Story Text Box */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest font-black text-stone-900 block">
                {language === 'fr' ? "PRÉSENTATION BIOGRAPHIQUE" : "BIOGRAPHY BRIEF"}
              </span>
              <h2 className="text-2.5xl sm:text-3.5xl font-serif font-black text-stone-900 leading-tight">
                {t.storyTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              <div className="md:col-span-8 text-xs sm:text-sm text-stone-650 leading-relaxed space-y-3.5 font-sans">
                <p>
                  <strong>{t.storyText1}</strong>
                </p>
                <p>
                  {t.storyText2}
                </p>
                <p className="bg-stone-50 border-l-4 border-stone-900 p-4 rounded-r-xl text-stone-700 italic">
                  {t.storyText3}
                </p>
              </div>
              <div className="md:col-span-4 relative rounded-2xl p-6 border border-stone-200 shadow-sm bg-gradient-to-b from-stone-50 to-stone-100/50 min-h-[170px] flex flex-col justify-between items-start">
                <div className="h-10 w-10 bg-stone-100 text-stone-900 rounded-xl flex items-center justify-center text-lg shadow-sm">
                  🏆
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-wider font-extrabold text-stone-400 uppercase">OFFICIAL REGISTRATION</span>
                  <span className="block text-xs text-stone-700 font-bold font-sans mt-1">
                    {language === 'fr' ? "Agrément ACACED officiel de la DDPP" : "DDPP approved national license"}
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5 bg-black text-white font-mono font-extrabold text-[9px] px-2.5 py-1 rounded-lg border border-stone-900 shadow-xs uppercase">
                  MONACO
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Badges Grid */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-mono uppercase tracking-widest font-extrabold text-stone-400">
              {language === 'fr' ? "CERTIFICATIONS OFFICIELLES & SÉCURITÉ GARANTIE" : "OFFICIAL CERTIFICATIONS & GUARANTEED SAFETY"}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: ESSEC Business School */}
              <div className="p-6 bg-gradient-to-b from-white to-stone-50 border-2 border-stone-200/60 rounded-2xl space-y-4 hover:border-black hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-stone-100/40 rounded-full blur-xl -z-10 group-hover:bg-stone-100 transition-colors"></div>
                <div className="space-y-4">
                  {/* Big ESSEC Logo Emblem - En Gros & Elegant */}
                  <div className="h-20 w-20 mx-auto bg-white border border-stone-200 rounded-xl flex items-center justify-center p-1.5 shadow-md group-hover:border-black transition-colors bg-white">
                    <img
                      src="/src/assets/images/essec_logo_1782744885044.jpg"
                      alt="ESSEC Business School Logo"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="text-center space-y-1">
                    <span className="block text-[10px] font-mono tracking-widest text-stone-400 uppercase font-extrabold">ORGANISATION ET CONFIDENTIALITÉ</span>
                    <span className="block text-xs font-serif font-black text-stone-900">ESSEC Business School</span>
                  </div>
                  
                  <p className="text-[11px] text-stone-550 leading-relaxed text-center font-sans">
                    {language === 'fr' 
                      ? "Rigueur d'organisation, gestion professionnelle et respect minutieux de vos consignes de vie pour une sérénité totale."
                      : "Organizational rigor, professional management, and strict compliance with your instructions for total peace of mind."}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-150 flex justify-center">
                  <span className="text-[9px] font-mono font-bold text-stone-900 uppercase tracking-wider">🎓 Diplômée Grande École</span>
                </div>
              </div>

              {/* Card 2: ACACED State License */}
              <div className="p-6 bg-gradient-to-b from-white to-stone-50 border-2 border-stone-200/60 rounded-2xl space-y-4 hover:border-black hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-stone-100/40 rounded-full blur-xl -z-10 group-hover:bg-stone-100 transition-colors"></div>
                <div className="space-y-4">
                  {/* Big ACACED Logo Emblem */}
                  <div className="h-20 w-20 mx-auto bg-white border border-stone-200 rounded-full flex items-center justify-center p-1 shadow-md group-hover:border-black transition-colors relative">
                    <img
                      src="/src/assets/images/acaced_state_logo_1782744898629.jpg"
                      alt="ACACED Diplôme Agréé d'État Logo"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="text-center space-y-1">
                    <span className="block text-[10px] font-mono tracking-widest text-stone-400 uppercase font-extrabold">{t.credential1Title}</span>
                    <span className="block text-xs font-serif font-black text-stone-900">Agrément National DDPP</span>
                  </div>
                  
                  <p className="text-[11px] text-stone-550 leading-relaxed text-center font-sans">
                    {t.credential1Desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-150 flex justify-center">
                  <span className="text-[9px] font-mono font-bold text-stone-900 uppercase tracking-wider">📜 N° 2024/7625-b461</span>
                </div>
              </div>

              {/* Card 3: GMF Professional Insurance */}
              <div className="p-6 bg-gradient-to-b from-white to-stone-50 border-2 border-stone-200/60 rounded-2xl space-y-4 hover:border-black hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-stone-100/40 rounded-full blur-xl -z-10 group-hover:bg-stone-100 transition-colors"></div>
                <div className="space-y-4">
                  {/* Big GMF Logo Emblem */}
                  <div className="h-20 w-20 mx-auto bg-white border border-stone-200 rounded-xl flex items-center justify-center p-2.5 shadow-md group-hover:border-black transition-colors">
                    <img
                      src="/src/assets/images/gmf_assurance_logo_1782744923363.jpg"
                      alt="GMF Assurance Logo"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="text-center space-y-1">
                    <span className="block text-[10px] font-mono tracking-widest text-stone-400 uppercase font-extrabold">{t.credential2Title}</span>
                    <span className="block text-xs font-serif font-black text-stone-900">RC Professionnelle Animaux</span>
                  </div>
                  
                  <p className="text-[11px] text-stone-550 leading-relaxed text-center font-sans">
                    {t.credential2Desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-150 flex justify-center">
                  <span className="text-[9px] font-mono font-bold text-stone-900 uppercase tracking-wider">🛡️ Couverture GMF Complète</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AcacedBookSection({ language }: { language: Language }) {
  const content = {
    fr: {
      bookSectionTitle: "Tu veux devenir Pet-Sitter ?",
      bookSectionSubtitle: "Réussissez votre ACACED avec les ouvrages de référence de Sophie",
      bookSectionDesc: "Formatrice agréée pour les élèves qui préparent l'ACACED (Accréditation d'État obligatoire pour exercer avec les animaux de compagnie), Sophie a rédigé ces manuels d'étude complets certifiés Qualiopi. Ils incluent le programme complet de formation, des fiches de révision illustrées, et 100 QCM d'entraînement pour vous préparer efficacement à l'examen officiel. Disponibles immédiatement sur Amazon en formats Ebook et imprimés (brochés).",
      bookCatTitle: "Manuel ACACED — Spécialité Chats",
      bookDogTitle: "Manuel ACACED — Spécialité Chien",
      bookFeatures: ["Programme Complet 2026", "Fiches de Révision illustrées", "100 QCM d'Entraînement", "Conforme Qualiopi"],
      bookShopBtn: "Commander sur Amazon",
      bookBadgeFormats: "eBook & Broché",
    },
    en: {
      bookSectionTitle: "Want to Become a Pet Sitter?",
      bookSectionSubtitle: "Pass your ACACED exam with Sophie's reference books",
      bookSectionDesc: "As an official trainer for students preparing for the ACACED (the French State-certified mandatory pet care license), Sophie authored these comprehensive Qualiopi-certified training manuals. They include the full study syllabus, clear visual revision cards, and 100 practice mock MCQs to guarantee your exam success. Available immediately on Amazon in both Kindle eBook and printed/paperback formats.",
      bookCatTitle: "ACACED Manual — Cats Specialty",
      bookDogTitle: "ACACED Manual — Dogs Specialty",
      bookFeatures: ["Complete 2026 Syllabus", "Illustrated Revision Sheets", "100 Practice MCQs", "Qualiopi Certified"],
      bookShopBtn: "Order on Amazon",
      bookBadgeFormats: "eBook & Paperback",
    },
    ru: {
      bookSectionTitle: "Хотите стать профессиональным пет-ситтером?",
      bookSectionSubtitle: "Успешно сдайте экзамен ACACED с помощью учебников Софи",
      bookSectionDesc: "Будучи сертифицированным преподавателем для студентов, сдающих экзамен на государственный сертификат ACACED (обязательная аккредитация для работы с домашними животными во Франции), Софи подготовила эти полные учебные пособия, соответствующие стандартам Qualiopi. Они включают официальную программу обучения, наглядные конспекты и 100 тренировочных тестов. Книги доступны на Amazon в электронном и печатном форматах.",
      bookCatTitle: "Руководство ACACED — Специализация «Кошки»",
      bookDogTitle: "Руководство ACACED — Специализация «Собаки»",
      bookFeatures: ["Полная программа 2026", "Иллюстрированные конспекты", "100 практических тестов", "Стандарт Qualiopi"],
      bookShopBtn: "Купить на Amazon",
      bookBadgeFormats: "eBook & Печатная",
    },
    uk: {
      bookSectionTitle: "Хочете стати професійним пет-ситтером?",
      bookSectionSubtitle: "Успішно складіть іспит ACACED за допомогою підручників Софі",
      bookSectionDesc: "Як сертифікований викладач для студентів, які готуються до складання іспиту на державний сертифікат ACACED (обов'язкова ліцензія для роботи з домашніми тваринами у Франції), Софі підготувала ці детальні навчальні посібники, що відповідають стандартам Qualiopi. Вони містять офіційну програму навчання, зрозумілі конспекти та 100 тренувальних тестів. Книги можна придбати на Amazon в електронному та паперовому форматах.",
      bookCatTitle: "Посібник ACACED — Спеціалізація «Коти»",
      bookDogTitle: "Посібник ACACED — Спеціалізація «Собаки»",
      bookFeatures: ["Повна програма 2026", "Ілюстровані конспекти", "100 тренувальних тестів", "Сертифіковано Qualiopi"],
      bookShopBtn: "Купити на Amazon",
      bookBadgeFormats: "eBook & Паперова",
    },
    it: {
      bookSectionTitle: "Vuoi diventare Pet-Sitter?",
      bookSectionSubtitle: "Supera l'esame ACACED con i libri di riferimento di Sophie",
      bookSectionDesc: "In qualità di formatrice accreditata per gli studenti che preparano l'ACACED (la certificazione statale obbligatoria per lavorare con gli animali domestici), Sophie ha scritto questi manuali di studio completi certificati Qualiopi. Includono il programma di formazione completo, schede di revisione illustrate e 100 quiz di esercitazione. Disponibili su Amazon in formato eBook Kindle e cartaceo.",
      bookCatTitle: "Manuale ACACED — Specializzazione Gatti",
      bookDogTitle: "Manuale ACACED — Specializzazione Cani",
      bookFeatures: ["Programma 2026 completo", "Schede illustrate di ripasso", "100 quiz d'esame", "Allineato Qualiopi"],
      bookShopBtn: "Ordina su Amazon",
      bookBadgeFormats: "eBook & Cartaceo",
    },
    de: {
      bookSectionTitle: "Möchtest du Tiersitter werden?",
      bookSectionSubtitle: "Bestehen Sie Ihre ACACED-Prüfung mit Sophies Referenzbüchern",
      bookSectionDesc: "Als anerkannte Ausbilderin für angehende Tiersitter, die sich auf die staatliche ACACED-Zertifizierung vorbereiten, hat Sophie diese umfassenden Qualiopi-zertifizierten Vorbereitungshandbücher verfasst. Sie enthalten den gesamten offiziellen Lehrplan, bebilderte Zusammenfassungen und 100 Übungsfragen. Erhältlich auf Amazon als eBook und Taschenbuch.",
      bookCatTitle: "ACACED-Handbuch — Spezialisierung Katzen",
      bookDogTitle: "ACACED-Handbuch — Spezialisierung Hunde",
      bookFeatures: ["Kompletter Lehrplan 2026", "Bebilderte Revisionsblätter", "100 Übungsfragen", "Qualiopi-zertifiziert"],
      bookShopBtn: "Auf Amazon bestellen",
      bookBadgeFormats: "eBook & Taschenbuch",
    }
  };

  const t = content[language] || content.fr;

  return (
    <div className="bg-gradient-to-br from-amber-50/40 via-white to-stone-50/50 rounded-2xl border border-amber-200/50 p-6 sm:p-8 relative overflow-hidden shadow-xs group/card">
      {/* Subtle graphic background accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -z-10"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Cover images with subtle 3D hover effects */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Cover 1 (Cats) */}
          <div className="relative group/book w-[150px] transition-all duration-300 hover:-translate-y-2 hover:rotate-[-1deg]">
            <div className="absolute inset-0 bg-stone-900/10 rounded-xl blur-md -z-10 group-hover/book:blur-lg transition-all"></div>
            <div className="rounded-xl overflow-hidden border border-stone-200/80 bg-white shadow-sm hover:border-amber-400/80 transition-colors">
              <img 
                src="/src/assets/images/acaced_chats_cover_1784734306461.jpg" 
                alt={t.bookCatTitle} 
                className="w-full h-auto block" 
                referrerPolicy="no-referrer"
              />
              <div className="p-2 bg-stone-50 border-t border-stone-100 text-center">
                <span className="text-[9px] font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded uppercase border border-amber-100">{t.bookBadgeFormats}</span>
              </div>
            </div>
          </div>

          {/* Cover 2 (Dogs) */}
          <div className="relative group/book w-[150px] transition-all duration-300 hover:-translate-y-2 hover:rotate-[1deg]">
            <div className="absolute inset-0 bg-stone-900/10 rounded-xl blur-md -z-10 group-hover/book:blur-lg transition-all"></div>
            <div className="rounded-xl overflow-hidden border border-stone-200/80 bg-white shadow-sm hover:border-amber-400/80 transition-colors">
              <img 
                src="/src/assets/images/acaced_chiens_cover_1784734320093.jpg" 
                alt={t.bookDogTitle} 
                className="w-full h-auto block" 
                referrerPolicy="no-referrer"
              />
              <div className="p-2 bg-stone-50 border-t border-stone-100 text-center">
                <span className="text-[9px] font-mono font-bold text-stone-700 bg-stone-100 px-2.5 py-0.5 rounded uppercase border border-stone-200">{t.bookBadgeFormats}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions & Call To Action */}
        <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-100/80 border border-amber-200 text-amber-800 text-[10px] font-mono font-bold uppercase rounded-md">
              🎓 ACACED 2026
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-bold uppercase rounded-md">
              ✓ Qualiopi Certifié
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-stone-100 border border-stone-200 text-stone-700 text-[10px] font-mono font-bold uppercase rounded-md">
              📚 Ouvrage de Référence
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 tracking-tight leading-tight">
              {t.bookSectionTitle}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-amber-600 font-sans">
              {t.bookSectionSubtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl font-sans">
            {t.bookSectionDesc}
          </p>

          {/* Bullet Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-md mx-auto lg:mx-0 pt-2 pb-1">
            {t.bookFeatures.map((feat: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-stone-700 text-xs font-semibold font-sans">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a 
              href="https://www.amazon.fr/dp/B0H98CL76G" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-amber-500 text-white hover:text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer group/btn font-sans"
            >
              <BookOpen className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
              <span>{t.bookShopBtn}</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
            <span className="text-xs text-stone-500 font-mono italic">
              * Kindle eBook & Broché
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
