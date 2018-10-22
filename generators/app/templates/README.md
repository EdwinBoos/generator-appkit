# This UI5 App has been generated with https://github.com/EdwinBoos/generator-appkit


<h3> It does support features like es6 transpilation, minifying files, xml validation, jsHint, prettier, browserify, and many more.. </h3>

# gulpjs - The streaming build system 



Open up your Terminal, navigate to current folder enter: ```npm install ```
*  By entering "gulp --tasks" you will see a tree-overview of tasks in your terminal 
* With "gulp taskname" you can start a predefined task 
* With "gulp" you will start the default task

Here you see a overview of all the tasks and childtasks:

```
├── transpile-uglify 
├── transpile-clean
├── sync
├── prettier
├── xmlLint
├── jsHint
├─┬ check
│ ├── jsHint
│ └── xmlLint
├─┬ build
│ ├── transpile-uglify
│ └── sync
├─┬ build-debug
│ ├── transpile-clean
│ └── sync
└─┬ default
  └── build 
```



| Child-Task | observed source-folders | fileextension | observed extra-files | action |
| :-----: | :-: | :-: | :-: |:-: |
| transpile-uglify  | root WebContent util control controller | *js | /libraries/bundle.js | Transpiles all es6 files back to es5 (minified/uglified) |
| transpile-clean  | root WebContent util control controller | *js | /libraries/bundle.js | Transpiles all es6 files back to es5 |
| sync | .settings  css fragment+view i18n | ** *css *xml *properties  | /WebContent/index.html /WEB-INF/web.xml root/.project root/.classpath |  Copies  all necessary files from ES6 to ES5 folder |
| prettier  | root WebContent util control controller | *js | /libraries/bundle.js | Prettify your es6 project |
| xmlLint | fragment view | *xml | | Parses all your xml-views and xml-fragments and gives a more detailed error than the ui5 framework ( with line and char )
| jsHint  | root WebContent util control controller | *js | /libraries/bundle.js | Code-Quality Tool that checks your js-code quality.

<br>

| Root-Task | child tasks | Info |
| :-----: | :-: | :-: |
| check | xmlLint jsHint | check your whole project for code quality 
| build | transpile-uglify sync | Builds whole new es5 project from current es6 App. Best usage for this task is when you want to use the es5 productive, it minifies youre js files, hence it speeds loading times up.
| build-debug | transpile-uglify sync | Builds whole new es5 project from current es6 App. Best usage for this task is when you want to debug youre code in the browser, it is much better readable than minified.
| default | build-debug | its a watcher task it will watch all of youre files within the es6 App and will always build when something has changed.

<h3> Using transpile or sync tasks </h3>

- they will create a new folder in the same directory as the generated app.

   ``` workspace/fooES6 ( generated app ) creates => workspace/foo ```
   
   
- transpile tasks will transpile files, create and mirror all folder names within foo, and will put the transpiled file in the correct folder f. ex.:
   
   ``` workspace/fooES6/WebContent/controller/Main.controller.js create and transpile => workspace/foo/WebContent/controller/Main.controller.js ```<br> 
   ``` workspace/fooES6/WebContent/util/Enum.js create and transpile => workspace/foo/WebContent/util/Enum.js ``` <br>
   ``` workspace/fooES6/WebContent/libraries/bundle.js create and transpile => workspace/foo/WebContent/libraries/bundle.js ```  <br>
   ``` workspace/fooES6/WebContent/Component.js create and transpile => workspace/foo/WebContent/Component.js ``` <br>
   ``` ... ```

-  sync task will copy, create and mirror all folder names within foo f. ex.: 
 
   ``` workspace/fooES6/WebContent/view/Main.view.xml create and copy => workspace/foo/WebContent/view/Main.main.xml ```   <br> 
   ``` workspace/fooES6/WebContent/fragment/Fragment.view.xml copy => workspace/foo/WebContent/fragment/Fragment.main.xml ```   <br> 
   ``` workspace/fooES6/WebContent/index.html create and copy => workspace/foo/WebContent/index.html ```    <br>
   ``` workspace/fooES6/WebContent/index.html create and copy => workspace/foo/WebContent/view/index.html ``` <br>
   ``` ... ```

- sync task excludes the copy of all unnecessary files in fooES6 f. ex.:.

   ``` workspace/fooES6/WebContent/gulpfile.js will not be copied ```   <br>
   ``` workspace/fooES6/WebContent/libraries/node_modules/** will not be copied ``` <br>
   ``` workspace/fooES6/node_modules/** will not be copied ``` <br> 
   ``` ... ```


# browserify - Install modules from NPM, bundle them up, and load them into your app

[Here you go](./WebContent/libraries/README.md)


  

# WebContent/util Folder

 * FuseUI5.js (Fuzzy search easily with Lists and Tables.)
 * Proxy.js (Fuzzy Search Proxy class for efficiency)
 * Enum.js (Global Enums here)
 * Formatter.js (Formatting your view's bindings)
 * ...and many more
 *    
