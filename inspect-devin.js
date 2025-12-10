const { chromium } = require('playwright');

async function inspectDevin() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  await page.goto('https://devin.ai', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Get exact CTA "Get started" button colors
  const ctaColors = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('a, button'));
    const getStarted = btns.find(b => b.textContent?.toLowerCase().includes('get started'));
    if (!getStarted) return 'No button found';
    const style = window.getComputedStyle(getStarted);
    return {
      text: getStarted.textContent?.trim(),
      backgroundColor: style.backgroundColor,
      backgroundImage: style.backgroundImage,
      color: style.color,
      borderColor: style.borderColor,
    };
  });
  console.log('CTA Colors:', JSON.stringify(ctaColors, null, 2));

  // Get the nav/toolbar container margins
  const navMargins = await page.evaluate(() => {
    const header = document.querySelector('#site-header');
    const nav = header?.querySelector('nav');
    const logo = header?.querySelector('[class*="logo"]') || header?.querySelector('a:first-child');

    if (!header) return 'No header';

    const headerRect = header.getBoundingClientRect();
    const navRect = nav?.getBoundingClientRect();
    const headerStyle = window.getComputedStyle(header);

    return {
      headerPaddingLeft: headerStyle.paddingLeft,
      headerPaddingRight: headerStyle.paddingRight,
      headerMarginLeft: headerStyle.marginLeft,
      headerMarginRight: headerStyle.marginRight,
      headerRectLeft: headerRect.left,
      headerRectRight: window.innerWidth - headerRect.right,
      navRectLeft: navRect?.left,
      windowWidth: window.innerWidth,
    };
  });
  console.log('Nav Margins:', JSON.stringify(navMargins, null, 2));

  // Get use cases section card behavior
  const useCasesCards = await page.evaluate(() => {
    const cards = document.querySelectorAll('.home-use-cases__card');
    return Array.from(cards).map((card, i) => {
      const style = window.getComputedStyle(card);
      const rect = card.getBoundingClientRect();
      return {
        index: i,
        width: rect.width,
        left: rect.left,
        transform: style.transform,
        transition: style.transition,
        zIndex: style.zIndex,
      };
    });
  });
  console.log('Use Cases Cards:', JSON.stringify(useCasesCards, null, 2));

  // Get hero preview panel with the marble/wavy background
  const heroPreview = await page.evaluate(() => {
    // Look for the preview/showcase element
    const showcase = document.querySelector('.home-hero__right-image') ||
                     document.querySelector('[class*="showcase"]') ||
                     document.querySelector('[class*="preview"]');
    if (!showcase) {
      // Try to find large image/div on right side
      const divs = Array.from(document.querySelectorAll('div, img'));
      const rightEl = divs.find(el => {
        const rect = el.getBoundingClientRect();
        return rect.left > 600 && rect.width > 300;
      });
      if (rightEl) {
        const style = window.getComputedStyle(rightEl);
        return {
          found: 'alternative',
          className: rightEl.className,
          backgroundImage: style.backgroundImage?.slice(0, 500),
          border: style.border,
          borderRadius: style.borderRadius,
          boxShadow: style.boxShadow?.slice(0, 200),
        };
      }
      return 'No preview found';
    }
    const style = window.getComputedStyle(showcase);
    return {
      className: showcase.className,
      backgroundImage: style.backgroundImage?.slice(0, 500),
      backgroundColor: style.backgroundColor,
      border: style.border,
      borderRadius: style.borderRadius,
      boxShadow: style.boxShadow?.slice(0, 200),
    };
  });
  console.log('Hero Preview:', JSON.stringify(heroPreview, null, 2));

  // Get content section margins
  const contentMargins = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    const mainSection = sections[0];
    if (!mainSection) return 'No section';
    const style = window.getComputedStyle(mainSection);
    const container = mainSection.querySelector('[class*="container"], .o-grid');
    const containerStyle = container ? window.getComputedStyle(container) : null;
    const containerRect = container?.getBoundingClientRect();
    return {
      sectionPadding: style.padding,
      containerMargin: containerStyle?.margin,
      containerPadding: containerStyle?.padding,
      containerLeft: containerRect?.left,
      containerRight: containerRect ? window.innerWidth - containerRect.right : null,
    };
  });
  console.log('Content Margins:', JSON.stringify(contentMargins, null, 2));

  // Scroll down to use cases section
  await page.evaluate(() => window.scrollBy(0, 1200));
  await page.waitForTimeout(1000);

  // Get the use cases section structure more carefully
  const useCasesSection = await page.evaluate(() => {
    const section = document.querySelector('.home-use-cases') ||
                    document.querySelector('[class*="use-cases"]');
    if (!section) {
      // Find it by content
      const allSections = document.querySelectorAll('section, div');
      for (const s of allSections) {
        if (s.textContent?.includes('Application') && s.textContent?.includes('development')) {
          const style = window.getComputedStyle(s);
          const rect = s.getBoundingClientRect();
          return {
            found: 'by content',
            className: s.className,
            backgroundColor: style.backgroundColor,
            width: rect.width,
            left: rect.left,
          };
        }
      }
      return 'Not found';
    }
    const style = window.getComputedStyle(section);
    const rect = section.getBoundingClientRect();
    return {
      className: section.className,
      backgroundColor: style.backgroundColor,
      padding: style.padding,
      width: rect.width,
      left: rect.left,
    };
  });
  console.log('Use Cases Section:', JSON.stringify(useCasesSection, null, 2));

  await browser.close();
}

inspectDevin().catch(console.error);
