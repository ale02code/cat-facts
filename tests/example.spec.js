// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173';
const IMAGE_PREFIX_URL = 'https://cdn2.thecatapi.com/images/';

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSource = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSource?.startsWith(IMAGE_PREFIX_URL)).toBeTruthy();
});
