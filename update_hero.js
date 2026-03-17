const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('purex.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Update Header to Floating
$('header').replaceWith(`
    <!-- Top Navigation -->
    <header class="fixed top-4 left-0 right-0 z-50 px-4">
        <div class="max-w-7xl mx-auto px-6 py-3 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                    <span class="material-symbols-outlined text-xl">grid_on</span>
                </div>
                <div class="flex flex-col -space-y-1">
                    <span class="text-xl font-bold lowercase tracking-tight text-white">purex</span>
                    <span class="text-[8px] uppercase tracking-wider text-slate-300 font-semibold">complete tiling solutions</span>
                </div>
            </div>
            <nav class="hidden md:flex items-center gap-8 text-white">
                <a class="text-sm font-bold opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#about">About</a>
                <a class="text-sm font-bold opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#products">Products</a>
                <a class="text-sm font-bold opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#applications">Applications</a>
                <a class="text-sm font-bold opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#contact">Contact</a>
            </nav>
            <div class="flex items-center gap-4">
                <button class="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20">
                    Get Quote
                </button>
            </div>
        </div>
    </header>
`);

// 2. Update Hero Section
const heroSection = $('section').first();
if (heroSection) {
    heroSection.replaceWith(`
    <!-- Hero Section -->
    <section class="relative min-h-[850px] flex items-center overflow-hidden bg-slate-900">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/30 to-background-dark/70 z-10"></div>
            <div class="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105" style="background-image: url('assets/hero.png');"></div>
        </div>
        <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center text-center">
            <div class="max-w-3xl">
                <span class="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                    Industrial Grade Adhesives
                </span>
                <h1 class="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight">
                    PUREX <br>
                    <span class="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Precision Bonding.</span>
                </h1>
                <p class="text-base md:text-lg text-slate-100 mb-10 leading-relaxed max-w-xl mx-auto opacity-90 font-medium">
                    High Performance Tile Adhesives &amp; Construction Solutions. Engineered for strength, durability, and extreme precision in demanding environments.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a class="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/40 hover:bg-primary/90" href="#products">
                        View Products
                    </a>
                    <a class="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all shadow-2xl" href="#quote">
                        Get Quote
                    </a>
                </div>
            </div>
        </div>
    </section>
    `);
}

fs.writeFileSync('purex.html', $.html());
console.log("Success! Header and Hero updated.");
