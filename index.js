const inquirer = require('inquierer');
const fs = require('fs');

const prompt = inquirer.createPromptModule();

const writeToFile = (readme, projectTitle) => {
    try {
        fs.writeFileSync('README.md', readme);
        console.log('Success!')
    } catch (err) {
        confirm.log(err);
    }
}

const generateMarkdown = (answers) => {
    return `${answers.projectTitle}
    [Project Link](https://${answers.gitHub}.github.io/${answers.projectTitle}/)
    
    
    ## Table of Contents
    - [Description](#description-of-project)
    - [Installation Insctructions](#installation-instructions)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)

    
    ## Description of Project
    ${answers.description}
   
    ## Installation Instructions
    ${answers.installation}
    
    ## Usage
    ${answers.usage}

    ## Contributing

    ## Tests
`
}
//[![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})

    // .then((response) =>
    //     fs.appendFile('README.md', `${JSON.stringify(response)}\n`,
    //     (err) =>
    //     err ? console.log('Uh-oh!') : console.log('Nice! We did it!')));