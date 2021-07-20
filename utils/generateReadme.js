
function generateReadme(answers) {
    return `

  


## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
 ${answers.questions}<br />

    `;
  }
  
  module.exports = generateReadme;