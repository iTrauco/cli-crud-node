// commander.js api supports chainable functions
const program = require('commander');
// Require logic.js and extract controller functions using JS destructing assignment
const { addContact, getContact } = require('./logic');

program 
    .version('0.0.1')
    .description('Contact management system');

program
    .command('addContact <firstname> <lastname> <phone> <email>') // '<>' = non-optional parameters for .command() function
    .alias('a') 
    .description('Add a contact')
    .action((firstname, lastname, phone, email) => { // takes callback and runs it each time the command is specified
        addContact({firstname, lastname, phone, email});
    });

program 
    .command('getContact <name>')
    .alias('r')
    .description('Get contact')
    .action(name => getContact(name));

program.parse(process.argv);