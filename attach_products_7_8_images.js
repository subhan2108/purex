const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const cards = $('#products .grid > div');

if (cards.length > 6) {
    const seventhCard = $(cards[6]);
    seventhCard.prepend(`
        <div class="relative h-72 overflow-hidden bg-white flex justify-center items-center opacity-95 hover:opacity-100 transition-opacity border-b border-slate-100 dark:border-slate-800">
            <img src="assets/product7.png" alt="Purex Epoxy Grout flyer" class="h-full w-full object-cover object-right-top hover:scale-105 transition-transform duration-500 cursor-pointer">
            <div class="absolute bottom-2 right-2 bg-slate-900/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-medium">Flyer</div>
        </div>
    `);
}

if (cards.length > 7) {
    const eighthCard = $(cards[7]);
    eighthCard.prepend(`
        <div class="relative h-72 overflow-hidden bg-white flex justify-center items-center opacity-95 hover:opacity-100 transition-opacity border-b border-slate-100 dark:border-slate-800">
            <img src="assets/product8.png" alt="T-14 Stain Remover flyer" class="h-full w-full object-cover object-right-top hover:scale-105 transition-transform duration-500 cursor-pointer">
            <div class="absolute bottom-2 right-2 bg-slate-900/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-medium">Flyer</div>
        </div>
    `);
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Seventh and Eighth product flyers attached.");
