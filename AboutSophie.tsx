import { useState } from 'react';
import { Award, ShieldCheck, Clock, Heart, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';

interface AboutSophieProps {
  language: 'fr' | 'en';
}

export default function AboutSophie({ language }: AboutSophieProps) {
  const content = {
    fr: {
      sectionTitle: "Qui suis-je ?",
      sectionSubtitle: "Sophie — Accompagnement de confiance certifié d'État pour vos précieux compagnons.",
      badgeText: "SITTER DE CONFIANCE",
      storyTitle: "Bonjour, je m'appelle Sophie !",
      storyText1: "Passionnée de bien-être animal depuis 10 ans, je veille sur vos compagnons avec amour et dévouement.",
      storyText2: "Diplômée de l'ESSEC, j'associe rigueur professionnelle et passion pour offrir une garde sur-mesure de prestige dans vos villas, yachts et hôtels.",
      storyText3: "Disponible 24h/24 & 7j/7, j'interviens rapidement de Nice à Monaco pour votre entière sérénité.",
      credentialsTitle: "Garanties d'Excellence",
      credential1Title: "Agréée d'État ACACED",
      credential1Desc: "Attestation obligatoire délivrée par la DDPP.",
      credential2Title: "Assurance Allianz",
      credential2Desc: "RC Pro couvrant spécifiquement les animaux de grande valeur.",
      credential3Title: "Disponible H24",
      credential3Desc: "Ajustement instantané à vos urgences et événements.",
      sidebarHeader: "Sophie, 26 ans",
      sidebarLocation: "Nice, Côte d'Azur",
      sidebarStatsTitle: "Infos clés :",
      statYears: "10 Ans",
      statYearsLabel: "D'expérience passionnée",
      statCert: "Agréée",
      statCertLabel: "ACACED & Allianz Pro",
      statEducation: "ESSEC",
      statEducationLabel: "Diplômée Grande École",
      sloganQuote: "« Offrir une attention d'élite et de l'amour sincère à l'être qui vous est le plus cher. »"
    },
    en: {
      sectionTitle: "Who am I?",
      sectionSubtitle: "Sophie — Certified high-end caring companion for your precious pets.",
      badgeText: "TRUSTED PET COMPANION",
      storyTitle: "Hello, I'm Sophie!",
      storyText1: "Deeply passionate about animals for 10+ years, I look after your beloved pets with absolute care and devotion.",
      storyText2: "An ESSEC alumna, I merge professional standards with genuine love to offer bespoke pet sitting for luxury villas, yachts, and hotels.",
      storyText3: "Available 24/7, I operate with speed and discretion from Monaco to Cannes for ultimate peace of mind.",
      credentialsTitle: "Elite Credentials",
      credential1Title: "Official ACACED License",
      credential1Desc: "State-approved certification for professional pet sitting.",
      credential2Title: "Allianz Insurance",
      credential2Desc: "Comprehensive civil liability for high-value breeds.",
      credential3Title: "24/7 Availability",
      credential3Desc: "Instantly adapted to last-minute plans.",
      sidebarHeader: "Sophie, 26 yo",
      sidebarLocation: "Nice, French Riviera",
      sidebarStatsTitle: "At a glance:",
      statYears: "10 Years",
      statYearsLabel: "Of loving practice",
      statCert: "Certified",
      statCertLabel: "ACACED & Insured",
      statEducation: "ESSEC",
      statEducationLabel: "Grande École Alumna",
      sloganQuote: "“Providing absolute safety standards and sincere love for your family member.”"
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
            
            {/* Elegant bio photo - small size */}
            <div className="flex justify-center sm:justify-start pt-1">
              <div className="w-28 h-36 relative group overflow-hidden rounded-xl border-4 border-white shadow-md outline outline-1 outline-stone-200 bg-stone-100 shrink-0">
                <img
                  src="/src/assets/images/sophie_portrait_v2_1782745222017.jpg"
                  alt="Sophie - Concierge de Prestige"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
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
              {language === 'fr' ? "CERTIFICATIONS OFFICIELLES & AGRÉMENTS DE PRESTIGE" : "OFFICIAL CERTIFICATIONS & ELITE ACCREDITATIONS"}
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
                    <span className="block text-[10px] font-mono tracking-widest text-stone-400 uppercase font-extrabold">MANAGEMENT DE LUXE</span>
                    <span className="block text-xs font-serif font-black text-stone-900">ESSEC Business School</span>
                  </div>
                  
                  <p className="text-[11px] text-stone-550 leading-relaxed text-center font-sans">
                    {language === 'fr' 
                      ? "Rigueur professionnelle, maîtrise des codes du luxe et protocole hôtelier 5★ pour une tranquillité d'esprit absolue."
                      : "Professional standards, mastery of luxury codes, and 5★ hotel etiquette protocols for absolute peace of mind."}
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
                  {/* Big ACACED Logo Emblem - En Gros & Elegant */}
                  <div className="h-20 w-20 mx-auto bg-white border border-stone-200 rounded-full flex items-center justify-center p-1 shadow-md group-hover:border-black transition-colors relative">
                    <img
                      src="/src/assets/images/acaced_state_logo_1782744898629.jpg"
                      alt="ACACED Diplôme Agréé d'État Logo"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                    {/* Tricolore Flag ribbon tag */}
                    <div className="absolute -top-1 -right-1 flex gap-0.5 h-2 w-5 bg-white p-0.5 rounded border border-stone-150 shadow-xs">
                      <div className="w-1/3 bg-blue-600 h-full"></div>
                      <div className="w-1/3 bg-white h-full"></div>
                      <div className="w-1/3 bg-red-600 h-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-1">
                    <span className="block text-[10px] font-mono tracking-widest text-stone-400 uppercase font-extrabold">DIPLÔME AGRÉÉ D'ÉTAT</span>
                    <span className="block text-xs font-serif font-black text-stone-900">Attestation d'État ACACED</span>
                  </div>
                  
                  <p className="text-[11px] text-stone-550 leading-relaxed text-center font-sans">
                    {language === 'fr' 
                      ? "Agrément d'État obligatoire et officiel certifiant de l'expertise scientifique de garde d'animaux de compagnie."
                      : "Official national veterinary mandate issued by the French Government certifying scientific pet care excellence."}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-150 flex justify-center">
                  <span className="text-[9px] font-mono font-bold text-stone-800 uppercase tracking-wider">🔒 Certifiée Chien, Chat & NAC</span>
                </div>
              </div>

              {/* Card 3: Specific Pet Sitting Insurance */}
              <div className="p-6 bg-gradient-to-b from-white to-stone-50 border-2 border-stone-200/60 rounded-2xl space-y-4 hover:border-black hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-stone-100/40 rounded-full blur-xl -z-10 group-hover:bg-stone-100 transition-colors"></div>
                <div className="space-y-3">
                  {/* Big Insurance Logo Emblem */}
                  <div className="h-16 w-16 mx-auto bg-stone-50 border-2 border-black text-stone-900 rounded-full flex flex-col items-center justify-center shadow-md relative">
                    <ShieldCheck className="h-6 w-6 text-stone-900" />
                    <span className="text-[6px] font-mono tracking-widest text-stone-800 font-extrabold mt-0.5 uppercase">RC PRO COV</span>
                    <div className="absolute -bottom-1 bg-black text-white font-mono font-black text-[6px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      ALLIANZ
                    </div>
                  </div>
                  
                  <div className="text-center space-y-1">
                    <span className="block text-[10px] font-mono tracking-widest text-stone-400 uppercase font-extrabold">GARANTIE PRESTIGE</span>
                    <span className="block text-xs font-serif font-black text-stone-900">RC Professionnelle Spécifique</span>
                  </div>
                  
                  <p className="text-[11px] text-stone-550 leading-relaxed text-center font-sans">
                    {language === 'fr' 
                      ? "Couverture d'assurance responsabilité civile professionnelle Allianz protégeant vos suites, villas et yachts."
                      : "Bespoke high-limit civil liability coverage from Allianz protecting hotel suites, yachts, and private villas."}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-150 flex justify-center">
                  <span className="text-[9px] font-mono font-bold text-stone-800 uppercase tracking-wider">🛡️ Assurée à Hauteur de 10M€</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
