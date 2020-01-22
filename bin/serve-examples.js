#!/usr/bin/env node

var Bundler = require('parcel');
var express = require('express');
var opn = require('opn');

var files = ['examples/**/*.html'];

var options = {
    outDir: './out',
    autoInstall: false
};

var bundler = new Bundler(files, options);
var app = express();

app.get(/^(\/|\/[\w-]+\/)$/, (req, res, next) => {
  req.url += 'index.html';
  next();
});

app.use(bundler.middleware());

var port = Number(process.env.PORT || 1234);
app.listen(port);

console.log('listening at http://localhost:' + port);

opn('http://localhost:' + port);