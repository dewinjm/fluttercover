#!/usr/bin/env node
'use strict';
import chalk from 'chalk';
import fs from 'fs';

const log = console.log;

const self = {
    title: (text) => log(chalk.green('==>') + chalk.bold(` ${text}`)),
    titleError: (text) => log(chalk.red('X') + chalk.bold(` ${text}`)),
    fileExits: (path) => fs.existsSync(path)
    
};

export { self as default };