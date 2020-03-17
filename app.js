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
const idArray = [];


const internQues = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
];


const mgrQues= [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail"
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
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is your engineer's github?",
        name: "github"
    }
];

function createManager(){
    inquirer.prompt(mgrQues).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
    });       
};

function createTeam(){
    inquirer.prompt({
        type: "choice",
        message: "What type of team member would you like to add?",
        name: "role",
        choices: [
            "engineer", 
            "intern", 
            "I don't want to add any more team members"],
    }).then(function(answers){
        if(answers.role === "engineer"){
            createEngineer();
        } else if (answers.role === "intern"){
            createIntern();
        } else {
            teamCreation();
        };
    });
};

function createEngineer(){
    inquirer.prompt(engQues).then(function(answers){
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
    });
};

function createIntern(){
    inquirer.prompt(internQues).then(function(answers){
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        teamMembers.push(intern);
        idArray.push(answers.engineerId);
        createTeam();
    });
};

function teamCreation(){
    if(! fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
};




createManager();



