import { TestBed } from '@angular/core/testing';
import { PushplayComponent } from './pushplay.component';

class NoopIntersectionObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

describe('PushplayComponent', () => {
  let el: HTMLElement;

  beforeEach(async () => {
    globalThis.IntersectionObserver ??= NoopIntersectionObserver as unknown as typeof IntersectionObserver;
    // jsdom has no matchMedia; the ship demo asks for prefers-reduced-motion.
    window.matchMedia ??= ((query: string) =>
      ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} }) as unknown as MediaQueryList);
    await TestBed.configureTestingModule({ imports: [PushplayComponent] }).compileComponents();
    const fixture = TestBed.createComponent(PushplayComponent);
    await fixture.whenStable();
    el = fixture.nativeElement;
  });

  it('uses the current PushPlay icon in the hero', () => {
    expect(el.querySelector('.project-icon')?.getAttribute('src')).toBe(
      'assets/images/pushplay/pushplay-icon.png',
    );
  });

  it('shows PushPlay on a laptop, a tablet, a Steam Deck and a phone', () => {
    const family = el.querySelector('.device-family');

    expect(family?.querySelector('app-device-frame[kind="laptop"]')).toBeTruthy();
    expect(family?.querySelector('app-device-frame[kind="tablet"]')).toBeTruthy();
    expect(family?.querySelector('app-deck-frame')).toBeTruthy();
    expect(family?.querySelector('app-device-frame[kind="phone"]')).toBeTruthy();
  });

  it('names Steam Deck, desktop and phone, with the phone app marked coming soon', () => {
    const cards = Array.from(el.querySelectorAll('.screen-card h3')).map(h =>
      h.textContent?.replace(/\s+/g, ' ').trim(),
    );

    expect(cards).toEqual(['Steam Deck', 'Windows, Mac & Linux', 'Phone & Tablet Coming soon']);
  });

  it('offers a download card for every platform, the phone app without a download link', () => {
    const cards = Array.from(el.querySelectorAll('.download-card'));
    const phone = cards.find(c => c.querySelector('h3')?.textContent?.includes('Phone'));

    expect(cards.map(c => c.querySelector('h3')?.textContent?.trim())).toEqual([
      'Steam Deck & Linux',
      'Windows',
      'Mac',
      'Phone & Tablet',
    ]);
    expect(phone?.querySelector('a')).toBeNull();
    expect(phone?.textContent).toContain('coming soon');
  });
});
