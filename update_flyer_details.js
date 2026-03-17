const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const cards = $('#products .grid > div');

cards.each((i, el) => {
    const card = $(el);
    const title = card.find('.text-primary.font-black.text-xl').text().trim().toUpperCase();
    
    // 1. P-60+
    if (title === 'P-60+') {
        card.find('h3').text('Polymer Modified Adhesive');
        card.find('p').text('Ceramic Division. For inside floor and wall installation of ceramic tiles. Economical Grade.');
        card.find('ul').html(`
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">verified</span> IS 15477 Type-1 (C1T)</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">dashboard</span> Sizes: 12x12, 12x18, 12x24</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">color_lens</span> Colour: Grey</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">inventory_2</span> Pack Size: 20 Kg</li>
        `);
    }
    // 2. P-70+
    else if (title === 'P-70+') {
        card.find('h3').text('Extreme Density Adhesive');
        card.find('p').text('Vitrified Division. No vertical slip. For Ceramic & Vitrified up to 4\'x2\'. High water resistant (White).');
        card.find('ul').html(`
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">verified</span> C1T Type-1 Standard</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">dashboard</span> Sizes up to 4' x 2' Layouts</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">view_agenda</span> Grey & White available</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">inventory_2</span> Pack Size: 20 Kg</li>
        `);
    }
    // 3. P-80+
    else if (title === 'P-80+') {
        card.find('h3').text('High Water Resistant Adhesive');
        card.find('p').text('Vitrified Division. Self-curing and highly flexible. For porcelain & cladding setups.');
        card.find('ul').html(`
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">verified</span> C2TE Type-2 Standard</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">fullscreen</span> For Tiles up to 32" x 64"</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">water_drop</span> Ultimate adhesion; No vertical slip</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">gavel</span> BS 5980:1980 Standard</li>
        `);
    }
    
    // 4. Look for PU Adhesive card
    const cardText = card.text();
    if (cardText.includes('PU Adhesive') || cardText.includes('R2T')) {
        card.find('.text-primary.font-black.text-xl').text('PU FLEXI');
        card.find('h3').text('PU Adhesive (R2T)');
        card.find('p').text('Ideal for drywalls, metal, glass & plywood. Highly Versatile & Shatter-Proof.');
        card.find('ul').html(`
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">verified</span> Type-5 T S2 & EN 12004 R2T</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">layers</span> Metal, Glass & Wood Layouts</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">verified</span> Interior & Exterior Applications</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">inventory_2</span> Pack Size: 4 Kg</li>
        `);
    }
});

fs.writeFileSync('purex.html', $.html());
console.log("Success! Card descriptions updated with flyer specs.");
