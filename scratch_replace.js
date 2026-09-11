const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf-8');
    
    // Change .hero-title font size
    content = content.replace(/font-size: clamp\(2rem, 6vw, 5\.5rem\);/g, 'font-size: clamp(1.5rem, 5vw, 4rem);');
    content = content.replace(/font-size: clamp\(2rem, 10vw, 2\.8rem\);/g, 'font-size: clamp(1.5rem, 8vw, 2.2rem);');

    // Change .hero2-title font size
    content = content.replace(/font-size: clamp\(2\.5rem, 6vw, 5\.5rem\);/g, 'font-size: clamp(1.5rem, 5vw, 4rem);');

    // Change paragraph text to black
    content = content.replace(/class="text-\[var\(--text-muted\)\] text-sm sm:text-base md:text-lg leading-relaxed max-w-md font-light mb-5"/g, 'class="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-md font-light mb-5"');

    // Also handle home-2.html hero2-desc color if it's considered grey
    content = content.replace(/color: rgba\(255, 255, 255, 0\.8\);/g, 'color: #000;');

    fs.writeFileSync(f, content);
    console.log(`Processed ${f}`);
});
