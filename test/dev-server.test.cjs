const assert = require('node:assert/strict');
const { test } = require('node:test');
const webpack = require('webpack');
const config = require('../webpack.config.js');

test('development server compiles and serves the resume entry', { timeout: 30000 }, async () => {
  const { default: WebpackDevServer } = await import('webpack-dev-server');
  const compiler = webpack({ ...config, mode: 'development', infrastructureLogging: { level: 'error' } });
  const server = new WebpackDevServer({ ...config.devServer, port: 0, open: false, client: false }, compiler);
  try {
    await server.start();
    const origin = `http://127.0.0.1:${server.server.address().port}`;
    const response = await fetch(origin);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /id="root"/);
    const script = html.match(/<script[^>]+src="([^"]+)"/);
    assert.ok(script, 'dev HTML must reference the compiled bundle');
    const bundle = await fetch(new URL(script[1], origin));
    assert.equal(bundle.status, 200);
    assert.match(await bundle.text(), /公司 1/);
  } finally {
    await server.stop();
  }
});
