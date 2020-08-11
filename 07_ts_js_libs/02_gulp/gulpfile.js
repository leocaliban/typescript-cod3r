const { series, parallel, src, dest } = require('gulp');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

function clearDist(cb) {
    cb();
}

function copyHTML(cb) {
    cb();
}

function generateJS(cb) {
    cb();
}

exports.default = series(
    clearDist,
    parallel(generateJS, copyHTML)
);