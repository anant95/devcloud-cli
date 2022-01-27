#! /usr/bin/env node

const{ program } = require('commander')
const list = require('./commands/list')
const add = require('./commands/add')
const markDone = require('./commands/markDone')
const getApi = require('./commands/getApi')
const getProjectDetails = require('./commands/getProDetails')
const getPod = require('./commands/getPod')
const deployPro = require('./commands/deployPro')
const postApi = require('./commands/createPro')
const deleteApi = require('./commands/deletePro')
const authApi = require('./commands/header')
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
    .command('getProject')
    .description('get request on byoc')
    .action(getApi)
program
    .command('getProjectDetails')
    .description('get request on byoc')
    .action(getProjectDetails)
program
    .command('getStatus')
    .description('get request on pod')
    .action(getPod)
program
    .command('createProject <name> <desc>')
    .description('post request on byoc')
    .action(postApi)
program
    .command('deployProject <projectId> <containerId> <edgeId>')
    .description('post request on byoc')
    .action(deployPro)
program
    .command('deleteProject <projectId>')
    .description('post request on byoc')
    .action(deleteApi) 
program
    .command('jwtToken <jwt_token>')
    .description('enter jwt token for autherisation')
    .action(authApi) 
program.parse()
