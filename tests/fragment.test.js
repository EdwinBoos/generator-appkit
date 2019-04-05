"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("fragment-subgenerator", () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, "../generators/fragment"))
      .inDir(path.join(__dirname, "fragment"))
      .withPrompts({
        fragmentName: "Test",
        path: "./"
      });
  });

  afterEach(() => {
    rimraf.sync(path.join(__dirname, "fragment"));
  });

  it("creates fragment file", () => {
    assert.file(
      path.join(__dirname, "fragment/Test.fragment.xml")
    );
  });
});
