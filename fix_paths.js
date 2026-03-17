const fs = require('fs');

const htmlPath = 'purex.html';
let html = fs.readFileSync(htmlPath, 'utf8');

html = html.replace(/\.\.\/products\//g, 'products/');

fs.writeFileSync(htmlPath, html);
console.log("Success! Rendered flawlessly.");
