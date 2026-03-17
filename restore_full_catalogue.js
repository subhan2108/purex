const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const grid = $('#products .grid').first();

if (grid.length > 0) {
    grid.removeClass('lg:grid-cols-5')
        .addClass('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2');
        
    const c6 = `
    <!-- 6. T-11 Mega Slab Flyer -->
    <div class="aspect-[3/4] rounded-2xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden bg-white flex flex-col">
        <div class="relative h-full w-full cursor-zoom-in group" onclick="openLightbox('assets/product6.png')">
            <img src="assets/product6.png" class="h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500 rounded-2xl">
            <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 bg-primary/90 text-white rounded-full p-4 shadow-xl shadow-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-3xl font-bold">zoom_in</span>
                </div>
            </div>
        </div>
    </div>`;

    const c7 = `
    <!-- 7. Epoxy Grout Flyer -->
    <div class="aspect-[3/4] rounded-2xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden bg-white flex flex-col">
        <div class="relative h-full w-full cursor-zoom-in group" onclick="openLightbox('assets/product7.png')">
            <img src="assets/product7.png" class="h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500 rounded-2xl">
            <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 bg-primary/90 text-white rounded-full p-4 shadow-xl shadow-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-3xl font-bold">zoom_in</span>
                </div>
            </div>
        </div>
    </div>`;

    const c8 = `
    <!-- 8. T-14 Stain Remover Flyer -->
    <div class="aspect-[3/4] rounded-2xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden bg-white flex flex-col">
        <div class="relative h-full w-full cursor-zoom-in group" onclick="openLightbox('assets/product8.png')">
            <img src="assets/product8.png" class="h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500 rounded-2xl">
            <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 bg-primary/90 text-white rounded-full p-4 shadow-xl shadow-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-3xl font-bold">zoom_in</span>
                </div>
            </div>
        </div>
    </div>`;

    grid.append(c6).append(c7).append(c8);
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Full 8 flyers catalogue cards reloaded correctly.");
