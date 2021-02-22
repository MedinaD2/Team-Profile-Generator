// INITIATORS
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./li/Engineer");
const Intern = require(".lib/Intern");
const html = require("./src/htmlTemp");
const validator = require("email-validator");

// FUNCTIONS
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();

console.groupCollapsed("Team-Profile Generator");

// APP FUNCTION //

async function main( {
  try {
  
    await prompt() 
    // GENERATE A CARD FOR EACH EMPLOYEE //
    for(let i = 0; i <teamArray.length; i++){
      teamString = teamString + html.generateCard(teamArray[i]);
    }
    let finalHtml = html.generateHTML(teamString)

    console.clear();
    console.table("Creating index.html file");

    writerFileAsync(".dist/index.html", finalHtml);

    console.clear();
    console.table("Your index.html file has been created! It is located in the '(..dist/)' folder.");
  } catch(err) {
    return console.log(err);
  }
}

// USER DATA // 
async function prompt() {
  
}
let responseDone = "";

do{
  try{
    console.log("------------------------");

    // EMPLOYEE INFORMATION // 
    let response = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: function validateName(name){
            return name !== '';
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID: ",
        validate: function validateName(name){
          return name !== '';
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter theh employee's email address: ",
        validate: function validateEmail(name){
          return validator.validate(name);
        }
      },
      {
        type: "list",
        name: "role",
        message: "Enter the emplpyee's role: ",
        choices: [
          "Engineer",
          "Intern",
          "Manager"
        ]
      }
    ]);

// NEXT PROMPT

let response2 = ""

    // EMPLOYEE SELECTION 
    if (response.role === "Engineer") {
      response2 = await inquirer.prompt([{
        type: "input",
        name: "githubInput",
        message: "Please enter their Github username: ",
        validate: function validateName(name) {
          return name !== '';
        },
   },]);

   // ADD TO ARRAY 
   const Engineer = new Engineer(response.name, response.id, response.email, response2.githubInput);
   teamArray.push(Engineer);

  } else if (response.role === "Intern") {
    response2 = await inquirer.prompt([{
      type: "input",
      name: "schoolInput",
      message: "Please enter their attending school name: ",
      validate: function validateName(name) {
        return name !== '';
      },
    },]);

    // TEAM ARRAY 
    const manager = new Manager(response.name, response.id, response.email, response2.officeNumberInput);
    teamArray.unshift(manager);

  }
} catch(err) {
  return console.log(err);
}
responseDone = await inquirer.prompt([{
  type: "list",
  name: "finish",
  message: "Would you like to continue?",
  choices:
  [
    "Yes",
    "No",
  ]
},]);

} while (responseDone.finish === "Yes");

//
main();