const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

console.log("Welcome to the Team Template Maker!")

const teamMembers = [];
const something = [];


const internQues = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "github"
    }
];


const mgrQues= [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber"
    }
];

const engQues = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your engineer's github?",
        name: "github"
    }
];

function createManager(){
    inquirer.prompt(mgrQues).then(function(res){
        res.push(teamMembers)
    });

    createTeam();
        
};

function createTeam(){
    inquirer.prompt({
        type: "choice",
        message: "What type of team member would you like to add?",
        name: "choice",
        choices: ["engineer", "intern", "I don't want to add any more team members"],
    }).then(function(res){
        if(res.choice === "engineer"){
            createEngineer();
        } else if (res.choice === "intern"){
            createIntern();
        } else {
            teamCreation();
        }
    });
};

function createEngineer(){
    inquirer.prompt(engQues).then(function(res){
        res.push(teamMembers)
    })

    createTeam();
}

function createIntern(){
    inquirer.prompt(internQues).then(function(res){
        res.push(teamMembers);
    });

    createTeam();
}





createManager();



