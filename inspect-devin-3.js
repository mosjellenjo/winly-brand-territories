const { chromium } = require('playwright');

async function inspectDevin() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  await page.goto('https://devin.ai', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Get the use cases section details
  const useCasesSection = await page.evaluate(() => {
    const section = document.querySelector('.home-use-cases') || document.querySelector('[class*="use-cases"]');
    if (!section) {
      // Search manually
      const allDivs = Array.from(document.querySelectorAll('div'));
      for (const div of allDivs) {
        if (div.className?.includes('use-case')) {
          return {
            found: true,
            className: div.className,
            innerHTML: div.innerHTML?.slice(0, 2000),
          };
        }
      }
      return 'No use cases section found';
    }
    const style = window.getComputedStyle(section);
    return {
      className: section.className,
      backgroundColor: style.backgroundColor,
      padding: style.padding,
      display: style.display,
      innerHTML: section.innerHTML?.slice(0, 2000),
    };
  });
  console.log('Use cases section:', JSON.stringify(useCasesSection, null, 2));

  // Get the home-use-cases__card styles
  const useCaseCardStyles = await page.evaluate(() => {
    const card = document.querySelector('.home-use-cases__card');
    if (!card) return 'No card found';
    const style = window.getComputedStyle(card);
    const rect = card.getBoundingClientRect();
    return {
      backgroundColor: style.backgroundColor,
      border: style.border,
      borderRadius: style.borderRadius,
      padding: style.padding,
      boxShadow: style.boxShadow,
      width: rect.width,
      height: rect.height,
      transition: style.transition,
    };
  });
  console.log('Use case card styles:', JSON.stringify(useCaseCardStyles, null, 2));

  // Get the specific grid/glow canvas effect
  const canvasInfo = await page.evaluate(() => {
    const canvases = Array.from(document.querySelectorAll('canvas'));
    return canvases.map(canvas => {
      const style = window.getComputedStyle(canvas);
      const rect = canvas.getBoundingClientRect();
      return {
        id: canvas.id,
        className: canvas.className,
        width: canvas.width,
        height: canvas.height,
        position: style.position,
        top: style.top,
        left: style.left,
        zIndex: style.zIndex,
        pointerEvents: style.pointerEvents,
        rectTop: rect.top,
        rectLeft: rect.left,
        rectWidth: rect.width,
        rectHeight: rect.height,
      };
    });
  });
  console.log('Canvas info:', JSON.stringify(canvasInfo, null, 2));

  // Get the workflow list items structure
  const workflowStructure = await page.evaluate(() => {
    const list = document.querySelector('ul') || document.querySelector('ol');
    if (!list) return 'No list found';
    const items = Array.from(list.querySelectorAll('li'));
    return items.slice(0, 4).map((item, i) => {
      const style = window.getComputedStyle(item);
      const rect = item.getBoundingClientRect();
      const numberEl = item.querySelector('[class*="number"], [class*="index"], span:first-child');
      const titleEl = item.querySelector('[class*="title"], [class*="heading"], div > div:first-child');
      return {
        index: i,
        className: item.className,
        backgroundColor: style.backgroundColor,
        border: style.border,
        borderRadius: style.borderRadius,
        padding: style.padding,
        width: rect.width,
        height: rect.height,
        isActive: item.className?.includes('active'),
        hasNumber: !!numberEl,
      };
    });
  });
  console.log('Workflow structure:', JSON.stringify(workflowStructure, null, 2));

  // Get hero section container widths
  const heroLayout = await page.evaluate(() => {
    const hero = document.querySelector('.home-hero') || document.querySelector('[class*="hero"]');
    if (!hero) return 'No hero found';
    const style = window.getComputedStyle(hero);
    const rect = hero.getBoundingClientRect();

    // Find the grid container inside
    const container = hero.querySelector('.o-grid, [class*="container"], [class*="grid"]');
    const containerStyle = container ? window.getComputedStyle(container) : null;
    const containerRect = container?.getBoundingClientRect();

    return {
      heroClassName: hero.className,
      heroWidth: rect.width,
      heroPaddingLeft: style.paddingLeft,
      heroPaddingRight: style.paddingRight,
      containerWidth: containerRect?.width,
      containerPaddingLeft: containerStyle?.paddingLeft,
      containerPaddingRight: containerStyle?.paddingRight,
      containerMaxWidth: containerStyle?.maxWidth,
    };
  });
  console.log('Hero layout:', JSON.stringify(heroLayout, null, 2));

  // Get the nav floating position details
  const navDetails = await page.evaluate(() => {
    const header = document.querySelector('#site-header');
    const nav = header?.querySelector('nav');
    const navBg = header?.querySelector('#site-header__nav-bg');

    if (!nav) return 'No nav found';

    const headerStyle = window.getComputedStyle(header);
    const navStyle = window.getComputedStyle(nav);
    const navBgStyle = navBg ? window.getComputedStyle(navBg) : null;

    const headerRect = header.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    return {
      headerPosition: headerStyle.position,
      headerTop: headerStyle.top,
      headerPadding: headerStyle.padding,
      navPosition: navStyle.position,
      navTop: navStyle.top,
      navLeft: navStyle.left,
      navMargin: navStyle.margin,
      navBorder: navStyle.border,
      navBorderRadius: navStyle.borderRadius,
      navBackgroundColor: navStyle.backgroundColor,
      navBackdropFilter: navStyle.backdropFilter,
      navBgExists: !!navBg,
      navBgBackgroundColor: navBgStyle?.backgroundColor,
      navBgBorderRadius: navBgStyle?.borderRadius,
      navBgBorder: navBgStyle?.border,
      navBgOpacity: navBgStyle?.opacity,
      headerRectTop: headerRect.top,
      navRectLeft: navRect.left,
      navRectTop: navRect.top,
    };
  });
  console.log('Nav details:', JSON.stringify(navDetails, null, 2));

  // Get the accent colors from CSS
  const accentColors = await page.evaluate(() => {
    const gradientEls = document.querySelectorAll('.o-text-gradient, [class*="gradient"]');
    const colors = [];
    gradientEls.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.backgroundImage && style.backgroundImage !== 'none') {
        colors.push(style.backgroundImage);
      }
    });
    return [...new Set(colors)].slice(0, 5);
  });
  console.log('Accent colors:', JSON.stringify(accentColors, null, 2));

  // Scroll down and check the second section
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(1000);

  const scrolledContent = await page.evaluate(() => {
    const viewport = {
      top: window.scrollY,
      bottom: window.scrollY + window.innerHeight,
    };

    const allSections = Array.from(document.querySelectorAll('section, [class*="section"]'));
    const visibleSections = allSections.filter(section => {
      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });

    return visibleSections.map(section => ({
      className: section.className?.slice(0, 100),
      id: section.id,
      bgColor: window.getComputedStyle(section).backgroundColor,
    }));
  });
  console.log('Visible sections after scroll:', JSON.stringify(scrolledContent, null, 2));

  await browser.close();
}

inspectDevin().catch(console.error);
