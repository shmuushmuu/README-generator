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
    [Project Link](https://shmuushmuu.github.io/JQuery-powered-calculator/)
    
    
    ## Table of Contents
    - [Description](#description-of-project)
    - [Visuals](#visuals)
    
    ## Description of Project
   ${answers.description}
    
    ## Visuals
    The day-planner should look like this:
    
    ![Screenshot](assets/images/scheduler-screenshot.png)`
}

    // .then((response) =>
    //     fs.appendFile('README.md', `${JSON.stringify(response)}\n`,
    //     (err) =>
    //     err ? console.log('Uh-oh!') : console.log('Nice! We did it!')));