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
 * A subgenerator which does generate a fragment file.
 * You can call this subgenerator with "yo appkit:fragment".
 *
 *
 */
module.exports = class extends generator {
 prompting() {
  console.log(yosay("A UI5 fragment generator by Edwin Boos. (2018)"));
  const userInterface = [];
  userInterface.push({
   type: "input",
   name: "fragmentName",
   message: "Enter ONLY fragment name (without ending)",

  });
  userInterface.push({
   type: "input",
   name: "path",
   message: "Please give me the path ..",
   default: "./WebContent/fragment/"
  });

  return this.prompt(userInterface).then(answers => {
   this.answers = answers;
  });
 }

 writing() {
  const {
   fragmentName,
   path
  } = this.answers;

  this.fs.copy(
   this.templatePath("Fragment.fragment.xml"),
   this.destinationPath(`${path}/${fragmentName}.fragment.xml`)
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

}; 