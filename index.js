const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown');


// array of input questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want."
    },  
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide the project installation guidelines for the user.',
    },
    {
        type: 'input',
        name: 'use',
        message: 'What is the use of your project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Provide the licenses used for this project (or badge link).',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Provide the project contributors.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide tests that verify that the project runs.',
    },
    {
        type: 'input',
        name: 'gitname',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'repolink',
        message: 'What is the link to your project repository?',
    },
]

const promptUser = () => {
    return inquirer.prompt(questions)
    .then(data => {
        const gitURL = `https://api.github.com/users/${data.gitname}`;
        axios.get(gitURL).then(res => {
            const gitInfo = {
                gitImage: res.data.avatar_url,
                email: res.data.email,
                profileUrl: res.data.html_url,
                nombre: res.data.name
            };

            fs.writeFile("./README.md", generateMD(data, gitInfo), err => {
                if (err) {
                    throw err
                };

                console.log("New README file has been sucessfully generated!")
            } )
        })

        
    })
}

promptUser();


// function to initialize program
function init() {

}

// function call to initialize program
init();
