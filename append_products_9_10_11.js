const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const grid = $('#products .grid').first();

if (grid.length > 0) {
    const c9 = `
    <!-- 9. Tile Grout / Admix Flyer -->
    <div class="aspect-[3/4] rounded-2xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden bg-white flex flex-col">
        <div class="relative h-full w-full cursor-zoom-in group" onclick="openLightbox('assets/product9.png')">
            <img src="assets/product9.png" class="h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500 rounded-2xl">
            <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 bg-primary/90 text-white rounded-full p-4 shadow-xl shadow-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-3xl font-bold">zoom_in</span>
                </div>
            </div>
        </div>
    </div>`;

    const c10 = `
    <!-- 10. Tile Cleaner Flyer -->
    <div class="aspect-[3/4] rounded-2xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden bg-white flex flex-col">
        <div class="relative h-full w-full cursor-zoom-in group" onclick="openLightbox('assets/product10.png')">
            <img src="assets/product10.png" class="h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500 rounded-2xl">
            <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 bg-primary/90 text-white rounded-full p-4 shadow-xl shadow-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-3xl font-bold">zoom_in</span>
                </div>
            </div>
        </div>
    </div>`;

    const c11 = `
    <!-- 11. Marble & Stone Cleaner Flyer -->
    <div class="aspect-[3/4] rounded-2xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden bg-white flex flex-col">
        <div class="relative h-full w-full cursor-zoom-in group" onclick="openLightbox('assets/product11.png')">
            <img src="assets/product11.png" class="h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500 rounded-2xl">
            <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 bg-primary/90 text-white rounded-full p-4 shadow-xl shadow-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-3xl font-bold">zoom_in</span>
                </div>
            </div>
        </div>
    </div>`;

    grid.append(c9).append(c10).append(c11);
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Appended remaining 3 product flyers.");
