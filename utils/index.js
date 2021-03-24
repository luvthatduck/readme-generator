
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title.')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description.');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Is installation required for this project?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide some information about required installation', 
        when: ({confirmInstallation}) => confirmInstallation
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please describe usage of project (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter a description of project usage.');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Are you open for contributions to this project?',
        default: true
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please describe how others can contribute and requirements for accepting them.', 
        when: ({confirmContribution}) => confirmContribution
      },
      {
        type: 'confirm',
        name: 'confirmAcknowledgement',
        message: 'Did others contribute to this project?',
        default: true
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please list project contributer names', 
        when: ({confirmAcknowledgement}) => confirmAcknowledgement
      },
      {
        type: 'list',
        message: 'What licenses are required?',
        name: 'licensing',
        choices: ['Apache license 2.0','ISC','MIT','Mozilla Public License 2.0', 'Software License 3.0','Unlicensed' ]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions for this project.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email.');
            return false;
          }
        }
      },
    // ])
  ]
// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./README.md', data, err => {
    if (err) {

      return;
    }
  })
};



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    const response = generateMarkdown(answers);
    writeToFile(response)
  })
  .catch(err => {
    console.log(err);
  });
};



// Function call to initialize app
init();
