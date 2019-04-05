# browserify - Install modules from NPM, bundle them up, and load them into your app


Open up your Terminal, navigate to current folder enter: ```npm install ```

* To install a new package/module enter ```npm install your-package-name```
* To uninstall a package/module enter ```npm uninstall your-package-name```
* To update all your packages/modules enter ``` npm update ```

Bundle node packages/modules and use them within your app

Open RequireLibs.js file: 

We need to declare a require function which browserify can translate into a bundle.js file f.ex:

```window.foo = require("your-package-name");``` <br>
```window.foo2 = require("your-package-name2"); ``` <br>

After this, we need to run  ```npm run build```

It will start our script defined in package.json file. <br>
Browserify will search for the RequireLibs.js file and translate the require functions into a single bundle.js file.

The bundle.js file is already defined in manifest.json, so the file will be by default loaded:
```
"resources": {
            "js": 
            [
              {
                 "uri": "./libraries/bundle.js"
              }
             ]
        }
 ```
 Now you can access globally ```foo1``` and ```foo2``` (because we added it to window) in your App 