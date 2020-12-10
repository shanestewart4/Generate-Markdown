const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(data, gitInfo) {
  return `
# **${data.title}**

${data.badge}

## Table of Contents:
- [Description](#Description)
- [Installation](#Installation)
- [Use](#Use)
- [License](#License)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Repository](#Repository)
- [GitHub](#GitHub)

## Description
${data.description}

## Installation
${data.install}

## Use
${data.use}

## License
${data.license}

## Contributors
${data.contributors}

## Tests
${data.test}

## Repository
(${data.repo})

## GitHub
![Picture](${gitInfo.gitImage})
- ${gitInfo.nombre}
- [GitHub](${gitInfo.profileUrl})
- <${gitInfo.email}>
  `;
}

module.exports = generateMarkdown;
