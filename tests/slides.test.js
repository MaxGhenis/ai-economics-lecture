import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('AI Economics Lecture Slides', () => {
  describe('Structure Tests', () => {
    it('should have a slides.md file', () => {
      expect(existsSync('slides.md')).toBe(true);
    });

    it('should contain all required sections', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      
      // Check for main sections
      expect(slides).toContain('Max Ghenis');
      expect(slides).toContain('PolicyEngine');
      expect(slides).toContain('Claude Code');
      expect(slides).toContain('ETI');
      expect(slides).toContain('Test-Driven Development');
      expect(slides).toContain('Turn Everything Into Software');
    });

    it('should have proper slide separators', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      const slideCount = (slides.match(/^---$/gm) || []).length;
      expect(slideCount).toBeGreaterThanOrEqual(20); // At least 20 slides
    });

    it('should include tweet embeds', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      expect(slides).toContain('1894146555399332060'); // First Claude Code tweet
      expect(slides).toContain('1897111601662321090'); // Merge conflict
      expect(slides).toContain('1894512751080321343'); // Project management
    });

    it('should include interactive code blocks', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      expect(slides).toMatch(/```python[\s\S]*?```/);
      expect(slides).toMatch(/```javascript[\s\S]*?```/);
    });

    it('should reference screenshots', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      expect(slides).toContain('github-issue.png');
      expect(slides).toContain('workflow-screenshot.png');
      expect(slides).toContain('claude-code-building.png');
    });
  });

  describe('Content Tests', () => {
    it('should explain TDD methodology', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      expect(slides.toLowerCase()).toContain('test-driven');
      expect(slides.toLowerCase()).toContain('red-green-refactor');
    });

    it('should include economic research examples', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      expect(slides).toContain('elasticity');
      expect(slides).toContain('survey experiments');
      expect(slides).toContain('r=0.9');
    });

    it('should have live demo placeholders', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      expect(slides).toContain('<!-- LIVE DEMO');
      expect(slides).toContain('Fed minutes');
    });

    it('should include API integration examples', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      expect(slides).toContain('GitHub API');
      expect(slides).toContain('FRED');
    });

    it('should include PolicyEngine ML/AI features', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      expect(slides).toContain('Quantile Regression Forests');
      expect(slides).toContain('Gradient Descent');
      expect(slides).toContain('GPT-4');
      expect(slides).toContain('EITC');
      expect(slides).toContain('SNAP');
    });
  });

  describe('Presentation Flow Tests', () => {
    it('should follow narrative arc', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      const sections = slides.split('---').map(s => s.trim());
      
      // Check order of key moments
      const bioIndex = sections.findIndex(s => s.includes('Max Ghenis'));
      const vegasIndex = sections.findIndex(s => s.includes('Vegas airport'));
      const opusIndex = sections.findIndex(s => s.includes('Opus 4'));
      const futureIndex = sections.findIndex(s => s.includes('Turn Everything'));
      
      expect(bioIndex).toBeLessThan(vegasIndex);
      expect(vegasIndex).toBeLessThan(opusIndex);
      expect(opusIndex).toBeLessThan(futureIndex);
    });

    it('should have balanced content distribution', () => {
      const slides = readFileSync('slides.md', 'utf-8');
      const sections = slides.split('---');
      
      // No slide should be too long
      sections.forEach((section, i) => {
        const lines = section.split('\n').length;
        expect(lines).toBeLessThanOrEqual(30, `Slide ${i} has too many lines`);
      });
    });
  });
});

describe('TDD Examples for Economics Research', () => {
  it('should demonstrate ETI calculation test', () => {
    const testCode = `
    function calculateETI(preTaxIncome, postTaxIncome, taxRate1, taxRate2) {
      const logIncomeChange = Math.log(postTaxIncome) - Math.log(preTaxIncome);
      const logNetOfTaxChange = Math.log(1 - taxRate2) - Math.log(1 - taxRate1);
      // Note: Negative because income decreases when tax increases
      return -logIncomeChange / logNetOfTaxChange;
    }
    `;
    
    // Test the ETI calculation
    const eti = eval(testCode + 'calculateETI(100000, 95000, 0.3, 0.35)');
    expect(eti).toBeCloseTo(-0.69, 1); // Expected ETI value
  });

  it('should validate grant proposal word counts', () => {
    const proposalSection = "This research will explore AI applications in economics.";
    const wordCount = proposalSection.split(/\s+/).length;
    expect(wordCount).toBeLessThanOrEqual(100); // Grant word limit
  });
});