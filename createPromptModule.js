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