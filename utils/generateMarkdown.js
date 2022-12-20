const generateMarkdown = data => {
  return `# ${data.title}

  ![Project Link](https://${data.gitHub}.github.io/${data.projectTitle}/)

    [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})
    
    ## Table of Contents
  - ![Description](#description - of - project)
  - ![Installation Instructions](#installation - instructions)
  - ![Tests](#tests)

    
    ## Description of Project
    ${adata.description}
   
    ## Installation Instructions
    ${data.installation}
    
    ## Questions
    Please feel free to reach out to me difrectly at ${data.email}, or you can find this project and others at my GitHub account, ${data.gitHub}.
    `
}

module.exports = generateMarkdown;
