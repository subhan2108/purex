const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html);

const newCards = `
                <!-- P-60+ (Grey) -->
                <div class="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">TYPE 1</span>
                            <span class="text-primary font-black text-xl">P-60+</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Ceramic Adhesive (Grey)</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2">Gel Tech & Fiber reinforced. For floors and walls up to 10mm.</p>
                        <ul class="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">grid_view</span> Exceeds IS 15477:2019</li>
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">home</span> Use: Internal Floor/Wall</li>
                        </ul>
                    </div>
                    <button class="mt-auto w-full py-3 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white font-bold transition-colors">Details</button>
                </div>
                <!-- P-70+ (Grey/White) -->
                <div class="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">TYPE 1 / C1T</span>
                            <span class="text-primary font-black text-xl">P-70+</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Extreme Density Adhesive</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2">Vitrified & Ceramic. No vertical slip. Sizes up to 2x2.</p>
                        <ul class="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">verified</span> Grey & White Available</li>
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">description</span> EN 12004 Compliant</li>
                        </ul>
                    </div>
                    <button class="mt-auto w-full py-3 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white font-bold transition-colors">Details</button>
                </div>
                <!-- P-80+ (Grey/White) -->
                <div class="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">TYPE 2 / C2TE</span>
                            <span class="text-primary font-black text-xl">P-80+</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">High Water Resistant</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2">Self-curing. For porcelain & cladding up to 15ft height.</p>
                        <ul class="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">water_drop</span> High Water Resistance</li>
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">fullscreen</span> For Tiles up to 32" x 64"</li>
                        </ul>
                    </div>
                    <button class="mt-auto w-full py-3 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white font-bold transition-colors">Details</button>
                </div>
                <!-- Rock Fix P-90+ -->
                <div class="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">TYPE 2/3</span>
                            <span class="text-primary font-black text-xl">P-90+</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Rock Fix (Grey)</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2">Deformable multipurpose for natural stones & glass tiles up to 35kg.</p>
                        <ul class="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">foundation</span> Natural Stones & Marble</li>
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">height</span> Int/Ext up to 15'</li>
                        </ul>
                    </div>
                    <button class="mt-auto w-full py-3 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white font-bold transition-colors">Details</button>
                </div>
                <!-- No Limit P-90+ (White) -->
                <div class="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group border-2 border-primary/30 shadow-lg">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold px-2 py-1 rounded bg-primary text-white">ELITE</span>
                            <span class="text-primary font-black text-xl">P-90+</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">No Limit (White)</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2">Polymer-fiber modified for premium stones & mosaics.</p>
                        <ul class="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">diamond</span> Premium Stones</li>
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">description</span> EN 12004: C2TE S1</li>
                        </ul>
                    </div>
                    <button class="mt-auto w-full py-3 bg-primary text-white font-bold">Best Seller</button>
                </div>
                <!-- T-11 Extreme Strength -->
                <div class="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">TYPE 3 / S1</span>
                            <span class="text-primary font-black text-xl">T-11</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Mega Slab Specialist</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2">High-deformable adhesive for mega slabs & large format tiles.</p>
                        <ul class="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">fullscreen</span> Large Format Tiles</li>
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">tune</span> high deformable</li>
                        </ul>
                    </div>
                    <button class="mt-auto w-full py-3 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white font-bold transition-colors">Details</button>
                </div>
                <!-- Epoxy Grout -->
                <div class="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">EPOXY</span>
                            <span class="text-primary font-black text-xl">E-Grout</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Purex Epoxy Grout</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2">Chemical & stain-resistant joint filler for industrial use.</p>
                        <ul class="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">palette</span> 35+ Colors available</li>
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">science</span> Lab/Industrial Grade</li>
                        </ul>
                    </div>
                    <button class="mt-auto w-full py-3 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white font-bold transition-colors">Details</button>
                </div>
                <!-- T-14 Stain Remover -->
                <div class="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-xl transition-shadow">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">CLEANER</span>
                            <span class="text-primary font-black text-xl">T-14</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Stain Remover</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2">Removes cement residues, scale & salt deposits safetly.</p>
                        <ul class="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">cleaning_services</span> Liquid Cleaner</li>
                            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">warning</span> Highly Effective</li>
                        </ul>
                    </div>
                    <button class="mt-auto w-full py-3 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white font-bold transition-colors">Details</button>
                </div>
`;

$('#products .grid').html(newCards);

fs.writeFileSync('purex.html', $.html());
console.log("Success! Products updated.");
