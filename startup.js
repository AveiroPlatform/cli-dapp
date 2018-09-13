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
const commander = require('commander')

commander
  .version('1.0.0')
  .option('--magic <value>', 'magic', parseInt)
  .option('--token <value>', 'token', parseInt)
  .option('--gendapp', 'produce dappId')
  .parse(process.argv);

if (commander.gendapp) {
  console.log(`${(new Date()).getTime()}`)
  process.exit(0)
}

if (commander.token >= 0) {
  console.log('gen...')

  require('./config.bundle')

  const user = configBundle.gen(ROOTPATH)
  user.token = commander.token
  configBundle.config(parseInt(commander.magic), user, ROOTPATH)
  process.exit(0)
}
