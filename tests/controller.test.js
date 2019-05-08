"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("controller-subgenerator", () => {
 beforeEach(() => {
  return helpers
   .run(path.join(__dirname, "../generators/controller"))
   .inDir(path.join(__dirname, "controller"))
   .withPrompts({
    controllerName: "Test",
    moduleName: "de.test",
    path: "./",
    choice: "default-controller"
   });
 });

 afterEach(() => {
  rimraf.sync(path.join(__dirname, "controller"));
 });

 it("creates default Controller", () => {
  assert.file(
   path.join(__dirname, "controller/Test.controller.js")
  );
 });
});