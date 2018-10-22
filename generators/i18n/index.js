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
 * A subgenerator which does generate a i18n file.
 * You can call this subgenerator with "yo appkit:i18n".
 *
 *
 */
module.exports = class extends generator {
  prompting() {
    console.log(yosay("A UI5 i18n generator by Edwin Boos. (2018)"));
    const userInterface = [];
    userInterface.push({
      type: "input",
      name: "language",
      message: "\n \n Enter country (two digits)",
      default: "de"
    });
    userInterface.push({
      type: "input",
      name: "path",
      message: "Please give me the path ..",
      default: "./WebContent/i18n/"
    });

    return this.prompt(userInterface).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    const language = this.answers.language.replace(/ /g, "");
    const path = this.answers.path;

    this.fs.copyTpl(
      this.templatePath("i18n.properties"),
      this.destinationPath(`${path}/i18n_${language}.properties`),
      {
        date: new Date().toLocaleString()
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
