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
  .option('--magic <value>', 'magic', parseInt)
  .option('--token <value>', 'token', parseInt)
  .parse(process.argv);

if (commander.magic && (commander.token > 0 || commander.token === 0)) {
  console.log('gen...')

  require('./config.bundle')

  const user = configBundle.gen(ROOTPATH)
  user.token = commander.token
  configBundle.config(parseInt(commander.magic), user, ROOTPATH)
  console.log('ok')
  process.exit(0)
}
