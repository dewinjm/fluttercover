#!/usr/bin/env node
'use strict';

import { execSync } from 'child_process';
import utils from './utils/utils.js';
import path  from './utils/path.js';

 
const self = (input, flags) => {
    console.log('Flutter Test and LCOV Coverage 📊')
    utils.title('🔎  Validating files');

    try {
        if (!utils.fileExits(path.FLUTTER_FILE)) {
            utils.titleError('Flutter files not found');
            return;
        }

        utils.title('Run Flutter test');
        execSync('flutter test --coverage');

        if (flags.exclude) {
            let exlude = '';
            flags.exclude.forEach(item => exlude += `${item} `);
            console.log(`lcov --remove coverage/lcov.info ${exlude} -o coverage/lcov.info`)
        }

        utils.title('Generate html output');
        execSync('genhtml coverage/lcov.info -o coverage/html');

        utils.title('Opening browser: ${PWD}/coverage/html/index.html');
        execSync("open ${PWD}/coverage/html/index.html")

    } catch (err) {
        utils.titleError(err);
        return;
    }
}

const _default = self;
export { _default as default };
