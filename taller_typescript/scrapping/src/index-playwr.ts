// src/index.ts
import puppeteer from 'puppeteer';

//const PROFILE_PATH = '/Users/omaryahir/Library/Application Support/Google/Chrome/New'; // or Windows path

async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    // userDataDir: PROFILE_PATH
  });

  const page = await browser.newPage();
  await page.goto('https://www.google.com');

  // Example test: take a screenshot
  // await page.screenshot({ path: 'google.png' });

  // await browser.close(); // Uncomment if you want to close after
}

main().catch(console.error);
