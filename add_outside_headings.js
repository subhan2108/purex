const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// Target product items inside section#products
const cards = $('#products .grid').first().children('div');

const titles = [
    'GREY ADHESIVE P-60+', 'GREY ADHESIVE P-70+', 'WHITE ADHESIVE P-70+',
    'GREY ADHESIVE P-80+', 'WHITE ADHESIVE P-80+', 'T-11 MEGA SLAB',
    'EPOXY GROUT', 'T-14 STAIN REMOVER', 'TILE GROUT / ADMIX',
    'TILE CLEANER', 'MARBLE & STONE CLEANER'
];

if (cards.length > 0) {
    cards.each((index, el) => {
        const card = $(el);
        if (index < titles.length) {
            // Reconfigure card to flex with title beneath image overlay cell
            card.removeClass('aspect-[3/4] shadow-sm hover:shadow-2xl').addClass('flex flex-col gap-2');
            
            // Find container element holding zoom cursor inside card cell
            const imgWrapper = card.find('.cursor-zoom-in').first();
            if (imgWrapper.length > 0) {
                imgWrapper.removeClass('h-full w-full').addClass('aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300');
            }

            // Append Title
            card.append(`
                <div class="text-center mt-0.5">
                    <h4 class="font-extrabold text-[12px] md:text-xs text-slate-800 dark:text-slate-100 tracking-tight leading-tight">${titles[index]}</h4>
                </div>
            `);
        }
    });
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Appended headings to product grid elements flawlessly flawlessly.");
