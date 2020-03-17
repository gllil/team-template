const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github){
        super(name, email, id);

        this.github = github;   
    }

    getRole() {
        return "engineer"
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;