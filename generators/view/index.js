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
 * You can call this subgenerator with "yo appkit:view".
 *
 *
 */
module.exports = class extends generator {
 prompting() {
  console.log(yosay("A UI5 view generator by Edwin Boos. (2018)"));
  const userInterface = [];
  userInterface.push({
   type: "input",
   name: "moduleName",
   message: "Enter your ui5 projects module name"
  });
  userInterface.push({
   type: "input",
   name: "viewName",
   message: "Enter the name of your desired view name"
  });
  userInterface.push({
   type: "input",
   name: "path",
   message: "Please give me the path ..",
   default: "./WebContent/view"
  });

  return this.prompt(userInterface).then(answers => {
   this.answers = answers;
  });
 }

 writing() {
  const {
   moduleName,
   viewName,
   path
  } = this.answers;

  this.fs.copyTpl(
   this.templatePath("View.view.xml"),
   this.destinationPath(`${path}/${viewName}.view.xml`), {
    moduleName,
    viewName
   }
  );
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