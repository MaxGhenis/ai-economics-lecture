const fs = require('fs');
const path = require('path');

// Read slides
const slides = fs.readFileSync('slides.md', 'utf-8');
const slideArray = slides.split('---\n').filter(s => s.trim());

// Generate HTML preview
let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI for Economics Research - Full Preview</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .slide {
            background: white;
            border: 2px solid #2C6FB7;
            border-radius: 8px;
            padding: 40px;
            margin: 30px 0;
            min-height: 600px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            position: relative;
        }
        .slide-number {
            position: absolute;
            top: 10px;
            right: 10px;
            color: #7FADD3;
            font-weight: bold;
            font-size: 14px;
        }
        h1 { color: #2C6FB7; font-size: 2.5em; margin-bottom: 20px; }
        h2 { color: #1E4A7D; font-size: 1.8em; margin-top: 20px; }
        h3 { color: #2C6FB7; font-size: 1.4em; }
        code {
            background: #f0f0f0;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Fira Code', monospace;
        }
        pre {
            background: #f8f8f8;
            border-left: 4px solid #2C6FB7;
            padding: 15px;
            overflow-x: auto;
            margin: 20px 0;
        }
        .tweet {
            background: #e8f4ff;
            border: 1px solid #2C6FB7;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            font-style: italic;
        }
        ul, ol {
            margin-left: 20px;
        }
        li {
            margin: 8px 0;
        }
        .metadata {
            background: #f0f0f0;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-size: 0.9em;
        }
        .warning {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 10px;
            margin: 10px 0;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center;">🎯 AI for Economics Research: Full Slide Preview</h1>
    <div class="metadata">
        <strong>Total Slides:</strong> ${slideArray.length} | 
        <strong>Repository:</strong> <a href="https://github.com/MaxGhenis/ai-economics-lecture">GitHub</a> |
        <strong>Status:</strong> Ready for presentation
    </div>
`;

slideArray.forEach((slide, index) => {
    if (!slide.trim()) return;
    
    // Process slide content
    let content = slide;
    
    // Remove frontmatter
    content = content.replace(/^---[\s\S]*?---\n/, '');
    
    // Convert Tweet components to placeholders
    content = content.replace(/<Tweet id="(\d+)" \/>/g, 
        '<div class="tweet">📱 Tweet: $1</div>');
    
    // Handle images
    content = content.replace(/<img src="([^"]+)"[^>]*>/g, 
        '<div style="text-align: center;"><em>🖼️ Image: $1</em></div>');
    
    // Basic markdown to HTML conversion
    content = content
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        .replace(/\`\`\`(\w+)?\n([\s\S]*?)\`\`\`/g, '<pre><code>$2</code></pre>')
        .replace(/\`([^\`]+)\`/g, '<code>$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^/, '<p>')
        .replace(/$/, '</p>');
    
    // Check for issues
    const lines = slide.split('\n').filter(l => l.trim()).length;
    const hasLongContent = lines > 25;
    
    html += `
    <div class="slide">
        <div class="slide-number">Slide ${index + 1}</div>
        ${hasLongContent ? '<div class="warning">⚠️ This slide may be too long (' + lines + ' lines)</div>' : ''}
        ${content}
    </div>`;
});

html += `
    <div style="text-align: center; padding: 40px; color: #666;">
        <p>End of presentation</p>
        <p><strong>Built with Claude Code + TDD</strong></p>
    </div>
</body>
</html>`;

// Write preview file
fs.writeFileSync('slide-preview-full.html', html);
console.log('✅ Preview generated: slide-preview-full.html');
console.log('📊 Total slides:', slideArray.length);

// Also create a summary
const summary = {
    totalSlides: slideArray.length,
    slidesWithCode: slideArray.filter(s => s.includes('```')).length,
    slidesWithTweets: slideArray.filter(s => s.includes('Tweet id=')).length,
    slidesWithImages: slideArray.filter(s => s.includes('<img') || s.includes('!['))

.length,
    longSlides: slideArray.filter(s => s.split('\n').filter(l => l.trim()).length > 25).length
};

console.log('\n📈 Summary:');
console.log('  - Slides with code:', summary.slidesWithCode);
console.log('  - Slides with tweets:', summary.slidesWithTweets);
console.log('  - Slides with images:', summary.slidesWithImages);
console.log('  - Long slides (>25 lines):', summary.longSlides);