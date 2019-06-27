#!/usr/bin/env node

const program = require('commander');
// Require logic.js file and extract controller functions using JS destructuring assignment
const { addContact, getContact } = require('./logic');
const { prompt } = require('inquirer');  // require inquirerjs library

// Craft questions to present to users
const questions = [
    {
      type : 'input',
      name : 'firstname',
      message : 'Employee First Name ....'
    },
    {
      type : 'input',
      name : 'lastname',
      message : 'Employee Last Name ...'
    },
    {
      type : 'input',
      name : 'phone',
      message : 'Work Number'
    },
    {
      type : 'input',
      name : 'email',
      message : 'Work Email'
    }
  ];

program
  .version('0.0.2')
  .description('Contact management system');
// IV of V
  program
  .command('addContact') // No need of specifying arguments here
  .alias('a')
  .description('Add a contact')
  .action(() => {
    prompt(questions).then(answers =>
      addContact(answers));
  });

program
  .command('getContact <name>')
  .alias('r')
  .description('Get contact')
  .action(name => getContact(name));

program.parse(process.argv);

