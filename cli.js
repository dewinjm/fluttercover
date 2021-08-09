#!/usr/bin/env node
'use strict';

import meow from 'meow';
import router from './src/router.js';

const cli = meow(`
	Usage
        $ fluttercover <input>

	Options
	  --exclude, -e  Exclude file extensions
      --version, -v  Show version number
      --help, -h  Show this message

	Examples
	  $ fluttercover unicorns --rainbow
	  🌈 unicorns 🌈
`, {
    importMeta: import.meta,
    flags: {
        exclude: {
            type: 'string',             
            isMultiple: true,
            alias: 'e'
        }, 
        version: {
            type: 'boolean',
            default: false,
            alias: 'v'
        }, 
        help: {
            type: 'boolean',
            default: false,
            alias: 'h'
        }, 
    },
    autoVersion:true, 
});

router(cli.input[0], cli.flags);
