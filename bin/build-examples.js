#!/usr/bin/env node

var Bundler = require('parcel-bundler');

var files = ['examples/index.html', 'examples/*/*.html'];  // to match netlify

var options = {
    outDir: './out',
    watch: false,
    autoInstall: false
};

process.env.NODE_ENV = 'production';

var bundler = new Bundler(files, options);

bundler.bundle();