# generator-appkit

# Why?

<h3> Generate SAP UI5 projects which supports features like:</h3>


- es6 syntax
- es6 transpilation <br>
- minifying files<br>
- xml validation<br>
- jsHint <br>
- prettier <br>
- browserify<br>
- and more.. <br>

<h3> Use sub-generators to integrate controllers, views, fragments, i18n files in your existing project. </h3>


# Installation

1. Open up your Terminal, navigate to the root folder enter: ```npm install ```
2. Install yo globally, enter: ```npm install yo -g```
3. Create a symlink just enter :  ```npm link```

# Running the app generator

To run and create a whole new ui5 project in es6 syntax, enter: ```yo appkit ```

You will have to go trough five steps:

1. Enter a project name that you like
2. Enter a service name which you would want to connect to and not the whole url.
3. Enter a module name or package name, that you wish.
4. Enter a name for the default View/Controller.
5. Enter a path in which the project should be generated. <br>
      ```../../```  - Go two folders back and create it there <br>
      ``` ../output/ ``` - Go a folder back, and place it in the output folder. (When folder does not exist, then it will be created.)
 

[Getting started with transpiling and more](./generators/app/templates/README.md)

# Sub-generators



* By entering ```yo appkit --generators``` you will see all generators available
* With ```yo appkit:nameofsubgenerator``` you can run a subgenerator
*

appkit-generator has following sub-generators available:

```

├─┬ appkit
│ ├── controller ( generates a Controller.js )
│ └── fragment ( generates a Fragment.xml )
│ └── i18n ( generates a i18n.properties )
│ └── view ( generates a View.xml )
```


