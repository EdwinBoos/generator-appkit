"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("fragment-controller-subgenerator", () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, "../generators/controller"))
      .inDir(path.join(__dirname, "fragment-controller"))
      .withPrompts({
        controllerName: "Fragment",
        moduleName: "de.test",
        path: "./",
	choice: "fragment-controller"
      });
  });

  afterEach(() => {
    rimraf.sync(path.join(__dirname, "fragment-controller"));
  });

  it("creates fragment controller", () => {
    assert.file(
      path.join(__dirname, "fragment-controller/Fragment.controller.js")
    );
  });
})

