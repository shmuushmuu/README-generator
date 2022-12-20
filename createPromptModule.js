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
                    console.log('Unable to proceed. Please input a title now to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the description of this project?',
            name: "description",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Unable to proceed. Please describe the project. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What are the installation instructions for this project?',
            name: 'installation',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Unable to proceed. Please explain the installation instructions for this project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the usage information for this project?',
            name: 'usage',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Unable to proceed. Please detail the usage information for this project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines for this project?',
            name: 'guidelines',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Unable to proceed. Please explain the contribution guidelines.');
                    return false;
                }
            }
        },
    ])