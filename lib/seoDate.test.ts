import { describe, it, expect } from 'vitest';
import {
  SEO_YEAR,
  SEO_MONTH,
  SEO_DATE_ISO,
  SEO_YEAR_MONTH_JA,
  SEO_YEAR_MONTH_EN,
  SEO_MONTH_EN,
  SEO_TITLE_BADGE_JA,
  SEO_TITLE_BADGE_EN,
  SEO_TITLE_BADGE_YEAR_JA,
  SEO_TITLE_BADGE_YEAR_EN,
  SEO_TITLE_BADGE_YEAR_SHORT_JA,
} from './seoDate';

describe('seoDate', () => {
  it('SEO_DATE_ISO is valid ISO date format', () => {
    expect(SEO_DATE_ISO).toMatch(/^\d{4}-\d{2}-01$/);
    const parsed = new Date(SEO_DATE_ISO);
    expect(isNaN(parsed.getTime())).toBe(false);
  });

  it('SEO_DATE_ISO uses zero-padded month', () => {
    const month = Number(SEO_MONTH);
    const padded = String(month).padStart(2, '0');
    expect(SEO_DATE_ISO).toBe(`${SEO_YEAR}-${padded}-01`);
  });

  it('SEO_YEAR_MONTH_JA contains year and month in Japanese format', () => {
    expect(SEO_YEAR_MONTH_JA).toContain('年');
    expect(SEO_YEAR_MONTH_JA).toContain('月');
    expect(SEO_YEAR_MONTH_JA).toContain(SEO_YEAR);
  });

  it('SEO_YEAR_MONTH_EN is non-empty English month string', () => {
    expect(SEO_MONTH_EN.length).toBeGreaterThan(0);
    expect(SEO_YEAR_MONTH_EN).toContain(SEO_YEAR);
    expect(SEO_YEAR_MONTH_EN).toContain(SEO_MONTH_EN);
  });

  it('SEO_MONTH_EN is a valid English month name', () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    expect(months).toContain(SEO_MONTH_EN);
  });

  it('title badges contain year and correct brackets', () => {
    expect(SEO_TITLE_BADGE_JA).toContain(SEO_YEAR);
    expect(SEO_TITLE_BADGE_JA).toMatch(/^【.+】$/);
    expect(SEO_TITLE_BADGE_EN).toContain(SEO_YEAR);
    expect(SEO_TITLE_BADGE_EN).toMatch(/^\[.+\]$/);
    expect(SEO_TITLE_BADGE_YEAR_JA).toContain(SEO_YEAR);
    expect(SEO_TITLE_BADGE_YEAR_EN).toContain(SEO_YEAR);
    expect(SEO_TITLE_BADGE_YEAR_SHORT_JA).toContain(SEO_YEAR);
  });

  it('SEO_MONTH is between 1 and 12', () => {
    const m = Number(SEO_MONTH);
    expect(m).toBeGreaterThanOrEqual(1);
    expect(m).toBeLessThanOrEqual(12);
  });
});
