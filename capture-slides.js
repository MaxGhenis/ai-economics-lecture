const { chromium } = require('playwright-chromium');
const fs = require('fs');
const path = require('path');

async function captureSlides() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set a good viewport size for slides
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Navigate to the slides
  await page.goto('http://localhost:3030', { waitUntil: 'networkidle' });
  
  // Wait for slides to load
  await page.waitForTimeout(2000);
  
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'slide-screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }
  
  // Get total number of slides
  const totalSlides = await page.evaluate(() => {
    return document.querySelectorAll('.slidev-page').length || 20;
  });
  
  console.log(`Found approximately ${totalSlides} slides`);
  
  // Capture each slide
  for (let i = 1; i <= 20; i++) {
    try {
      // Navigate to specific slide
      await page.goto(`http://localhost:3030/${i}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      
      // Take screenshot
      const screenshotPath = path.join(screenshotsDir, `slide-${String(i).padStart(2, '0')}.png`);
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: false
      });
      
      console.log(`Captured slide ${i}`);
    } catch (error) {
      console.log(`Could not capture slide ${i}: ${error.message}`);
      break;
    }
  }
  
  await browser.close();
  console.log('Screenshots saved in slide-screenshots directory');
}

captureSlides().catch(console.error);