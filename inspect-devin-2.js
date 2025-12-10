const { chromium } = require('playwright');

async function inspectDevin() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  await page.goto('https://devin.ai', { waitUntil: 'networkidle' });

  // Wait a bit for animations
  await page.waitForTimeout(2000);

  // Get the header element (the one that contains the logo and nav)
  const headerInfo = await page.evaluate(() => {
    const header = document.querySelector('#site-header') || document.querySelector('header') || document.querySelector('[class*="header"]');
    if (!header) return 'No header found';
    const style = window.getComputedStyle(header);
    const rect = header.getBoundingClientRect();
    return {
      id: header.id,
      className: header.className,
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      backgroundColor: style.backgroundColor,
      backdropFilter: style.backdropFilter,
      width: style.width,
      maxWidth: style.maxWidth,
      padding: style.padding,
      margin: style.margin,
      rectTop: rect.top,
      rectLeft: rect.left,
      rectWidth: rect.width,
      rectHeight: rect.height,
    };
  });
  console.log('Header info:', JSON.stringify(headerInfo, null, 2));

  // Get the "Get started" button specifically
  const getStartedBtn = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('a, button'));
    const getStarted = btns.find(b => b.textContent?.toLowerCase().includes('get started') || b.textContent?.toLowerCase().includes('start building'));
    if (!getStarted) return 'No get started button found';
    const style = window.getComputedStyle(getStarted);
    return {
      text: getStarted.textContent?.trim(),
      tagName: getStarted.tagName,
      className: getStarted.className,
      backgroundColor: style.backgroundColor,
      color: style.color,
      padding: style.padding,
      borderRadius: style.borderRadius,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      border: style.border,
      boxShadow: style.boxShadow,
    };
  });
  console.log('Get Started button:', JSON.stringify(getStartedBtn, null, 2));

  // Look for workflow steps (1. Ticket, 2. Plan, etc.)
  const workflowSteps = await page.evaluate(() => {
    // Look for numbered list items
    const allElements = Array.from(document.querySelectorAll('*'));
    const stepElements = [];

    for (const el of allElements) {
      const text = el.textContent?.trim() || '';
      if ((text.includes('Ticket') || text.includes('Plan') || text.includes('Test') || text.includes('PR')) &&
          text.length < 200 && el.children.length < 10) {
        const style = window.getComputedStyle(el);
        stepElements.push({
          tagName: el.tagName,
          className: el.className?.slice(0, 100),
          text: text.slice(0, 100),
          backgroundColor: style.backgroundColor,
          borderRadius: style.borderRadius,
          padding: style.padding,
        });
      }
    }
    return stepElements.slice(0, 10);
  });
  console.log('Workflow steps:', JSON.stringify(workflowSteps, null, 2));

  // Get the hero preview panel (the UI mockup on the right side)
  const previewPanel = await page.evaluate(() => {
    // Look for panels that might be the preview
    const panels = Array.from(document.querySelectorAll('[class*="preview"], [class*="demo"], [class*="showcase"], [class*="card"]'));
    if (panels.length === 0) {
      // Try to find a large div on the right side
      const allDivs = Array.from(document.querySelectorAll('div'));
      const rightSideDivs = allDivs.filter(div => {
        const rect = div.getBoundingClientRect();
        return rect.left > 600 && rect.width > 400 && rect.height > 300;
      });
      return rightSideDivs.slice(0, 3).map(div => ({
        className: div.className?.slice(0, 100),
        width: div.getBoundingClientRect().width,
        height: div.getBoundingClientRect().height,
      }));
    }
    return panels.slice(0, 5).map(p => ({
      className: p.className?.slice(0, 100),
      id: p.id,
    }));
  });
  console.log('Preview panel:', JSON.stringify(previewPanel, null, 2));

  // Get the second section (usually has use cases / integrations)
  const secondSection = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    if (sections.length < 2) return 'Not enough sections';
    const section = sections[1];
    const style = window.getComputedStyle(section);
    return {
      className: section.className,
      backgroundColor: style.backgroundColor,
      padding: style.padding,
      innerHTML: section.innerHTML?.slice(0, 500),
    };
  });
  console.log('Second section:', JSON.stringify(secondSection, null, 2));

  // Get grid/glow effect info
  const glowEffect = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('[class*="grid"], [class*="glow"], [class*="gradient"]'));
    return elements.slice(0, 5).map(el => {
      const style = window.getComputedStyle(el);
      return {
        className: el.className?.slice(0, 100),
        backgroundImage: style.backgroundImage?.slice(0, 200),
        opacity: style.opacity,
        position: style.position,
      };
    });
  });
  console.log('Glow/grid effects:', JSON.stringify(glowEffect, null, 2));

  // Check for SVG backgrounds or canvas
  const svgCanvas = await page.evaluate(() => {
    const svgs = document.querySelectorAll('svg');
    const canvases = document.querySelectorAll('canvas');
    return {
      svgCount: svgs.length,
      canvasCount: canvases.length,
      svgSamples: Array.from(svgs).slice(0, 3).map(s => ({
        className: s.className?.baseVal || s.className,
        width: s.getAttribute('width'),
        viewBox: s.getAttribute('viewBox'),
      })),
    };
  });
  console.log('SVG/Canvas info:', JSON.stringify(svgCanvas, null, 2));

  // Page colors/CSS variables
  const cssVars = await page.evaluate(() => {
    const root = document.documentElement;
    const style = window.getComputedStyle(root);
    // Get all CSS custom properties
    const sheets = Array.from(document.styleSheets);
    const vars = [];
    try {
      for (const sheet of sheets) {
        if (sheet.href?.includes('devin')) {
          const rules = Array.from(sheet.cssRules || []);
          for (const rule of rules) {
            if (rule.selectorText === ':root') {
              vars.push(rule.cssText?.slice(0, 1000));
            }
          }
        }
      }
    } catch(e) {}
    return vars;
  });
  console.log('CSS Variables:', JSON.stringify(cssVars, null, 2));

  // Get font info
  const fontInfo = await page.evaluate(() => {
    const body = document.body;
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    return {
      bodyFont: window.getComputedStyle(body).fontFamily,
      h1Font: h1 ? window.getComputedStyle(h1).fontFamily : null,
      pFont: p ? window.getComputedStyle(p).fontFamily : null,
    };
  });
  console.log('Font info:', JSON.stringify(fontInfo, null, 2));

  await browser.close();
}

inspectDevin().catch(console.error);
