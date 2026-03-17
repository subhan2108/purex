const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// Find the grid inside Why Choose Section
// Section with h2 text "Why Professionals Choose PUREX"
const whyChooseHeader = $('h2:contains("Why Professionals Choose PUREX")');

if (whyChooseHeader.length > 0) {
    const section = whyChooseHeader.closest('section');
    const grid = section.find('.grid').first();
    
    if (grid.length > 0) {
        // Replace absolute grid structure
        const headerTitle = "Why Professionals Choose PUREX";
        const headerSubtitle = "Purex complies into top tier absolute International standard classifications structures:";
        
        const cardsGrid = `
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <!-- C1 -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow">
        <div class="absolute -top-3 -left-3 px-3 py-1 rounded-xl bg-[#F07A25] text-white font-black text-lg">C1</div>
        <div class="mt-3">
            <h3 class="text-xl font-bold mb-2">Normal Adhesive</h3>
            <p class="text-xs text-slate-500 mb-2">Recommended for ceramic & porcelain body with high water absorption for desk layouts.</p>
            <p class="text-[10px] text-primary font-semibold">Adhesion strength is at least 0.5 Mpa</p>
        </div>
    </div>
    <!-- C2 -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow">
        <div class="absolute -top-3 -left-3 px-3 py-1 rounded-xl bg-[#009EE2] text-white font-black text-lg">C2</div>
        <div class="mt-3">
            <h3 class="text-xl font-bold mb-2">Improved Adhesive</h3>
            <p class="text-xs text-slate-500 mb-2">All ceramic/porcelain tiles & most substrates like old tiles support sizes up to 600x600.</p>
            <p class="text-[10px] text-primary font-semibold">Adhesion strength is at least 1 Mpa</p>
        </div>
    </div>
    <!-- E -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow">
        <div class="absolute -top-3 -left-3 px-3 py-1 rounded-xl bg-[#BCE1F5] text-slate-800 font-black text-lg">E</div>
        <div class="mt-3">
            <h3 class="text-xl font-bold mb-2">Extended Open Time</h3>
            <p class="text-xs text-slate-500">Formulated with triggers sustaining static hydration delay properties flawlessly.</p>
        </div>
    </div>
    <!-- F -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow">
        <div class="absolute -top-3 -left-3 px-3 py-1 rounded-xl bg-[#EE5D35] text-white font-black text-lg">F</div>
        <div class="mt-3">
            <h3 class="text-xl font-bold mb-2">Fast Setting Adhesive</h3>
            <p class="text-xs text-slate-500">Accelerated moisture triggers setup buffers limits statically flawlessly framing setups trigger.</p>
        </div>
    </div>
    <!-- S1 -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow">
        <div class="absolute -top-3 -left-3 px-3 py-1 rounded-xl bg-[#8DC63F] text-white font-black text-lg">S1</div>
        <div class="mt-3">
            <h3 class="text-xl font-bold mb-2">Flexible Adhesive</h3>
            <p class="text-xs text-slate-500 mb-2">For low water absorption, large formats (600x600mm) and critical dry wall setups.</p>
            <p class="text-[10px] text-primary font-semibold">Adhesion strength is at least 1 Mpa</p>
        </div>
    </div>
    <!-- S2 -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow">
        <div class="absolute -top-3 -left-3 px-3 py-1 rounded-xl bg-[#4D5A5E] text-white font-black text-lg">S2</div>
        <div class="mt-3">
            <h3 class="text-xl font-bold mb-2">Highly Flexible Adhesive</h3>
            <p class="text-xs text-slate-500 mb-2">Optimal yields supporting extreme format dimensions overlay layouts critical buffers.</p>
        </div>
    </div>
    <!-- T -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow">
        <div class="absolute -top-3 -left-3 px-3 py-1 rounded-xl bg-[#607D8B] text-white font-black text-lg">T</div>
        <div class="mt-3">
            <h3 class="text-xl font-bold mb-2">Anti Sagging Standard</h3>
            <p class="text-xs text-slate-500">Reduce Slip Property limits mapped flawlessly for demanding vertical setups layout configurations.</p>
        </div>
    </div>
</div>
        `;
        grid.replaceWith(cardsGrid);
    }
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Norms Standards populated into Why Choose section.");
