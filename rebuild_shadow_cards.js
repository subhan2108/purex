const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const grid = $('#products .grid').first();

const items = [
    { src: 'assets/product1.png', cat: 'CERAMIC DIVISION', title: 'GREY ADHESIVE P-60+', sub: 'New & Advanced GEL TECHNOLOGY', color: '#E9522C' },
    { src: 'assets/product2.png', cat: 'CERAMIC DIVISION', title: 'GREY ADHESIVE P-70+', sub: 'New & Advanced GEL TECHNOLOGY', color: '#E9522C' },
    { src: 'assets/product2.png', cat: 'CERAMIC DIVISION', title: 'WHITE ADHESIVE P-70+', sub: 'New & Advanced GEL TECHNOLOGY', color: '#E9522C' },
    { src: 'assets/product3.png', cat: 'VITRIFICATION DIVISION', title: 'GREY ADHESIVE P-80+', sub: 'Extreme Density Adhesives', color: '#164168' },
    { src: 'assets/product3.png', cat: 'VITRIFICATION DIVISION', title: 'WHITE ADHESIVE P-80+', sub: 'Extreme Density Adhesives', color: '#164168' },
    { src: 'assets/product6.png', cat: 'MEGA SLAB DIVISION', title: 'T-11 MEGA SLAB', sub: 'Large Format Specialist', color: '#A0451A' },
    { src: 'assets/product7.png', cat: 'EPOXY GROUT', title: 'EPOXY GROUT', sub: 'Premium Joint Filler', color: '#2D333E' },
    { src: 'assets/product9.png', cat: 'EPOXY GROUT', title: 'TILE GROUT / ADMIX', sub: 'Premium Additives', color: '#2D333E' },
    { src: 'assets/product8.png', cat: 'CLEANERS & MAINTENANCE', title: 'T-14 STAIN REMOVER', sub: 'Care & Removers', color: '#E9522C' },
    { src: 'assets/product10.png', cat: 'CLEANERS & MAINTENANCE', title: 'TILE CLEANER', sub: 'High Active Cleaning Solution', color: '#E9522C' },
    { src: 'assets/product11.png', cat: 'CLEANERS & MAINTENANCE', title: 'MARBLE & STONE CLEANER', sub: 'High Active Cleaning Solution', color: '#E9522C' }
];

if (grid.length > 0) {
    // Clear all previous children containing loaded nodes
    grid.empty();

    items.forEach(item => {
        grid.append(`
            <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" onclick="openLightbox('${item.src}')">
                <!-- Flyer Image -->
                <div class="aspect-[3/4] w-full overflow-hidden bg-white">
                    <img src="${item.src}" alt="${item.title}" class="h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500">
                </div>
                
                <!-- Headings Details Card directly meet at top edge -->
                <div class="p-3 text-center bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex-grow flex flex-col justify-center">
                    <span class="text-[10px] font-black tracking-wider uppercase mb-0.5" style="color: ${item.color}">${item.cat}</span>
                    <h4 class="font-extrabold text-[13px] text-slate-800 dark:text-white tracking-tight leading-snug">${item.title}</h4>
                    <p class="text-[9px] text-emerald-500 font-bold flex items-center justify-center gap-0.5 mt-0.5">
                        <span class="material-symbols-outlined text-xs">offline_bolt</span>${item.sub}
                    </p>
                </div>
            </div>
        `);
    });
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Rebuilt clean uniform shadow cards flawlessly flawlessly flawlessly.");
