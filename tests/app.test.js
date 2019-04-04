"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-appkit", () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({
        name: "test"
      })
      .then(() => {
        it("creates file", () => {
          assert.file([""]);
        });

        
      });
  });
});
