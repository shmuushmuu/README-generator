const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require ('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: 'input',
            message: 'What is the description of this project?',
            name: "description",
        },
        {
            type: 'input',
            message: 'What other installations are required for this project to run?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage information for this project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub account?',
            name: 'gitHub',
        }
    ]);
};

const writeFile = data => {
    fs.writeFile('newREADME.md', data, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('Ooooooh baby we did it.')
        }
    })
};

questions() 
.then(answers => { 
    return generateReadMe(answers);
})
.then(data => {
    return writeFile(data);
});