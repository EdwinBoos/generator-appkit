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
 * A full ui5-app generator with build in support for features like:
 *  - es6 syntax
 *  - es5 tranpile
 *  - minifying files
 *  - prettier
 *  - browserify
 *  - and many more
 * You can call this generator with "yo appkit".
 *
 *
 */
module.exports = class extends generator {
 prompting() {
  console.log(yosay("A UI5 App Kickstarter by Edwin Boos. (2016)"));

  const userInterface = [];
  userInterface.push({
   type: "input",
   name: "name",
   message: "\n \n Enter the projects name...",
   default: this.appname
  });
  userInterface.push({
   type: "input",
   name: "moduleName",
   message: "Enter your wishing module...",
   default: "enter.some.module.name"
  });
  userInterface.push({
   type: "input",
   name: "controllerName",
   message: "Enter main controllers name...",
   default: "Main"
  });
  userInterface.push({
   type: "input",
   name: "serviceName",
   message: "Enter the service name (not the whole URL)",
   default: "SERVICE_NAME"
  });

  userInterface.push({
   type: "input",
   name: "outputPath",
   message: "Please specify where the Project should be created",
   default: "./output/"
  });

  return this.prompt(userInterface).then(answers => {
   this.answers = answers;
  });
 }

 writing() {
  const moduleName = this.answers.moduleName;
  const serviceName = this.answers.serviceName;
  const modulePath = this.answers.moduleName.replace(/\./g, "/");
  const projectOutputPath = this.answers.outputPath;
  const projectDirectoryName = this.answers.name;

  this.fs.copyTpl(
   this.templatePath("package.json"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/package.json`
   ), {
    title: this.answers.name
   }
  );

  this.fs.copy(
   this.templatePath(".babelrc"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.babelrc`
   )
  );

  this.fs.copy(
   this.templatePath(".gitignore"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.gitignore`
   )
  );

  this.fs.copy(
   this.templatePath(".classpath"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.classpath`
   )
  );

  this.fs.copy(
   this.templatePath("README.md"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/README.md`
   )
  );

 this.fs.copy(
   this.templatePath("_README.md"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/_README.md`
   )
  );

  this.fs.copyTpl(
   this.templatePath(".project"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.project`
   ), {
    title: this.answers.name
   }
  );

  this.fs.copy(
   this.templatePath(".settings/.jsdtscope"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.settings/.jsdtscope`
   )
  );

  this.fs.copy(
   this.templatePath(".settings/org.eclipse.jdt.core.prefs"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.settings/org.eclipse.jdt.core.prefs`
   )
  );

  this.fs.copy(
   this.templatePath(
    ".settings/org.eclipse.wst.common.project.facet.core.xml"
   ),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.settings/org.eclipse.wst.common.project.facet.core.xml`
   )
  );

  this.fs.copyTpl(
   this.templatePath(".settings/org.eclipse.wst.common.component"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.settings/org.eclipse.wst.common.component`
   ), {
    title: this.answers.name
   }
  );

  this.fs.copyTpl(
   this.templatePath(
    ".settings/org.eclipse.wst.jsdt.ui.superType.container"
   ),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.settings/org.eclipse.wst.jsdt.ui.superType.container`
   ), {
    title: this.answers.name
   }
  );

  this.fs.copyTpl(
   this.templatePath(".settings/org.eclipse.wst.jsdt.ui.superType.name"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/.settings/org.eclipse.wst.jsdt.ui.superType.name`
   ), {
    title: this.answers.name
   }
  );

  this.fs.copy(
   this.templatePath("WebContent/libraries/RequireLibs.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/libraries/RequireLibs.js`
   )
  );

  this.fs.copy(
   this.templatePath("WebContent/libraries/package.json"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/libraries/package.json`
   )
  );

  this.fs.copy(
   this.templatePath("WebContent/libraries/bundle.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/libraries/bundle.js`
   )
  );

  this.fs.copy(
   this.templatePath("WebContent/libraries/README.md"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/libraries/README.md`
   )
  );
  this.fs.copyTpl(
   this.templatePath("gulpfile.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/gulpfile.js`
   ), {
    title: "build",
    moduleName
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/index.html"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/index.html`
   ), {
    title: this.answers.name,
    moduleName
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/Component.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/Component.js`
   ), {
    moduleName,
    title: this.answers.name
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/manifest.json"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/manifest.json`
   ), {
    title: this.answers.name,
    serviceName,
    moduleName,
    controllerName: this.answers.controllerName
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/i18n/i18n_de.properties"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/i18n/i18n_de.properties`
   ), {
    title: this.answers.name,
    date: new Date().toLocaleString()
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/i18n/i18n_en.properties"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/i18n/i18n_en.properties`
   ), {
    title: this.answers.name,
    date: new Date().toLocaleString()
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/controller/App.controller.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/controller/App.controller.js`
   ), {
    moduleName,
    modulePath
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/controller/Controller.controller.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/controller/${
          this.answers.controllerName
        }.controller.js`
   ), {
    controllerName: this.answers.controllerName,
    moduleName,
    modulePath
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/controller/SuperController.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/controller/SuperController.js`
   ), {
    moduleName,
    modulePath
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/view/App.view.xml"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/view/App.view.xml`
   ), {
    moduleName
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/WEB-INF/web.xml"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/WEB-INF/web.xml`
   ), {
    title: this.answers.name
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/view/Controller.view.xml"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/view/${
          this.answers.controllerName
        }.view.xml`
   ), {
    moduleName,
    controllerName: this.answers.controllerName
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/util/Enum.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/util/Enum.js`
   ), {
    moduleName
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/util/Formatter.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/util/Formatter.js`
   ), {
    moduleName
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/util/FuseUI5.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/util/FuseUI5.js`
   ), {
    moduleName
   }
  );

  this.fs.copyTpl(
   this.templatePath("WebContent/util/Proxy.js"),
   this.destinationPath(
    `${projectOutputPath}/${projectDirectoryName}/WebContent/util/Proxy.js`
   ), {
    moduleName
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