#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Build the static token-generation page into `dist/`.
 *
 * Replaces the previous Grunt + browserify toolchain (abandoned grunt
 * plugins carried 30 npm-audit findings, all build-time): esbuild bundles
 * the browser entry, then the HTML/CSS/image assets are copied verbatim.
 * Output is behaviour-equivalent: a single `dist/scriptBrowserify.js`
 * (IIFE, runs on load) referenced by `dist/index.html`.
 *
 *   node build.js            one-shot build
 *   node build.js --watch    rebuild on source change
 */

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const DIST = path.join(__dirname, 'dist');
const watch = process.argv.includes('--watch');

// `pryv` lazily `require('fs')`/`require('path')` inside its Node-only
// `createEventWithFile` (guarded, never reached in the browser, which uses
// createEventWithFormData). browserify auto-stubbed these to empty modules;
// esbuild errors on them under platform:'browser', so reproduce the
// empty-stub behaviour explicitly.
const stubNodeBuiltins = {
  name: 'stub-node-builtins',
  setup (b) {
    b.onResolve({ filter: /^(fs|path)$/ }, (args) => ({ path: args.path, namespace: 'node-stub' }));
    b.onLoad({ filter: /.*/, namespace: 'node-stub' }, () => ({ contents: 'module.exports = {};' }));
  }
};

function copyAssets () {
  fs.mkdirSync(DIST, { recursive: true });
  fs.copyFileSync(path.join(__dirname, 'html/index.html'), path.join(DIST, 'index.html'));
  for (const css of fs.readdirSync(path.join(__dirname, 'css')).filter(f => f.endsWith('.css'))) {
    fs.copyFileSync(path.join(__dirname, 'css', css), path.join(DIST, css));
  }
  for (const img of fs.readdirSync(path.join(__dirname, 'img')).filter(f => f.endsWith('.png'))) {
    fs.copyFileSync(path.join(__dirname, 'img', img), path.join(DIST, img));
  }
}

const buildOptions = {
  entryPoints: [path.join(__dirname, 'js/script.js')],
  bundle: true,
  outfile: path.join(DIST, 'scriptBrowserify.js'),
  platform: 'browser',
  // Behaviour parity with the old browserify bundle: a self-executing
  // bundle that wires up the page on load. No global export needed —
  // index.html just <script src>s it.
  format: 'iife',
  plugins: [stubNodeBuiltins],
  logLevel: 'info'
};

async function main () {
  copyAssets();
  if (watch) {
    const ctx = await esbuild.context(buildOptions);
    await ctx.watch();
    // also re-copy assets when html/css/img change
    for (const dir of ['html', 'css', 'img']) {
      fs.watch(path.join(__dirname, dir), () => { try { copyAssets(); } catch (e) { console.error(e); } });
    }
    console.log('watching for changes…');
  } else {
    await esbuild.build(buildOptions);
    console.log('built dist/');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
