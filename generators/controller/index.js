const generator = require("yeoman-generator");
const yosay = require("yosay");
const colors = require("colors");

/**
 *
 *
 * @author Boos Edwin.
 * @date 2018/09
 *
 *
 * A subgenerator which does generate a view file.
 * You can call this subgenerator with "yo appkit:controller".
 *
 *
 */
module.exports = class extends generator {
  prompting() {
    console.log(yosay("A UI5 controller generator by Edwin Boos. (2018)"));
    const userInterface = [];
    userInterface.push({
      type: "input",
      name: "moduleName",
      message: "Enter your ui5 projects module name"
    });
    userInterface.push({
      type: "input",
      name: "controllerName",
      message: "Enter the name of your desired controller name"
    });
    userInterface.push({
      type: "input",
      name: "path",
      message: "Please give me the path ..",
      default: "./WebContent/controller"
    });
    userInterface.push({
      type: "list",
      name: "choice",
      message: "Which type of a controller?",
      choices: ["default-controller", "fragment-controller"]
    });
    return this.prompt(userInterface).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    const { moduleName, controllerName, path, choice } = this.answers;
    const modulePath = moduleName.replace(/\./g, "/");
    if (choice === "default-controller") {
      this.fs.copyTpl(
        this.templatePath("Controller.controller.js"),
        this.destinationPath(`${path}/${controllerName}.controller.js`),
        {
          moduleName,
          controllerName,
          modulePath
        }
      );
    } else if (choice === "fragment-controller") {
      this.fs.copyTpl(
        this.templatePath("Fragment.controller.js"),
        this.destinationPath(`${path}/${controllerName}.controller.js`),
        {
          moduleName,
          controllerName
        }
      );
    }
  }

  end() {
    console.log(
      "\n================================================================="
        .green
    );
    console.log(
      "\n Generating was successful please check the output folder \n".cyan
    );
    console.log(
      "=================================================================".green
    );
  }
}
