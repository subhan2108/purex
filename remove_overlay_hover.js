const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// Find all image wrappers that previously used zoom trigger configurations
const items = $('#products .grid').first().find('.cursor-zoom-in');

if (items.length > 0) {
    items.each((index, el) => {
        const wrap = $(el);
        
        // Remove Zoom-In Cursor
        wrap.removeClass('cursor-zoom-in').addClass('cursor-pointer');
        
        // Remove absolute hover div Node containing the icon triggers
        const overlayDiv = wrap.children('div.absolute').first();
        if (overlayDiv.length > 0) {
            overlayDiv.remove();
        }
    });
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Stripped absolute hover overlays icon flawlessly flawlessly triggered.");
