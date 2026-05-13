import { describe, it, expect } from 'vitest';
import { enToJa, hasEquivalentPage, getLangSwitchUrl } from './urlMap';

describe('enToJa map', () => {
  it('has an entry for home page', () => {
    expect(enToJa['/en/']).toBe('/ja/');
  });

  it('all EN keys start with /en/', () => {
    for (const key of Object.keys(enToJa)) {
      expect(key).toMatch(/^\/en\//);
    }
  });

  it('all JA values start with /ja/', () => {
    for (const val of Object.values(enToJa)) {
      expect(val).toMatch(/^\/ja\//);
    }
  });

  it('has no duplicate EN keys', () => {
    const keys = Object.keys(enToJa);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe('hasEquivalentPage', () => {
  it('returns true for known EN paths', () => {
    expect(hasEquivalentPage('/en/cenomar/')).toBe(true);
    expect(hasEquivalentPage('/en/')).toBe(true);
  });

  it('returns true for known JA paths', () => {
    expect(hasEquivalentPage('/ja/cenomar/')).toBe(true);
    expect(hasEquivalentPage('/ja/')).toBe(true);
  });

  it('returns false for unknown paths', () => {
    expect(hasEquivalentPage('/en/nonexistent-page/')).toBe(false);
  });
});

describe('getLangSwitchUrl', () => {
  it('EN home → JA home', () => {
    expect(getLangSwitchUrl('/en/')).toBe('/ja/');
  });

  it('JA home → EN home', () => {
    expect(getLangSwitchUrl('/ja/')).toBe('/en/');
  });

  it('known EN page → JA equivalent', () => {
    expect(getLangSwitchUrl('/en/cenomar')).toBe('/ja/cenomar');
  });

  it('known JA page → EN equivalent', () => {
    expect(getLangSwitchUrl('/ja/cenomar')).toBe('/en/cenomar');
  });

  it('unknown EN path falls back to JA home', () => {
    expect(getLangSwitchUrl('/en/unknown-page/')).toBe('/ja/');
  });

  it('unknown JA path falls back to EN home', () => {
    expect(getLangSwitchUrl('/ja/unknown-page/')).toBe('/en/');
  });
});
