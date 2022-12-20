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
    
    //[![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})
    
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
    
    ## Questions
`
}