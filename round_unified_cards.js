const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const items = $('#products .grid').first().children('div');

if (items.length > 0) {
    items.each((index, el) => {
        const card = $(el);
        
        // Round Outer Container
        card.addClass('rounded-3xl');
        
        // Ensure inside top image wrapper follows top curves flawlessly
        const imgWrap = card.find('.aspect-\\[3\\/4\\]').first();
        if (imgWrap.length > 0) {
            imgWrap.addClass('rounded-t-3xl');
        }

        // Ensure inside bottom text meets bottom curves flawlessly
        const textWrap = card.children('div').last();
        if (textWrap.length > 0) {
            textWrap.addClass('rounded-b-3xl');
        }
    });
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Outer borders rounded to circular flawlessly flawlessly.");
