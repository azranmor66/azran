// ==========================================
// 1. הגדרות עמוד הקישורים (Linktree) - index.html
// ==========================================
const treeConfig = {
    links: [
        { 
            label: "לאתר הרשמי & שיתופי פעולה", 
            url: "home.html", 
            icon: "globe", 
            visible: true, 
            highlight: true 
        },
        { 
            label: "הפועל על פי עזרן - ערוץ הווטסאפ הרשמי", 
            url: "https://whatsapp.com/channel/0029VbBiFme2UPBIGn82mC3Z", // עדכן לינק
            icon: "message-circle", 
            visible: true 
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
            url: "https://open.spotify.com/...", // עדכן לינק
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
            const baseClass = "w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group";
            const normalClass = "bg-[#111] border border-[#222] hover:border-[#ff0040]";
            const highlightClass = "bg-[#ff0040] border border-[#ff0040] text-white hover:bg-[#d90036]";
            const themeClass = link.highlight ? highlightClass : normalClass;
            const iconColor = link.highlight ? "text-white" : "text-[#ff0040]";

            return `
            <a href="${link.url}" target="${link.url.startsWith('http') ? '_blank' : '_self'}" class="${baseClass} ${themeClass}">
                <div class="flex items-center gap-4">
                    <span class="${iconColor} group-hover:text-white transition"><i data-lucide="${link.icon}"></i></span>
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
