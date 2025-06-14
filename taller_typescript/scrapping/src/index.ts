// src/index.ts
import puppeteer from 'puppeteer';

//const PROFILE_PATH = '/Users/omaryahir/Library/Application Support/Google/Chrome'; // or Windows path

async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    //userDataDir: PROFILE_PATH
  });

  const page = await browser.newPage();
  await page.goto('https://github.com/settings/profile');

  console.log('🕚 Please log in manually...');

  // Wait until the current URL is the target one
  await page.waitForFunction(
    () => window.location.href === 'https://github.com/settings/profile',
    { timeout: 0 } // Wait indefinitely
  );

  console.log('✅ logged, getting the info');

  const name = await page.evaluate(() =>
    document.querySelector('#settings-header a')?.textContent
  );

  console.log('here is the result:');
  console.log(name);

  // Example test: take a screenshot
  // await page.screenshot({ path: 'google.png' });

  await browser.close(); // Uncomment if you want to close after
}

main().catch(console.error);
