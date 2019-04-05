"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("view-subgenerator", () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, "../generators/view"))
      .inDir(path.join(__dirname, "view"))
      .withPrompts({
        viewName: "Test",
        moduleName: "de.test",
        path: "./"
      });
  });

  afterEach(() => {
    rimraf.sync(path.join(__dirname, "view"));
  });

  it("creates view file", () => {
    assert.file(
      path.join(__dirname, "view/Test.view.xml")
    );
  });
});
