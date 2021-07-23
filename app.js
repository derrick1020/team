const supervisor = require("./supervisor");
const pharmacist = require("./pharmacist");
const driver = require("./driver");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is this employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is this employee's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is this employee's email?",
  },
  {
    type: "list",
    name: "role",
    message: "What role does this employee have?",
    choices: ["Supervisor", "Pharmacist", "Driver"],
  },
];

const supervisorQuestions = [
  {
    type: "input",
    name: "phoneNumber",
    message: "What is this supervisor's phone number?",
  },
  {
    type: "input",
    name: "badgeNumber",
    message: "What is this supervisor's badge number?",
  },
  {
    type: "list",
    name: "newEmployee",
    message: "Do you want to add another employee?",
    choices: ["Yes", "No"],
  },
];

const pharmacistQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is this pharmacists name?",
  },
  {
    type: "input",
    name: "badgeNumber",
    message: "What is this badge number?",
  },
  {
    type: "input",
    name: "license",
    message: "What is their license number?",
  },
  {
    type: "list",
    name: "newEmployee",
    message: "Do you want to add another employee?",
    choices: ["Yes", "No"],
  },
];

const driverQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the driver?",
  },
  {
    type: "input",
    name: "car",
    message: "What car do they drive?",
  },
  {
    type: "input",
    name: "classMeds",
    message: "What class of meds can they transport?",
  },
  {
    type: "list",
    name: "newEmployee",
    message: "Do you want to add another employee?",
    choices: ["Yes", "No"],
  },
];

const addEmployee = () => {
  inquirer.prompt(employeeQuestions).then((res) => {
    if (res.role === "Supervisor") {
      addSupervisor(res);
    } else if (res.role === "Pharmacist") {
      addPharmacist(res);
    } else {
      addDriver(res);
    }
  });
};

const addSupervisor = (res) => {
  const supervisorData = res;
  inquirer.prompt(supervisorQuestions).then((res) => {
    supervisorData.phoneNumber = res.phoneNumber;
    const newTeamMember = new supervisor(
      `${supervisorData.name}`,
      `${supervisorData.id}`,
      `${supervisorData.email}`,
      `${supervisorData.phoneNumber}`
    );
    if (res.newEmployee === "Yes") {
      employee.push(newTeamMember);
      addEmployee();
    } else {
      employee.push(newTeamMember);
      writeFile(employee);
    }
  });
};

const addPharmacist = (res) => {
  const pharmacistData = res;
  inquirer.prompt(pharmacistQuestions).then((res) => {
    pharmacistData.license = res.license;
    const newTeamMember = new Pharmacist(
      pharmacistData.name,
      pharmacistData.id,
      pharmacistData.email,
      pharmacistData.license
    );
    if (res.newEmployee === "Yes") {
      employees.push(newTeamMember);
      addEmployee();
    } else {
      employees.push(newTeamMember);
      writeFile(employees);
    }
  });
};

const addDriver = (res) => {
  const driverData = res;
  inquirer.prompt(driverQuestions).then((res) => {
    driverData.car = res.car;
    const newTeamMember = new Intern(
      driverData.name,
      driverData.id,
      driverData.classMeds,
      driverData.car
    );
    if (res.newEmployee === "Yes") {
      employees.push(newTeamMember);
      addEmployee();
    } else {
      employees.push(newTeamMember);
      writeFile(employees);
    }
  });
};

const writeFile = (employees) => {
  return fs.writeFileSync(outputPath, render(employees));
};

addEmployee();
