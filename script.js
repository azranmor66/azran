// ==========================================
// ערוך את הנתונים כאן
// ==========================================

const siteConfig = {
    heroTitle: "הקול של אוהדי הפועל תל אביב",
    
    aboutText: `נעים להכיר, אני מור עזרן.
    התואר שבאמת מגדיר אותי הוא לא 'יוצר תוכן', אלא אוהד. גדלתי בשער 5, נשמתי את הדשא ואת ריח הנקניקיות.
    
    מה שהתחיל כסרטונים ספונטניים מהרכב אחרי משחקים, הפך לקהילה של אלפי עוקבים שמחפשים את האמת הלא מהונדסת.
    אני כאן כדי לתת קול למה שכולנו חושבים. בלי פילטרים, בלי פוליטיקלי קורקט, ועם הרבה תשוקה למשחק.`,

    stats: [
        { value: "+10K", label: "עוקבים באינסטגרם" },
        { value: "+22K", label: "מעורבות חודשית" },
        { value: "+1.1M", label: "חשיפה חודשית" },
        { value: "95%", label: "גברים בגילאי 18-34" },
        { value: "+17.5K", label: "ממוצע צפיות לרילס" },
        { value: "24/7", label: "פעילות בקהילה" }
    ],

videos: [
        { 
            title: "עושה סדר - פסק הדין אירועי הדרבי", 
            // תיקון: שימוש בקישור ישיר (Raw) כדי למנוע בעיות נתיב
            img: "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/seder.png", 
            link: "https://www.instagram.com/p/DQoMbAWk5Aw/" 
        },
        { 
            title: "סיכום המשחק - הפועל ירושלים VS הפועל", 
            // תיקון: קישור ישיר לתמונה
            img: "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/katamon.png", 
            // תיקון קריטי: הוספת https://
            link: "https://www.instagram.com/p/DQ1GqBjk6w-/" 
        },
        { 
            title: "הפועל VS סכנין", 
            // תיקון קריטי: החלפת blob ב-raw
            img: "azran/assets/images/sakhnin.jpg", 
            link: "https://www.instagram.com/p/DQ1GqBjk6w-/" 
        }
    ],    services: [
        { 
            title: "סרטוני ספיישל וסקירות", 
            icon: "video",
            description: "הפקת סרטונים מושקעים לפני ואחרי משחקים, ניתוחים טקטיים בגובה העיניים וסיקור אירועים מיוחדים. הסרטונים מותאמים לרשתות החברתיות ומגיעים לקהל רחב ומעורב."
        },
        { 
            title: "שיווק שותפים", 
            icon: "share-2",
            description: "שיתופי פעולה אסטרטגיים המשלבים את המותג שלכם בתוך התוכן שלי בצורה טבעית ואותנטית. אנחנו יוצרים סיפור שמחבר בין המותג לבין הערכים של הקהילה."
        },
        { 
            title: "חסויות ושגרירות מותג", 
            icon: "megaphone",
            description: "חיבור ארוך טווח עם המותג שלכם. כשגריר מותג, אני מייצג אתכם בכל הפלטפורמות, יוצר תוכן בלעדי ומחזק את המודעות למותג בקרב קהל האוהדים."
        }
    ],
    
    // רשימת הלוגואים לשיתופי פעולה
    brands: [
        "https://raw.githubusercontent.com/azranmor66/azran/main/assets/images/katamon.png",
        "azran/assets/images/tinok.webp",
        "azran/assets/images/ibi.png" 
    ],

    social: {
        instagram: "https://www.instagram.com/morazran/",
        tiktok: "https://www.tiktok.com/@azranmor",
        twitter: "https://x.com/AzranMor",
        whatsapp: "#"
    }
};

// ==========================================
// טעינת התוכן
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Hero & About
    document.getElementById('hero-title').textContent = siteConfig.heroTitle;
    document.getElementById('about-text').innerText = siteConfig.aboutText;

    // Stats
    const statsContainer = document.getElementById('stats-grid');
    if(statsContainer) {
        statsContainer.innerHTML = siteConfig.stats.map(stat => `
            <div class="flex flex-col items-center group cursor-default">
                <span class="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-[var(--accent)] transition duration-300">${stat.value}</span>
                <div class="w-12 h-1 bg-[var(--accent)] rounded mb-3"></div>
                <span class="text-gray-400 font-bold uppercase tracking-wider text-sm md:text-base">${stat.label}</span>
            </div>
        `).join('');
    }

    // Videos
    const videoContainer = document.getElementById('video-grid');
    if(videoContainer) {
        videoContainer.innerHTML = siteConfig.videos.map(video => `
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
        `).join('');
    }

    // Services
    const servicesContainer = document.getElementById('services-grid');
    if(servicesContainer) {
        servicesContainer.innerHTML = siteConfig.services.map((service, index) => `
            <div onclick="openServiceModal(${index})" class="card-dark h-48 flex flex-col items-center justify-center relative overflow-hidden group hover:bg-[#151515] transition cursor-pointer transform hover:scale-105">
                <div class="bg-[var(--accent)]/10 p-5 rounded-full mb-6 group-hover:bg-[var(--accent)] transition duration-500">
                    <i data-lucide="${service.icon}" class="text-[var(--accent)] group-hover:text-white w-8 h-8 transition"></i>
                </div>
                <h3 class="text-xl font-bold text-white">${service.title}</h3>
                <span class="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition">לחץ לפרטים נוספים</span>
            </div>
        `).join('');
    }
    
    // Marquee / Collaborations
    const brandsTrack = document.getElementById('brands-track');
    if(brandsTrack && siteConfig.brands.length > 0) {
        const singleSet = siteConfig.brands.map(img => `
            <img src="${img}" class="brand-item" onerror="this.style.display='none'">
        `).join('');
        
        // שכפול נדיב למילוי כל מסך ולופ חלק
        brandsTrack.innerHTML = singleSet.repeat(10);
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

    lucide.createIcons();
});

// ==========================================
// פונקציות גלובליות (מודלים)
// ==========================================

// Service Modal
function openServiceModal(index) {
    const service = siteConfig.services[index];
    const modal = document.getElementById('service-modal');
    
    document.getElementById('modal-title').textContent = service.title;
    document.getElementById('modal-desc').innerText = service.description;
    
    // תיקון ה-ID: משתמשים בקונטיינר כדי לא למחוק את האלמנט
    const iconContainer = document.getElementById('modal-icon-container');
    iconContainer.innerHTML = `<i data-lucide="${service.icon}" class="w-8 h-8"></i>`;
    lucide.createIcons();

    modal.classList.remove('hidden');
}

function closeServiceModal() {
    document.getElementById('service-modal').classList.add('hidden');
}

// Accessibility Modal
function openAccessibilityModal() {
    document.getElementById('accessibility-modal').classList.remove('hidden');
}

function closeAccessibilityModal() {
    document.getElementById('accessibility-modal').classList.add('hidden');
}

// Close on Escape
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeServiceModal();
        closeAccessibilityModal();
    }
});
