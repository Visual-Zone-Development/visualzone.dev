import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';

@Component({ selector: 'stub-home-page', template: '<p data-testid="page">Home page</p>' })
class StubHomePage {}

@Component({ selector: 'stub-other-page', template: '<p data-testid="page">Other page</p>' })
class StubOtherPage {}

async function renderAppAt(url: string): Promise<HTMLElement> {
  TestBed.configureTestingModule({
    imports: [App],
    providers: [
      provideRouter([
        { path: '', component: StubHomePage },
        { path: 'other', component: StubOtherPage },
      ]),
    ],
  });

  const fixture = TestBed.createComponent(App);
  await TestBed.inject(Router).navigateByUrl(url);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

function desktopNavLabels(root: HTMLElement): string[] {
  return Array.from(
    root.querySelectorAll('header .desktop-nav .nav-link, header .desktop-nav .nav-cta'),
  ).map((el) => el.textContent?.trim() ?? '');
}

describe('App shell', () => {
  it('shows the site logo in the header, linking back to the home page', async () => {
    const root = await renderAppAt('/');

    const logo = root.querySelector<HTMLAnchorElement>('header a.logo');
    expect(logo).not.toBeNull();
    expect(logo!.getAttribute('href')).toBe('/');
    expect(logo!.querySelector('img')?.getAttribute('alt')).toBe('Visual Zone Development logo');
    expect(logo!.textContent).toContain('VisualZone');
  });

  it('renders the current route inside the main content area', async () => {
    const root = await renderAppAt('/other');

    const page = root.querySelector('main [data-testid="page"]');
    expect(page?.textContent).toBe('Other page');
  });

  it('offers section links and GitHub in the nav on the home page', async () => {
    const root = await renderAppAt('/');

    expect(desktopNavLabels(root)).toEqual(['Projects', "What's New", 'Contact', 'GitHub']);
    const github = root.querySelector<HTMLAnchorElement>('header .desktop-nav a.nav-cta');
    expect(github?.href).toBe('https://github.com/Visual-Zone-Development');
  });

  it('offers a link back to home in the nav on any other page', async () => {
    const root = await renderAppAt('/other');

    const labels = desktopNavLabels(root);
    expect(labels).toHaveLength(1);
    expect(labels[0]).toContain('Back to Home');
    const back = root.querySelector<HTMLAnchorElement>('header .desktop-nav a.back-link');
    expect(back?.getAttribute('href')).toBe('/');
  });

  it('shows the company name in the footer', async () => {
    const root = await renderAppAt('/');

    expect(root.querySelector('footer')?.textContent).toContain('VisualZone Development');
  });
});
