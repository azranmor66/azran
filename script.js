// ==========================================
// Site Configuration
// ==========================================

const siteConfig = {
    // --- Hero ---
    heroTitle: "הקול של אוהדי הפועל תל אביב",
    
    // --- About ---
    aboutText: `נעים להכיר, אני מור עזרן.
    התואר שבאמת מגדיר אותי הוא לא 'יוצר תוכן', אלא אוהד. גדלתי בשער 5, נשמתי את הדשא ואת ריח הנקניקיות.
    
    מה שהתחיל כסרטונים ספונטניים מהרכב אחרי משחקים, הפך לקהילה של אלפי עוקבים שמחפשים את האמת הלא מהונדסת.
    אני כאן כדי לתת קול למה שכולנו חושבים. בלי פילטרים, בלי פוליטיקלי קורקט, ועם הרבה תשוקה למשחק.`,

    // --- Stats: Instagram ---
    statsInstaTitle: "הקהילה באינסטגרם",
    statsInsta: [
        { value: "+12K", label: "עוקבים" },
        { value: "+150K", label: "חשיפה חודשית" },
        { value: "+17.5K", label: "ממוצע צפיות לרילס" }
    ],

    // --- Stats: General ---
    statsGeneralTitle: "נתונים כלליים",
    statsGeneral: [
        { value: "50+", label: "לקוחות מרוצים" },
        { value: "4", label: "שנות ניסיון" },
        { value: "24/7", label: "זמינות לקהילה" }
    ],

    // --- Video Gallery ---
    videoTitle: "התוכן שלי",
    videos: [
        { 
            title: "עושה סדר - פסק הדין", 
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

    // --- Services ---
    servicesTitle: "השירותים שלי",
    services: [
        { 
            title: "יצירת תוכן", 
            icon: "video", 
            description: "הפקה ועריכה של סרטונים לרשתות החברתיות."
        },
        { 
            title: "שיווק שותפים", 
            icon: "share-2", 
            description: "שיתופי פעולה המשלבים את המותג שלכם בתוכן שלי."
        },
        { 
            title: "חסויות ומותג", 
            icon: "megaphone", 
            description: "חיבור ארוך טווח ושגרירות מותג."
        }
    ],
    
    // --- Brands ---
    brands: [
        "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/sav.jpg",
        "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/tinok.webp",
        "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/sav.jpg",
        "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/tinok.webp"
    ],

    // --- Social ---
    social: {
        instagram: "https://www.instagram.com/morazran/",
        tiktok: "https://www.tiktok.com/@azranmor",
        twitter: "https://x.com/AzranMor",
        whatsapp: "#"
    }
};

// ==========================================
// Safe Rendering Logic
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Helper function to safely set text
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // 1. Text Content
    setText('hero-title', siteConfig.heroTitle);
    setText('about-text', siteConfig.aboutText);
    setText('stats-insta-title', siteConfig.statsInstaTitle);
    setText('stats-general-title', siteConfig.statsGeneralTitle);
    setText('video-title', siteConfig.videoTitle);
    setText('services-title', siteConfig.servicesTitle);

    // 2. Instagram Stats
    const instaGrid = document.getElementById('stats-insta-grid');
    if (instaGrid && siteConfig.statsInsta) {
        instaGrid.innerHTML = siteConfig.statsInsta.map(stat => `
            <div class="flex flex-col items-center p-4 bg-[#111] rounded-xl border border-gray-800">
                <span class="text-4xl font-black text-white mb-2">${stat.value}</span>
                <span class="text-gray-400 text-sm font-bold uppercase tracking-wider">${stat.label}</span>
            </div>
        `).join('');
    }

    // 3. General Stats
    const generalGrid = document.getElementById('stats-general-grid');
    if (generalGrid && siteConfig.statsGeneral) {
        generalGrid.innerHTML = siteConfig.statsGeneral.map(stat => `
            <div class="flex flex-col items-center p-4 bg-[#111] rounded-xl border border-gray-800">
                <span class="text-4xl font-black text-white mb-2">${stat.value}</span>
                <span class="text-gray-400 text-sm font-bold uppercase tracking-wider">${stat.label}</span>
            </div>
        `).join('');
    }

    // 4. Videos
    const videoGrid = document.getElementById('video-grid');
    if (videoGrid && siteConfig.videos) {
        videoGrid.innerHTML = siteConfig.videos.map(video => `
            <a href="${video.link}" target="_blank" class="relative block overflow-hidden rounded-xl aspect-[9/16] bg-gray-900 border border-gray-800">
                <img src="${video.img}" class="w-full h-full object-cover opacity-80" onerror="this.style.display='none'">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <i data-lucide="play" class="fill-white text-white ml-1 w-6 h-6"></i>
                    </div>
                </div>
                <div class="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 class="text-white font-bold text-center text-lg">${video.title}</h3>
                </div>
            </a>
        `).join('');
    }

    // 5. Services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid && siteConfig.services) {
        servicesGrid.innerHTML = siteConfig.services.map((service, index) => `
            <div onclick="openServiceModal(${index})" class="p-6 bg-[#111] rounded-xl border border-gray-800 text-center cursor-pointer active:scale-95 transition">
                <div class="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--accent)]">
                    <i data-lucide="${service.icon}"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">${service.title}</h3>
                <p class="text-gray-500 text-sm">לחץ לפרטים</p>
            </div>
        `).join('');
    }

    // 6. Brands (Marquee)
    const brandsTrack = document.getElementById('brands-track');
    if (brandsTrack && siteConfig.brands) {
        const singleSet = siteConfig.brands.map(img => `
            <img src="${img}" class="brand-item" style="height: 60px; width: auto; margin: 0 20px; object-fit: contain;" onerror="this.style.display='none'">
        `).join('');
        brandsTrack.innerHTML = singleSet.repeat(20);
    }

    // 7. Social Links
    const socialLinks = document.getElementById('social-links');
    if (socialLinks && siteConfig.social) {
        socialLinks.innerHTML = `
            <a href="${siteConfig.social.instagram}" target="_blank" class="p-3 bg-[#222] rounded-full text-white"><i data-lucide="instagram"></i></a>
            <a href="${siteConfig.social.tiktok}" target="_blank" class="p-3 bg-[#222] rounded-full text-white"><i data-lucide="music-2"></i></a>
            <a href="${siteConfig.social.twitter}" target="_blank" class="p-3 bg-[#222] rounded-full text-white"><i data-lucide="twitter"></i></a>
        `;
    }

    // Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});

// Modals
function openServiceModal(index) {
    const service = siteConfig.services[index];
    const modal = document.getElementById('service-modal');
    if(!modal) return;
    
    document.getElementById('modal-title').textContent = service.title;
    document.getElementById('modal-desc').innerText = service.description;
    
    const iconContainer = document.getElementById('modal-icon-container');
    if(iconContainer) {
        iconContainer.innerHTML = `<i data-lucide="${service.icon}" class="w-8 h-8"></i>`;
        if(window.lucide) lucide.createIcons();
    }
    
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
