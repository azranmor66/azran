// ==========================================
// 1. הגדרות עמוד הקישורים (Linktree) - index.html
// ==========================================
const treeConfig = {
    links: [
        {
            label: "✈️ הפועל בבודפשט — חבילות טיסה",
            url: "hapoel-budapest.html",
            icon: "plane",
            visible: false,
            highlight: true
        },
        {
            label: "הפועל על פי עזרן - ערוץ הווטסאפ הרשמי", 
            url: "https://whatsapp.com/channel/0029VbBiFme2UPBIGn82mC3Z", // עדכן לינק
            icon: "message-circle", 
            visible: true 
        },
         { 
            label: "לתמיכה בפעילות",
            url: "https://buymeacoffee.com/azran",
            icon: "globe",
            visible: false,
            highlight: true 
        },
          {
            label: "לאתר הרשמי",
            url: "home.html",
            icon: "house",
            visible: true,
            highlight: false
        },
         {
            label: "שיתופי פעולה",
            url: "ads.html",
            icon: "handshake",
            visible: true,
            highlight: true
        },
        { 
            label: "אינסטגרם", 
            url: "https://www.instagram.com/morazran/", 
            icon: "instagram", 
            visible: true 
        },
        { 
            label: "טיקטוק", 
            url: "https://www.tiktok.com/@azranmor", 
            icon: "music-2", 
            visible: true 
        },
        { 
            label: "טוויטר (X)", 
            url: "https://x.com/AzranMor", 
            icon: "twitter", 
            visible: true 
        },
        { 
            label: "יוטיוב", 
            url: "https://youtube.com/...", // עדכן לינק
            icon: "youtube", 
            visible: false 
        },
       
        { 
            label: "ספוטיפיי", 
            url: "https://open.spotify.com/show/4N3nNHjjF0Qi4u7zoAAjjr", // עדכן לינק
            icon: "headphones", 
            visible: false 
        }
    ]
};

// ==========================================
// 2. הגדרות האתר המלא (Portfolio) - home.html
// ==========================================
const siteConfig = {
    heroTitle: "הקול של אוהדי הפועל תל אביב",
    
    aboutText: `נעים להכיר, אני מור עזרן.
    התואר שבאמת מגדיר אותי הוא לא 'יוצר תוכן', אלא אוהד. גדלתי בשער 5, נשמתי את הדשא ואת ריח הנקניקיות.
    
    מה שהתחיל כסרטונים ספונטניים מהרכב אחרי משחקים, הפך לקהילה של אלפי עוקבים שמחפשים את האמת הלא מהונדסת.
    אני כאן כדי לתת קול למה שכולנו חושבים. בלי פילטרים, בלי פוליטיקלי קורקט, ועם הרבה תשוקה למשחק.`,

    // --- Stats: Community & Audience (Unified) ---
    statsCommunityTitle: "הקהילה שלי",
    statsCommunity: [
        { value: "+11K", label: "עוקבים" },
        { value: "+1.2M", label: "חשיפה חודשית" },
        { value: "+22.5K", label: "ממוצע צפיות לרילס" },
        { value: "+12.5K", label: "מעורבות חודשית" },
        { value: "18-35", label: "טווח גילאים עיקרי" },
        { value: "+2.2K+", label: "ממוצע צפיות בסטורי" }
        // רוצה עוד? פשוט תוסיף כאן עוד שורה עם פסיק
    ],

    videoTitle: "התוכן שלי",
    videos: [
        { 
            title: "עושה סדר - פסק הדין אירועי הדרבי", 
            img: "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/seder.png", 
            link: "https://www.instagram.com/p/DQoMbAWk5Aw/" 
        },
        { 
            title: "סיכום המשחק - ירושלים", 
            img: "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/katamon.png", 
            link: "https://www.instagram.com/p/DQ1GqBjk6w-/" 
        },
        { 
            title: "הפועל VS סכנין", 
            img: "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/sakhnin.jpg", 
            link: "https://www.instagram.com/p/DQ1GqBjk6w-/" 
        }
    ],

    servicesTitle: "השירותים שלי",
    services: [
        { 
            title: "יצירת תוכן", 
            icon: "video", 
            description: "הפקה ועריכה של סרטונים לרשתות החברתיות, מותאמים לטרנדים ולשפה של הקהל."
        },
        { 
            title: "שיווק שותפים", 
            icon: "share-2", 
            description: "שיתופי פעולה המשלבים את המותג שלכם בתוכן שלי בצורה אותנטית וממירה."
        },
        { 
            title: "חסויות ומותג", 
            icon: "megaphone", 
            description: "חיבור ארוך טווח, שגרירות מותג וייצוג בערכים המשותפים לקהילה."
        }
    ],
    
    brands: [
        "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/sav.jpg",
        "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/tinok.webp",
        "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/ibi.png"
    ],

    social: {
        instagram: "https://www.instagram.com/morazran/",
        tiktok: "https://www.tiktok.com/@azranmor",
        twitter: "https://x.com/AzranMor",
        whatsapp: "#"
    }
};

// ==========================================
// Main Logic Router
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    if (document.getElementById('links-container')) {
        renderLinktree();
    } 
    else if (document.getElementById('hero')) {
        renderPortfolio();
    }

    if (window.lucide) {
        lucide.createIcons();
    }
});

// ------------------------------------------
// Linktree Rendering
// ------------------------------------------
function renderLinktree() {
    const container = document.getElementById('links-container');
    const html = treeConfig.links
        .filter(link => link.visible)
        .map(link => {
            const baseClass = "w-full p-4 rounded-2xl flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group";
            const normalClass = "bg-[#111] border border-[#2a2a2a] hover:border-[#e61e2a] hover:bg-[#1a0a0a]";
            const highlightClass = "bg-[#e61e2a] border border-[#e61e2a] text-white hover:bg-[#c91020] hover:shadow-[0_8px_30px_rgba(230,30,42,0.4)]";
            const themeClass = link.highlight ? highlightClass : normalClass;
            const iconColor = link.highlight ? "text-white" : "text-[#ff0040]";

            const CUSTOM_ICONS = {
                instagram:       `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
                twitter:         `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
                'music-2':       `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>`,
                'message-circle':`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.86.49 3.61 1.35 5.12L2 22l5.19-1.36a9.9 9.9 0 0 0 4.85 1.27c5.46 0 9.91-4.45 9.91-9.91C22 6.48 17.5 2 12.04 2zm5.9 13.37c-.25.71-1.46 1.35-2 1.43-.52.07-1.19.1-1.92-.12-.44-.14-1-.32-1.73-.63-3.04-1.32-5.03-4.38-5.18-4.58-.15-.2-1.18-1.57-1.18-3s.74-2.12 1.01-2.41c.26-.29.57-.36.76-.36l.55.01c.17 0 .41-.07.64.49l.92 2.3c.08.2.13.44.01.63l-.33.49-.5.58c-.17.18-.35.37-.15.72.2.35.89 1.47 1.9 2.38 1.31 1.16 2.41 1.52 2.76 1.69.35.17.55.14.76-.08l.71-.83c.22-.28.44-.23.74-.14l2.33.86c.34.12.56.29.56.7z"/></svg>`,
                house:           `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
                handshake:       `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            };
            const iconHtml = CUSTOM_ICONS[link.icon]
                ? `<span class="${iconColor} group-hover:text-white transition">${CUSTOM_ICONS[link.icon]}</span>`
                : `<span class="${iconColor} group-hover:text-white transition"><i data-lucide="${link.icon}"></i></span>`;

            return `
            <a href="${link.url}" target="${link.url.startsWith('http') ? '_blank' : '_self'}" class="${baseClass} ${themeClass}">
                <div class="flex items-center gap-4">
                    ${iconHtml}
                    <span class="font-bold text-lg">${link.label}</span>
                </div>
                <i data-lucide="chevron-left" class="opacity-50 group-hover:opacity-100 transition"></i>
            </a>
            `;
        }).join('');
    container.innerHTML = html;
}

// ------------------------------------------
// Portfolio Rendering
// ------------------------------------------
function renderPortfolio() {
    const setText = (id, text) => { const el = document.getElementById(id); if(el) el.textContent = text; };
    
    setText('hero-title', siteConfig.heroTitle);
    if(document.getElementById('about-text')) document.getElementById('about-text').innerText = siteConfig.aboutText;
    
    // כותרת הסטטיסטיקות החדשה
    setText('stats-community-title', siteConfig.statsCommunityTitle);
    
    setText('video-title', siteConfig.videoTitle);
    setText('services-title', siteConfig.servicesTitle);

    const renderGrid = (id, data, templateFn) => {
        const el = document.getElementById(id);
        if(el && data) el.innerHTML = data.map(templateFn).join('');
    };

    // Render Community Stats (The Unified Grid)
    renderGrid('stats-community-grid', siteConfig.statsCommunity, stat => `
        <div class="flex flex-col items-center p-6 bg-[#111] rounded-xl border border-gray-800 hover:border-[#ff0040] transition duration-300 group">
            <span class="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-[var(--accent)] transition duration-300">${stat.value}</span>
            <div class="w-12 h-1 bg-[var(--accent)] rounded mb-3"></div>
            <span class="text-gray-400 font-bold uppercase tracking-wider text-sm md:text-base">${stat.label}</span>
        </div>
    `);

    renderGrid('video-grid', siteConfig.videos, video => `
        <a href="${video.link}" target="_blank" class="relative group block overflow-hidden rounded-xl aspect-[9/16] border border-gray-800 bg-gray-900 transform transition duration-500 hover:-translate-y-2">
            <img src="${video.img}" class="w-full h-full object-cover opacity-60 transition duration-500 group-hover:scale-110 group-hover:opacity-40" onerror="this.src='https://via.placeholder.com/400x600?text=Image+Error'">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition group-hover:bg-[var(--accent)] group-hover:border-transparent">
                    <i data-lucide="play" class="fill-white text-white ml-1 w-6 h-6"></i>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
                <h3 class="text-xl font-bold text-center leading-tight text-white group-hover:text-[var(--accent)] transition">${video.title}</h3>
            </div>
        </a>
    `);

    renderGrid('services-grid', siteConfig.services, (service, index) => `
        <div onclick="openServiceModal(${index})" class="card-dark h-48 flex flex-col items-center justify-center relative overflow-hidden group hover:bg-[#151515] transition cursor-pointer transform hover:scale-105">
            <div class="bg-[var(--accent)]/10 p-5 rounded-full mb-6 group-hover:bg-[var(--accent)] transition duration-500">
                <i data-lucide="${service.icon}" class="text-[var(--accent)] group-hover:text-white w-8 h-8 transition"></i>
            </div>
            <h3 class="text-xl font-bold text-white">${service.title}</h3>
            <span class="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition">לחץ לפרטים נוספים</span>
        </div>
    `);

    // Marquee
    const brandsTrack = document.getElementById('brands-track');
    if(brandsTrack && siteConfig.brands.length > 0) {
        const singleSet = siteConfig.brands.map(img => `
            <img src="${img}" class="brand-item" onerror="this.style.display='none'">
        `).join('');
        brandsTrack.innerHTML = singleSet.repeat(20);
    }

    // Social Links
    const socialContainer = document.getElementById('social-links');
    if(socialContainer) {
        const links = [];
        if(siteConfig.social.instagram) links.push({ icon: 'instagram', url: siteConfig.social.instagram });
        if(siteConfig.social.tiktok) links.push({ icon: 'music-2', url: siteConfig.social.tiktok });
        if(siteConfig.social.twitter) links.push({ icon: 'twitter', url: siteConfig.social.twitter });
        
        socialContainer.innerHTML = links.map(link => `
            <a href="${link.url}" target="_blank" class="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full hover:bg-[var(--accent)] text-white transition hover:-translate-y-1">
                <i data-lucide="${link.icon}" class="w-5 h-5"></i>
            </a>
        `).join('');
    }
}

// ------------------------------------------
// Modals
// ------------------------------------------
function openServiceModal(index) {
    const service = siteConfig.services[index];
    const modal = document.getElementById('service-modal');
    if(!modal) return;
    
    document.getElementById('modal-title').textContent = service.title;
    document.getElementById('modal-desc').innerText = service.description;
    const iconContainer = document.getElementById('modal-icon-container');
    iconContainer.innerHTML = `<i data-lucide="${service.icon}" class="w-8 h-8"></i>`;
    lucide.createIcons();
    modal.classList.remove('hidden');
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    if(modal) modal.classList.add('hidden');
}

function openAccessibilityModal() {
    const modal = document.getElementById('accessibility-modal');
    if(modal) modal.classList.remove('hidden');
}

function closeAccessibilityModal() {
    const modal = document.getElementById('accessibility-modal');
    if(modal) modal.classList.add('hidden');
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeServiceModal();
        closeAccessibilityModal();
    }
});
