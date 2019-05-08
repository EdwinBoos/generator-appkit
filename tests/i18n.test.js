"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("i18n-subgenerator", () => {
 beforeEach(() => {
  return helpers
   .run(path.join(__dirname, "../generators/i18n"))
   .inDir(path.join(__dirname, "i18n"))
   .withPrompts({
    language: "jp",
    path: "./"
   });
 });

 afterEach(() => {
  rimraf.sync(path.join(__dirname, "i18n"));
 });

 it("creates i18n file", () => {
  assert.file(
   path.join(__dirname, "i18n/i18n_jp.properties")
  );
 });
});