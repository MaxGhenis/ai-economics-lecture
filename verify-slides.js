const fs = require('fs');

// Read the slides file
const slides = fs.readFileSync('slides.md', 'utf-8');

// Split into individual slides
const slideArray = slides.split('---\n');

console.log(`Total slides: ${slideArray.length}\n`);

slideArray.forEach((slide, index) => {
  // Extract title (first # heading)
  const titleMatch = slide.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1] : 'No title';
  
  // Count lines
  const lines = slide.split('\n').filter(line => line.trim()).length;
  
  // Check for common issues
  const issues = [];
  if (lines > 25) issues.push('⚠️  May be too long');
  if (slide.includes('undefined')) issues.push('❌ Contains undefined');
  if (slide.includes('[object')) issues.push('❌ Contains [object');
  
  console.log(`Slide ${index + 1}: ${title}`);
  console.log(`  Lines: ${lines}`);
  if (issues.length > 0) {
    console.log(`  Issues: ${issues.join(', ')}`);
  }
  
  // Check for required content
  if (index === 0) {
    console.log(`  ✓ Title slide`);
  }
  if (slide.includes('PolicyEngine')) {
    console.log(`  ✓ Contains PolicyEngine`);
  }
  if (slide.includes('```')) {
    console.log(`  ✓ Contains code block`);
  }
  if (slide.includes('ETI')) {
    console.log(`  ✓ Mentions ETI`);
  }
  if (slide.includes('TDD') || slide.includes('Test-Driven')) {
    console.log(`  ✓ Mentions TDD`);
  }
  
  console.log('');
});