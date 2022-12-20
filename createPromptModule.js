inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: "projectTitle",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Your project needs a title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the description of this project?',
            name: "description",
        },
        {
            type: 'input',
            message: 'What are the installation instructions for this project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage information for this project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines for this project?',
            name: 'guidelines',
        },
    ])