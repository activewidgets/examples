#!/usr/bin/env node

var Bundler = require('parcel-bundler');

var files = ['examples/index.html', 'examples/*/*.html'];  // to match netlify

var options = {
    outDir: './out',
    watch: false,
    autoInstall: false
};

var bundler = new Bundler(files, options);

bundler.bundle();