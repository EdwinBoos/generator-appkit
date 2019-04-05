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
        controllerName: "Main.controller.js",
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
      path.join(__dirname, "tmp/test/gulpfile.js")
    ]);
  });
});
