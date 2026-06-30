import { useState, useRef } from 'react';
import { BLOG_POSTS, TESTIMONIALS } from './data';
import { translations } from './translations';
import { BlogPost } from './types';
import Testimonials from './components/Testimonials';
import ContactVip from './components/ContactVip';
import BlogSection from './components/BlogSection';
import ConciergeSection from './components/ConciergeSection';
import AboutSophie from './components/AboutSophie';
import { Sparkles, Calendar, Menu, X, Landmark, Globe, Heart, Phone, Award, ShieldAlert } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'where' | 'safety' | 'pricing' | 'contact'>('where');

  // Toggle language translation dictionary
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
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
    <div className="min-h-screen bg-villa-cream text-stone-750 font-sans selection:bg-riviera-sand selection:text-riviera-deep leading-normal scroll-smooth">
      {/* Upper Top Minimal Announcement Bar */}
      <div className="bg-stone-950 text-stone-100 py-3 px-4 text-center text-[11px] md:text-xs font-mono tracking-wider uppercase flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 border-b border-stone-900">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="font-extrabold tracking-widest text-white">
            {language === 'fr' 
              ? "Service agréé pour Hôtels de Luxe & Conciergeries 5★ (Nice • Cannes • Monaco)" 
              : "Bespoke Pet Care Partner for Luxury Hotels & 5★ Concierges (Nice • Cannes • Monaco)"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-white/20">|</span>
          <a href="tel:+33763208713" className="text-white font-black hover:underline flex items-center gap-1.5 text-xs">
            <Phone className="h-3 w-3 text-white shrink-0 animate-bounce" />
            <span>+33 (0)7 63 20 87 13</span>
          </a>
        </div>
      </div>

      {/* Main Premium Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-150/80 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => scrollToSection('hero-section')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="h-11 w-11 rounded-full overflow-hidden border border-black flex items-center justify-center bg-white shadow-sm group-hover:scale-105 transition-all duration-300">
              <img 
                src="/src/assets/images/patoune_monogram_blason_1782742409538.jpg" 
                alt="Patoune Blason Logo" 
                className="w-full h-full object-cover scale-[1.05]"
                referrerPolicy="no-referrer"
              />
            </span>
            <div>
              <h1 className="text-xl font-serif font-black text-charcoal-luxe tracking-tight leading-none uppercase">
                {translations[language].brand}
              </h1>
              <span className="text-[9px] text-stone-500 tracking-widest font-bold font-mono uppercase block mt-1">
                Nice • Cannes • Monaco
              </span>
            </div>
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
              title={language === 'fr' ? "Voir les tarifs Palace & Yachts" : "View Palace & Yacht rates"}
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              <span>{translations[language].navServices}</span>
            </button>
            <button onClick={() => scrollToSection('blog-section')} className="hover:text-black transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4">
              {translations[language].navBlog}
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

            <button
              onClick={toggleLanguage}
              className="px-3.5 py-2 border border-stone-200 rounded-xl hover:bg-stone-100 hover:border-black transition-colors text-xs font-bold font-mono tracking-wider text-stone-700 flex items-center gap-1.5 cursor-pointer"
              title={language === 'fr' ? "Switch to English" : "Passer en Français"}
            >
              <Globe className="h-3.5 w-3.5 text-stone-800" />
              <span>{translations[language].langCode}</span>
            </button>

            <button
              onClick={() => scrollToSection('reservation-section')}
              className="px-5 py-2.5 bg-black hover:bg-stone-900 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg active:translate-y-0.5"
            >
              {translations[language].navBooking}
            </button>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 border border-stone-200 rounded-xl hover:bg-riviera-light transition-colors text-xs font-bold font-mono text-stone-700 flex items-center gap-1"
            >
              <Globe className="h-3.5 w-3.5 text-riviera-azure" />
              <span>{translations[language].langCode}</span>
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
              onClick={() => scrollToSection('reservation-section')}
              className="block w-full text-center py-3 bg-riviera-azure text-white rounded-xl font-extrabold transition-all shadow shadow-riviera-azure/20"
            >
              {translations[language].navBooking}
            </button>
          </div>
        )}
      </header>

      {/* Exclusive Full-Width Hand-Drawn Palace Suite Illustration */}
      <section className="w-full bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="relative rounded-2xl overflow-hidden border-[6px] sm:border-[8px] border-white outline outline-1 outline-stone-300 shadow-md bg-white">
            <div className="absolute inset-2 border border-black/5 pointer-events-none z-10"></div>
            <img
              src="/src/assets/images/palace_dog_butlers_sketch_1782744320697.jpg"
              alt={language === 'fr' ? "Le Chien de Palace et ses Majordomes — Illustration Exclusive" : "The Palace Dog & his Butlers — Exclusive Illustration"}
              className="w-full h-auto object-cover grayscale opacity-95 hover:opacity-100 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
            {/* Elegant luxury signature label */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 backdrop-blur-sm border border-stone-200 px-2.5 py-1 rounded-lg text-[8px] sm:text-[10px] font-mono tracking-widest text-stone-600 uppercase z-20 shadow-sm">
              ✨ {language === 'fr' ? "Le Chien de Palace et ses Majordomes" : "The Palace Dog & Butlers"}
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
              {/* Added B2B direct Espace Pro link button inside the Hero as requested */}
              <button
                onClick={() => scrollToSection('concierge-section')}
                className="px-6 py-4 bg-stone-50 hover:bg-stone-150 text-stone-900 font-mono font-black rounded-2xl border border-stone-300 shadow-sm text-xs tracking-wider uppercase text-center transition-all cursor-pointer hover:scale-[1.03] flex items-center justify-center gap-2"
              >
                💼 {language === 'fr' ? "Tarifs Hôtels / Yachts (Pro)" : "Pro rates (Hotel & Yacht)"}
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
                        ? "Intervention sur-mesure à domicile, en hôtel 5★/Palace, villa & yacht. Sophie se déplace sous 2 heures d'appel."
                        : "Bespoke service at your private home, 5-star hotel suite, villa, or private superyacht. Speedy 2-hour response time."}
                    </p>
                  </div>
                )}

                {activeTab === 'safety' && (
                  <div className="space-y-3.5">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 font-extrabold">🔒 Garanties Officielles d'Élite</span>
                    <ul className="space-y-2 text-xs text-stone-200 font-sans">
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✔</span>
                        <span><strong>{language === 'fr' ? "Agrément d'État (ACACED)" : "Official ACACED License"}</strong> (DDPP n°2023/182-A)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✔</span>
                        <span><strong>{language === 'fr' ? "Assurance Allianz RC Pro" : "Allianz Business Insurance"}</strong> {language === 'fr' ? "spécifique garde d'animaux de valeur" : "for high-value breeds custody"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✔</span>
                        <span><strong>{language === 'fr' ? "Savoir-faire Luxe (ESSEC)" : "Luxury Standards (ESSEC)"}</strong> {language === 'fr' ? "diplômée Grande École" : "Grande École alumna"}</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'pricing' && (
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 font-extrabold">💰 Tarifs de Référence Simples</span>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "À l'heure" : "Hourly"}</span>
                        <span className="font-mono font-bold text-white text-xs">45 € / H</span>
                      </div>
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "Demi-Journée" : "Half-Day"}</span>
                        <span className="font-mono font-bold text-white text-xs">150 €</span>
                      </div>
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "Journée (8H)" : "Full Day"}</span>
                        <span className="font-mono font-bold text-white text-xs">280 €</span>
                      </div>
                      <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-850 flex justify-between items-center">
                        <span className="text-[11px] text-stone-400 font-medium">{language === 'fr' ? "Forfait 24H" : "24h Stay"}</span>
                        <span className="font-mono font-bold text-white text-xs">350 €</span>
                      </div>
                    </div>
                    <span className="block text-[10.5px] text-stone-400 font-sans italic">
                      {language === 'fr' ? "* Tarification transparente tout inclus, aucun frais caché." : "* Fully transparent prices, zero hidden fees."}
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
          <AboutSophie language={language} />
        </div>
      </section>

      {/* Pricing / Tiers section */}
      <section id="pricing-section" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-150/60 space-y-16">
        {/* Luxury Concierge & Palace Hotels partnerships section */}
        <div id="concierge-section">
          <ConciergeSection
            language={language}
            onSelectFormula={handleSelectPlanFromPricing}
          />
        </div>
      </section>

      {/* Instagram Feed section has been removed to simplify user experience as requested */}

      {/* Fake customer reviews section */}
      <section id="reviews-section" className="py-20 md:py-28 bg-white border-b border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials
            testimonials={TESTIMONIALS}
            language={language}
            translations={translations}
          />
        </div>
      </section>

      {/* Blog & advice section */}
      <section id="blog-section" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <BlogSection
          posts={blogPosts}
          onAddPost={handleAddNewPost}
          language={language}
          translations={translations}
        />
      </section>

      {/* Direct Contact area */}
      <section id="reservation-section" className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactVip language={language} />
        </div>
      </section>

      {/* Real Footer with Bilingual navigation */}
      <footer className="bg-charcoal-luxe text-white pt-16 pb-12 border-t border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full overflow-hidden border border-stone-800 flex items-center justify-center bg-white">
                <img 
                  src="/src/assets/images/patoune_monogram_blason_1782742409538.jpg" 
                  alt="Patoune Blason Logo" 
                  className="w-full h-full object-cover scale-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </span>
              <span className="text-lg font-serif font-black tracking-tight uppercase">{translations[language].brand}</span>
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
                ? "Nous privilégions un service d'excellence, discret et sur-mesure pour chacun de vos compagnons à Nice, Cannes et Monaco."
                : "We prioritize a discreet, tailored service of elite standards for your precious companions in Nice, Cannes, and Monaco."}
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
    </div>
  );
}
