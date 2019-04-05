"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("generator-appkit", () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .inDir(path.join(__dirname, "tmp"))
      .withPrompts({
        name: "test",
        moduleName: "de.test",
        controllerName: "Main",
        serviceName: "SERVICE_NAME",
        outputPath: "."
      });
  });

  afterEach(() => {
    rimraf.sync(path.join(__dirname, "tmp"));
  });

  it("creates files", () => {
    assert.file([
      path.join(__dirname, "tmp/test/.babelrc"),
      path.join(__dirname, "tmp/test/.gitignore"),
      path.join(__dirname, "tmp/test/.project"),
      path.join(__dirname, "tmp/test/.classpath"),
      path.join(__dirname, "tmp/test/gulpfile.js"),
      path.join(__dirname, "tmp/test/package.json"),
      path.join(__dirname, "tmp/test/README.md"),
      path.join(__dirname, "tmp/test/.settings/.jsdtscope"),
      path.join(__dirname, "tmp/test/.settings/org.eclipse.jdt.core.prefs"),
      path.join(__dirname, "tmp/test/.settings/org.eclipse.wst.common.component"),
      path.join(__dirname, "tmp/test/.settings/org.eclipse.wst.common.project.facet.core.xml"),
      path.join(__dirname, "tmp/test/.settings/org.eclipse.wst.jsdt.ui.superType.container"),
      path.join(__dirname, "tmp/test/.settings/org.eclipse.wst.jsdt.ui.superType.name"),
      path.join(__dirname, "tmp/test/WebContent/Component.js"),
      path.join(__dirname, "tmp/test/WebContent/index.html"),
      path.join(__dirname, "tmp/test/WebContent/manifest.json"),
      path.join(__dirname, "tmp/test/WebContent/Component.js"),
      path.join(__dirname, "tmp/test/WebContent/controller/App.controller.js"),
      path.join(__dirname, "tmp/test/WebContent/controller/Main.controller.js"),
      path.join(__dirname, "tmp/test/WebContent/controller/SuperController.js"),
      path.join(__dirname, "tmp/test/WebContent/i18n/i18n_de.properties"),
      path.join(__dirname, "tmp/test/WebContent/i18n/i18n_en.properties"),
      path.join(__dirname, "tmp/test/WebContent/libraries/bundle.js"),
      path.join(__dirname, "tmp/test/WebContent/libraries/package.json"),
      path.join(__dirname, "tmp/test/WebContent/libraries/README.md"),
      path.join(__dirname, "tmp/test/WebContent/libraries/RequireLibs.js"),
      path.join(__dirname, "tmp/test/WebContent/util/Enum.js"),
      path.join(__dirname, "tmp/test/WebContent/util/Formatter.js"),
      path.join(__dirname, "tmp/test/WebContent/util/Proxy.js"),
      path.join(__dirname, "tmp/test/WebContent/util/FuseUI5.js"),
      path.join(__dirname, "tmp/test/WebContent/view/App.view.xml"),
      path.join(__dirname, "tmp/test/WebContent/view/Main.view.xml"),
      path.join(__dirname, "tmp/test/WebContent/WEB-INF/web.xml")
    ]);
  });
});
