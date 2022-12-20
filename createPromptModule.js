inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: "projectTitle",
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
            message: 'What is your e-mail address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub account?',
            name: 'gitHub',
        }
    ])