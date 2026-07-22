import { useState, useEffect, FormEvent } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Heart, 
  Shield, 
  Calendar, 
  User, 
  Cat, 
  Send, 
  PhoneCall, 
  AlertCircle, 
  ClipboardList 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface ContactVipProps {
  language: Language;
  selectedDate?: string;
  prices?: {
    boarding: number;
    catBoarding: number;
    homeSitting: number;
    walk: number;
    catVisit: number;
  };
}

export default function ContactVip({ language, selectedDate, prices }: ContactVipProps) {
  // Dynamic prices fallback
  const pBoarding = prices?.boarding ?? 40;
  const pCatBoarding = prices?.catBoarding ?? 25;
  const pHomeSitting = prices?.homeSitting ?? 50;
  const pWalk = prices?.walk ?? 25;
  const pCatVisit = prices?.catVisit ?? 20;

  // Direct details
  const emailAddress = "contact@patounecoteazur.fr";
  const phoneNumber = "+33763208713";
  const formattedPhone = "+33 (0)7 63 20 87 13";

  // Build reactive WhatsApp URL for sidebar quick-action
  const whatsAppMessage = language === 'fr'
    ? `Bonjour Sophie ! 🐾 J'aimerais faire garder mon compagnon et obtenir des renseignements sur vos formules haut de gamme.${selectedDate ? ` Je souhaiterais réserver à partir du ${selectedDate}.` : ""}`
    : `Hello Sophie! 🐾 I would love to arrange luxury pet sitting care for my companion and request information about your packages.${selectedDate ? ` I would like to book starting from ${selectedDate}.` : ""}`;

  const encodedMessage = encodeURIComponent(whatsAppMessage);
  const whatsAppUrl = `https://wa.me/33763208713?text=${encodedMessage}`;

  // Form States
  const [ownerName, setOwnerName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('dog'); // dog, cat, other
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedService, setSelectedService] = useState('boarding'); // boarding, homeSitting, walk, catVisit
  const [specialNotes, setSpecialNotes] = useState('');

  // UI States
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formattedMailto, setFormattedMailto] = useState('');
  const [formattedWhatsappUrl, setFormattedWhatsappUrl] = useState('');
  const [formattedSummaryText, setFormattedSummaryText] = useState('');
  const [emailSentStatus, setEmailSentStatus] = useState<'idle' | 'sending' | 'success' | 'failed'>('idle');

  // Pre-fill startDate when user clicks on a day in the live calendar
  useEffect(() => {
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  }, [selectedDate]);

  // Handle direct copying
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(formattedSummaryText);
    alert(language === 'fr' ? "Le résumé a été copié dans votre presse-papiers !" : "Summary copied to clipboard!");
  };

  // Submit and open native apps with double confirmation
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!ownerName || !clientPhone || !clientEmail || !startDate || !endDate) {
      alert(language === 'fr' ? "Veuillez remplir tous les champs obligatoires (Nom, Téléphone, Email, Dates)." : "Please fill in all required fields (Name, Phone, Email, Dates).");
      return;
    }

    setIsSubmitting(true);
    setEmailSentStatus('sending');

    // Build structured texts
    const serviceLabels: Record<string, string> = {
      boarding: language === 'fr' ? "Garde d'Exception chez Sophie" : "Exclusive Boarding at Sophie's",
      homeSitting: language === 'fr' ? "Garde à votre Domicile (Villa/Hôtel)" : "Day Sitting at Your Home (Villa/Hotel)",
      walk: language === 'fr' ? "Promenade Active (1H)" : "1-Hour Active Walk",
      catVisit: language === 'fr' ? "Visite Chat sur-mesure" : "Tailored Cat Visit"
    };

    const petTypeLabels: Record<string, string> = {
      dog: language === 'fr' ? "Chien 🐶" : "Dog 🐶",
      cat: language === 'fr' ? "Chat 🐱" : "Cat 🐱",
      other: language === 'fr' ? "Autre NAC 🐹" : "Other NAC 🐹"
    };

    // Email formatting
    const subject = language === 'fr' 
      ? `🐾 Demande de Réservation Prestige - Compagnon ${petName || 'S/N'}`
      : `🐾 Premium Sitting Request - Companion ${petName || 'N/A'}`;

    const emailBody = language === 'fr'
      ? `Bonjour Sophie,

Je souhaite réserver une garde d'exception pour mon compagnon. Voici les détails de ma demande :

✦ PROPRIÉTAIRE :
- Nom complet : ${ownerName}
- Téléphone : ${clientPhone}
- E-mail de contact : ${clientEmail}

✦ COMPAGNON :
- Nom de l'animal : ${petName || 'Non spécifié'}
- Type d'animal : ${petTypeLabels[petType]}

✦ SÉJOUR & FORMULE :
- Formule choisie : ${serviceLabels[selectedService]}
- Date d'arrivée : ${startDate}
- Date de départ : ${endDate}

✦ CONSIGNES PARTICULIÈRES :
${specialNotes || 'Aucune consigne spécifique.'}

Je vous remercie par avance et attends votre retour pour confirmer mes dates.

Cordialement,
${ownerName}
`
      : `Hello Sophie,

I would love to book a premium care stay for my companion. Here are my request details:

✦ OWNER DETAILS:
- Full Name: ${ownerName}
- Phone Number: ${clientPhone}
- Contact Email: ${clientEmail}

✦ COMPANION:
- Pet's Name: ${petName || 'Not specified'}
- Pet Type: ${petTypeLabels[petType]}

✦ SERVICE & DATES:
- Chosen Formula: ${serviceLabels[selectedService]}
- Start Date: ${startDate}
- End Date: ${endDate}

✦ SPECIAL CARE INSTRUCTIONS:
${specialNotes || 'No specific instructions.'}

Thank you in advance. I look forward to your confirmation.

Warm regards,
${ownerName}
`;

    // Whatsapp message formatting
    const whatsappMsg = language === 'fr'
      ? `Bonjour Sophie ! 🐾 Demande de Réservation :
👤 Nom : ${ownerName}
📞 Tél : ${clientPhone}
✉️ E-mail : ${clientEmail}
🐶 Animal : ${petName} (${petTypeLabels[petType]})
💼 Service : ${serviceLabels[selectedService]}
🗓️ Dates : Du ${startDate} au ${endDate}
💡 Notes : ${specialNotes || 'Aucune'}`
      : `Hello Sophie! 🐾 Booking Request:
👤 Name: ${ownerName}
📞 Phone: ${clientPhone}
✉️ Email: ${clientEmail}
🐶 Pet Name: ${petName} (${petTypeLabels[petType]})
💼 Service: ${serviceLabels[selectedService]}
🗓️ Dates: From ${startDate} to ${endDate}
💡 Notes: ${specialNotes || 'None'}`;

    // Set states for popup
    setFormattedSummaryText(emailBody);
    setFormattedMailto(`mailto:${emailAddress}?cc=${clientEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`);
    setFormattedWhatsappUrl(`https://wa.me/33763208713?text=${encodeURIComponent(whatsappMsg)}`);

    // Save to local reservation log so Sophie can view them locally later
    const newBooking = {
      id: Date.now(),
      ownerName,
      clientPhone,
      clientEmail,
      petName,
      petType,
      startDate,
      endDate,
      selectedService,
      specialNotes,
      dateSubmitted: new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')
    };

    const existingBookings = JSON.parse(localStorage.getItem('patoune_booking_history') || '[]');
    localStorage.setItem('patoune_booking_history', JSON.stringify([newBooking, ...existingBookings]));

    // API Post
    try {
      const apiResponse = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ownerName,
          petName,
          petType,
          email: clientEmail,
          phone: clientPhone,
          city: "Côte d'Azur",
          startDate,
          endDate,
          serviceType: serviceLabels[selectedService],
          notes: specialNotes,
        }),
      });

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        if (data.emailSent) {
          setEmailSentStatus('success');
        } else {
          console.warn("Backend loaded SMTP failure or missing keys. Showing manual copy options:", data.emailError);
          setEmailSentStatus('failed');
        }
      } else {
        console.warn("API response error status:", apiResponse.status);
        setEmailSentStatus('failed');
      }
    } catch (apiErr) {
      console.error("Failed to connect to bookings backend notification service:", apiErr);
      setEmailSentStatus('failed');
    }

    setIsSubmitting(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-1">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-white text-stone-900 text-xs font-bold font-mono px-3.5 py-1.5 rounded-full border border-stone-250 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-stone-800 animate-pulse" />
          <span>{language === 'fr' ? "RÉPONSE DIRECTE DE SOPHIE SOUS 2 HEURES" : "DIRECT REPLIES FROM SOPHIE WITHIN 2 HOURS"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-charcoal-luxe tracking-tight">
          {language === 'fr' ? "Formuler Votre Demande d'Exception" : "Request Exceptional Pet Sitter Care"}
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          {language === 'fr'
            ? "Remplissez ce formulaire d'informations pour planifier sereinement votre réservation. Votre e-mail sera en copie pour garantir votre suivi, et votre numéro me permettra de vous recontacter directement."
            : "Complete this premium form to request a scheduled booking. Your email is automatically CC'd for your own records, and your phone number allows me to reach out directly."}
        </p>
      </div>

      {/* Booking Form and Direct Contact Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Booking Form */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
            <div className="p-2 bg-amber-500/10 text-amber-600 rounded-lg">
              <ClipboardList className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif font-black text-lg text-stone-950">
                {language === 'fr' ? "Demande de Réservation en Ligne" : "Online Reservation Request"}
              </h3>
              <p className="text-[11px] text-stone-500 font-mono">
                {language === 'fr' ? "ZÉRO ENGAGEMENT • ANNULATION FLEXIBLE" : "NO DEPOSIT REQUIRED • FLEXIBLE CANCELLATION"}
              </p>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 font-sans text-xs">
            {/* Owner Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-stone-700 font-bold block">
                  {language === 'fr' ? "Nom Complet *" : "Your Full Name *"}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-450" />
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="M. ou Mme Martin"
                    className="w-full pl-10 pr-4 py-3 bg-stone-50/50 border border-stone-250 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 focus:bg-white transition-all text-sm outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-stone-700 font-bold block">
                  {language === 'fr' ? "Téléphone Portable *" : "Phone Number *"}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-450" />
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Ex: 06 12 34 56 78"
                    className="w-full pl-10 pr-4 py-3 bg-stone-50/50 border border-stone-250 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 focus:bg-white transition-all text-sm outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-stone-700 font-bold block">
                  {language === 'fr' ? "Adresse E-mail *" : "Email Address *"}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-450" />
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full pl-10 pr-4 py-3 bg-stone-50/50 border border-stone-250 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 focus:bg-white transition-all text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Pet Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-stone-100 pt-5">
              <div className="space-y-1.5">
                <label className="text-stone-700 font-bold block">
                  {language === 'fr' ? "Nom du Compagnon" : "Pet's Name"}
                </label>
                <div className="relative">
                  <Heart className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-450" />
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Ex: Simba, Toby..."
                    className="w-full pl-10 pr-4 py-3 bg-stone-50/50 border border-stone-250 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 focus:bg-white transition-all text-sm outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-stone-700 font-bold block">
                  {language === 'fr' ? "Espèce" : "Companion Breed/Species"}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPetType('dog')}
                    className={`py-3 rounded-xl border text-center transition-all cursor-pointer font-sans text-xs ${
                      petType === 'dog'
                        ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold'
                        : 'border-stone-200 bg-white hover:bg-stone-55 text-stone-600'
                    }`}
                  >
                    🐶 {language === 'fr' ? "Chien" : "Dog"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType('cat')}
                    className={`py-3 rounded-xl border text-center transition-all cursor-pointer font-sans text-xs ${
                      petType === 'cat'
                        ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold'
                        : 'border-stone-200 bg-white hover:bg-stone-55 text-stone-600'
                    }`}
                  >
                    🐱 {language === 'fr' ? "Chat" : "Cat"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType('other')}
                    className={`py-3 rounded-xl border text-center transition-all cursor-pointer font-sans text-xs ${
                      petType === 'other'
                        ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold'
                        : 'border-stone-200 bg-white hover:bg-stone-55 text-stone-600'
                    }`}
                  >
                    🐹 {language === 'fr' ? "NAC" : "Other"}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-stone-700 font-bold block">
                  {language === 'fr' ? "Prestation Souhaitée" : "Requested Service"}
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-3 bg-stone-50 border border-stone-250 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 focus:bg-white transition-all text-sm outline-none cursor-pointer font-sans"
                >
                  <option value="boarding">🐾 {language === 'fr' ? `Garde chez Sophie (${pBoarding} €/j)` : `Boarding at Sophie's (€${pBoarding}/d)`}</option>
                  <option value="homeSitting">🏡 {language === 'fr' ? `Garde à votre Domicile (${pHomeSitting} €/j)` : `At-Home Day Sitting (€${pHomeSitting}/d)`}</option>
                  <option value="walk">🌳 {language === 'fr' ? `Promenade active 1H (${pWalk} €)` : `1-Hour Active Walk (€${pWalk})`}</option>
                  <option value="catVisit">🐈 {language === 'fr' ? `Visite Chat 45 min (${pCatVisit} €)` : `45-Min Cat Visit (€${pCatVisit})`}</option>
                </select>
              </div>
            </div>

            {/* Stay Dates Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-stone-100 pt-5">
              <div className="space-y-1.5">
                <label className="text-stone-700 font-bold block">
                  {language === 'fr' ? "Date de Début / Arrivée *" : "Start Date / Arrival *"}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-450" />
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-stone-50/50 border border-stone-250 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 focus:bg-white transition-all text-sm outline-none font-sans"
                  />
                </div>
                {selectedDate && (
                  <p className="text-[10px] text-emerald-600 font-mono italic">
                    {language === 'fr' ? "✓ Date pré-remplie depuis l'agenda !" : "✓ Pre-filled from live schedule!"}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-stone-700 font-bold block">
                  {language === 'fr' ? "Date de Fin / Départ *" : "End Date / Departure *"}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-450" />
                  <input
                    type="date"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-stone-50/50 border border-stone-250 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 focus:bg-white transition-all text-sm outline-none font-sans"
                  />
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="space-y-1.5 border-t border-stone-100 pt-5">
              <label className="text-stone-700 font-bold block">
                {language === 'fr' ? "Détails de Soin / Consignes Particulières" : "Special Instructions / Medical Habits"}
              </label>
              <textarea
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                rows={3}
                placeholder={
                  language === 'fr'
                    ? "Ex: Traitement médical quotidien, sociabilité, alimentation à peser, habitudes de sommeil, peurs spécifiques..."
                    : "E.g. Daily medical pill, socialization with other dogs, precise feeding weights, sleeping habits..."
                }
                className="w-full px-4 py-3 bg-stone-50/50 border border-stone-250 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 focus:bg-white transition-all text-sm outline-none resize-none font-sans"
              />
            </div>

            {/* Direct Send Trigger */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-stone-900 to-stone-950 text-white font-black text-xs tracking-widest uppercase rounded-xl hover:from-amber-500 hover:to-amber-600 hover:text-stone-950 active:translate-y-0.5 transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                <span>
                  {isSubmitting
                    ? (language === 'fr' ? "PRÉPARATION DU REÇU..." : "CREATING RECEIPT...")
                    : (language === 'fr' ? "VALIDER MA DEMANDE DE RÉSERVATION" : "CONFIRM MY SITTING REQUEST")}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Dynamic direct communication info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Direct Phone & WhatsApp Access card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-lg space-y-5">
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-500/10">
              <PhoneCall className="h-5 w-5" />
            </div>
            
            <div className="space-y-1.5">
              <h4 className="font-serif font-bold text-base text-stone-900">
                {language === 'fr' ? "Besoin d'aide immédiate ?" : "Direct Live Contacts"}
              </h4>
              <p className="text-[11px] text-stone-500 leading-normal">
                {language === 'fr'
                  ? "Vous préférez m'appeler directement pour caler des dates en dernière minute ?"
                  : "Prefer to talk directly to adjust emergency or last-minute calendars?"}
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-150 flex items-center justify-between gap-2">
              <div className="space-y-0.5">
                <span className="block text-[9px] text-stone-400 font-mono uppercase tracking-wider">
                  {language === 'fr' ? "Ligne Directe de Sophie" : "Sophie's Mobile"}
                </span>
                <span className="block text-sm font-mono font-bold text-stone-900">
                  {formattedPhone}
                </span>
              </div>
              <button 
                onClick={handleCopyPhone}
                className="p-2 rounded-xl bg-white border border-stone-200 text-stone-500 hover:text-stone-950 hover:border-black transition-all cursor-pointer shadow-3xs"
                title={language === 'fr' ? "Copier" : "Copy"}
              >
                {copiedPhone ? <Check className="h-3.5 w-3.5 text-stone-950" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            <div className="flex flex-col gap-2 pt-1 font-mono text-[10.5px]">
              <a 
                href={`tel:${phoneNumber}`}
                className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-850 text-white font-bold text-center rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>📞</span>
                <span>{language === 'fr' ? "Lancer l'Appel Direct" : "Call Sophie Directly"}</span>
              </a>

              <a 
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-stone-950 hover:bg-black text-white font-bold text-center rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>💬</span>
                <span>{language === 'fr' ? "WhatsApp Privé" : "Open Direct WhatsApp"}</span>
              </a>
            </div>
          </div>

          {/* Email Professional details */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-lg space-y-4">
            <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center border border-amber-500/10">
              <Mail className="h-5 w-5" />
            </div>
            
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-base text-stone-900">
                {language === 'fr' ? "E-mail Professionnel" : "Direct Email Account"}
              </h4>
              <span className="block font-mono text-xs text-stone-950 font-black break-all select-all">
                {emailAddress}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-3 bg-stone-50 hover:bg-stone-100 text-stone-700 hover:text-black border border-stone-200 text-[11px] font-bold font-mono rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {copiedEmail ? <Check className="h-3.5 w-3.5 text-stone-950" /> : <Copy className="h-3.5 w-3.5 text-stone-500" />}
              <span>{copiedEmail ? (language === 'fr' ? "Copié !" : "Copied!") : (language === 'fr' ? "Copier l'Adresse E-mail" : "Copy Email Address")}</span>
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className="p-5 bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl border border-stone-850 shadow-lg space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-16 w-16 bg-white/5 rounded-full blur-xl"></div>
            <div className="flex items-center gap-2.5">
              <Shield className="h-5 w-5 text-amber-500" />
              <span className="font-serif font-black text-xs uppercase tracking-wide text-white">
                {language === 'fr' ? "Agréments & Sécurité" : "Licensed & Secure Stay"}
              </span>
            </div>
            <p className="text-[10px] text-stone-400 leading-relaxed font-sans">
              {language === 'fr'
                ? "Titulaire du certificat officiel ACACED d'État n°2024. Couverture d'assurance responsabilité civile GMF incluse sur toutes les prestations."
                : "Official ACACED licensed companion caregiver. Full GMF Liability insurance active during all boarding and sitting hours."}
            </p>
          </div>
        </div>

      </div>

      {/* SUCCESS POPUP MODAL (Double confirmation receipts flow) */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-stone-250 shadow-2xl relative z-10 overflow-hidden text-stone-900 space-y-6"
            >
              {/* Premium Header */}
              <div className="text-center space-y-3">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center mx-auto border ${
                  emailSentStatus === 'success' 
                    ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-600 border-amber-500/20'
                }`}>
                  <Check className="h-6 w-6 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-serif font-black text-stone-950">
                  {emailSentStatus === 'success' 
                    ? (language === 'fr' ? "Réservation Envoyée !" : "Booking Requested!")
                    : (language === 'fr' ? "Demande Prête à l'Envoi !" : "Booking Form Prepared!")
                  }
                </h3>
                {emailSentStatus === 'success' ? (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center max-w-sm mx-auto space-y-1 shadow-3xs">
                    <p className="text-xs text-emerald-850 font-semibold leading-relaxed">
                      {language === 'fr' 
                        ? "✉️ Un e-mail de confirmation a été envoyé automatiquement à votre adresse et à Sophie !" 
                        : "✉️ A confirmation email was sent automatically to your email and to Sophie!"}
                    </p>
                    <p className="text-[10px] text-emerald-700 font-mono">
                      {language === 'fr' 
                        ? "(Vérifiez vos spams si vous ne le voyez pas d'ici quelques instants)" 
                        : "(Please check your spam folder if it doesn't arrive within a few moments)"}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                    {language === 'fr'
                      ? "Pour valider définitivement et recevoir votre confirmation, veuillez choisir votre canal d'envoi préféré ci-dessous :"
                      : "To finalize and receive your confirmation, please select your preferred instant sending method below:"}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Send Email CC */}
                <a
                  href={formattedMailto}
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-4 px-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-xs tracking-widest uppercase rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer text-center"
                >
                  <Mail className="h-4.5 w-4.5" />
                  <span>
                    {language === 'fr' 
                      ? "📬 Envoyer par E-mail (Copie Client)" 
                      : "📬 Send Email Booking (Client Copy CC)"}
                  </span>
                </a>

                {/* Send WhatsApp message */}
                <a
                  href={formattedWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-4 px-5 bg-stone-950 hover:bg-black text-white font-extrabold text-xs tracking-widest uppercase rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer text-center"
                >
                  <MessageCircle className="h-4.5 w-4.5 text-emerald-400" />
                  <span>
                    {language === 'fr' 
                      ? "💬 Envoyer par WhatsApp Direct" 
                      : "💬 Dispatch over WhatsApp"}
                  </span>
                </a>
              </div>

              {/* Informative text box displaying what was compiled */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-stone-400 uppercase">
                    {language === 'fr' ? "RÉSUMÉ DU MESSAGE PRÉPARÉ" : "COMPILED REQUEST SUMMARY"}
                  </span>
                  <button 
                    onClick={handleCopySummary}
                    className="text-[10px] text-amber-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="h-3 w-3" />
                    <span>{language === 'fr' ? "Copier le texte" : "Copy text"}</span>
                  </button>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 max-h-36 overflow-y-auto text-[11px] font-mono text-stone-700 whitespace-pre-wrap leading-relaxed">
                  {formattedSummaryText}
                </div>
              </div>

              {/* Small details */}
              <div className="text-center pt-2 border-t border-stone-100 flex items-center justify-center gap-2 text-[10px] text-stone-500 font-medium">
                <Shield className="h-3.5 w-3.5 text-emerald-600" />
                <span>
                  {language === 'fr' 
                    ? "Sophie vous recontactera dès réception au numéro renseigné." 
                    : "Sophie will call you back at your number as soon as received."}
                </span>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-stone-100 text-stone-500 hover:text-black hover:bg-stone-200 flex items-center justify-center cursor-pointer transition-all"
                title={language === 'fr' ? "Fermer" : "Close"}
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
