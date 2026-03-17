const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Update theme colors in script tag
const scriptTag = $('#tailwind-config');
let configStr = scriptTag.html();
if (configStr) {
    configStr = configStr.replace('"background-dark": "#221510"', '"background-dark": "#161D3A"'); // Dark Blue
    configStr = configStr.replace('"primary": "#f15a22"', '"primary": "#DECA9F"'); // Beige
    scriptTag.html(configStr);
}

// 2. Insert Custom SVG Logo in Nav header
const logoBox = $('header .w-10.h-10'); // updated class in previously inserted header
if (logoBox) {
    logoBox.removeClass('bg-primary').addClass('bg-transparent shadow-none');
    logoBox.html(`
        <svg width="36" height="36" viewBox="0 0 64 64" class="drop-shadow-lg">
            <!-- Left Origami Tile -->
            <g transform="translate(4,4)">
                <polygon points="4,24 16,8 16,24" fill="#74879D" />
                <polygon points="16,8 24,16 16,24" fill="#D6C0A0" />
                <polygon points="4,24 16,24 12,28" fill="#1E2B5A" />
            </g>
            <!-- Right Origami Tile -->
            <g transform="translate(24,12)">
                <polygon points="4,24 16,8 16,24" fill="#D6C0A0" />
                <polygon points="16,8 24,16 16,24" fill="#74879D" />
                <polygon points="4,24 16,24 12,28" fill="#1E2B5A" />
            </g>
        </svg>
    `);
}

// Update Logo Text to 'purèx' and tagline if needed
$('header .flex-col span').first().prevObject.find('span').first().html('pur&egrave;x');

// 3. Update Hero Heading and details
const heroSection = $('section').first();
if (heroSection) {
    // Replace text and sizes
    const h1 = heroSection.find('h1');
    const p = heroSection.find('p');
    if (h1 && p) {
        h1.html(`
            <span class="text-white text-3xl md:text-4xl font-semibold tracking-normal block mb-1">New & Advanced</span>
            <span class="text-[#DECA9F] font-bold text-5xl md:text-7xl block tracking-wide">GEL TECHNOLOGY</span>
        `);
        p.html(`The next generation Adhesive solution for building the strong and better future.`);
    }
}

// Ensure first section background is blue
heroSection.find('.bg-cover').first().parent().find('.absolute.inset-0').first().removeClass('bg-gradient-to-t').addClass('bg-gradient-to-t from-[#161D3A]/90 via-[#161D3A]/40 to-[#161D3A]/80');

fs.writeFileSync('purex.html', $.html());
console.log("Success! Updated Theme, SVG Logo and Gel Technology Heading.");
