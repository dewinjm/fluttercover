#!/usr/bin/env node
'use strict';

const FLUTTER_FILE = `${process.cwd()}/pubspec.yaml`;
const COVERAGE_PAGE = `${process.cwd()}/coverage/html/index.html`;


const path = Object.freeze({
    FLUTTER_FILE,COVERAGE_PAGE
});

export { path as default };
