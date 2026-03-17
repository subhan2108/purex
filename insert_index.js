const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const indexSection = `
    <!-- Product Index Section -->
    <section class="py-20 bg-background-light dark:bg-background-dark/80" id="index">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-12">
                <h2 class="text-4xl font-black mb-4 tracking-tight">Catalogue Index</h2>
                <p class="text-slate-500 font-medium">12 Primary listed product categories and engineering summary.</p>
            </div>
            <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex justify-center p-4 border border-slate-100 dark:border-slate-800/50">
                <img src="assets/index.png" alt="Purex Catalogue Index List" class="w-full max-w-lg object-contain rounded-2xl">
            </div>
        </div>
    </section>
`;

const productsSection = $('#products');
if (productsSection.length > 0) {
    productsSection.before(indexSection);
} else {
    // Fallback based on text or append
    console.log("Products section not found by ID. Trying tag query.");
    $('section').last().before(indexSection); // or fallback
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Index section inserted.");
