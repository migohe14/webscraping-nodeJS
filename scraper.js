const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.poderjudicial.es/search/contenidos.action?action=contentpdf&databasematch=TS&reference=8549400&links=&optimize=20181026&publicinterface=true');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();