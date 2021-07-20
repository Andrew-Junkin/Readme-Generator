
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description : "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors ?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test"
        },
        
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 


  async function init() {
    try {
        
        const answers = await promptUser();
        const generateContent = generateReadme(answers);

        await writeFileAsync('./dist/README.md', generateContent);
        console.log(' Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  