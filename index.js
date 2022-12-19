const inquirer = require('inquierer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: "Project title",
        },
        {
            type: 'input',
            message: 'What is the description of this project?',
            name: "Description",
        },
        {
            type: 'input',
        }


    ])
    .then((response) =>
        fs.appendFile('README.md', `${JSON.stringify(response)}\n`,
        (err) =>
        err ? console.log('Uh-oh!') : console.log('Nice! We did it!')));