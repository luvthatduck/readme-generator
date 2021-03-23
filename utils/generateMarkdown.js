

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (questions.choices = 'Apache license 2.0') {
    return

    
  } else {
    renderLicenseBadge = '';
  }
}
// if ( ${data.licensing} = 'Apache license 2.0') {
//   [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//   }
//   else {
//     renderLicenseBadge = " "
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) { }
// return // link for license 

//   else {
//   renderLicenseLink = ''
// }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
  // return // the license section of README
//   else {
//     renderLicenseSection = ''
//   }
// }

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
${data.licensing}

## Questions
For futher questions feel free to contact me:

Github: [${data.github}](https://github.com/${data.github})
Email:  [${data.email}]

`;
};

module.exports = generateMarkdown;
