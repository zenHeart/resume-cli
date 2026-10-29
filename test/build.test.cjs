const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const { JSDOM } = require('jsdom');

test('production page includes its styles and renders the resume data', () => {
  const output = path.resolve(__dirname, '../public');
  const html = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'http://localhost/' });
  try {
    const { document } = dom.window;
    const styles = [...document.querySelectorAll('link[rel="stylesheet"]')];
    assert.ok(styles.length > 0, 'compiled Sass must be linked from the page');
    for (const style of styles) {
      const css = fs.readFileSync(path.join(output, style.getAttribute('href')), 'utf8');
      assert.match(css, /\.experience-item/);
      assert.match(css, /\.project-item/);
    }
    const scripts = [...document.querySelectorAll('script[src]')];
    assert.ok(scripts.length > 0, 'generated HTML must reference the application bundle');
    for (const script of scripts) {
      dom.window.eval(fs.readFileSync(path.join(output, script.getAttribute('src')), 'utf8'));
    }
    assert.match(document.querySelector('.profile').textContent, /小明/);
    assert.equal(document.querySelector('.profile a').href, 'mailto:zenheart_register@163.com');
    assert.equal(document.querySelectorAll('.experience-item').length, 2);
    assert.equal(document.querySelectorAll('.project-item').length, 3);
    assert.equal(document.querySelectorAll('.skill-item').length, 1);
    assert.match(document.querySelector('.skill').textContent, /⭐/);
  } finally {
    dom.window.close();
  }
});
