// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project'
    },

    {
        type: 'input',
        name: 'description', 
        message: 'Breifly describe your application'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install the application'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples how the application is used'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['mit', 'GPLv2', 'Apache', 'no license']
    },

    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Will there be contributers to this application?',
        default: true 
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing.',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                message: 'No contrinutions';
                // return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions and examples of how the code is tested:'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)'
    },
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./newREADME/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
