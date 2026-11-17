import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LandfallComponent } from './landfall.component';

class NoopIntersectionObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

describe('LandfallComponent', () => {
  let el: HTMLElement;

  beforeEach(async () => {
    globalThis.IntersectionObserver ??= NoopIntersectionObserver as unknown as typeof IntersectionObserver;
    await TestBed.configureTestingModule({
      imports: [LandfallComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(LandfallComponent);
    await fixture.whenStable();
    el = fixture.nativeElement;
  });

  it('links to the Android app on Google Play and says iOS is coming soon', () => {
    const playLinks = Array.from(el.querySelectorAll<HTMLAnchorElement>('a')).filter(a =>
      a.textContent?.includes('Get it on Google Play'),
    );

    expect(playLinks.length).toBeGreaterThan(0);
    for (const link of playLinks) {
      expect(link.href).toBe('https://play.google.com/store/apps/details?id=gg.landfall.app');
      expect(link.target).toBe('_blank');
    }
    expect(el.querySelector('#platforms')?.textContent).toContain('App Store · coming soon');
  });

  it('shows the shared screen, the phone and tablet apps and the Steam Deck', () => {
    const headings = Array.from(el.querySelectorAll('.platform-eyebrow')).map(p =>
      p.textContent?.trim(),
    );

    expect(headings).toEqual(['TV & Shared Screen', 'iOS & Android Apps', 'Steam Deck & Handhelds']);
    expect(el.querySelector('app-device-frame[kind="tv"] img')?.getAttribute('src')).toBe(
      'assets/images/landfall/shared-screen.webp',
    );
    expect(el.querySelector('app-deck-frame img')?.getAttribute('src')).toBe(
      'assets/images/landfall/steam-deck.webp',
    );
  });

  it('lists every screen Landfall plays on', () => {
    const names = Array.from(el.querySelectorAll('.platform-chip__name')).map(n =>
      n.textContent?.trim(),
    );

    expect(names).toEqual([
      'Web browser',
      'Phones & tablets',
      'iOS & Android apps',
      'Steam Deck & handhelds',
      'TV & shared screen',
      'Controllers',
    ]);
  });
});
