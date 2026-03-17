const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Append Modal Lightbox and JS triggers before </body> footer
if ($('#lightbox').length === 0) {
    $('body').append(`
        <!-- Lightbox Modal for Flyer Zoom -->
        <div id="lightbox" class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md hidden justify-center items-center p-4 cursor-zoom-out" onclick="this.classList.add('hidden')">
            <button class="absolute top-6 right-6 text-white text-5xl font-light hover:scale-110 transition-transform" onclick="document.getElementById('lightbox').classList.add('hidden'); event.stopPropagation();">&times;</button>
            <img id="lightbox-img" src="" class="max-h-[92vh] max-w-[95vw] object-contain rounded-2xl shadow-2xl transition-all duration-300 scale-95 cursor-default" onclick="event.stopPropagation();">
        </div>
        <script>
            function openLightbox(src) {
                const modal = document.getElementById('lightbox');
                const img = document.getElementById('lightbox-img');
                img.src = src;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                setTimeout(() => img.classList.replace('scale-95', 'scale-100'), 50);
            }
            document.getElementById('lightbox').addEventListener('click', function() {
                document.getElementById('lightbox-img').classList.replace('scale-100', 'scale-95');
                setTimeout(() => this.classList.replace('flex', 'hidden'), 200);
            });
        </script>
    `);
}

// 2. Loop through all cards for image absolute layout trims
$('#products .grid > div').each((i, el) => {
    const card = $(el);
    const imgNode = card.find('img').first();
    const imgSrc = imgNode.attr('src');
    
    if (imgSrc) {
        card.html(`
            <div class="relative h-full w-full cursor-zoom-in group" onclick="openLightbox('${imgSrc}')">
                <img src="${imgSrc}" alt="Catalogue Flyer" class="h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500 rounded-2xl">
                <div class="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <div class="opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 bg-primary/90 text-white rounded-full p-4 shadow-xl shadow-primary/30 flex items-center justify-center">
                        <span class="material-symbols-outlined text-3xl font-bold">zoom_in</span>
                    </div>
                </div>
            </div>
        `);
        // Remove old column classes, apply full aspect tile framing offsets
        card.removeClass('flex-col flex bg-white dark:bg-slate-900 overflow-hidden border border-slate-100 dark:border-slate-800 p-6')
            .addClass('aspect-[3/4] rounded-2xl shadow-sm hover:shadow-2xl transition-all relative overflow-hidden bg-white');
    }
});

fs.writeFileSync('purex.html', $.html());
console.log("Success! Details removed, Lightbox functionality added.");
