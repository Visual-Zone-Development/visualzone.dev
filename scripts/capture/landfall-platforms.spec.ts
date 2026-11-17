/**
 * Captures Landfall's platform screenshots for the Landfall project page
 * (public/assets/images/landfall/{steam-deck,shared-screen,shared-screen-lobby,phone-hand,
 * phone-board,tablet-board}). Renders landfall-ui against its own mocked game
 * (tests/e2e/helpers/mock-game.ts), so no API or account is needed. See README.md,
 * "Product screenshots", for how to run it.
 */
import { expect, test } from '@playwright/test';
import { MOCK_GAME_CODE, routeMockGame } from './helpers/mock-game';

const OUT = process.env.CAP_OUT!;
async function asLandfall(page: any) {
  await page.route(/^https:\/\/landfall\.gg\//, async (route: any) => {
    const u = new URL(route.request().url());
    const res = await route.fetch({ url: 'http://127.0.0.1:4200' + u.pathname + u.search });
    await route.fulfill({ response: res });
  });
}
const settle = (p: any) => p.waitForTimeout(1500);

test.describe('deck', () => {
  test.use({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1.25, colorScheme: 'dark' });
  test('handheld', async ({ page }) => {
    await routeMockGame(page, { insideLauncher: true });
    await page.goto(`/game/${MOCK_GAME_CODE}/play`);
    await expect(page.locator('app-handheld-panel')).toBeVisible();
    await settle(page);
    await page.screenshot({ path: `${OUT}/handheld.png` });
  });
});

test.describe('tv', () => {
  test.use({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1.25, colorScheme: 'dark' });
  test('tv game', async ({ page }) => {
    await asLandfall(page);
    await routeMockGame(page, { asTable: true, tvMode: true });
    await page.goto(`https://landfall.gg/tv/${MOCK_GAME_CODE}`);
    await expect(page.locator('app-hex-board').first()).toBeVisible();
    await settle(page);
    await page.screenshot({ path: `${OUT}/tv.png` });
  });
  test('tv lobby', async ({ page }) => {
    await asLandfall(page);
    await routeMockGame(page, { asTable: true, lobby: true, tvMode: true });
    await page.goto(`https://landfall.gg/tv/${MOCK_GAME_CODE}`);
    await settle(page);
    await page.screenshot({ path: `${OUT}/tv-lobby.png` });
  });
});

test.describe('phone', () => {
  test.use({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true, colorScheme: 'dark' });
  test('hand view', async ({ page }) => {
    await routeMockGame(page, { tvMode: true });
    await page.goto(`/game/${MOCK_GAME_CODE}/play`);
    await expect(page.locator('app-phone-hand')).toBeVisible();
    await settle(page);
    await page.screenshot({ path: `${OUT}/hand.png` });
  });
});

test.describe('phone board', () => {
  test.use({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true, colorScheme: 'dark' });
  test('phone board', async ({ page }) => {
    await routeMockGame(page);
    await page.goto(`/game/${MOCK_GAME_CODE}/play`);
    await expect(page.locator('app-hex-board').first()).toBeVisible();
    await settle(page);
    await page.screenshot({ path: `${OUT}/phone-board.png` });
  });
});

test.describe('tablet', () => {
  test.use({ viewport: { width: 1024, height: 768 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true, colorScheme: 'dark' });
  test('tablet board', async ({ page }) => {
    await routeMockGame(page);
    await page.goto(`/game/${MOCK_GAME_CODE}/play`);
    await expect(page.locator('app-hex-board').first()).toBeVisible();
    await settle(page);
    await page.screenshot({ path: `${OUT}/tablet-board.png` });
  });
});

test.describe('tv 16:10', () => {
  test.use({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1.25, colorScheme: 'dark' });
  test('tv wide', async ({ page }) => {
    await asLandfall(page);
    await routeMockGame(page, { asTable: true, tvMode: true });
    await page.goto(`https://landfall.gg/tv/${MOCK_GAME_CODE}`);
    await expect(page.locator('app-hex-board').first()).toBeVisible();
    await settle(page);
    await page.screenshot({ path: `${OUT}/tv-1610.png` });
  });
});
