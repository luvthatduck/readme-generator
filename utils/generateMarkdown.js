

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache license 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  }
  else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-teal.svg)](https://opensource.org/licenses/ISC)'
  }
  else if (license === 'Software License 2.0') {
    return '[![License: SL 3.0](https://img.shields.io/badge/License-SL%203.0-purple.svg)](https://opensource.org/licenses/OSL-3.0)'
  }
  else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'Apache license 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'

  }
  else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC'
  }
  else if (license === 'Software License 2.0') {
    return 'https://opensource.org/licenses/OSL-3.0'
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}
${renderLicenseLink(license)}`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution)
* [Tests](#tests)
* [Licensing](#licensing)
* [Questions](#questions)

## Description 
${data.description}

## Installation 
${data.installation || "No Installation required"}

## Usage
${data.usage}

## Contribution
${data.contribution || 'No contribution used'}

## Tests
${data.tests}

## Licensing
${renderLicenseSection(data.licensing)}

## Questions
For futher questions feel free to contact me:

Github: [${data.github}](https://github.com/${data.github})
Email:  ${data.email}

`;
};

module.exports = generateMarkdown;
