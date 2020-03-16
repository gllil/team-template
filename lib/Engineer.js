const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, github){
        super(name, email, id);

        this.github = github;   
    }

    getName() {
        this.name;
    }

    getEmail() {
        this.email;
    }

    getId() {
        this.id;
    }

    getGithub() {
        this.github;
    }
}

module.exports = Engineer;