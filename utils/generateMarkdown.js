const generateMarkdown = data => {
  return `# ${data.title}
  [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})

  ## Description of Project
  ${data.description}

  ## Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [License](#license)
  - [Questions](#questions)
   
  ## Installation Instructions
  ${data.installation}
    
  ## License
  ${data.license}

  ## Questions
  Please feel free to reach out to me difrectly at ${data.email}, or you can find this project and others at my GitHub account, https://github.com/${data.gitHub}.
  `;
}

module.exports = generateMarkdown;
