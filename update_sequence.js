const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const grid = $('#products .grid').first();

if (grid.length > 0) {
    // 1. Array of all 5 flyer cards in the specified sequence
    const c1 = `
    <!-- 1. P-60+ Grey -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
        <div class="relative h-64 overflow-hidden bg-white flex justify-center items-center border-b border-slate-100 dark:border-slate-800">
            <img src="assets/product1.png" alt="P-60+ Grey flyer" class="h-full w-full object-cover object-right-top hover:scale-105 transition-transform">
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
                <span class="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">TYPE-1 / C1T</span>
                <span class="text-primary font-black text-xl">P-60+</span>
            </div>
            <h3 class="font-bold text-lg mb-2">Grey Adhesive (Basic)</h3>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2">Ceramic Division. Polymer Modified for floor and wall ceramic tiles install setups.</p>
        </div>
        <button class="mt-auto w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white font-bold transition-colors">Details</button>
    </div>`;

    const c2 = `
    <!-- 2. P-70+ Grey -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
        <div class="relative h-64 overflow-hidden bg-white flex justify-center items-center border-b border-slate-100 dark:border-slate-800">
            <img src="assets/product2.png" alt="P-70+ Grey flyer" class="h-full w-full object-cover object-right-top hover:scale-105 transition-transform">
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
                <span class="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">TYPE-1 / C1T</span>
                <span class="text-primary font-black text-xl">P-70+ (Grey)</span>
            </div>
            <h3 class="font-bold text-lg mb-2">Grey Adhesive P-70+</h3>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2">Vitrified Division. No vertical slip. For Ceramic & Vitrified up to 4x2 Size Layouts support.</p>
        </div>
        <button class="mt-auto w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white font-bold transition-colors">Details</button>
    </div>`;

    const c3 = `
    <!-- 3. P-70+ White -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
        <div class="relative h-64 overflow-hidden bg-white flex justify-center items-center border-b border-slate-100 dark:border-slate-800">
            <img src="assets/product2.png" alt="P-70+ White flyer" class="h-full w-full object-cover object-right-top hover:scale-105 transition-transform">
            <div class="absolute inset-0 bg-white/20"></div>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
                <span class="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">TYPE-1 / C1T</span>
                <span class="text-primary font-black text-xl">P-70+ (White)</span>
            </div>
            <h3 class="font-bold text-lg mb-2">White Adhesive P-70+</h3>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2">Vitrified Division. High water resistant and Prolonged workability for floor setups.</p>
        </div>
        <button class="mt-auto w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white font-bold transition-colors">Details</button>
    </div>`;

    const c4 = `
    <!-- 4. P-80+ Grey -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
        <div class="relative h-64 overflow-hidden bg-white flex justify-center items-center border-b border-slate-100 dark:border-slate-800">
            <img src="assets/product3.png" alt="P-80+ Grey flyer" class="h-full w-full object-cover object-right-top hover:scale-105 transition-transform">
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
                <span class="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">TYPE-2 / C2TE</span>
                <span class="text-primary font-black text-xl">P-80+ (Grey)</span>
            </div>
            <h3 class="font-bold text-lg mb-2">Grey Adhesive P-80+</h3>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2">Vitrified Division. Self-curing and flexible. Optimal yields supporting extreme format dimensions overlays.</p>
        </div>
        <button class="mt-auto w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white font-bold transition-colors">Details</button>
    </div>`;

    const c5 = `
    <!-- 5. P-80+ White -->
    <div class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
        <div class="relative h-64 overflow-hidden bg-white flex justify-center items-center border-b border-slate-100 dark:border-slate-800">
            <img src="assets/product3.png" alt="P-80+ White flyer" class="h-full w-full object-cover object-right-top hover:scale-105 transition-transform">
            <div class="absolute inset-0 bg-white/20"></div>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
                <span class="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">TYPE-2 / C2TE</span>
                <span class="text-primary font-black text-xl">P-80+ (White)</span>
            </div>
            <h3 class="font-bold text-lg mb-2">White Adhesive P-80+</h3>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2">Vitrified Division. Extreme bond strength formulation for big format wall structures setup.</p>
        </div>
        <button class="mt-auto w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white font-bold transition-colors">Details</button>
    </div>`;

    // Prepend in reverse card order to avoid indices jumps flawlessly
    grid.prepend(c5).prepend(c4).prepend(c3).prepend(c2).prepend(c1);
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Sequence list injected perfectly.");
