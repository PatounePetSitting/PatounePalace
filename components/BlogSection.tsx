import { useState, FormEvent } from 'react';
import { BlogPost, Language } from '../types';
import { BookOpen, Tag, Calendar, Clock, Eye, Send, Sparkles, CheckCircle, Search, HelpCircle, ChevronDown, ChevronUp, Filter, X } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
  onAddPost: (newPost: BlogPost) => void;
  language: Language;
  translations: any;
}

export default function BlogSection({ posts, onAddPost, language, translations }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isCreatingDraft, setIsCreatingDraft] = useState(false);
  
  // Filtering & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Local form state for draft creation
  const [draftTitle, setDraftTitle] = useState("");
  const [draftContent, setDraftContent] = useState("");
  const [draftKeywords, setDraftKeywords] = useState("");
  const [draftCategory, setDraftCategory] = useState("Local SEO");
  const [draftSuccess, setDraftSuccess] = useState(false);

  // FAQ interactive state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // SEO Analyzer logic
  const analyzeSeoScore = (titleStr: string, contentStr: string, keywordsStr: string) => {
    let score = 20; // Base score
    const textToSearch = (titleStr + " " + contentStr + " " + keywordsStr).toLowerCase();
    
    // Check local French Riviera keywords
    if (textToSearch.includes("pet sitting") || textToSearch.includes("pet sitter")) score += 20;
    if (textToSearch.includes("monaco") || textToSearch.includes("monte-carlo")) score += 15;
    if (textToSearch.includes("cannes")) score += 15;
    if (textToSearch.includes("nice")) score += 15;
    if (textToSearch.includes("garde de chien") || textToSearch.includes("garde de chat")) score += 15;

    return Math.min(score, 100);
  };

  const seoScore = analyzeSeoScore(draftTitle, draftContent, draftKeywords);

  const handleCreateDraft = (e: FormEvent) => {
    e.preventDefault();
    if (!draftTitle || !draftContent) return;

    const keywordsArray = draftKeywords
      .split(",")
      .map(k => k.trim())
      .filter(k => k.length > 0);

    const newPost: BlogPost = {
      id: String(Date.now()),
      slug: draftTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: {
        fr: language === 'fr' ? draftTitle : `[FR Draft] ${draftTitle}`,
        en: language === 'en' ? draftTitle : `[EN Draft] ${draftTitle}`
      },
      excerpt: {
        fr: draftContent.slice(0, 140) + "...",
        en: draftContent.slice(0, 140) + "..."
      },
      content: {
        fr: draftContent,
        en: draftContent
      },
      keywords: keywordsArray.length > 0 ? keywordsArray : ["pet sitting", "cote d'azur"],
      date: new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: "3 mins",
      category: {
        fr: draftCategory,
        en: draftCategory
      },
      image: "/src/assets/images/dog_sitting_1779628649488.png"
    };

    onAddPost(newPost);
    setDraftSuccess(true);
    
    // Reset form
    setTimeout(() => {
      setDraftTitle("");
      setDraftContent("");
      setDraftKeywords("");
      setIsCreatingDraft(false);
      setDraftSuccess(false);
    }, 2000);
  };

  // Safe and beautiful markdown rendering parser for post details dialog
  const renderMarkdown = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((line, idx) => {
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-lg font-serif font-extrabold text-stone-900 mt-6 mb-2 tracking-tight">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="text-xl font-serif font-extrabold text-stone-900 mt-8 mb-3 tracking-tight border-b border-stone-100 pb-1">
            {line.replace('## ', '')}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        const parts = line.replace('- ', '').split(' : ');
        if (parts.length > 1) {
          return (
            <li key={idx} className="ml-5 list-disc text-stone-700 leading-relaxed my-1.5 pl-1">
              <strong className="text-stone-900 font-bold">{parts[0]}</strong>: {parts[1]}
            </li>
          );
        }
        return (
          <li key={idx} className="ml-5 list-disc text-stone-700 leading-relaxed my-1.5 pl-1">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        // Line starts with a number list (e.g., "1. ")
        const cleanLine = line.replace(/^\d+\.\s/, '');
        const parts = cleanLine.split(' : ');
        if (parts.length > 1) {
          return (
            <li key={idx} className="ml-5 list-decimal text-stone-700 leading-relaxed my-1.5 pl-1">
              <strong className="text-stone-900 font-bold">{parts[0]}</strong>: {parts[1]}
            </li>
          );
        }
        return (
          <li key={idx} className="ml-5 list-decimal text-stone-700 leading-relaxed my-1.5 pl-1">
            {cleanLine}
          </li>
        );
      }
      
      if (line.trim() === '') {
        return <div key={idx} className="h-3"></div>;
      }
      
      // Basic inline bold parser (replacing **text** with <strong>)
      const boldRegex = /\*\*(.*?)\*\*/g;
      let match;
      let lastIndex = 0;
      const elements = [];
      let keyCounter = 0;
      
      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          elements.push(line.substring(lastIndex, match.index));
        }
        elements.push(
          <strong key={keyCounter++} className="font-extrabold text-stone-900">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < line.length) {
        elements.push(line.substring(lastIndex));
      }
      
      return (
        <p key={idx} className="text-stone-600 leading-relaxed text-sm md:text-base my-2 font-sans">
          {elements.length > 0 ? elements : line}
        </p>
      );
    });
  };

  // Categorize standard filter keys
  const getCategoryGroup = (cat: string): string => {
    const norm = cat.toLowerCase();
    if (norm.includes("chat") || norm.includes("fél")) return "cats";
    if (norm.includes("chien") || norm.includes("canin") || norm.includes("balad")) return "dogs";
    if (norm.includes("luxe") || norm.includes("prestige") || norm.includes("concierg") || norm.includes("haut de gamme")) return "luxury";
    return "others";
  };

  // Filter and search computation
  const filteredPosts = posts.filter(post => {
    const titleText = (post.title[language] || post.title.fr || post.title.en || "").toLowerCase();
    const excerptText = (post.excerpt[language] || post.excerpt.fr || post.excerpt.en || "").toLowerCase();
    const contentText = (post.content[language] || post.content.fr || post.content.en || "").toLowerCase();
    const matchesSearch = 
      titleText.includes(searchQuery.toLowerCase()) || 
      excerptText.includes(searchQuery.toLowerCase()) || 
      contentText.includes(searchQuery.toLowerCase()) ||
      post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeCategory === "all") return matchesSearch;
    return matchesSearch && getCategoryGroup(post.category[language] || post.category.fr || post.category.en || "") === activeCategory;
  });

  // Local SEO FAQS structure with high relevant keywords
  const faqs = [
    {
      q: {
        fr: "Comment se déroule la première rencontre gratuite avant la garde ?",
        en: "How does the initial free meeting work before sitting?"
      },
      a: {
        fr: "La première rencontre (pré-visite) est totalement gratuite et sans engagement. Je me déplace à votre domicile (à Nice, Cannes ou Monaco) pour faire la connaissance de vos compagnons, comprendre leurs petites habitudes, leurs rituels de jeux, leur alimentation, et récupérer les clés en toute sécurité.",
        en: "The initial meeting (pre-visit) is 100% free with no commitment. I will travel to your home (in Nice, Cannes, or Monaco) to meet your companions, learn about their routines, play habits, nutrition needs, and safely collect the house keys."
      },
      kw: ["rencontre pet sitter Nice", "visite gratuite chien Monaco", "nounou animaux Cannes"]
    },
    {
      q: {
        fr: "Quels sont les avantages de la garde à domicile par rapport à une pension ?",
        en: "What are the benefits of home sitting compared to a boarding kennel?"
      },
      a: {
        fr: "Le home sitting et les visites de 45 minutes permettent à vos chiens et chats de rester dans leur propre environnement, sans subir le stress d'un changement de territoire, les bruits incessants et les risques sanitaires des pensions collectives d'Alpes-Maritimes. Vos compagnons dorment sur leur canapé favori et mangent aux heures habituelles.",
        en: "In-home sitting and 45-minute visits allow your dogs and cats to stay in their own environment, completely avoiding territory stress, cage noise, and the health hazards of crowded commercial kennels. Your companions sleep in their favorite beds and eat at their usual times."
      },
      kw: ["alternative pension chien", "catsitting domicile Nice", "garde chat de luxe Monaco"]
    },
    {
      q: {
        fr: "Êtes-vous agréée et assurée professionnellement ?",
        en: "Are you professionally certified and insured?"
      },
      a: {
        fr: "Absolument. Je suis titulaire de l'ACACED (certification d'État obligatoire) délivrée par le Ministère de l'Agriculture. Patoune est également couverte par une assurance Responsabilité Civile Professionnelle (RCP) complète chez GMF, protégeant vos animaux de compagnie et votre résidence de prestige pendant toute la durée de l'intervention.",
        en: "Absolutely. I hold the official ACACED state certification authorized by the French Ministry of Agriculture. Patoune is also covered by a comprehensive Professional Liability Insurance (GMF), protecting your precious pets and premium residence during our custom stays."
      },
      kw: ["pet sitter ACACED Nice", "garde chat assuree Monaco", "promeneur de chien agree Cannes"]
    },
    {
      q: {
        fr: "Comment puis-je avoir des nouvelles de mon chat ou de mon chien pendant mes vacances ?",
        en: "How will I receive updates about my pet during my vacation?"
      },
      a: {
        fr: "La transparence est ma priorité. À chaque visite de 45 minutes ou cours de balade, je vous envoie instantanément un compte-rendu complet accompagné de magnifiques photos haute définition et de vidéos de votre animal directement par WhatsApp ou email. Vous le voyez jouer, manger et se faire câliner en temps réel !",
        en: "Transparency is my top priority. After every 45-minute home visit or dog stroll, I instantly send you a comprehensive update with beautiful high-definition photos and videos of your companion directly via WhatsApp or email. You can watch them play, feed, and receive affection in real-time."
      },
      kw: ["suivi whatsapp pet sitter", "nouvelles photos garde chien", "nounou chat Monaco"]
    },
    {
      q: {
        fr: "Quelles zones de la Côte d'Azur couvrez-vous ?",
        en: "Which areas of the French Riviera do you cover?"
      },
      a: {
        fr: "J'interviens quotidiennement pour vos gardes de chats de luxe, visites à domicile et promenades de chiens à Nice, Cannes, Monaco, mais également dans les communes environnantes comme Villefranche-sur-Mer, Beaulieu-sur-Mer, Saint-Jean-Cap-Ferrat, Eze, Cap-d'Ail, Beausoleil, Roquebrune, Antibes et Mougins.",
        en: "I operate daily for your luxury cat sitting, home visits, and active dog walks in Nice, Cannes, Monaco, as well as adjacent towns including Villefranche-sur-Mer, Beaulieu-sur-Mer, Saint-Jean-Cap-Ferrat, Eze, Cap-d'Ail, Beausoleil, Roquebrune, Antibes, and Mougins."
      },
      kw: ["garde chat Villefranche", "pet sitter Saint Jean Cap Ferrat", "dog walking Antibes"]
    }
  ];

  return (
    <div id="seo-blog" className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-charcoal-luxe tracking-tight flex items-center gap-3">
            <span className="p-2.5 bg-stone-100 rounded-2xl text-stone-900 inline-block border border-stone-200">
              <Sparkles className="h-6 w-6 text-stone-850 animate-pulse" />
            </span>
            <span>{translations[language].blogTitle}</span>
          </h2>
          <p className="mt-2 text-stone-500 max-w-2xl text-sm md:text-base">{translations[language].blogSubtitle}</p>
        </div>

        {/* Dynamic creation button if requested */}
        <div className="shrink-0">
          <button
            onClick={() => setIsCreatingDraft(!isCreatingDraft)}
            className="px-4 py-2.5 bg-stone-950 hover:bg-black text-white font-mono text-xs font-black rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer border border-stone-800"
          >
            {isCreatingDraft ? <X className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
            <span>{isCreatingDraft ? (language === 'fr' ? "Fermer l'éditeur" : "Close editor") : translations[language].draftBtn}</span>
          </button>
        </div>
      </div>

      {/* Interactive Draft Creation Box */}
      {isCreatingDraft && (
        <form onSubmit={handleCreateDraft} className="p-6 md:p-8 bg-white border border-stone-200 rounded-3xl shadow-lg space-y-6 animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2 pb-4 border-b border-stone-100">
            <Sparkles className="h-5 w-5 text-stone-700" />
            <h3 className="text-lg font-serif font-extrabold text-charcoal-luxe">{translations[language].draftTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-mono font-bold text-stone-600 uppercase">{translations[language].draftPostTitle}</label>
              <input
                type="text"
                required
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                placeholder={language === 'fr' ? "Ex: Les secrets de garde de chat à Monaco..." : "Ex: Cat sitting guide in Cannes..."}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-stone-900 transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono font-bold text-stone-600 uppercase">{translations[language].draftKeyWords}</label>
              <input
                type="text"
                value={draftKeywords}
                onChange={(e) => setDraftKeywords(e.target.value)}
                placeholder="cat sitting, Monaco, Nice, garde de chat"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-stone-900 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 md:col-span-1">
              <label className="block text-xs font-mono font-bold text-stone-600 uppercase">{language === 'fr' ? "Catégorie" : "Category"}</label>
              <select
                value={draftCategory}
                onChange={(e) => setDraftCategory(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-stone-900 transition-colors text-sm"
              >
                <option value="Conseils Chats">{language === 'fr' ? "Conseils Chats" : "Cat Sitting Tips"}</option>
                <option value="Bien-être Canin">{language === 'fr' ? "Bien-être Canin" : "Dog Care Tips"}</option>
                <option value="Luxe & Sérénité">{language === 'fr' ? "Luxe & Sérénité" : "Luxury & Serenity"}</option>
                <option value="Législation & Confiance">{language === 'fr' ? "Législation & Confiance" : "Legislation & Trust"}</option>
                <option value="Haut de Gamme">{language === 'fr' ? "Haut de Gamme" : "Elite Concierge"}</option>
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col justify-end">
              {/* Dynamic Google SEO Score Checker */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-150 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-stone-600 uppercase block">{translations[language].seoRating}</span>
                  <span className="text-[11px] text-stone-400 block mt-0.5">
                    {language === 'fr' 
                      ? "Astuce : Ajoutez les mots 'Monaco', 'Cannes', 'Nice', 'pet sitting' pour booster l'indexation"
                      : "Tip: Add keywords like 'Monaco', 'Cannes', 'Nice', 'pet sitting' to optimize"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-mono font-black ${seoScore > 70 ? 'text-emerald-600' : seoScore > 40 ? 'text-amber-500' : 'text-stone-500'}`}>
                    {seoScore}%
                  </span>
                  <div className="w-24 bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${seoScore > 70 ? 'bg-emerald-500' : seoScore > 40 ? 'bg-amber-400' : 'bg-stone-400'}`} 
                      style={{ width: `${seoScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-mono font-bold text-stone-600 uppercase">{translations[language].draftPostContent}</label>
            <textarea
              required
              rows={6}
              value={draftContent}
              onChange={(e) => setDraftContent(e.target.value)}
              placeholder={language === 'fr' ? "### Titre de section\nContenu détaillé de votre article sur l'accompagnement canin..." : "### Section title\nDetailed blog article contents..."}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-stone-900 transition-colors text-sm font-sans"
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={draftSuccess}
              className="px-6 py-3 bg-stone-950 hover:bg-black text-white font-mono text-xs font-black rounded-xl shadow-md transition-all flex items-center gap-2 disabled:bg-emerald-600"
            >
              {draftSuccess ? <CheckCircle className="h-4 w-4 text-white" /> : <Send className="h-4 w-4 text-white" />}
              <span>{draftSuccess ? (language === 'fr' ? "Article Publié !" : "Post Published!") : translations[language].draftPublish}</span>
            </button>
          </div>
        </form>
      )}

      {/* SEO Search & Category filter panel */}
      <div className="bg-stone-50 rounded-2xl border border-stone-200 p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 order-2 md:order-1">
          {[
            { id: "all", fr: "Tous les Articles", en: "All Articles" },
            { id: "cats", fr: "Félins & Chats", en: "Felines & Cats" },
            { id: "dogs", fr: "Canins & Chiens", en: "Canines & Dogs" },
            { id: "luxury", fr: "Luxe & Conciergerie", en: "Luxury & Concierge" }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold font-mono tracking-wider uppercase rounded-xl border transition-all cursor-pointer ${
                activeCategory === cat.id 
                  ? "bg-stone-950 border-stone-950 text-white shadow-xs" 
                  : "bg-white border-stone-200 text-stone-600 hover:border-stone-400"
              }`}
            >
              {language === 'fr' ? cat.fr : cat.en}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative order-1 md:order-2 w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'fr' ? "Rechercher un article..." : "Search articles..."}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-stone-900 transition-colors text-xs font-mono font-medium shadow-2xs"
          />
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-stone-400" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 p-0.5 hover:bg-stone-100 rounded-md text-stone-400 hover:text-stone-700"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Blogs Results Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              {/* Pure-CSS Stylized banner instead of an image to prevent lag */}
              <div className="relative aspect-[16/10] bg-gradient-to-tr from-stone-900/10 to-stone-900/5 flex items-center justify-center border-b border-stone-100">
                <BookOpen className="h-12 w-12 text-stone-850/40 group-hover:scale-110 group-hover:text-stone-900/60 transition-all duration-500" />
                <div className="absolute inset-0 bg-stone-900/[0.02] group-hover:bg-transparent transition-colors duration-300"></div>
                <span className="absolute top-4 left-4 bg-white text-stone-900 px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg border border-stone-150 backdrop-blur shadow-xs">
                  {post.category[language] || post.category.fr || post.category.en}
                </span>
              </div>

              {/* Content info */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-stone-300" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-stone-300" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-extrabold text-stone-900 group-hover:text-stone-900 transition-colors line-clamp-2 leading-snug">
                    {post.title[language] || post.title.fr || post.title.en}
                  </h3>

                  <p className="text-sm text-stone-500 line-clamp-3 leading-relaxed">
                    {post.excerpt[language] || post.excerpt.fr || post.excerpt.en}
                  </p>
                </div>

                {/* Tags and Read more */}
                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <div className="flex flex-wrap gap-1">
                    {post.keywords.slice(0, 2).map((kw, i) => (
                      <span key={i} className="inline-flex items-center gap-0.5 text-[9px] font-mono font-medium bg-stone-50 text-stone-500 px-2 py-0.5 rounded-md border border-stone-200">
                        <Tag className="h-2.5 w-2.5 text-stone-400" />
                        {kw}
                      </span>
                    ))}
                    {post.keywords.length > 2 && (
                      <span className="text-[9px] text-stone-400 self-center font-mono">+{post.keywords.length - 2}</span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full py-2.5 border border-stone-950 hover:bg-stone-50 text-stone-950 rounded-xl transition-all font-black text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    {translations[language].readMore}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-stone-50 rounded-3xl border border-stone-200">
          <BookOpen className="h-12 w-12 text-stone-300 mx-auto mb-4" />
          <h3 className="text-base font-bold text-stone-800">{language === 'fr' ? "Aucun article trouvé" : "No articles found"}</h3>
          <p className="text-xs text-stone-400 mt-1">{language === 'fr' ? "Essayez de modifier vos filtres ou votre recherche" : "Try adjusting your filters or search query"}</p>
        </div>
      )}

      {/* Reader Modal popup */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/65 backdrop-blur-xs transition-opacity">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-stone-200 shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col">
            {/* Header Area */}
            <div className="relative bg-stone-950 p-6 md:p-8 text-white border-b border-stone-850 shrink-0">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 h-9 w-9 bg-stone-850 hover:bg-stone-800 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none z-10 cursor-pointer text-sm"
              >
                ✕
              </button>
              <div className="space-y-2 max-w-[90%]">
                <span className="bg-white/10 text-white border border-white/20 px-3 py-1 text-[10px] font-mono font-bold rounded-lg uppercase tracking-wider inline-block">
                  {selectedPost.category[language] || selectedPost.category.fr || selectedPost.category.en}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-extrabold line-clamp-2 leading-tight">
                  {selectedPost.title[language] || selectedPost.title.fr || selectedPost.title.en}
                </h3>
              </div>
            </div>

            {/* Read Content area */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono font-bold text-stone-400 border-b border-stone-100 pb-4 uppercase">
                <span className="flex items-center gap-1.5 bg-stone-50 px-2.5 py-1 rounded-md border border-stone-150">
                  <Calendar className="h-3.5 w-3.5 text-stone-400" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5 bg-stone-50 px-2.5 py-1 rounded-md border border-stone-150">
                  <Clock className="h-3.5 w-3.5 text-stone-400" />
                  {selectedPost.readTime}
                </span>
                <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-100">
                  <Eye className="h-3.5 w-3.5" />
                  {language === 'fr' ? "Publié et Indexé Google" : "Published & Indexed"}
                </span>
              </div>

              {/* Text Body parsed elegantly */}
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-3 font-sans">
                {renderMarkdown(selectedPost.content[language] || selectedPost.content.fr || selectedPost.content.en)}
              </div>

              {/* Thématiques */}
              <div className="pt-6 border-t border-stone-100 space-y-2">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase flex items-center gap-1">
                  <Tag className="h-3.5 w-3.5 text-stone-400" />
                  {language === 'fr' ? "Mots-clés SEO pour l'indexation :" : "SEO Indexing tags:"}
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1 font-mono">
                  {selectedPost.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="bg-stone-50 text-stone-600 px-2.5 py-1 text-[11px] font-bold rounded-md border border-stone-200"
                    >
                      #{kw}
                    </span>
                  ))}
				</div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-stone-950 hover:bg-black text-white font-mono text-xs font-bold rounded-xl transition-all cursor-pointer border border-stone-800"
                >
                  {translations[language].backToBlog}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Structured Google local FAQ section for ultimate SEO indexing */}
      <div className="mt-16 bg-white border border-stone-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-stone-100 text-stone-900 border border-stone-200 text-[10px] font-mono font-extrabold uppercase tracking-widest rounded-full">
            Local FAQ • Google Search
          </span>
          <h3 className="text-2xl font-serif font-black text-charcoal-luxe tracking-tight">
            {language === 'fr' ? "FAQ Locale & Conseils Pet Sitting" : "Local FAQ & Pet Sitting Advice"}
          </h3>
          <p className="text-xs text-stone-400">
            {language === 'fr' 
              ? "Toutes les réponses à vos questions d'organisation et de garde sur la Côte d'Azur." 
              : "All your organizational and pet sitting questions answered for the French Riviera."}
          </p>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-stone-50 border-stone-900 shadow-2xs' : 'bg-white border-stone-150 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-serif font-extrabold text-sm md:text-base text-stone-900 leading-snug">
                    {faq.q[language]}
                  </span>
                  <span className="ml-4 p-1 bg-stone-100 rounded-lg border border-stone-150 shrink-0">
                    {isOpen ? <ChevronUp className="h-4 w-4 text-stone-900" /> : <ChevronDown className="h-4 w-4 text-stone-600" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 space-y-4 text-stone-600 text-xs md:text-sm leading-relaxed border-t border-stone-150/50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.a[language]}</p>
                    
                    {/* SEO schema meta Keywords inside accordion */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-150/40">
                      <span className="text-[9px] font-mono font-bold text-stone-400 uppercase self-center mr-1">
                        Keywords:
                      </span>
                      {faq.kw.map((kw, kIdx) => (
                        <span key={kIdx} className="text-[10px] font-mono bg-white text-stone-500 px-2 py-0.5 rounded-md border border-stone-150">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
