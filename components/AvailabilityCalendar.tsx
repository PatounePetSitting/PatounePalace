import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Settings, 
  Lock, 
  Unlock, 
  Trash2, 
  Key, 
  RotateCcw, 
  ClipboardList, 
  Phone, 
  Mail, 
  User, 
  Cat,
  X
} from 'lucide-react';
import { Language } from '../types';

interface AvailabilityCalendarProps {
  onSelectDate: (dateStr: string) => void;
  language: Language;
  translations: any;
  isOwnerSpaceOpen?: boolean;
  onCloseOwnerSpace?: () => void;
  prices?: {
    boarding: number;
    catBoarding: number;
    homeSitting: number;
    walk: number;
    catVisit: number;
  };
  onUpdatePrices?: (newPrices: any) => void;
  testimonials?: any[];
  onUpdateTestimonials?: (newTestimonials: any[]) => void;
}

export default function AvailabilityCalendar({ 
  onSelectDate, 
  language, 
  translations,
  isOwnerSpaceOpen = false,
  onCloseOwnerSpace,
  prices,
  onUpdatePrices,
  testimonials = [],
  onUpdateTestimonials
}: AvailabilityCalendarProps) {
  // Navigation
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(4); // 0-indexed: 4 is May, 5 is June

  // Admin Access & Overrides
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [editModeActive, setEditModeActive] = useState(false);
  const [calendarOverrides, setCalendarOverrides] = useState<Record<string, 'available' | 'limited' | 'booked'>>({});
  const [bookingHistory, setBookingHistory] = useState<any[]>([]);

  // Local Pricing States
  const [localPrices, setLocalPrices] = useState({
    boarding: 40,
    catBoarding: 25,
    homeSitting: 50,
    walk: 25,
    catVisit: 20
  });
  const [pricesSaved, setPricesSaved] = useState(false);

  // Sync localPrices with prices prop
  useEffect(() => {
    if (prices) {
      setLocalPrices(prices);
    }
  }, [prices]);

  const handleSavePrices = (e: FormEvent) => {
    e.preventDefault();
    if (onUpdatePrices) {
      onUpdatePrices(localPrices);
    }
    setPricesSaved(true);
    setTimeout(() => setPricesSaved(false), 3000);
  };

  const handleResetToStandardPrices = () => {
    const standard = {
      boarding: 40,
      catBoarding: 25,
      homeSitting: 50,
      walk: 25,
      catVisit: 20
    };
    setLocalPrices(standard);
    if (onUpdatePrices) {
      onUpdatePrices(standard);
    }
    setPricesSaved(true);
    setTimeout(() => setPricesSaved(false), 3000);
  };

  // Diagnostics Test Email states
  const [testEmailStatus, setTestEmailStatus] = useState<'idle' | 'sending' | 'success' | 'failed'>('idle');
  const [testEmailError, setTestEmailError] = useState('');

  // Testimonials management states
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<any | null>(null);
  const [formAuthor, setFormAuthor] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formPetName, setFormPetName] = useState('');
  const [formPetType, setFormPetType] = useState<'dog' | 'cat' | 'other'>('dog');
  const [formCommentFr, setFormCommentFr] = useState('');
  const [formCommentEn, setFormCommentEn] = useState('');
  const [formDate, setFormDate] = useState('Mai 2026');
  const [formImage, setFormImage] = useState('');

  // Preset photos for easy selection
  const PRESET_PET_PHOTOS = [
    { path: "/src/assets/images/client_kitten_sofa_1779635959811.png", label: language === 'fr' ? "Chaton Canapé" : "Kitten Sofa" },
    { path: "/src/assets/images/client_smiling_cream_dog_1779636065252.png", label: language === 'fr' ? "Chien Souriant" : "Smiling Dog" },
    { path: "/src/assets/images/client_fluffy_orange_cat_1779636041845.png", label: language === 'fr' ? "Chat Roux Poilu" : "Fluffy Cat" },
    { path: "/src/assets/images/client_dog_stream_1779629873281.png", label: language === 'fr' ? "Chien Rivière" : "Dog Stream" },
    { path: "/src/assets/images/client_terrier_forest_1779629909127.png", label: language === 'fr' ? "Terrier Forêt" : "Terrier Forest" },
    { path: "/src/assets/images/client_bernese_gate_1779629857257.png", label: language === 'fr' ? "Bouvier Bernois" : "Bernese Gate" },
    { path: "/src/assets/images/client_corgi_floor_1779636102129.png", label: language === 'fr' ? "Corgi" : "Corgi Floor" },
    { path: "/src/assets/images/client_frenchie_tongue_1779636083510.png", label: language === 'fr' ? "Bouledogue" : "Frenchie" },
    { path: "/src/assets/images/client_dachshund_pair_1779636122214.png", label: language === 'fr' ? "Teckels" : "Dachshunds" },
    { path: "/src/assets/images/client_cow_cat_chair_1779635979796.png", label: language === 'fr' ? "Chat Noir & Blanc" : "Cow Cat" },
    { path: "/src/assets/images/client_tabby_treat_stand_1779636023091.png", label: language === 'fr' ? "Chat Tigré" : "Tabby Cat" },
    { path: "/src/assets/images/client_winking_ginger_cat_1779636000900.png", label: language === 'fr' ? "Chat Roux Œil" : "Winking Cat" },
  ];

  const handleEditTestimonial = (testi: any) => {
    setEditingTestimonial(testi);
    setFormAuthor(testi.author || '');
    setFormLocation(testi.location || '');
    setFormRating(testi.rating || 5);
    setFormPetName(testi.petName || '');
    setFormPetType(testi.petType || 'dog');
    setFormCommentFr(testi.comment?.fr || '');
    setFormCommentEn(testi.comment?.en || '');
    setFormDate(testi.date || '');
    setFormImage(testi.image || '');
    setShowTestimonialForm(true);
  };

  const handleAddTestimonialClick = () => {
    setEditingTestimonial(null);
    setFormAuthor('');
    setFormLocation('');
    setFormRating(5);
    setFormPetName('');
    setFormPetType('dog');
    setFormCommentFr('');
    setFormCommentEn('');
    setFormDate(new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { month: 'long', year: 'numeric' }));
    setFormImage('');
    setShowTestimonialForm(true);
  };

  const handleSaveTestimonial = (e: FormEvent) => {
    e.preventDefault();
    if (!formAuthor || !formPetName || !formCommentFr) {
      alert(language === 'fr' ? "Veuillez remplir les champs obligatoires (Nom, Compagnon, Commentaire Fr)" : "Please fill out the required fields (Author, Companion, French Comment)");
      return;
    }

    const comment = {
      fr: formCommentFr,
      en: formCommentEn || formCommentFr,
    };

    let updatedList: any[] = [];
    if (editingTestimonial) {
      // Editing existing testimonial
      updatedList = (testimonials || []).map((t) => 
        t.id === editingTestimonial.id 
          ? { ...t, author: formAuthor, location: formLocation, rating: formRating, petName: formPetName, petType: formPetType, comment, date: formDate, image: formImage }
          : t
      );
    } else {
      // Creating new testimonial
      const newTesti = {
        id: "testimonial_" + Date.now(),
        author: formAuthor,
        location: formLocation || (language === 'fr' ? "Côte d'Azur" : "French Riviera"),
        rating: formRating,
        petName: formPetName,
        petType: formPetType,
        comment,
        date: formDate || new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { month: 'long', year: 'numeric' }),
        image: formImage
      };
      updatedList = [newTesti, ...(testimonials || [])];
    }

    if (onUpdateTestimonials) {
      onUpdateTestimonials(updatedList);
    }
    
    // reset form
    setShowTestimonialForm(false);
    setEditingTestimonial(null);
  };

  const handleDeleteTestimonial = (id: string) => {
    if (confirm(language === 'fr' ? "Êtes-vous sûre de vouloir supprimer cet avis ?" : "Are you sure you want to delete this review?")) {
      const updatedList = (testimonials || []).filter((t) => t.id !== id);
      if (onUpdateTestimonials) {
        onUpdateTestimonials(updatedList);
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Load Overrides & Bookings from localStorage
  useEffect(() => {
    const loadedOverrides = localStorage.getItem('patoune_calendar_overrides');
    if (loadedOverrides) {
      try {
        setCalendarOverrides(JSON.parse(loadedOverrides));
      } catch (e) {
        console.error("Could not parse calendar overrides", e);
      }
    }

    const loadedHistory = localStorage.getItem('patoune_booking_history');
    if (loadedHistory) {
      try {
        setBookingHistory(JSON.parse(loadedHistory));
      } catch (e) {
        console.error("Could not parse booking history", e);
      }
    }
  }, []);

  const monthNames = {
    fr: [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ],
    en: [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ],
    ru: [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ],
    uk: [
      "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", 
      "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
    ],
    it: [
      "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", 
      "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ],
    de: [
      "Januar", "Februar", "März", "April", "Mai", "Juni", 
      "Juli", "August", "September", "Oktober", "November", "Dezember"
    ]
  };

  const dayLabels = {
    fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    uk: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    it: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
    de: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const totalDays = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  // Return status by checking localStorage overrides first, then falling back to defaults
  const getDateStatus = (dayNum: number): 'available' | 'limited' | 'booked' | 'past' => {
    const paddedMonth = String(currentMonth + 1).padStart(2, '0');
    const paddedDay = String(dayNum).padStart(2, '0');
    const dateKey = `${currentYear}-${paddedMonth}-${paddedDay}`;

    // 1. Check custom overrides first
    if (calendarOverrides[dateKey]) {
      return calendarOverrides[dateKey] as any;
    }

    // 2. Past day handling (Simulated Today is 2026-05-24)
    if (currentYear < 2026 || (currentYear === 2026 && currentMonth < 4)) {
      return 'past';
    }
    if (currentYear === 2026 && currentMonth === 4 && dayNum < 24) {
      return 'past';
    }

    // 3. Fallback to default design patterns initially
    if (currentYear === 2026 && currentMonth === 4) {
      if (dayNum === 24 || dayNum === 25 || dayNum === 26) return 'booked';
      if (dayNum >= 27 && dayNum <= 30) return 'available';
      if (dayNum === 31) return 'limited';
    }

    if (currentYear === 2026 && currentMonth === 5) {
      if (dayNum >= 1 && dayNum <= 6) return 'available';
      if (dayNum >= 7 && dayNum <= 10) return 'booked';
      if (dayNum === 14 || dayNum === 21) return 'limited';
      return 'available';
    }

    // Mathematical pattern fallback for months beyond
    if (dayNum % 7 === 0 || dayNum % 11 === 0) {
      return 'limited';
    }
    if (dayNum % 5 === 0) {
      return 'booked';
    }
    return 'available';
  };

  const handleCellClick = (dayNum: number, currentStatus: string) => {
    const paddedMonth = String(currentMonth + 1).padStart(2, '0');
    const paddedDay = String(dayNum).padStart(2, '0');
    const dateKey = `${currentYear}-${paddedMonth}-${paddedDay}`;

    if (adminUnlocked && editModeActive) {
      // Admin Cycles through available -> limited -> booked -> available
      let nextStatus: 'available' | 'limited' | 'booked' = 'available';
      if (currentStatus === 'available') nextStatus = 'limited';
      else if (currentStatus === 'limited') nextStatus = 'booked';
      else if (currentStatus === 'booked') nextStatus = 'available';

      const updatedOverrides = {
        ...calendarOverrides,
        [dateKey]: nextStatus
      };
      
      setCalendarOverrides(updatedOverrides);
      localStorage.setItem('patoune_calendar_overrides', JSON.stringify(updatedOverrides));
    } else {
      // Client clicks to select start date
      if (currentStatus !== 'available' && currentStatus !== 'limited') return;
      onSelectDate(dateKey);
    }
  };

  // Unlock Admin Portal
  const handleUnlockAdmin = (e: FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'patoune06') {
      setAdminUnlocked(true);
      setEditModeActive(true);
      setPasscodeError(false);
      setPasscode('');
    } else {
      setPasscodeError(true);
    }
  };

  // Trigger automated test email to sophiechiche.63@gmail.com and notify user of state
  const handleSendTestEmail = async () => {
    setTestEmailStatus('sending');
    setTestEmailError('');
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ownerName: "Test Sophie (Diagnostic)",
          petName: "Choupette",
          petType: "cat",
          email: "sophiechiche.63@gmail.com",
          phone: "+33763208713",
          city: "Nice Côte d'Azur",
          startDate: "2026-08-15",
          endDate: "2026-08-25",
          serviceType: "Garde d'Exception chez Sophie",
          notes: "Ceci est un e-mail de test de votre application de Pet Sitting Patoune pour valider que la boîte de réception sophiechiche.63@gmail.com fonctionne parfaitement !"
        })
      });
      const data = await response.json();
      if (response.ok && data.emailSent) {
        setTestEmailStatus('success');
      } else {
        setTestEmailStatus('failed');
        setTestEmailError(data.emailError || (language === 'fr' ? "SMTP absent ou mal configuré" : "SMTP missing or bad configuration"));
      }
    } catch (err: any) {
      setTestEmailStatus('failed');
      setTestEmailError(err.message || "Network Error");
    }
  };

  // Reset all calendar overrides to default
  const handleResetCalendar = () => {
    if (window.confirm(language === 'fr' ? "Voulez-vous restaurer le calendrier par défaut ? Tous vos changements manuels seront effacés." : "Reset calendar to defaults? All manual updates will be cleared.")) {
      setCalendarOverrides({});
      localStorage.removeItem('patoune_calendar_overrides');
    }
  };

  // Delete specific booking request from history log
  const handleDeleteBooking = (id: number) => {
    if (window.confirm(language === 'fr' ? "Supprimer cette réservation de votre historique ?" : "Remove this booking from your history?")) {
      const updated = bookingHistory.filter(b => b.id !== id);
      setBookingHistory(updated);
      localStorage.setItem('patoune_booking_history', JSON.stringify(updated));
    }
  };

  // Clear booking history
  const handleClearHistory = () => {
    if (window.confirm(language === 'fr' ? "Effacer définitivement tout l'historique des réservations reçues ?" : "Permanently clear your entire booking history logs?")) {
      setBookingHistory([]);
      localStorage.removeItem('patoune_booking_history');
    }
  };

  // Reusable Calendar Grid Renderer
  const renderCalendarGrid = (isEditViewMode: boolean = false) => {
    const cells = [];
    
    for (let i = 0; i < firstDayIndex; i++) {
      cells.push(<div key={`empty-${isEditViewMode ? 'admin-' : ''}${i}`} className="bg-stone-50/10 border border-stone-100/10 rounded-lg aspect-square"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const status = getDateStatus(day);
      let classes = "";
      let indicatorText = "";
      
      switch (status) {
        case 'past':
          classes = "bg-stone-100 text-stone-400 cursor-not-allowed opacity-30 line-through";
          break;
        case 'booked':
          classes = "bg-red-50 hover:bg-red-100 border-red-250 text-red-750 cursor-pointer";
          indicatorText = translations[language].calFull;
          break;
        case 'limited':
          classes = "bg-amber-50 hover:bg-amber-100 border-amber-300 text-stone-900 cursor-pointer scale-100 hover:scale-[1.03] transition-transform duration-200 shadow-3xs";
          indicatorText = translations[language].calLimited;
          break;
        case 'available':
          classes = "bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800 cursor-pointer scale-100 hover:scale-[1.03] transition-transform duration-200 shadow-3xs";
          indicatorText = translations[language].calAvailable;
          break;
      }

      // Highlight cell if edit mode is active or inside admin direct editor
      const isEditable = isEditViewMode ? (status !== 'past') : (adminUnlocked && editModeActive && status !== 'past');
      const isAdminEditStyle = isEditable
        ? "ring-2 ring-blue-500/50 hover:ring-blue-500 cursor-pointer"
        : "";

      cells.push(
        <div
          key={`day-${isEditViewMode ? 'admin-' : ''}${day}`}
          onClick={() => {
            if (isEditViewMode) {
              const paddedMonth = String(currentMonth + 1).padStart(2, '0');
              const paddedDay = String(day).padStart(2, '0');
              const dateKey = `${currentYear}-${paddedMonth}-${paddedDay}`;
              if (status === 'past') return;

              let nextStatus: 'available' | 'limited' | 'booked' = 'available';
              if (status === 'available') nextStatus = 'limited';
              else if (status === 'limited') nextStatus = 'booked';
              else if (status === 'booked') nextStatus = 'available';

              const updatedOverrides = {
                ...calendarOverrides,
                [dateKey]: nextStatus
              };
              
              setCalendarOverrides(updatedOverrides);
              localStorage.setItem('patoune_calendar_overrides', JSON.stringify(updatedOverrides));
            } else {
              handleCellClick(day, status);
            }
          }}
          className={`p-2 border rounded-lg aspect-square flex flex-col justify-between items-start transition-all ${classes} ${isAdminEditStyle}`}
          title={
            isEditable
              ? (language === 'fr' ? "Cliquez pour modifier le statut !" : "Click to toggle status!")
              : (status === 'available' || status === 'limited' ? (language === 'fr' ? "Sélectionner cette date !" : "Pre-select this date !") : undefined)
          }
        >
          <span className="font-semibold text-sm md:text-base">{day}</span>
          {indicatorText && (
            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/70 shadow-4xs font-mono">
              {indicatorText}
            </span>
          )}
          <span className={`sm:hidden h-1.5 w-1.5 rounded-full ${status === 'available' ? 'bg-emerald-500' : status === 'limited' ? 'bg-amber-500' : status === 'booked' ? 'bg-red-500' : 'bg-transparent'}`}></span>
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="space-y-6">
      {/* Main Calendar Card */}
      <div id="calendar-widget" className="bg-white rounded-3xl border border-stone-200 p-6 md:p-8 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
        {adminUnlocked && (
          <div className="absolute top-0 inset-x-0 bg-blue-600 text-white text-[11px] font-mono font-bold text-center py-1 tracking-wider uppercase">
            {language === 'fr' ? "🔓 MODE PROPRIÉTAIRE ACTIF — MODIFIEZ L'AGENDA EN CLIQUANT SUR LES JOURS" : "🔓 OWNER PORTAL ACTIVE — CLICK DAYS TO CHANGE STATUSES"}
          </div>
        )}

        {/* Month selection header */}
        <div className="flex items-center justify-between mb-6 pt-2">
          <h3 className="text-xl md:text-2xl font-serif font-extrabold text-charcoal-luxe flex items-center gap-2">
            <CalendarIcon className="h-6 w-6 text-stone-900" />
            <span>{monthNames[language][currentMonth]} {currentYear}</span>
          </h3>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-50 rounded-xl transition-all border border-stone-200 cursor-pointer"
              aria-label={translations[language].calMonthPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-50 rounded-xl transition-all border border-stone-200 cursor-pointer"
              aria-label={translations[language].calMonthNext}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Grid Day Labels */}
        <div className="grid grid-cols-7 gap-2 mb-3 text-center">
          {dayLabels[language].map((lbl, idx) => (
            <div key={idx} className="font-mono text-xs font-bold text-stone-500 uppercase py-1">
              {lbl}
            </div>
          ))}
        </div>

        {/* Month Days */}
        <div className="grid grid-cols-7 gap-2">
          {renderCalendarGrid(false)}
        </div>

        {/* Legend & Help Info */}
        <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-4 items-center justify-between text-xs">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-stone-600 justify-center font-medium">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-emerald-50 border border-emerald-300 block"></span>
              <span>{translations[language].calAvailable}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-amber-50 border border-amber-300 block"></span>
              <span>{translations[language].calLimited}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-red-50 border border-red-200 block"></span>
              <span>{translations[language].calFull}</span>
            </div>
          </div>

          <p className="text-xs text-stone-500 font-mono italic text-center md:text-right w-full md:w-auto">
            {adminUnlocked && editModeActive
              ? (language === 'fr' ? "💡 Cliquez sur un jour vert/jaune/rouge pour modifier son statut en direct !" : "💡 Click any green/yellow/red day to toggle its availability status!")
              : (language === 'fr' ? "💡 Cliquez sur un jour disponible pour pré-remplir la demande de garde !" : "💡 Click any available day to pre-fill the arrival date below!")
            }
          </p>
        </div>
      </div>

      {/* SECURE OWNER SPACE MODAL OVERLAY */}
      {isOwnerSpaceOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-4xl w-full my-8 space-y-6 max-h-[90vh] overflow-y-auto font-sans">
            
            {/* Modal Close Button */}
            <button 
              onClick={onCloseOwnerSpace}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 bg-white hover:bg-stone-100 p-2 rounded-full border border-stone-150 transition-all cursor-pointer shadow-3xs"
              title={language === 'fr' ? "Fermer" : "Close"}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200/80 pb-4">
              <div className="flex items-center gap-2.5">
                <Settings className="h-5 w-5 text-stone-800 animate-spin-slow" />
                <div>
                  <h4 className="font-serif font-black text-sm text-stone-900 uppercase tracking-wider">
                    {language === 'fr' ? "Espace Propriétaire Privé" : "Sophie's Owner Portal"}
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    {language === 'fr' ? "Mettez à jour votre calendrier et consultez vos réservations" : "Manage availability calendar & view incoming bookings"}
                  </p>
                </div>
              </div>
              
              {adminUnlocked ? (
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleResetCalendar}
                    className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-250 text-stone-700 text-xs font-mono font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>{language === 'fr' ? "Réinitialiser l'agenda" : "Reset calendar"}</span>
                  </button>
                  
                  <button
                    onClick={() => setAdminUnlocked(false)}
                    className="px-3.5 py-1.5 bg-red-650 text-white hover:bg-red-700 text-xs font-mono font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-3xs"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    <span>{language === 'fr' ? "Verrouiller" : "Lock portal"}</span>
                  </button>
                </div>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-800 rounded-lg text-xs font-mono font-bold border border-amber-500/15">
                  <Lock className="h-3.5 w-3.5" />
                  <span>{language === 'fr' ? "Accès Verrouillé" : "Locked"}</span>
                </span>
              )}
            </div>

            {/* Admin Content */}
            {adminUnlocked ? (
              <div className="space-y-6">
                {/* Quick Switches */}
                <div className="bg-white p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-3xs">
                  <div className="space-y-0.5">
                    <span className="text-xs font-black text-stone-900 block">
                      {language === 'fr' ? "Outil pinceau de l'agenda public" : "Public Calendar Paint Tool"}
                    </span>
                    <p className="text-[10.5px] text-stone-500">
                      {language === 'fr' 
                        ? "💡 Activez cette option pour modifier l'agenda public en cliquant sur ses jours après avoir fermé ce volet." 
                        : "💡 Enable this to paint statuses directly on the public calendar view after closing this portal."}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setEditModeActive(!editModeActive)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                      editModeActive 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                    }`}
                  >
                    {editModeActive 
                      ? (language === 'fr' ? "● ACTIF (CLIQUEZ SUR LE SITE)" : "● ACTIVE (CLICK ON PUBLIC SITE)") 
                      : (language === 'fr' ? "○ INACTIF" : "○ INACTIVE")}
                  </button>
                </div>

                {/* DYNAMIC PRICE MANAGER PANEL */}
                <form onSubmit={handleSavePrices} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-3xs space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100 justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">💰</span>
                      <div>
                        <h5 className="font-serif font-black text-stone-900 text-sm uppercase tracking-wider">
                          {language === 'fr' ? "Gestionnaire des Tarifs en Direct" : "Live Rate Manager"}
                        </h5>
                        <p className="text-[10px] text-stone-500">
                          {language === 'fr' ? "Modifiez vos tarifs nets. Les changements s'appliquent en temps réel sur tout le site." : "Modify your private rates. Changes are applied instantly across the entire application."}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleResetToStandardPrices}
                      className="text-[10px] font-mono font-bold text-stone-450 hover:text-stone-700 bg-stone-50 hover:bg-stone-100 border border-stone-200 px-2 py-1 rounded transition-all"
                      title={language === 'fr' ? "Rétablir les prix par défaut" : "Reset to defaults"}
                    >
                      {language === 'fr' ? "Défaut" : "Reset"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5">
                    {/* Dog Boarding */}
                    <div className="space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-150">
                      <label className="block text-[10px] font-black uppercase text-stone-500 tracking-wider">
                        {language === 'fr' ? "🐾 Chien / Sitter" : "🐾 Dog / Sitter"}
                      </label>
                      <div className="relative flex items-center mt-1">
                        <input
                          type="number"
                          min="0"
                          max="200"
                          value={localPrices.boarding}
                          onChange={(e) => setLocalPrices(prev => ({ ...prev, boarding: parseInt(e.target.value) || 0 }))}
                          className="w-full pl-3 pr-7 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-900 outline-none focus:border-amber-500"
                        />
                        <span className="absolute right-2.5 text-[10.5px] font-mono text-stone-400 font-bold">€</span>
                      </div>
                      <span className="block text-[9px] text-stone-400 italic">
                        {language === 'fr' ? "Par jour de garde" : "Per sitting day"}
                      </span>
                    </div>

                    {/* Cat Boarding */}
                    <div className="space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-150">
                      <label className="block text-[10px] font-black uppercase text-stone-500 tracking-wider">
                        {language === 'fr' ? "🐈 Chat / Sitter" : "🐈 Cat / Sitter"}
                      </label>
                      <div className="relative flex items-center mt-1">
                        <input
                          type="number"
                          min="0"
                          max="200"
                          value={localPrices.catBoarding}
                          onChange={(e) => setLocalPrices(prev => ({ ...prev, catBoarding: parseInt(e.target.value) || 0 }))}
                          className="w-full pl-3 pr-7 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-900 outline-none focus:border-amber-500"
                        />
                        <span className="absolute right-2.5 text-[10.5px] font-mono text-stone-400 font-bold">€</span>
                      </div>
                      <span className="block text-[9px] text-stone-400 italic">
                        {language === 'fr' ? "Par jour de garde" : "Per sitting day"}
                      </span>
                    </div>

                    {/* Home Sitting */}
                    <div className="space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-150">
                      <label className="block text-[10px] font-black uppercase text-stone-500 tracking-wider">
                        {language === 'fr' ? "🏡 Domicile Client" : "🏡 Client Home"}
                      </label>
                      <div className="relative flex items-center mt-1">
                        <input
                          type="number"
                          min="0"
                          max="300"
                          value={localPrices.homeSitting}
                          onChange={(e) => setLocalPrices(prev => ({ ...prev, homeSitting: parseInt(e.target.value) || 0 }))}
                          className="w-full pl-3 pr-7 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-900 outline-none focus:border-amber-500"
                        />
                        <span className="absolute right-2.5 text-[10.5px] font-mono text-stone-400 font-bold">€</span>
                      </div>
                      <span className="block text-[9px] text-stone-400 italic">
                        {language === 'fr' ? "Par jour de garde" : "Per sitting day"}
                      </span>
                    </div>

                    {/* Active Walk */}
                    <div className="space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-150">
                      <label className="block text-[10px] font-black uppercase text-stone-500 tracking-wider">
                        {language === 'fr' ? "🌳 Promenade 1H" : "🌳 Dog Walk 1H"}
                      </label>
                      <div className="relative flex items-center mt-1">
                        <input
                          type="number"
                          min="0"
                          max="150"
                          value={localPrices.walk}
                          onChange={(e) => setLocalPrices(prev => ({ ...prev, walk: parseInt(e.target.value) || 0 }))}
                          className="w-full pl-3 pr-7 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-900 outline-none focus:border-amber-500"
                        />
                        <span className="absolute right-2.5 text-[10.5px] font-mono text-stone-400 font-bold">€</span>
                      </div>
                      <span className="block text-[9px] text-stone-400 italic">
                        {language === 'fr' ? "Par balade" : "Per walk"}
                      </span>
                    </div>

                    {/* Cat Visit */}
                    <div className="space-y-1 bg-stone-50 p-2.5 rounded-xl border border-stone-150">
                      <label className="block text-[10px] font-black uppercase text-stone-500 tracking-wider">
                        {language === 'fr' ? "🐈 Visite Chat" : "🐈 Cat Visit"}
                      </label>
                      <div className="relative flex items-center mt-1">
                        <input
                          type="number"
                          min="0"
                          max="150"
                          value={localPrices.catVisit}
                          onChange={(e) => setLocalPrices(prev => ({ ...prev, catVisit: parseInt(e.target.value) || 0 }))}
                          className="w-full pl-3 pr-7 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-900 outline-none focus:border-amber-500"
                        />
                        <span className="absolute right-2.5 text-[10.5px] font-mono text-stone-400 font-bold">€</span>
                      </div>
                      <span className="block text-[9px] text-stone-400 italic">
                        {language === 'fr' ? "Par visite 45 min" : "Per 45-min visit"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10.5px] text-stone-400 italic">
                      💡 {language === 'fr' ? "TVA non applicable (art. 293 B du CGI)" : "VAT not applicable"}
                    </span>
                    
                    <button
                      type="submit"
                      className={`px-6 py-2 rounded-xl text-xs font-black font-sans uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-sm ${
                        pricesSaved
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-stone-950 text-white hover:bg-stone-850'
                      }`}
                    >
                      {pricesSaved ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          <span>{language === 'fr' ? "Tarifs Enregistrés !" : "Rates Saved!"}</span>
                        </>
                      ) : (
                        <span>{language === 'fr' ? "Mettre à jour les Tarifs" : "Update All Rates"}</span>
                      )}
                    </button>
                  </div>
                </form>

                {/* DIRECT LIVE CALENDAR EDITOR */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-3xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-3">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-amber-500" />
                      <div>
                        <h5 className="font-serif font-black text-stone-900 text-sm uppercase tracking-wider">
                          {language === 'fr' ? "Modificateur d'Agenda en Direct" : "Direct Live Calendar Editor"}
                        </h5>
                        <p className="text-[10px] text-stone-500">
                          {language === 'fr' ? "Cliquez sur n'importe quel jour ci-dessous pour changer sa couleur instantanément !" : "Click any day below to instantly cycle through availability colors!"}
                        </p>
                      </div>
                    </div>
                    
                    {/* Month navigation controls directly inside owner space */}
                    <div className="flex items-center gap-2 bg-stone-50 p-1.5 rounded-xl border border-stone-150 self-start sm:self-auto">
                      <button
                        onClick={handlePrevMonth}
                        type="button"
                        className="p-1 text-stone-600 hover:text-stone-950 hover:bg-white rounded-lg transition-all border border-stone-200 cursor-pointer shadow-3xs"
                        title={language === 'fr' ? "Mois précédent" : "Previous month"}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="font-mono text-xs font-bold text-stone-850 px-2 min-w-[120px] text-center">
                        {monthNames[language][currentMonth]} {currentYear}
                      </span>
                      <button
                        onClick={handleNextMonth}
                        type="button"
                        className="p-1 text-stone-600 hover:text-stone-950 hover:bg-white rounded-lg transition-all border border-stone-200 cursor-pointer shadow-3xs"
                        title={language === 'fr' ? "Mois suivant" : "Next month"}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Micro-Legend within the direct editor */}
                  <div className="flex flex-wrap gap-4 items-center text-[10.5px] font-mono font-bold py-1 bg-stone-50/50 p-2.5 rounded-xl border border-stone-100">
                    <span className="text-stone-500 uppercase tracking-wider text-[9.5px]">{language === 'fr' ? "LÉGENDE :" : "LEGEND:"}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded bg-emerald-50 border border-emerald-300 block"></span>
                      <span className="text-emerald-800">{translations[language].calAvailable}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded bg-amber-50 border border-amber-300 block"></span>
                      <span className="text-amber-800">{translations[language].calLimited}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded bg-red-50 border border-red-200 block"></span>
                      <span className="text-red-750">{translations[language].calFull}</span>
                    </div>
                  </div>

                  {/* Day Labels */}
                  <div className="grid grid-cols-7 gap-1.5 text-center pt-2">
                    {dayLabels[language].map((lbl, idx) => (
                      <div key={`admin-lbl-${idx}`} className="font-mono text-[10px] font-black text-stone-400 uppercase py-1">
                        {lbl}
                      </div>
                    ))}
                  </div>

                  {/* Interactive Day Grid */}
                  <div className="grid grid-cols-7 gap-1.5">
                    {renderCalendarGrid(true)}
                  </div>
                </div>

                {/* TESTIMONIALS MANAGER PANEL */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-3xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⭐</span>
                      <div>
                        <h5 className="font-serif font-black text-stone-900 text-sm uppercase tracking-wider">
                          {language === 'fr' ? "Gestionnaire des Avis Clients" : "Client Reviews Manager"}
                        </h5>
                        <p className="text-[10px] text-stone-500">
                          {language === 'fr' ? "Écrivez, modifiez, supprimez et ajoutez de nouveaux avis avec des photos d'animaux." : "Write, edit, delete and add new reviews with custom pet photos."}
                        </p>
                      </div>
                    </div>
                    
                    {!showTestimonialForm && (
                      <button
                        type="button"
                        onClick={handleAddTestimonialClick}
                        className="px-3.5 py-1.5 bg-stone-900 text-white hover:bg-stone-850 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                      >
                        <span>➕ {language === 'fr' ? "Ajouter un avis" : "Add Review"}</span>
                      </button>
                    )}
                  </div>

                  {/* Testimonial Form (Create/Edit) */}
                  {showTestimonialForm && (
                    <form onSubmit={handleSaveTestimonial} className="bg-stone-50/70 p-5 rounded-xl border border-stone-200 space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                        <span className="text-xs font-bold font-mono text-stone-700">
                          {editingTestimonial 
                            ? (language === 'fr' ? "✏️ Modifier l'Avis" : "✏️ Edit Review")
                            : (language === 'fr' ? "➕ Nouvel Avis" : "➕ New Review")}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setShowTestimonialForm(false);
                            setEditingTestimonial(null);
                          }}
                          className="text-stone-400 hover:text-stone-600 text-xs cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Main Fields Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                        {/* Companion Name */}
                        <div className="space-y-1">
                          <label className="block font-bold text-stone-600">{language === 'fr' ? "Nom de l'animal" : "Pet Name"} <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            required
                            value={formPetName}
                            onChange={(e) => setFormPetName(e.target.value)}
                            placeholder="Aramis, Toby..."
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:border-amber-500 outline-none"
                          />
                        </div>

                        {/* Pet Type Selector */}
                        <div className="space-y-1">
                          <label className="block font-bold text-stone-600">{language === 'fr' ? "Espèce" : "Pet Type"}</label>
                          <select
                            value={formPetType}
                            onChange={(e) => setFormPetType(e.target.value as any)}
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg outline-none cursor-pointer"
                          >
                            <option value="dog">🐶 {language === 'fr' ? "Chien" : "Dog"}</option>
                            <option value="cat">🐱 {language === 'fr' ? "Chat" : "Cat"}</option>
                            <option value="other">🐹 {language === 'fr' ? "Autre (NAC)" : "Other"}</option>
                          </select>
                        </div>

                        {/* Rating (Stars selection) */}
                        <div className="space-y-1">
                          <label className="block font-bold text-stone-600">{language === 'fr' ? "Note (1-5)" : "Rating (1-5)"}</label>
                          <select
                            value={formRating}
                            onChange={(e) => setFormRating(parseInt(e.target.value))}
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg outline-none cursor-pointer"
                          >
                            <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
                            <option value={4}>⭐⭐⭐⭐ (4/5)</option>
                            <option value={3}>⭐⭐⭐ (3/5)</option>
                            <option value={2}>⭐⭐ (2/5)</option>
                            <option value={1}>⭐ (1/5)</option>
                          </select>
                        </div>

                        {/* Author Name */}
                        <div className="space-y-1">
                          <label className="block font-bold text-stone-600">{language === 'fr' ? "Nom du Propriétaire" : "Owner/Author Name"} <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            required
                            value={formAuthor}
                            onChange={(e) => setFormAuthor(e.target.value)}
                            placeholder="Sophie de Monaco, Stéphane..."
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:border-amber-500 outline-none"
                          />
                        </div>

                        {/* Location */}
                        <div className="space-y-1">
                          <label className="block font-bold text-stone-600">{language === 'fr' ? "Localisation" : "Location"}</label>
                          <input
                            type="text"
                            value={formLocation}
                            onChange={(e) => setFormLocation(e.target.value)}
                            placeholder="Nice, Monaco, Cannes..."
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:border-amber-500 outline-none"
                          />
                        </div>

                        {/* Date */}
                        <div className="space-y-1">
                          <label className="block font-bold text-stone-600">{language === 'fr' ? "Date" : "Date string"}</label>
                          <input
                            type="text"
                            value={formDate}
                            onChange={(e) => setFormDate(e.target.value)}
                            placeholder="Juillet 2026..."
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:border-amber-500 outline-none"
                          />
                        </div>
                      </div>

                      {/* Comments Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-1">
                          <label className="block font-bold text-stone-600">{language === 'fr' ? "Commentaire en Français" : "Comment in French"} <span className="text-red-500">*</span></label>
                          <textarea
                            required
                            rows={3}
                            value={formCommentFr}
                            onChange={(e) => setFormCommentFr(e.target.value)}
                            placeholder="Sophie est géniale..."
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:border-amber-500 outline-none resize-y font-sans"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <label className="block font-bold text-stone-600">{language === 'fr' ? "Commentaire en Anglais" : "Comment in English"}</label>
                            <button
                              type="button"
                              onClick={() => setFormCommentEn(formCommentFr)}
                              className="text-[10px] text-amber-700 font-bold hover:underline"
                              title={language === 'fr' ? "Copier le texte français" : "Copy French text"}
                            >
                              {language === 'fr' ? "Copier le français" : "Copy French"}
                            </button>
                          </div>
                          <textarea
                            rows={3}
                            value={formCommentEn}
                            onChange={(e) => setFormCommentEn(e.target.value)}
                            placeholder="Sophie is awesome..."
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:border-amber-500 outline-none resize-y font-sans"
                          />
                        </div>
                      </div>

                      {/* Pet Photo Selection Block */}
                      <div className="space-y-2 text-xs bg-white p-3.5 rounded-xl border border-stone-200">
                        <label className="block font-bold text-stone-700 mb-1">
                          {language === 'fr' ? "📸 Photo de l'animal" : "📸 Pet Photo"}
                        </label>
                        
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                          {/* Photo preview */}
                          <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-stone-200 bg-stone-50 flex items-center justify-center relative shadow-inner">
                            {formImage ? (
                              <>
                                <img src={formImage} alt="Pet Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                <button
                                  type="button"
                                  onClick={() => setFormImage('')}
                                  className="absolute top-1 right-1 bg-black/60 hover:bg-black/80 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] cursor-pointer"
                                  title="Remove image"
                                >
                                  ✕
                                </button>
                              </>
                            ) : (
                              <span className="text-[10px] text-stone-400 font-bold text-center p-1 leading-tight">
                                {language === 'fr' ? "Pas de photo" : "No photo"}
                              </span>
                            )}
                          </div>

                          {/* Predefined presets gallery */}
                          <div className="flex-grow space-y-1.5 w-full">
                            <span className="block text-[10px] text-stone-500 font-bold">
                              {language === 'fr' ? "Choisissez une jolie photo Riviera :" : "Select a beautiful Riviera photo preset:"}
                            </span>
                            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[500px]">
                              {PRESET_PET_PHOTOS.map((p, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => setFormImage(p.path)}
                                  className={`w-10 h-10 shrink-0 rounded-lg overflow-hidden border-2 transition-all relative cursor-pointer ${
                                    formImage === p.path ? 'border-amber-500 scale-105 ring-2 ring-amber-500/10' : 'border-stone-200 hover:border-stone-400'
                                  }`}
                                  title={p.label}
                                >
                                  <img src={p.path} alt={p.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </button>
                              ))}
                            </div>

                            {/* Custom upload row */}
                            <div className="pt-2 border-t border-stone-100 flex items-center gap-3">
                              <span className="text-[10px] text-stone-450 font-bold">{language === 'fr' ? "OU téléversez un fichier :" : "OR upload custom file:"}</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="text-[11px] text-stone-500 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-[10.5px] file:font-bold file:bg-stone-100 file:text-stone-700 hover:file:bg-stone-200 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Form Actions */}
                      <div className="flex justify-end gap-2.5 pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setShowTestimonialForm(false);
                            setEditingTestimonial(null);
                          }}
                          className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                        >
                          {language === 'fr' ? "Annuler" : "Cancel"}
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 bg-amber-600 text-white hover:bg-amber-700 rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-2xs"
                        >
                          {editingTestimonial ? (language === 'fr' ? "Enregistrer les modifications" : "Save Changes") : (language === 'fr' ? "Ajouter l'avis" : "Add Review")}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Testimonial List Grid */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-black text-stone-400 uppercase tracking-wider">
                      {language === 'fr' ? "Témoignages Actuels sur le Site" : "Current Site Testimonials"} ({testimonials.length})
                    </span>

                    <div className="grid grid-cols-1 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                      {testimonials.map((t) => (
                        <div key={t.id} className="flex items-center gap-4 bg-stone-50 p-3 rounded-xl border border-stone-150 justify-between hover:bg-stone-100/50 transition-colors">
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Micro photo */}
                            <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden border border-stone-200 bg-stone-100 flex items-center justify-center">
                              {t.image ? (
                                <img src={t.image} alt={t.petName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              ) : (
                                <span className="text-stone-400 text-xs font-bold">
                                  {t.petType === 'dog' ? '🐶' : t.petType === 'cat' ? '🐱' : '🐹'}
                                </span>
                              )}
                            </div>

                            {/* Info */}
                            <div className="min-w-0 text-xs">
                              <p className="font-serif font-black text-stone-900 truncate">
                                {t.petName} <span className="font-sans font-normal text-stone-500 text-[11px]">— {t.author} ({t.location})</span>
                              </p>
                              <p className="text-[10.5px] text-stone-500 line-clamp-1 italic pr-2">
                                "{t.comment[language] || t.comment.fr || t.comment.en}"
                              </p>
                              <div className="flex items-center gap-1.5 mt-0.5 text-stone-400 text-[10px]">
                                <span className="text-amber-500">{"★".repeat(t.rating)}</span>
                                <span>•</span>
                                <span>{t.date}</span>
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleEditTestimonial(t)}
                              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-white rounded border border-transparent hover:border-stone-200 transition-all cursor-pointer"
                              title={language === 'fr' ? "Modifier l'avis" : "Edit review"}
                            >
                              ✏️
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteTestimonial(t.id)}
                              className="p-1.5 text-stone-400 hover:text-red-650 hover:bg-white rounded border border-transparent hover:border-stone-200 transition-all cursor-pointer"
                              title={language === 'fr' ? "Supprimer l'avis" : "Delete review"}
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Local Inbox / Booking History Log */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-serif font-extrabold text-stone-900 text-sm flex items-center gap-2">
                      <ClipboardList className="h-4.5 w-4.5 text-stone-700" />
                      <span>{language === 'fr' ? "Boîte de Réception Locale (Demandes Reçues)" : "Local Reservation Inbox"}</span>
                    </h5>
                    {bookingHistory.length > 0 && (
                      <button
                        onClick={handleClearHistory}
                        className="text-stone-500 hover:text-red-650 text-[11px] font-mono font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>{language === 'fr' ? "Tout effacer" : "Clear all"}</span>
                      </button>
                    )}
                  </div>

                  {bookingHistory.length === 0 ? (
                    <div className="bg-white rounded-2xl p-8 border border-stone-200 text-center space-y-2">
                      <p className="text-stone-400 text-xs font-mono">
                        {language === 'fr' ? "Aucune demande reçue sur cet appareil pour le moment." : "No client booking requests logged on this browser yet."}
                      </p>
                      <p className="text-[10px] text-stone-500 max-w-sm mx-auto leading-relaxed">
                        {language === 'fr'
                          ? "Lorsqu'un client remplit votre nouveau formulaire de réservation prestige, la demande est instantanément enregistrée ici en plus de vous être transmise !"
                          : "When a customer submits your new booking form, it will be saved right here in addition to being dispatched!"}
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4 max-h-[380px] overflow-y-auto pr-1">
                      {bookingHistory.map((b) => (
                        <div key={b.id} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-3xs space-y-4 hover:border-amber-400/40 transition-colors text-stone-850">
                          {/* Booking meta */}
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3 text-xs">
                            <div className="flex items-center gap-2.5">
                              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                              <span className="font-serif font-black text-stone-900">{b.ownerName}</span>
                              <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-mono font-bold uppercase">
                                {b.selectedService === 'boarding' ? 'Garde Sophie' : b.selectedService === 'homeSitting' ? 'Garde Domicile' : b.selectedService === 'walk' ? 'Promenade' : 'Visite Chat'}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] text-stone-400 font-mono">{b.dateSubmitted}</span>
                              <button
                                onClick={() => handleDeleteBooking(b.id)}
                                className="p-1 text-stone-400 hover:text-red-650 hover:bg-stone-50 rounded transition-all cursor-pointer"
                                title={language === 'fr' ? "Supprimer" : "Delete"}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Content details */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                            <div className="space-y-1">
                              <span className="block text-[10px] text-stone-400 font-mono uppercase tracking-wider">{language === 'fr' ? "CONTACT PROPRIÉTAIRE" : "CONTACT INFO"}</span>
                              <div className="space-y-1 text-stone-800 font-medium">
                                <a href={`tel:${b.clientPhone}`} className="flex items-center gap-1.5 hover:text-amber-600 font-bold font-mono">
                                  <Phone className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                                  <span>{b.clientPhone}</span>
                                </a>
                                <a href={`mailto:${b.clientEmail}`} className="flex items-center gap-1.5 hover:text-amber-600 font-mono">
                                  <Mail className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                                  <span className="break-all">{b.clientEmail}</span>
                                </a>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <span className="block text-[10px] text-stone-400 font-mono uppercase tracking-wider">{language === 'fr' ? "COMPAGNON & DATES" : "COMPANION & DAYS"}</span>
                              <div className="space-y-0.5 text-stone-800 font-medium">
                                <p className="flex items-center gap-1">
                                  <Cat className="h-3.5 w-3.5 text-stone-400" />
                                  <span><strong>{b.petName || 'S/N'}</strong> ({b.petType})</span>
                                </p>
                                <p className="font-mono text-[11px] text-stone-600 mt-1">
                                  📅 {b.startDate} ➔ {b.endDate}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-1 sm:col-span-1">
                              <span className="block text-[10px] text-stone-400 font-mono uppercase tracking-wider">{language === 'fr' ? "CONSIGNES / NOTE" : "SPECIAL NOTES"}</span>
                              <p className="text-stone-600 leading-normal italic line-clamp-3">
                                "{b.specialNotes || (language === 'fr' ? 'Aucune consigne spécifique.' : 'No notes')}"
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* DIAGNOSTICS & SETUP PANEL */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-3xs space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                    <Mail className="h-4.5 w-4.5 text-amber-500 animate-pulse" />
                    <h5 className="font-serif font-black text-stone-900 text-sm uppercase tracking-wider">
                      {language === 'fr' ? "Testeur & Configuration d'E-mail en Direct" : "Email Diagnostics & Live Test"}
                    </h5>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {language === 'fr'
                      ? "Pour que le site envoie automatiquement les demandes de réservations par e-mail au client, à votre adresse professionnelle (contact@patounecoteazur.fr) et à votre Gmail personnel (sophiechiche.63@gmail.com), vous devez configurer les variables de connexion de votre serveur de messagerie SMTP."
                      : "For the system to automatically dispatch emails to clients, your business mail (contact@patounecoteazur.fr), and your personal Gmail (sophiechiche.63@gmail.com), you must configure your SMTP mail credentials."}
                  </p>

                  {/* Status Display */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-150 space-y-3">
                      <span className="text-[11px] font-mono font-bold text-stone-500 block uppercase tracking-wider">
                        {language === 'fr' ? "1. Lancer un test d'envoi" : "1. Dispatch a test"}
                      </span>
                      
                      <button
                        onClick={handleSendTestEmail}
                        disabled={testEmailStatus === 'sending'}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          testEmailStatus === 'sending'
                            ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                            : testEmailStatus === 'success'
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-3xs'
                            : 'bg-stone-900 hover:bg-stone-850 text-white shadow-3xs'
                        }`}
                      >
                        {testEmailStatus === 'sending' ? (
                          <>
                            <span className="inline-block animate-spin h-3.5 w-3.5 border-2 border-stone-400 border-t-transparent rounded-full"></span>
                            <span>{language === 'fr' ? "Envoi en cours..." : "Sending..."}</span>
                          </>
                        ) : testEmailStatus === 'success' ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            <span>{language === 'fr' ? "E-mail de test envoyé !" : "Test Email Sent!"}</span>
                          </>
                        ) : (
                          <>
                            <Mail className="h-4 w-4" />
                            <span>{language === 'fr' ? "M'envoyer un e-mail exemple" : "Send Me a Test Email"}</span>
                          </>
                        )}
                      </button>

                      {testEmailStatus === 'success' && (
                        <p className="text-[10px] text-emerald-700 font-medium text-center">
                          {language === 'fr'
                            ? "🎉 Succès ! Un exemple d'e-mail a été envoyé à vos adresses."
                            : "🎉 Success! A sample email was dispatched to your mailboxes."}
                        </p>
                      )}

                      {testEmailStatus === 'failed' && (
                        <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-[11px] text-red-750 space-y-1">
                          <p className="font-bold">❌ {language === 'fr' ? "Défaut de configuration :" : "Configuration Warning:"}</p>
                          <p className="font-mono text-[10px] leading-normal break-words">{testEmailError}</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-150 space-y-2 text-[11px] text-stone-600 leading-normal">
                      <span className="text-[11px] font-mono font-bold text-stone-500 block uppercase tracking-wider mb-1">
                        {language === 'fr' ? "2. Comment l'activer sur Google AI Studio" : "2. How to activate SMTP keys"}
                      </span>
                      
                      <ol className="list-decimal pl-4 space-y-1.5 font-sans">
                        <li>
                          {language === 'fr' 
                            ? "Ouvrez le menu des Paramètres ou Variables de votre espace AI Studio." 
                            : "Open Settings / Secrets panel in your AI Studio project."}
                        </li>
                        <li>
                          {language === 'fr' 
                            ? "Ajoutez la variable SMTP_USER avec votre adresse e-mail d'envoi." 
                            : "Create SMTP_USER variable containing your sender email."}
                        </li>
                        <li>
                          {language === 'fr' 
                            ? "Ajoutez la variable SMTP_PASS avec le mot de passe d'application de votre e-mail." 
                            : "Create SMTP_PASS variable containing your secure App Password."}
                        </li>
                        <li>
                          {language === 'fr' 
                            ? "Et voilà ! Les e-mails s'enverront tout seuls à chaque nouvelle soumission." 
                            : "Done! Emails will now automatically dispatch on every booking submission."}
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Password entry box */
              <form onSubmit={handleUnlockAdmin} className="max-w-md mx-auto space-y-4 py-6 font-sans text-xs">
                <div className="space-y-3">
                  <label className="text-stone-700 font-bold flex items-center gap-2 justify-center">
                    <Key className="h-4.5 w-4.5 text-amber-500" />
                    <span>{language === 'fr' ? "Saisissez le code d'accès de votre espace privé" : "Enter private access passcode"}</span>
                  </label>
                  
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => {
                        setPasscode(e.target.value);
                        setPasscodeError(false);
                      }}
                      placeholder={language === 'fr' ? "Code d'accès secret..." : "Secret passcode..."}
                      className="flex-grow px-4 py-3 bg-white border border-stone-250 rounded-xl focus:border-stone-900 transition-all text-sm font-mono text-center outline-none"
                    />
                    <button
                      type="submit"
                      className="px-5 bg-stone-900 hover:bg-stone-850 text-white font-bold rounded-xl text-xs uppercase tracking-wider cursor-pointer active:scale-95 transition-transform"
                    >
                      {language === 'fr' ? "Déverrouiller" : "Unlock"}
                    </button>
                  </div>

                  {passcodeError && (
                    <p className="text-[11px] text-red-600 text-center font-bold animate-pulse">
                      ❌ {language === 'fr' ? "Code erroné. Veuillez réessayer." : "Wrong passcode. Please try again."}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
