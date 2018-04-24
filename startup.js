/*!
 * Copyright(c) Eros 2017 <pbft@foxmail.com>
 */

/**
 * Module dependencies.
 */

global.Promise = require('bluebird')
const _ = global._ = require('lodash')
global.ROOTPATH = process.cwd()
process.env.NO_DEPRECATION = '*'
const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const commander = require('commander')

commander
  .version('1.0.0')
  .option('--config <value>', 'magic', parseInt)
  .parse(process.argv);

if (commander.config) {
  require('./config.bundle')

  const user = configBundle.gen(ROOTPATH)
  configBundle.config(parseInt(commander.config), user, ROOTPATH)
  process.exit(0)
}
