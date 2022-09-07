// if (process.argv[2] == "add") console.log('ADD')
// else if (process.argv[2] == "read") console.log('READ')
// else if (process.argv[2] == "delete") console.log('DELETE')
// else if (process.argv[2] == "edit") console.log('EDIT')
// else console.log('No Command')

const yargs = require('yargs')
const notesFn = require('./notesFunctions')

yargs.command({
    command: 'add',
    describe: 'Add a file',
    handler: () => notesFn.addFn(yargs.argv.title, yargs.argv.body),
    builder: {
        title: {
            describe: 'This is title description',
            type: 'string',
            demandOption:true
        },
        body: {
            describe: 'This is body description',
            type: 'string',
            demandOption:true
        }
    }
})
yargs.command({
    command: 'delete',
    describe: 'Delete a file',
    handler: () => notesFn.deleteFn(yargs.argv.title),
    builder: {
        title: {
            describe: 'This is title description',
            type: 'string',
            demandOption:true
        }
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a file',
    handler: () => notesFn.readFn(yargs.argv.title),
    builder: {
        title: {
            describe: 'This is title description',
            type: 'string',
            demandOption:true
        }
    }
})
yargs.command({
    command: 'list',
    describe: 'List a files',
    handler: () => notesFn.listFn()
})

// console.log(yargs.argv)
yargs.parse()