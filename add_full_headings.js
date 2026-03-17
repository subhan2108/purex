const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const cards = $('#products .grid').first().children('div');

// Dictionary mappings for all 11 items from flyers data
const items = [
    { cat: 'CERAMIC DIVISION', title: 'GREY ADHESIVE P-60+', sub: 'New & Advanced GEL TECHNOLOGY', color: '#E9522C' },
    { cat: 'CERAMIC DIVISION', title: 'GREY ADHESIVE P-70+', sub: 'New & Advanced GEL TECHNOLOGY', color: '#E9522C' },
    { cat: 'CERAMIC DIVISION', title: 'WHITE ADHESIVE P-70+', sub: 'New & Advanced GEL TECHNOLOGY', color: '#E9522C' },
    { cat: 'VITRIFICATION DIVISION', title: 'GREY ADHESIVE P-80+', sub: 'Extreme Density Adhesives', color: '#164168' },
    { cat: 'VITRIFICATION DIVISION', title: 'WHITE ADHESIVE P-80+', sub: 'Extreme Density Adhesives', color: '#164168' },
    { cat: 'MEGA SLAB DIVISION', title: 'T-11 MEGA SLAB', sub: 'Large format format layout trigger', color: '#A0451A' },
    { cat: 'EPOXY GROUT', title: 'EPOXY GROUT', sub: 'Premium Joint Filler', color: '#2D333E' },
    { cat: 'EPOXY GROUT', title: 'TILE GROUT / ADMIX', sub: 'Premium Additives', color: '#2D333E' },
    { cat: 'CLEANERS & MAINTENANCE', title: 'T-14 STAIN REMOVER', sub: 'Care & Removers', color: '#E9522C' },
    { cat: 'CLEANERS & MAINTENANCE', title: 'TILE CLEANER', sub: 'High Active Cleaning Solution', color: '#E9522C' },
    { cat: 'CLEANERS & MAINTENANCE', title: 'MARBLE & STONE CLEANER', sub: 'High Active Cleaning Solution', color: '#E9522C' }
];

if (cards.length > 0) {
    cards.each((index, el) => {
        const card = $(el);
        if (index < items.length) {
            const data = items[index];
            
            // Clear previous heading to prevent duplicates if any ran earlier
            card.find('div.text-center.mt-0\\.5, div.text-center.mt-1, div.text-center.mt-2').remove();
            
            card.removeClass('aspect-[3/4]').addClass('flex flex-col gap-2');
            const imgWrapper = card.find('.cursor-zoom-in').first();
            if (imgWrapper.length > 0) {
                imgWrapper.removeClass('h-full w-full').addClass('aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300');
            }

            // Append 3-line heading cluster
            card.append(`
                <div class="text-center mt-1 px-1">
                    <span class="text-[10px] font-black tracking-wider uppercase" style="color: ${data.color}">${data.cat}</span>
                    <h4 class="font-black text-[14px] text-slate-900 dark:text-white tracking-tight leading-none mt-0.5">${data.title}</h4>
                    <p class="text-[10px] text-emerald-500 font-bold flex items-center justify-center gap-0.5 mt-0.5">
                        <span class="material-symbols-outlined text-xs">offline_bolt</span>${data.sub}
                    </p>
                </div>
            `);
        }
    });
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Appended 3-line heading clusters outside item boundaries flaws flawless.");
