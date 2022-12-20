const inquirer = require('inquierer');
const fs = require('fs');

const prompt = inquirer.createPromtModule();

const writeToFile = (readme, projectTitle) => {
    try {
        fs.writeFileSync('README.md', readme);
        console.log('Success!')
    } catch (err) {
        confirm.log(err);
    }
}

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
            message: 'What are the installation instructions?',
            name: 'installation',
        },
    ])

    // .then((response) =>
    //     fs.appendFile('README.md', `${JSON.stringify(response)}\n`,
    //     (err) =>
    //     err ? console.log('Uh-oh!') : console.log('Nice! We did it!')));