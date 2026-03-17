const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const searchString = 'h-full w-full object-cover object-right-top md:object-contain bg-white group-hover:scale-105 transition-transform duration-500';
const replaceString = 'h-full w-full object-contain p-4 bg-white group-hover:scale-105 transition-transform duration-500';
html = html.split(searchString).join(replaceString);

// Also handle the case where class was slightly modified earlier, maybe just regex
html = html.replace(/object-cover object-right-top md:object-contain/g, 'object-contain p-4');

fs.writeFileSync('index.html', html);
console.log('Fixed alignments!');
