#! /usr/bin/env node

const{ program } = require('commander')
const list = require('./commands/list')
const add = require('./commands/add')
const markDone = require('./commands/markDone')
const getApi = require('./commands/getApi')
program
    .command('list')
    .description('List all todo tasks')
    .action(list)
program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)
program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)
program
    .command('getApi')
    .description('get request on byoc')
    .action(getApi)
program.parse()
