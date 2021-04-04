const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []

const questions = [
    {
        type: 'list',
        message: 'What type of employee are you?',
        choices: ['Manager', 'Intern', 'Engineer'],
        name: 'role',
    },
    {
        message: 'What is your name?',
        name: 'name'
    },
    {
        message: 'What is your employee ID?',
        name: 'id'
    },
    {
        message: 'What is your email?',
        name: 'email'
    }
]

const init = async () => {
    const { newEmployee } = await inquirer.prompt({
        type: 'confirm',
        message: 'Would you like to add this team member?',
        name: 'newEmployee'
    })

    if (newEmployee) {
        initEmployee();
    } else {
        if (employees.length > 0) {
            if (fs.existsSync(OUTPUT_DIR)) {
                return fs.writeFileSync(outputPath, render(employees), )
            }
            //  else {
        //         return fs.mkdir(OUTPUT_DIR, err => {
        //             if(err) throw err;
    
        //             return fs.writeFileSync(outputPath, render(employees))
        //         })
        //     }
        }
    }
}

const initEmployee = async () => {
    const { role, name, id, email } = await inquirer.prompt(questions);

    switch (role) {
        case 'Manager':
            const { officeNumber } = await inquirer.prompt({
                message: 'Office Number?',
                name: 'officeNumber'
            })
            employees.push(new Manager(name, id, email, officeNumber))
            init()
            break;
        case 'Intern':
            const { school } = await inquirer.prompt({
                message: 'School?',
                name: 'school'
            })
            employees.push(new Intern(name, id, email, school))
            init()
            break;
        case 'Engineer':
            const { github } = await inquirer.prompt({
                message: 'GitHub?',
                name: 'github'
            })
            employees.push(new Engineer(name, id, email, github))
            init()
            break;
        default:
            
    }
}

init();