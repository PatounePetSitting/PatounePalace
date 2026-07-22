import { useState, useRef } from 'react';
import { BLOG_POSTS, TESTIMONIALS } from './data';
import { translations } from './translations';
import { BlogPost, Language } from './types';
import Testimonials from './components/Testimonials';
import ContactVip from './components/ContactVip';
import BlogSection from './components/BlogSection';
import ConciergeSection from './components/ConciergeSection';
import AboutSophie, { AcacedBookSection } from './components/AboutSophie';
import ScrollingPaws from './components/ScrollingPaws';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import LuxurySeoDirectory from './components/LuxurySeoDirectory';
import { Sparkles, Calendar, Menu, X, Landmark, Globe, Heart, Phone, Award, ShieldAlert } from 'lucide-react';

export const LANGUAGES_LIST: { code: Language; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' }
];

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'where' | 'safety' | 'pricing' | 'contact'>('where');
  const [selectedStartDate, setSelectedStartDate] = useState<string>('');
  const [isOwnerSpaceOpen, setIsOwnerSpaceOpen] = useState(false);

  // Dynamic private owner rates managed in localStorage
  const [prices, setPrices] = useState(() => {
    const stored = localStorage.getItem('patoune_prices');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Could not parse prices", e);
      }
    }
    return {
      boarding: 40,
      catBoarding: 25,
      homeSitting: 50,
      walk: 25,
      catVisit: 20
    };
  });

  const [testimonials, setTestimonials] = useState(() => {
    const stored = localStorage.getItem('patoune_testimonials');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Could not parse testimonials", e);
      }
    }
    return TESTIMONIALS;
  });

  const handleUpdatePrices = (newPrices: any) => {
    setPrices(newPrices);
    localStorage.setItem('patoune_prices', JSON.stringify(newPrices));
  };

  const handleUpdateTestimonials = (newTestimonials: any[]) => {
    setTestimonials(newTestimonials);
    localStorage.setItem('patoune_testimonials', JSON.stringify(newTestimonials));
  };

  // Toggle language translation dictionary
  const toggleLanguage = () => {
    const cycle: Record<Language, Language> = {
      fr: 'en',
      en: 'de',
      de: 'ru',
      ru: 'it',
      it: 'uk',
      uk: 'fr'
    };
    setLanguage(prev => cycle[prev] || 'fr');
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Click tier package inside pricing card -> scrolls smooth
  const handleSelectPlanFromPricing = (planName: string) => {
    const element = document.getElementById('reservation-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add customized blog draft locally
  const handleAddNewPost = (newPost: BlogPost) => {
    setBlogPosts(prev => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-villa-cream text-stone-750 font-sans selection:bg-riviera-sand selection:text-riviera-deep leading-normal scroll-smooth relative">
      {/* Decorative hand-drawn scrolling pet paw tracks */}
      <ScrollingPaws />
      {/* Upper Top Minimal Announcement Bar with Instant Language Selector */}
      <div className="bg-stone-950 text-stone-100 py-2.5 px-4 border-b border-stone-900 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          
          {/* Certificate Tagline */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[10px] md:text-[11px] font-extrabold tracking-wider text-stone-300 uppercase">
              {language === 'fr' && "Service agréé pet sitting • Nice • Cannes • Monaco"}
              {language === 'en' && "Certified pet sitting • Nice • Cannes • Monaco"}
              {language === 'de' && "Zertifizierte Tierbetreuung • Nizza • Cannes • Monaco"}
              {language === 'it' && "Servizio pet sitting autorizzato • Nizza • Cannes • Monaco"}
              {language === 'ru' && "Лицензированный пет-ситтер • Ницца • Канны • Монако"}
              {language === 'uk' && "Ліцензований пет-ситтер • Ніцца • Канни • Монако"}
            </span>
          </div>

          {/* Quick Contacts & Immediate Language Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            {/* Phone Number Link */}
            <a 
              href="tel:+33763208713" 
              className="text-stone-300 font-bold font-mono text-[11px] hover:text-white flex items-center gap-1.5 transition-colors"
              title={language === 'fr' ? "Appeler directement" : "Call directly"}
            >
              <Phone className="h-3 w-3 text-emerald-400 shrink-0" />
              <span>+33 (0)7 63 20 87 13</span>
            </a>

            <span className="text-stone-800 hidden sm:inline">|</span>

            {/* Instant Language Selection Bar - High Visibility / Low Vertical Footprint */}
            <div className="flex items-center gap-1 bg-stone-900 border border-stone-800 p-0.5 rounded-lg shadow-inner">
              <span className="text-[10px] text-stone-400 px-1 font-bold flex items-center gap-1 uppercase tracking-widest font-mono">
                <span>🌐</span>
                <span className="hidden lg:inline text-[9px] text-stone-500 font-extrabold">Translate:</span>
              </span>
              {LANGUAGES_LIST.map((lang) => {
                const isActive = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-1.5 py-0.5 md:px-2 md:py-1 rounded-md transition-all flex items-center gap-1.5 cursor-pointer text-[10px] font-extrabold ${
                      isActive 
                        ? 'bg-amber-400 text-stone-950 shadow-sm scale-105' 
                        : 'text-stone-400 hover:text-white hover:bg-stone-850'
                    }`}
                    title={lang.label}
                  >
                    <span className="text-xs leading-none filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">{lang.flag}</span>
                    <span className="uppercase font-mono text-[9px]">{lang.code}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* Main Premium Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-150/80 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => scrollToSection('hero-section')} 
            className="flex flex-col cursor-pointer group"
          >
            <div className="flex items-center gap-1">
              <h1 className="text-xl md:text-2xl font-serif font-black text-charcoal-luxe tracking-tight leading-none uppercase group-hover:text-amber-600 transition-colors">
                {translations[language].brand}
              </h1>
              <span className="text-[10px] text-amber-500 font-serif font-bold leading-none select-none">✦</span>
            </div>
            <span className="text-[9px] md:text-[10px] text-stone-500 tracking-widest font-black font-mono uppercase block mt-1.5">
              Nice • Cannes • Monaco
            </span>
          </div>

          {/* Desktop Navigation Link TABS - Enhanced visibility: text-stone-900, larger font-bold & gorgeous prominent Palace button */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-black tracking-wider uppercase text-stone-900">
            <button onClick={() => scrollToSection('hero-section')} className="hover:text-riviera-azure transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4">
              {translations[language].navHome}
            </button>
            <button onClick={() => scrollToSection('about-section')} className="hover:text-riviera-azure transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4">
              {translations[language].navAbout}
            </button>
            <button 
              onClick={() => scrollToSection('pricing-section')} 
              className="bg-stone-950 hover:bg-black text-white font-mono font-black py-2.5 px-4 rounded-xl shadow-md border border-stone-800 hover:scale-[1.05] transition-all cursor-pointer flex items-center gap-2 text-[11px]"
              title={language === 'fr' ? "Voir nos tarifs de garde" : "View our sitting rates"}
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              <span>{translations[language].navServices}</span>
            </button>
            <button onClick={() => scrollToSection('blog-section')} className="hover:text-black transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4">
              {translations[language].navBlog}
            </button>
            <button onClick={() => setIsOwnerSpaceOpen(true)} className="hover:text-amber-600 transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4 font-extrabold flex items-center gap-1">
              <span>{language === 'fr' ? "Espace Sophie 🔐" : "Espace Sophie 🔐"}</span>
            </button>
          </nav>

          {/* Actions: Language Toggle & Quick Reservation Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+33763208713" 
              className="px-4 py-2 border-2 border-black bg-stone-50 hover:bg-stone-150 rounded-xl transition-all text-xs font-bold font-mono text-stone-900 flex items-center gap-2 cursor-pointer shadow-xs"
              title={language === 'fr' ? "Appeler directement" : "Call directly"}
            >
              <Phone className="h-3.5 w-3.5 text-stone-800" />
              <span>+33 (0)7 63 20 87 13</span>
            </a>

            {/* Highly Prominent Flag Row to showcase language availability directly */}
            <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 p-1.5 rounded-xl">
              {LANGUAGES_LIST.map((lang) => {
                const isActive = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`h-9 px-2.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-stone-900 text-white font-extrabold shadow-sm scale-105' 
                        : 'text-stone-600 hover:bg-stone-200/60 hover:text-stone-900'
                    }`}
                    title={lang.label}
                  >
                    <span className="text-base leading-none filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">{lang.flag}</span>
                    <span className="text-[10px] uppercase font-extrabold font-mono">{lang.code}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scrollToSection('reservation-section')}
              className="px-5 py-2.5 bg-black hover:bg-stone-900 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg active:translate-y-0.5"
            >
              {translations[language].navBooking}
            </button>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors text-xs font-bold font-mono text-stone-700 flex items-center gap-1.5 cursor-pointer"
              title="Changer de langue / Change language"
            >
              <span className="text-base leading-none">
                {LANGUAGES_LIST.find(l => l.code === language)?.flag}
              </span>
              <span className="uppercase font-bold">{language}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:bg-stone-50 rounded-xl transition-colors outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer Panels */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-150 bg-white/95 backdrop-blur-md p-4 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <a
              href="tel:+33763208713"
              className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-extrabold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 text-white animate-pulse" />
              <span>+33 (0)7 63 20 87 13</span>
            </a>

            <button
              onClick={() => scrollToSection('hero-section')}
              className="block w-full text-left py-2 px-3 text-stone-700 hover:bg-riviera-light hover:text-riviera-azure rounded-xl font-bold transition-all"
            >
              {translations[language].navHome}
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="block w-full text-left py-2 px-3 text-stone-700 hover:bg-riviera-light hover:text-riviera-azure rounded-xl font-bold transition-all"
            >
              {translations[language].navAbout}
            </button>
            <button
              onClick={() => { scrollToSection('pricing-section'); setMobileMenuOpen(false); }}
              className="block w-full text-center py-3.5 px-4 bg-stone-900 hover:bg-stone-950 text-stone-100 font-mono font-black rounded-xl border border-stone-800 transition-all text-xs flex items-center justify-center gap-2.5 shadow-md"
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-stone-100 animate-pulse"></span>
              <span>{translations[language].navServices}</span>
            </button>
            <button
              onClick={() => scrollToSection('blog-section')}
              className="block w-full text-left py-2 px-3 text-stone-700 hover:bg-riviera-light hover:text-stone-950 rounded-xl font-bold transition-all"
            >
              {translations[language].navBlog}
            </button>
            <button
              onClick={() => { setIsOwnerSpaceOpen(true); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 px-3 text-amber-600 hover:bg-amber-50 rounded-xl font-extrabold transition-all flex items-center gap-1.5"
            >
              <span>{language === 'fr' ? "Espace Sophie 🔐" : "Espace Sophie 🔐"}</span>
            </button>
            <button
              onClick={() => scrollToSection('reservation-section')}
              className="block w-full text-center py-3 bg-riviera-azure text-white rounded-xl font-extrabold transition-all shadow shadow-riviera-azure/20"
            >
              {translations[language].navBooking}
            </button>

            {/* Mobile Flags Row inside the Mobile Drawer */}
            <div className="border-t border-stone-150 pt-4 pb-1">
              <span className="block text-[10px] text-stone-400 font-extrabold uppercase tracking-wider mb-2.5 text-center">
                {language === 'fr' ? "Langues disponibles" : "Available Languages"}
              </span>
              <div className="flex items-center justify-center gap-2.5">
                {LANGUAGES_LIST.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 border rounded-xl flex items-center gap-1.5 transition-all cursor-pointer ${
                      language === lang.code 
                        ? 'border-stone-900 bg-stone-900 text-white font-extrabold scale-105 shadow-2xs' 
                        : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="text-[10px] uppercase font-bold font-mono">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hand-Drawn Côte d'Azur Illustration with Sophie & Pets */}
      <section className="w-full bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="relative rounded-2xl overflow-hidden border-[6px] sm:border-[8px] border-white outline outline-1 outline-stone-300 shadow-md bg-white">
            <div className="absolute inset-2 border border-black/5 pointer-events-none z-10"></div>
            <img
              src="/src/assets/images/sophie_riviera_sketch_1784293205806.jpg"
              alt={language === 'fr' ? "Sophie avec ses compagnons sur la Côte d'Azur — Illustration faite main" : "Sophie with her companions on the French Riviera — Hand-drawn illustration"}
              className="w-full h-auto object-cover grayscale opacity-95 hover:opacity-100 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
            {/* Elegant signature label */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 backdrop-blur-sm border border-stone-200 px-2.5 py-1 rounded-lg text-[8px] sm:text-[10px] font-mono tracking-widest text-stone-600 uppercase z-20 shadow-sm">
              ✨ {language === 'fr' ? "Sophie & ses compagnons — Côte d'Azur" : "Sophie & Companions — French Riviera"}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section Banner layout */}
      <section id="hero-section" className="relative bg-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero texts */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-riviera-light border border-riviera-azure/20 px-4 py-1.75 rounded-full text-riviera-azure font-semibold text-xs tracking-wider uppercase shadow-sm">
              <Sparkles className="h-4 w-4 text-riviera-gold animate-pulse" />
              <span className="font-bold">{translations[language].slogan}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-luxe leading-[1.15] tracking-tight">
              {translations[language].heroTitle.indexOf(' : ') !== -1 ? (
                translations[language].heroTitle.split(' : ').map((part: string, idx: number) => (
                  <span key={idx} className={idx === 1 ? "italic text-riviera-azure block font-medium" : "block font-extrabold"}>
                    {part}
                  </span>
                ))
              ) : (
                <span className="block font-extrabold">
                  {translations[language].heroTitle}
                </span>
              )}
            </h2>

            <p className="text-stone-600 text-base md:text-lg max-w-xl leading-relaxed font-sans">
              {translations[language].heroSubtitle}
            </p>

            {/* Incredibly Prominent Direct Call Banner */}
            <div className="bg-stone-50 border-2 border-black p-6 rounded-3xl space-y-3.5 shadow-sm max-w-lg relative overflow-hidden group hover:shadow-md transition-all transform hover:-translate-y-0.5 duration-300">
              <div className="flex items-center gap-4.5">
                <div className="h-14 w-14 rounded-2xl bg-black flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-widest font-black text-black font-mono">
                    {language === 'fr' ? "Appel direct, SMS ou WhatsApp — 7j/7" : "Direct line — Calls, SMS & WhatsApp 7d/7"}
                  </span>
                  <a 
                    href="tel:+33763208713" 
                    className="block text-2.5xl sm:text-3.5xl font-mono font-black text-charcoal-luxe tracking-tight leading-none hover:text-stone-700 transition-colors mt-1.5"
                  >
                    +33 (0)7 63 20 87 13
                  </a>
                </div>
              </div>
              <div className="text-xs text-stone-600 font-medium pl-1 leading-relaxed border-l-2 border-black">
                {language === 'fr' 
                  ? "Des questions ou réservations immédiates ? Contactez-nous à tout moment, réponse rapide garantie."
                  : "Have questions or prompt requests? Contact us instantly, fast and caring response guaranteed."}
              </div>
            </div>

            {/* Service local highlight icons */}
            <div className="grid grid-cols-3 gap-2 py-2 max-w-md font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest text-center">
              <div className="bg-stone-50 p-2 border border-stone-150 rounded-xl flex flex-col items-center gap-1">
                <Landmark className="h-4 w-4 text-riviera-azure" />
                <span>MONACO</span>
              </div>
              <div className="bg-stone-50 p-2 border border-stone-150 rounded-xl flex flex-col items-center gap-1">
                <Award className="h-4 w-4 text-riviera-gold" />
                <span>NICE 06</span>
              </div>
              <div className="bg-stone-50 p-2 border border-stone-150 rounded-xl flex flex-col items-center gap-1">
                <Sparkles className="h-4 w-4 text-riviera-azure" />
                <span>CANNES</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4.5 pt-2">
              <button
                onClick={() => scrollToSection('reservation-section')}
                className="px-8 py-4 bg-black hover:bg-stone-900 text-white font-extrabold rounded-2xl transition-all shadow-md text-center cursor-pointer hover:shadow-lg active:translate-y-0.5 hover:scale-[1.02]"
              >
                {translations[language].heroCtas}
              </button>
            </div>

            {/* Quick stats panels */}
            <div className="pt-8 border-t border-stone-100 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl md:text-3xl font-serif font-black text-riviera-azure">50+</span>
                <span className="text-xs text-stone-500">{translations[language].statClients}</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-serif font-black text-riviera-azure">100</span>
                <span className="text-xs text-stone-500">{translations[language].statVisits}</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-serif font-black text-riviera-azure">99%</span>
                <span className="text-xs text-stone-500">{translations[language].statReviews}</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Interactive "At a Glance" Key Info Dashboard Widget */}
          <div className="lg:col-span-6 space-y-6 relative">

            {/* Interactive "At a Glance" Key Info Dashboard Widget */}
            <div className="relative bg-stone-900 border border-stone-800 text-white rounded-3xl p-6 shadow-xl font-sans space-y-6">
              {/* Header inside widget */}
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div>
                  <h3 className="text-lg font-serif font-black tracking-tight text-white uppercase">
                    {language === 'fr' ? "Infos Clés en 1 clin d'œil" : "Key Info at a Glance"}
                  </h3>
                  <p className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                    {language === 'fr' ? "Sélectionnez un onglet ci-dessous" : "Select a tab below to learn more"}
                  </p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Disponible"></span>
              </div>

              {/* High Contrast Compact Tabs Navigation */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-stone-950 rounded-xl border border-stone-850">
                <button
                  onClick={() => setActiveTab('where')}
                  className={`py-2 px-1 text-center rounded-lg text-[10.5px] font-black tracking-tight uppercase transition-all duration-200 cursor-pointer ${
                    activeTab === 'where'
                      ? 'bg-white text-stone-950 shadow-sm font-black'
                      : 'text-stone-450 hover:text-white hover:bg-stone-900/50'
                  }`}
                >
                  📍 {language === 'fr' ? "Où" : "Areas"}
                </button>
                <button
                  onClick={() => setActiveTab('safety')}
                  className={`py-2 px-1 text-center rounded-lg text-[10.5px] font-black tracking-tight uppercase transition-all duration-200 cursor-pointer ${
                    activeTab === 'safety'
                      ? 'bg-white text-stone-950 shadow-sm font-black'
                      : 'text-stone-450 hover:text-white hover:bg-stone-900/50'
                  }`}
                >
                  🔒 {language === 'fr' ? "Sûreté" : "Safety"}
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`py-2 px-1 text-center rounded-lg text-[10.5px] font-black tracking-tight uppercase transition-all duration-200 cursor-pointer ${
                    activeTab === 'pricing'
                      ? 'bg-white text-stone-950 shadow-sm font-black'
                      : 'text-stone-450 hover:text-white hover:bg-stone-900/50'
                  }`}
                >
                  💰 {language === 'fr' ? "Tarifs" : "Rates"}
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`py-2 px-1 text-center rounded-lg text-[10.5px] font-black tracking-tight uppercase transition-all duration-200 cursor-pointer ${
                    activeTab === 'contact'
                      ? 'bg-white text-stone-950 shadow-sm font-black'
                      : 'text-stone-450 hover:text-white hover:bg-stone-900/50'
                  }`}
                >
                  📞 {language === 'fr' ? "Contact" : "Direct"}
                </button>
              </div>

              {/* Dynamic Content Display with micro animations */}
              <div className="min-h-[160px] flex flex-col justify-between pt-1">
                {activeTab === 'where' && (
                  <div className="space-y-3.5">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 font-extrabold">📍 Zones de Service & Déplacements</span>
                    <div className="flex flex-wrap gap-2">
                      {['Nice', 'Monaco', 'Cannes', 'Antibes', 'Cap d\'Ail', 'Villefranche-sur-Mer', 'Saint-Jean-Cap-Ferrat'].map((city) => (
                        <span key={city} className="px-2 py-0.5 bg-stone-950 border border-stone-800 text-stone-200 text-[11px] font-semibold rounded-lg">
                          {city}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed font-sans">
                      {language === 'fr'
                        ? "Intervention sur-mesure directement à votre domicile ou lors de promenades. Sophie se déplace rapidement pour votre entière sérénité."
                        : "Customized service directly at your home or for walks. Sophie responds quickly for your complete peace of mind."}
                    </p>
                  </div>
                )}

                {activeTab === 'safety' && (
                  <div className="space-y-3.5">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 font-extrabold">🔒 Garanties Officielles de Confiance</span>
                    <ul className="space-y-2 text-xs text-stone-200 font-sans">
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✔</span>
                        <span><strong>{language === 'fr' ? "Agrément d'État (ACACED)" : "Official ACACED License"}</strong> (DDPP n°2023/182-A)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✔</span>
                        <span><strong>{language === 'fr' ? "Assurance GMF RC Pro" : "GMF Business Insurance"}</strong> {language === 'fr' ? "spécifique garde d'animaux domestiques" : "specific professional pet sitting liability"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✔</span>
                        <span><strong>{language === 'fr' ? "Rigueur Professionnelle (ESSEC)" : "Professional Rigor (ESSEC)"}</strong> {language === 'fr' ? "diplômée Grande École" : "Grande École alumna"}</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'pricing' && (
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 font-extrabold">💰 Tarifs Clairs & Transparents</span>
                    <div className="grid grid-cols-1 gap-1.5">
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "Garde Chien chez le Sitter (Sophie)" : "Dog Boarding at Sitter's (Sophie)"}</span>
                          <span className="text-[9px] text-stone-500 font-sans">{language === 'fr' ? "+10 € par chien suppl." : "+€10 per extra dog"}</span>
                        </div>
                        <span className="font-mono font-bold text-white text-xs">{prices.boarding} € / jour</span>
                      </div>
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "Garde Chat chez le Sitter (Sophie)" : "Cat Boarding at Sitter's (Sophie)"}</span>
                        <span className="font-mono font-bold text-white text-xs">{prices.catBoarding} € / jour</span>
                      </div>
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "Garde à votre Domicile (Chien/Chiot)" : "In-Home Sitting (Dog/Puppy)"}</span>
                        <span className="font-mono font-bold text-white text-xs">{prices.homeSitting} € / jour</span>
                      </div>
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "Promenade active 1 heure" : "1-Hour Dog Walk"}</span>
                        <span className="font-mono font-bold text-white text-xs">{prices.walk} € / balade</span>
                      </div>
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "Visite Chat (45 min, jeux/nourriture)" : "Cat Visit (45 min, play/food)"}</span>
                        <span className="font-mono font-bold text-white text-xs">{prices.catVisit} € / visite</span>
                      </div>
                    </div>
                    <span className="block text-[10.5px] text-stone-400 font-sans italic">
                      {language === 'fr' ? "* Aucune formule d'abonnement requise, tarifs nets." : "* No subscription needed, clean net rates."}
                    </span>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="space-y-3.5">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 font-extrabold">📞 Ligne de Garde Directe</span>
                    <div className="space-y-1.5">
                      <a href="tel:+33763208713" className="flex items-center gap-2 px-3 py-2 bg-white text-stone-950 rounded-xl hover:bg-stone-100 transition-all font-mono font-bold text-xs justify-center">
                        📞 {language === 'fr' ? "Appeler Sophie" : "Call Sophie"} : +33 7 63 20 87 13
                      </a>
                      <a href="https://wa.me/33763208713" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all font-mono font-bold text-xs justify-center">
                        💬 WhatsApp direct
                      </a>
                    </div>
                    <div className="text-[10px] text-center text-stone-400 font-mono mt-1 select-all">
                      contact@patounecoteazur.fr
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Absolute background warm design blobs to enrich visual appeal */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-72 h-72 bg-riviera-azure/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-riviera-gold/10 rounded-full blur-2xl"></div>
          </div>

        </div>
      </section>

      {/* Qui suis-je ? (About Sophie) section */}
      <section id="about-section" className="py-20 md:py-24 bg-stone-50 border-b border-stone-250/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSophie language={language} prices={prices} />
        </div>
      </section>

      {/* Pricing / Tiers section */}
      <section id="pricing-section" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-150/60 space-y-16">
        {/* Luxury Concierge & Palace Hotels partnerships section */}
        <div id="concierge-section">
          <ConciergeSection
            language={language}
            onSelectFormula={handleSelectPlanFromPricing}
            prices={prices}
          />
        </div>
      </section>

      {/* Instagram Feed section has been removed to simplify user experience as requested */}

      {/* Fake customer reviews section */}
      <section id="reviews-section" className="py-20 md:py-28 bg-white border-b border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials
            testimonials={testimonials}
            language={language}
            translations={translations}
          />
        </div>
      </section>

      {/* Local Elite Directories for Google Maps, Search Engines & AI GEO Optimization */}
      <section id="directory" className="py-20 bg-stone-50/50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LuxurySeoDirectory language={language} />
        </div>
      </section>

      {/* Direct Contact area with live availability calendar */}
      <section id="reservation-section" className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Live Calendar Widget to reinforce professional trust */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-stone-500 font-extrabold uppercase bg-white border border-stone-200 px-3.5 py-1.5 rounded-full shadow-xs">
                {language === 'fr' ? "AGENDA ET DISPONIBILITÉS EN DIRECT" : "LIVE SCHEDULE & DATES"}
              </span>
              <h2 className="text-3xl font-serif font-black text-charcoal-luxe">
                {language === 'fr' ? "Consultez le Calendrier de Sophie" : "Check Sophie's Live Calendar"}
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {language === 'fr'
                  ? "Consultez mes jours de disponibilité en temps réel pour planifier sereinement vos absences. Cliquez sur un jour disponible (vert) pour l'ajouter à vos dates de contact !"
                  : "Review my real-time available and fully-booked schedule. Click on any green day to pre-fill it for your upcoming booking request!"}
              </p>
            </div>
            
            <AvailabilityCalendar 
              language={language} 
              translations={translations} 
              isOwnerSpaceOpen={isOwnerSpaceOpen}
              onCloseOwnerSpace={() => setIsOwnerSpaceOpen(false)}
              onSelectDate={(dateStr) => {
                setSelectedStartDate(dateStr);
              }} 
              prices={prices}
              onUpdatePrices={handleUpdatePrices}
              testimonials={testimonials}
              onUpdateTestimonials={handleUpdateTestimonials}
            />

            {selectedStartDate && (
              <div className="max-w-md mx-auto p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center justify-between gap-4 animate-in zoom-in duration-300 shadow-xs">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-emerald-800 font-mono font-bold uppercase tracking-wider block">
                    {language === 'fr' ? "Date d'arrivée sélectionnée !" : "Arrival Date Pre-selected!"}
                  </span>
                  <span className="text-sm font-sans font-black text-stone-900">
                    {language === 'fr' ? "Début souhaité de garde :" : "Requested sitting start :"} <span className="underline decoration-emerald-500 decoration-2 font-mono font-bold">{selectedStartDate}</span>
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedStartDate("")} 
                  className="text-stone-550 hover:text-stone-900 text-xs font-mono font-bold bg-white px-2 py-1 rounded-lg border border-stone-200 cursor-pointer shadow-3xs"
                  title={language === 'fr' ? "Effacer" : "Clear"}
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div className="border-t border-stone-200/80 pt-16">
            <ContactVip language={language} selectedDate={selectedStartDate} prices={prices} />
          </div>
        </div>
      </section>

      {/* ACACED Prep / Book Section — "Tu veux devenir Pet-Sitter ?" */}
      <section id="acaced-book-section" className="py-20 bg-white border-b border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AcacedBookSection language={language} />
        </div>
      </section>

      {/* Blog & advice section (moved to bottom as requested) */}
      <section id="blog-section" className="py-20 md:py-28 bg-stone-50/50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogSection
            posts={blogPosts}
            onAddPost={handleAddNewPost}
            language={language}
            translations={translations}
          />
        </div>
      </section>

      {/* Real Footer with Bilingual navigation */}
      <footer className="bg-charcoal-luxe text-white pt-16 pb-12 border-t border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo brand info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-lg font-serif font-black tracking-tight uppercase text-white">{translations[language].brand}</span>
                <span className="text-[10px] text-amber-500 font-serif font-bold leading-none select-none">✦</span>
              </div>
              <span className="text-[9px] text-stone-400 tracking-widest font-black font-mono uppercase mt-1">Nice • Cannes • Monaco</span>
            </div>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              {translations[language].footerDesc}
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="text-xs text-riviera-gold font-bold font-mono flex items-center gap-1.5">
                <span>📞</span>
                <span>+33 (0)7 63 20 87 13</span>
              </div>
              <a 
                href="mailto:contact@patounecoteazur.fr"
                className="text-xs text-white hover:text-riviera-gold transition-colors font-mono font-bold flex items-center gap-1.5"
                title="Send Email"
              >
                <span>✉️</span>
                <span>contact@patounecoteazur.fr</span>
              </a>
            </div>
          </div>

          {/* Quick link */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-riviera-gold font-mono">Nice Area</h4>
            <ul className="text-xs text-stone-450 space-y-1.5 font-sans">
              <li>Nice Promenade des Anglais</li>
              <li>Cimiez & Mont Boron pet parks</li>
              <li>Villefranche-sur-Mer</li>
            </ul>
          </div>

          {/* Monaco / Cannes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-riviera-gold font-mono font-semibold">Monaco & Cannes</h4>
            <ul className="text-xs text-stone-450 space-y-1.5 font-sans">
              <li>Monaco Monte-Carlo Larvotto</li>
              <li>Cannes Croisette, Le Cannet</li>
              <li>Antibes Juan-les-Pins</li>
            </ul>
          </div>

          {/* Commitment detail */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300 font-mono">
              {language === 'fr' ? "Qualité & Engagement" : "Quality & Caring"}
            </h4>
            <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
              {language === 'fr'
                ? "Nous offrons un service attentionné, bienveillant et de toute confiance pour vos compagnons à Nice, Cannes et Monaco."
                : "We offer loving, caring, and highly-trusted pet sitting services for your companions in Nice, Cannes, and Monaco."}
            </p>
          </div>
        </div>

        {/* Legal copyright bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p className="text-center sm:text-left w-full sm:w-auto">
            {translations[language].footerCopyright}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-riviera-gold transition-colors">{translations[language].footerLinks}</a>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Quick Contact Dock for absolute surfing convenience */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-stone-950/95 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl border border-stone-850 shadow-2xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-mono tracking-widest text-riviera-gold font-extrabold uppercase leading-none">
            {language === 'fr' ? "DISPONIBLE 7J/7" : "AVAILABLE 7D/7"}
          </span>
          <span className="text-[11.5px] text-stone-200 font-serif font-black tracking-tight mt-1 uppercase">
            {language === 'fr' ? "Sophie • Pet Sitter" : "Sophie • Pet Sitter"}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => scrollToSection('reservation-section')}
            className="p-2 bg-stone-900 border border-stone-800 text-stone-100 hover:text-white rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1 hover:scale-105 active:scale-95"
            title={language === 'fr' ? "Vérifier l'agenda" : "View Live Schedule"}
          >
            <span>🗓️</span>
            <span className="hidden sm:inline">{language === 'fr' ? "Agenda" : "Dates"}</span>
          </button>
          
          <a 
            href="https://wa.me/33763208713"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1 hover:scale-105 active:scale-95 shadow"
            title="WhatsApp"
          >
            <span>💬</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <a 
            href="tel:+33763208713"
            className="p-2 bg-white text-stone-950 font-bold font-mono rounded-xl text-xs transition-all flex items-center gap-1 hover:bg-stone-100 hover:scale-105 active:scale-95"
            title="Appeler Sophie"
          >
            <span>📞</span>
            <span className="hidden sm:inline">{language === 'fr' ? "Appeler" : "Call"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
