import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

class NoopIntersectionObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

describe('HomeComponent', () => {
  beforeEach(async () => {
    globalThis.IntersectionObserver ??= NoopIntersectionObserver as unknown as typeof IntersectionObserver;
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function projectCard(el: HTMLElement, title: string): HTMLElement {
    const card = Array.from(el.querySelectorAll<HTMLElement>('.project-card')).find(
      c => c.querySelector('.card-title')?.textContent?.trim() === title,
    );
    expect(card, `no card for ${title}`).toBeTruthy();
    return card!;
  }

  it('shows Ranked One as a retired card that is not a link', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    await fixture.whenStable();
    const card = projectCard(fixture.nativeElement, 'Ranked One');

    expect(card.tagName).toBe('ARTICLE');
    expect(card.closest('a')).toBeNull();
    expect(card.querySelector('a, button')).toBeNull();
    expect(card.querySelector('.card-status')?.textContent?.trim()).toBe('RETIRED');
    expect(card.querySelector('.card-cta')).toBeNull();
  });

  it('still links live projects to their pages', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    await fixture.whenStable();
    const card = projectCard(fixture.nativeElement, 'Landfall');

    expect(card.tagName).toBe('A');
    expect(card.getAttribute('href')).toBe('/projects/landfall');
  });
});
