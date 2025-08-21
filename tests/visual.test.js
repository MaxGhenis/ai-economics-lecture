import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';

describe('Visual Layout Tests', () => {
  describe('Slide Content Validation', () => {
    it('should not have overly long slides', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      const slideArray = slides.split('---\n');
      
      slideArray.forEach((slide, index) => {
        const lines = slide.split('\n');
        const contentLines = lines.filter(line => line.trim()).length;
        
        // Slides should generally be under 30 lines for good display
        expect(contentLines).toBeLessThanOrEqual(30, 
          `Slide ${index + 1} has ${contentLines} lines - may be too long`);
      });
    });

    it('should have consistent formatting', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      
      // Check for common formatting issues
      expect(slides).not.toContain('undefined');
      expect(slides).not.toContain('[object');
      expect(slides).not.toContain('null');
    });

    it('should have proper image paths', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      
      // All image paths should be relative
      const imgMatches = slides.match(/<img.*?src="([^"]+)"/g) || [];
      imgMatches.forEach(img => {
        expect(img).not.toContain('/Users/');
        expect(img).not.toContain('\\');
      });
    });

    it('should have tweet IDs as strings not placeholders', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      
      // Check tweet IDs are actual numbers
      if (slides.includes('Tweet id=')) {
        const tweetMatches = slides.match(/Tweet id="(\d+)"/g) || [];
        expect(tweetMatches.length).toBeGreaterThan(0);
        tweetMatches.forEach(tweet => {
          const id = tweet.match(/\d+/)[0];
          expect(id.length).toBeGreaterThan(10); // Tweet IDs are long numbers
        });
      }
    });
  });

  describe('Layout Structure Tests', () => {
    it('should use proper slide layouts', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      const slideArray = slides.split('---');
      
      // First slide should have layout: cover
      expect(slideArray[0]).toContain('layout: cover');
      
      // Last slide should have centered layout
      const lastSlide = slideArray[slideArray.length - 1];
      expect(lastSlide).toMatch(/layout:\s*center|class:\s*text-center/);
    });

    it('should have properly sized headings', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      const slideArray = slides.split('---\n');
      
      slideArray.forEach((slide, index) => {
        // Count heading levels
        const h1Count = (slide.match(/^# /gm) || []).length;
        const h2Count = (slide.match(/^## /gm) || []).length;
        
        // Should not have more than 1 h1 per slide
        expect(h1Count).toBeLessThanOrEqual(1, 
          `Slide ${index + 1} has ${h1Count} H1 headings`);
        
        // Should not have too many h2s
        expect(h2Count).toBeLessThanOrEqual(4, 
          `Slide ${index + 1} has ${h2Count} H2 headings - may be too busy`);
      });
    });
  });
});